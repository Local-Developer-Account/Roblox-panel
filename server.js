const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname)));

let players = {};
let commands = {};

app.post("/connect",(req,res)=>{
    const { userid, username } = req.body;
    players[userid] = { username, chats:0, selected:false };
    commands[userid] = "none";
    console.log(`[JOIN] ${username}`);
    res.json({status:"connected"});
});

app.post("/disconnect",(req,res)=>{
    const { userid } = req.body;
    console.log(`[LEAVE] ${players[userid]?.username}`);
    delete players[userid];
    delete commands[userid];
    res.json({status:"disconnected"});
});

app.get("/players",(req,res)=>res.json(players));

app.post("/select",(req,res)=>{
    const { userid, selected } = req.body;
    if(players[userid]) players[userid].selected = selected;
    res.json({status:"updated"});
});

app.post("/command",(req,res)=>{
    const { userid, command } = req.body;
    commands[userid] = command;
    console.log(`[CMD] ${players[userid]?.username} → ${command}`);
    res.json({status:"sent"});
});

app.post("/getcommand",(req,res)=>{
    const { userid } = req.body;
    res.json({command: commands[userid] || "none"});
    commands[userid] = "none";
});

app.post("/chat",(req,res)=>{
    const { userid } = req.body;
    if(players[userid]) players[userid].chats++;
    res.json({status:"ok"});
});

app.listen(3000, ()=>console.log("🔥 Executor Control Panel running!"));
