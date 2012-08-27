var loremcancamusum = require('../lib/loremcancamusum.js');

var paragraphs = 3;
var before = '\n- ';
var after = ';';

//text
console.log(loremcancamusum.cancamuse(paragraphs, before, after));

//html
console.log(loremcancamusum.cancamuse(2, '<p>', '</p>'));