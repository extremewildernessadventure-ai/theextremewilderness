const fs = require('fs');
const path = require('path');
const OpenCC = require('opencc-js');

const converter = OpenCC.Converter({ from: 'cn', to: 'twp' });

// Same glossary as convert-zh-tw.cjs, applied to raw TS source text after
// opencc's s2twp pass. Safe because opencc only touches CJK characters —
// import statements, keys, slugs, numbers and paths are untouched.
const glossary = [
  ['桑給巴爾', '尚吉巴'],
  ['乞力馬扎羅', '吉力馬札羅'],
  ['乞力馬紮羅', '吉力馬札羅'],
  ['內羅畢', '奈洛比'],
  ['基加利', '吉佳利'],
  ['珍·古道爾', '珍·古德爾'],
  ['火烈鳥', '紅鶴'],
  ['遊獵', '獵遊'],
  ['游獵', '獵遊'],
  ['向導', '嚮導'],
  ['徒步', '健行'],
  ['酒店', '飯店'],
  ['冯氏犀鳥', '馮氏犀鳥'],
];

function convertText(s) {
  let out = converter(s);
  for (const [from, to] of glossary) {
    if (from !== to) out = out.split(from).join(to);
  }
  return out;
}

const [, , srcArg, dstArg] = process.argv;
if (!srcArg || !dstArg) {
  console.error('Usage: node convert-zh-tw-ts.cjs <src.ts> <dst.ts>');
  process.exit(1);
}
const srcPath = path.resolve(srcArg);
const dstPath = path.resolve(dstArg);
const text = fs.readFileSync(srcPath, 'utf8');
const converted = convertText(text);
fs.writeFileSync(dstPath, converted, 'utf8');
console.log('Wrote', dstPath);
