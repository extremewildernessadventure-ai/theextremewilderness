// One-off codemod: reorders packages.ja.ts's exported array to match
// src/data/packages.ts's (English) declaration order exactly. Discovered
// via the (separate, unmerged) packages-to-D1 migration's Stage 3 parity
// check -- the Japanese file has the same 44 packages, same content, but
// in a different array order than every other locale (a 12-days-wild-
// wilderness entry sits at index 11 instead of its correct 31, with a
// broader reshuffle around it). That order is real product behavior
// (safari listing page, sitemap, related-packages), so Japanese visitors
// currently see a different package order than every other locale for no
// intentional reason.
//
// Reorders whole package object literals by their exact original source
// text (byte-for-byte) -- zero content changes to any package, purely a
// position swap.
import { readFileSync, writeFileSync } from 'node:fs'
import * as ts from 'typescript'

function findPackagesArray(sourceFile: ts.SourceFile): ts.ArrayLiteralExpression {
  let found: ts.ArrayLiteralExpression | undefined
  sourceFile.forEachChild((node) => {
    if (ts.isVariableStatement(node)) {
      for (const decl of node.declarationList.declarations) {
        if (ts.isIdentifier(decl.name) && decl.name.text === 'packages' && decl.initializer && ts.isArrayLiteralExpression(decl.initializer)) {
          found = decl.initializer
        }
      }
    }
  })
  if (!found) throw new Error('Could not find `packages` array literal')
  return found
}

function getSlug(el: ts.Expression): string {
  if (!ts.isObjectLiteralExpression(el)) throw new Error('array element is not an object literal')
  const slugProp = el.properties.find((p) => ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === 'slug')
  if (!slugProp || !ts.isPropertyAssignment(slugProp) || !ts.isStringLiteral(slugProp.initializer)) {
    throw new Error('could not read slug from array element')
  }
  return slugProp.initializer.text
}

function main() {
  const enText = readFileSync('src/data/packages.ts', 'utf8')
  const enSourceFile = ts.createSourceFile('packages.ts', enText, ts.ScriptTarget.Latest, true)
  const enArr = findPackagesArray(enSourceFile)
  const enOrder = enArr.elements.map(getSlug)

  const jaFile = 'src/data/packages.ja.ts'
  const jaText = readFileSync(jaFile, 'utf8')
  const jaSourceFile = ts.createSourceFile(jaFile, jaText, ts.ScriptTarget.Latest, true)
  const jaArr = findPackagesArray(jaSourceFile)

  const jaBySlug = new Map<string, string>()
  for (const el of jaArr.elements) {
    const slug = getSlug(el)
    const fullText = jaText.slice(el.getFullStart(), el.getEnd())
    jaBySlug.set(slug, fullText)
  }

  if (jaBySlug.size !== enOrder.length) {
    throw new Error(`slug count mismatch: en has ${enOrder.length}, ja has ${jaBySlug.size}`)
  }
  for (const slug of enOrder) {
    if (!jaBySlug.has(slug)) throw new Error(`ja is missing slug "${slug}" present in en`)
  }

  // Rebuild the array's element list text in English's order. Each
  // captured element's fullText is trimmed (getFullStart()/getEnd()
  // include leading trivia and comments but not the separator comma,
  // which lives between elements, not inside them) down to a clean
  // `{ ... }` object literal, then re-joined matching this file's own
  // existing "  {" 2-space element indentation and 0-indent closing `]`.
  const reordered = enOrder.map((slug) => jaBySlug.get(slug)!.trim()).join(',\n  ')

  const arrayStart = jaArr.getStart(jaSourceFile) // position of '['
  const arrayEnd = jaArr.getEnd() // position right after ']'
  const before = jaText.slice(0, arrayStart)
  const after = jaText.slice(arrayEnd)

  const newArrayText = `[\n  ${reordered},\n]`
  const newText = before + newArrayText + after

  writeFileSync(jaFile, newText, 'utf8')
  console.log(`Reordered ${enOrder.length} packages in ${jaFile} to match English's declaration order.`)
}

main()
