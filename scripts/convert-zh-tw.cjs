const fs = require('fs');
const path = require('path');
const OpenCC = require('opencc-js');

const converter = OpenCC.Converter({ from: 'cn', to: 'twp' });

// Glossary of proper-noun / vocabulary substitutions, applied AFTER opencc's
// s2twp (Simplified -> Traditional Taiwan, with phrase conversion) pass, so
// output stays consistent with the other zh-TW files already translated in
// this project (experiences, destinations, blog, packages, experience pages).
// Only real word/spelling differences are listed; opencc already handles
// plain character-form conversion (简体字 -> 繁體字) correctly on its own.
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

function convertString(s) {
  let out = converter(s);
  for (const [from, to] of glossary) {
    if (from !== to) out = out.split(from).join(to);
  }
  return out;
}

function walk(node) {
  if (typeof node === 'string') return convertString(node);
  if (Array.isArray(node)) return node.map(walk);
  if (node !== null && typeof node === 'object') {
    const out = {};
    for (const k of Object.keys(node)) out[k] = walk(node[k]);
    return out;
  }
  return node;
}

const srcPath = path.join(__dirname, '..', 'messages', 'zh.json');
const dstPath = path.join(__dirname, '..', 'messages', 'zh-TW.json');
const data = JSON.parse(fs.readFileSync(srcPath, 'utf8'));
const converted = walk(data);
fs.writeFileSync(dstPath, JSON.stringify(converted, null, 2) + '\n', 'utf8');
console.log('Wrote', dstPath);
