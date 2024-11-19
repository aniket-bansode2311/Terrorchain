const Block = require('./block');


const foodBlock = Block.mineBlock(Block.genesis(), 'food');
console.log(foodBlock.toString());
