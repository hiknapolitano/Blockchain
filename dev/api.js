const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Blockchain = require("./blockchain");
const uuid = require("uuid/v1");
const bitcoin = new Blockchain();

const nodeAddress = uuid().split("-").join("");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//gets entire blockchain
app.get("/blockchain", (req, res) => {
    res.send(bitcoin);
});


//creates a transaction
app.post("/transaction", (req, res) => {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({note: "transaction will be added in block " + blockIndex});
});

//mines a block
app.get("/mine", (req, res) => {
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock["hash"];
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock["index"] + 1
    };
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash =  bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
    bitcoin.createNewTransaction(12.5, "00", nodeAddress);
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

    res.json({
        note: "new block mined successfully",
        block: newBlock
    });
});



app.listen(3000, ()=>{
    console.log("listening on port 3000");
});