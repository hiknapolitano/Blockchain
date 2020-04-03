const Blockchain = require("./blockchain");

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2343, "409ASDL334", "983HSOFJ4");
bitcoin.createNewTransaction(100, "ALEX0ASDFSDA25F16ADSF", "JENN0ADGS1ADS6G51ADS");
bitcoin.createNewBlock(56512, "SDG23SD03GDS", "05DS0SD6G0G");


console.log(bitcoin.chain[1]);