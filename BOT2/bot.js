const Discord = require('discord.js');
const client = new Discord.Client();
var a = 0;
var switchA = true;
var Round = 1;
var X;
var first_attack;
var second_attack;
var string;
var embedB;
var healthA;
var healthB;
var Damage;
var world_First = false;
var world_Second = false;
var worldTimes = 0;
var np_switch = true;
var msgA;
var msgB;
var switchB = false;


const express = require('express')
var port = process.env.PORT || 5000;
express().listen(port, "0.0.0.0", function () {
    console.log("Listening on Port 5000");
});

client.on('ready', () => {
    console.log("以" + client.user.tag + "登入");
    console.log("Nero C. Version 1.0.0");
    client.user.setGame('ネロ祭～２０１９ＳＰＲＩＮＧ～');
    healthA = 750;
    healthB = 750;
});

var http = require("http");
setInterval(function () {
    http.get("http://nero-festival-mk1.herokuapp.com/");
}, 600000);

client.on('message', msg => {

    if (!msg.author.bot) {
        if (msg.content.match(/--Dice[ ](.+)[ ]([1-9][0-9]*)[d]([1-9][0-9]*)[+]([1-9][0-9]*|0)[,]([1-9])/)) {
            MatchData = msg.content.match(/--Dice[ ](.+)[ ]([1-9][0-9]*)[d]([1-9][0-9]*)[+]([1-9][0-9]*|0)[,]([1-9])/);
            console.log(MatchData);
            strA = MatchData[1];
            var varA = parseInt(MatchData[2]);
            var varB = parseInt(MatchData[3]);
            var varC = parseInt(MatchData[4]);
            var varD = parseInt(MatchData[5]);

            var stringA = "";

            for (i = 0; i < varD; i++) {
                if (i == varD - 1) {
                    stringA += (Math.floor(Math.random() * (varB - varA + 1)) + varA + varC);
                } else {
                    stringA += (Math.floor(Math.random() * (varB - varA + 1)) + varA + varC) + " ,";
                }
                if (varD = 1) {
            if (stringA >= 90 && string < 100) {
                ResultStr = strA + " 擲出 " + stringA + "，大失敗！(σ′▽‵)′▽‵)σ";
            } else if (stringA == 100) {
                ResultStr = strA + " 擲出 " + stringA + "，極☆大失敗！(☞ﾟ∀ﾟ)ﾟ∀ﾟ)☞";
            } else if (stringA <= 10 && stringA > 1) {
                ResultStr = strA + " 擲出 " + stringA + "，大成功！d(`･∀･)b";
            } else if (stringA == 1) {
                ResultStr = strA + " 擲出 " + stringA + "，極☆大成功！⎝༼ ◕▽◕ ༽⎠";
            } else {
                ResultStr = strA + " 擲出 " + stringA
                }
            } else{
                ResultStr = strA + " 擲出 " + stringA
            }
            }
            msg.channel.send(ResultStr);
        }
    }

    if (!msg.author.bot) {
        if (msg.content === "--Dice ?") {
            msg.channel.send("```指令：--Dice 玩家暱稱[任何字元] 骰子最小值[數字]d骰子最大值[數字]+補正值[數字],次數[數字]```");
        }
    }

    if (msg.content == "--NeroReset") {
        if (switchA == true) {
            a = 0;
            switchA = true;const Discord = require('discord.js');
const client = new Discord.Client();
var a = 0;
var switchA = true;
var Round = 1;
var X;
var first_attack;
var second_attack;
var string;
var embedB;
var healthA;
var healthB;
var Damage;
var world_First = false;
var world_Second = false;
var worldTimes = 0;
var np_switch = true;
var msgA;
var msgB;
var switchB = false;


const express = require('express')
var port = process.env.PORT || 5000;
express().listen(port, "0.0.0.0", function () {
    console.log("Listening on Port 5000");
});

client.on('ready', () => {
    console.log("以" + client.user.tag + "登入");
    console.log("Nero C. Version 1.0.0");
    client.user.setGame('ネロ祭～２０１９ＳＰＲＩＮＧ～');
    healthA = 750;
    healthB = 750;
});

var http = require("http");
setInterval(function () {
    http.get("http://nero-festival-mk1.herokuapp.com/");
}, 600000);

client.on('message', msg => {

    if (!msg.author.bot) {
        if (msg.content.match(/--Dice[ ](.+)[ ]([1-9][0-9]*)[d]([1-9][0-9]*)[+]([1-9][0-9]*|0)[,]([1-9])/)) {
            MatchData = msg.content.match(/--Dice[ ](.+)[ ]([1-9][0-9]*)[d]([1-9][0-9]*)[+]([1-9][0-9]*|0)[,]([1-9])/);
            console.log(MatchData);
            strA = MatchData[1];
            var varA = parseInt(MatchData[2]);
            var varB = parseInt(MatchData[3]);
            var varC = parseInt(MatchData[4]);
            var varD = parseInt(MatchData[5]);

            var stringA = "";

            for (i = 0; i < varD; i++) {
                if (i == varD - 1) {
                    stringA += (Math.floor(Math.random() * (varB - varA + 1)) + varA + varC);
                } else {
                    stringA += (Math.floor(Math.random() * (varB - varA + 1)) + varA + varC) + " ,";
                }
            if (varD = 1) {
            if (stringA >= 90 && string < 100) {
                ResultStr = strA + " 擲出 " + stringA + "，大失敗！(σ′▽‵)′▽‵)σ";
            } else if (stringA == 100) {
                ResultStr = strA + " 擲出 " + stringA + "，極☆大失敗！(☞ﾟ∀ﾟ)ﾟ∀ﾟ)☞";
            } else if (stringA <= 10 && stringA > 1) {
                ResultStr = strA + " 擲出 " + stringA + "，大成功！d(`･∀･)b";
            } else if (stringA == 1) {
                ResultStr = strA + " 擲出 " + stringA + "，極☆大成功！⎝༼ ◕▽◕ ༽⎠";
            } else {
                ResultStr = strA + " 擲出 " + stringA
            }
            } else {
                ResultStr = strA + " 擲出 " + stringA
            }
            msg.channel.send(ResultStr);
        }
    }

    if (!msg.author.bot) {
        if (msg.content === "--Dice ?") {
            msg.channel.send("```指令：--Dice 玩家暱稱[任何字元] 骰子最小值[數字]d骰子最大值[數字]+補正值[數字],次數[數字]```");
        }
    }

    if (msg.content == "--NeroReset") {
        if (switchA == true) {
            a = 0;
            switchA = true;
            switchB = false;
            Round = 1;
            healthA = 750;
            healthB = 750;
            world_First = false;
            world_Second = false;
            worldTimes = 0;
            np_switch = true;
            msg.channel.send("已重設所有變數");
        } else {
            msg.channel.send("戰鬥中不可執行");
        }

    }
});

client.login('NTQ3MzkzMTI0Mjg5MjE2NTUy.D02JYQ.rvALpoMXxLDk7MLu2WFgLmTXTkI'); //2號機
            switchB = false;
            Round = 1;
            healthA = 750;
            healthB = 750;
            world_First = false;
            world_Second = false;
            worldTimes = 0;
            np_switch = true;
            msg.channel.send("已重設所有變數");
        } else {
            msg.channel.send("戰鬥中不可執行");
        }

    }
});

client.login('NTQ3MzkzMTI0Mjg5MjE2NTUy.D02JYQ.rvALpoMXxLDk7MLu2WFgLmTXTkI'); //2號機
