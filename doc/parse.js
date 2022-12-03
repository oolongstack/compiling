let esprima = require("esprima");

let sourceCode = `<div title="嘿嘿"><span>hello</span></div>`;

const ast = esprima.parseScript(sourceCode, { jsx: true, tokens: true });

console.dir(ast);
