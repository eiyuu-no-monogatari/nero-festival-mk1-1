const Discord = require('discord.js');
const client = new Discord.Client();
const Pool = require('pg').Pool;
const PG = require('pg').Client;
var total = [];
var total_number = 0;
var statusString = "";
var arrayStatus = [];
var sclass = ["Saber", "Archer", "Lancer", "Rider", "Assassin", "Caster", "Berserker", "Avenger", "Ruler", "Shielder"];
var level = ["E", "D", "C", "B", "A", "A+", "A++", "A+++", "EX"];
const connectionString = 'postgres://tqetbljzlsbqze:1b02485578943649ac9edda30fec11b62d7f2b687ec52a369fc7aab469a3dff2@ec2-174-129-238-192.compute-1.amazonaws.com:5432/dfff1bl43dop7v';
const pg = new PG({
    connectionString: connectionString,
    ssl: true
});
const pool = new Pool({
    connectionString: connectionString,
    ssl: true
});
require('events').EventEmitter.defaultMaxListeners = 100;

const express = require('express')
var port = process.env.PORT || 5000;
express().listen(port, "0.0.0.0", function () {
    console.log("Listening on Port 5000");
});

const events = {
    MESSAGE_REACTION_ADD: 'messageReactionAdd',
    MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

client.on('raw', async event => {
// `event.t` is the raw event name
	if (!events.hasOwnProperty(event.t)) return;

const { d: data } = event;
const user = client.users.get(data.user_id);
const channel = client.channels.get(data.channel_id) || await user.createDM();

// if the message is already in the cache, don't re-emit the event
if (channel.messages.has(data.message_id)) return;

// if you're on the master/v12 branch, use `channel.messages.fetch()`
const message = await channel.fetchMessage(data.message_id);

// custom emojis reactions are keyed in a `name:ID` format, while unicode emojis are keyed by names
// if you're on the master/v12 branch, custom emojis reactions are keyed by their ID
const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
const reaction = message.reactions.get(emojiKey);

client.emit(events[event.t], reaction, user);
});

client.on('ready', () => {
    console.log("以" + client.user.tag + "登入");
    console.log("Miss.Secretary Version 2.0.0");
    client.user.setActivity('日常業務');

});

client.on('messageReactionAdd', (reaction, user) => {
    console.log(`${user.username} reacted with "${reaction.emoji.name}".`);
    console.log("Level 1 passed.");
    if (reaction.message.id === '636221170156437504') {
        if (reaction.emoji.name === "🇯") {
            console.log("Level 3 passed.");
            var FateJ = client.guilds.get('581064270272528424').roles.get('635313526340059167');
            client.guilds.get('581064270272528424').members.get(user.id).addRole(FateJ);
        }
        if (reaction.emoji.name === "🇸") {
            var FateS = client.guilds.get('581064270272528424').roles.get('635313524435976195');
            client.guilds.get('581064270272528424').members.get(user.id).addRole(FateS);
        }
        if (reaction.emoji.name === "🇱") {
            var FateL = client.guilds.get('581064270272528424').roles.get('635313222232047636');
            client.guilds.get('581064270272528424').members.get(user.id).addRole(FateL);
        }
        if (reaction.emoji.name === "6⃣") {
            var Fate6 = client.guilds.get('581064270272528424').roles.get('635313527090839552');
            client.guilds.get('581064270272528424').members.get(user.id).addRole(Fate6);
        }
        if (reaction.emoji.name === "🇳") {
            var FateN = client.guilds.get('581064270272528424').roles.get('635313525681684480');
            client.guilds.get('581064270272528424').members.get(user.id).addRole(FateN);
        }
        if (reaction.emoji.name === "⚡") {
            var Spoiler = client.guilds.get('581064270272528424').roles.get('636504821222080522');
            client.guilds.get('581064270272528424').members.get(user.id).addRole(Spoiler);
        }


    }
});

client.on('messageReactionRemove', (reaction, user) => {
    console.log("Level 1 passed.");
    if (reaction.message.id === '636221170156437504') {
        if (reaction.emoji.name === "🇯") {
            var FateJ = client.guilds.get('581064270272528424').roles.get('635313526340059167');
            client.guilds.get('581064270272528424').members.get(user.id).removeRole(FateJ);
        }
        if (reaction.emoji.name === "🇸") {
            var FateS = client.guilds.get('581064270272528424').roles.get('635313524435976195');
            client.guilds.get('581064270272528424').members.get(user.id).removeRole(FateS);
        }
        if (reaction.emoji.name === "🇱") {
            var FateL = client.guilds.get('581064270272528424').roles.get('635313222232047636');
            client.guilds.get('581064270272528424').members.get(user.id).removeRole(FateL);
        }
        if (reaction.emoji.name === "6⃣") {
            var Fate6 = client.guilds.get('581064270272528424').roles.get('635313527090839552');
            client.guilds.get('581064270272528424').members.get(user.id).removeRole(Fate6);
        }
        if (reaction.emoji.name === "🇳") {
            var FateN = client.guilds.get('581064270272528424').roles.get('635313525681684480');
            client.guilds.get('581064270272528424').members.get(user.id).removeRole(FateN);
        }
        if (reaction.emoji.name === "⚡") {
            var Spoiler = client.guilds.get('581064270272528424').roles.get('636504821222080522');
            client.guilds.get('581064270272528424').members.get(user.id).removeRole(Spoiler);
        }

    }
});

var http = require("http");
setInterval(function () {
    http.get("http://nero-festival-mk1.herokuapp.com/");
}, 600000);

client.on('error', console.error);

client.on('message', msg => {

    if(msg.channel.id == '636521241741623306') {
        if(!msg.author.bot) {
        	if (msg.content == "--FGOQ Login") {
                var String = "SELECT id WHERE EXISTS ( SELECT * WHERE id ='" + msg.author.id + "' ) LIMIT 1;"
                pool.query(String, (err, res) => {
            	
                    if (err) {
                        console.log(err.stack);
                        throw err;
                    } else if (res) {
                        console.log(res.rows[0]);
                    }
                });
}

                if (msg.content == "--FGOQ CC") {
                var statusString = "";
                for (var i = 0; i < 5; i++) {
                    statusString += (Math.floor(Math.random() * 9) + "|");
                }
                var classNumber = (Math.floor(Math.random() * 9));
                statusString += sclass[classNumber];
                arrayStatus = statusString.split("|");
                var String = "SELECT fourthcharacter WHERE EXISTS ( SELECT * WHERE id ='" + msg.author.id + "' ) LIMIT 1;";
                pool.query(String, (err, res) => {
                    if (err) {
                        console.log(err.stack);
                        throw err;
                    } else if (typeof(res.rows[0]) == "undefined" || JSON.stringify(res.rows[0]).includes("null")) {
                    	msg.channel.send( "<@" + msg.author.id + "> ，這是您本次骰出的角色：\n```筋力：" +level[arrayStatus[0]]+"\n敏捷：" +level[arrayStatus[1]]+"\n耐力：" +level[arrayStatus[2]]+"\n魔力：" +level[arrayStatus[3]]+"\n幸運：" + level[arrayStatus[4]]+"\n職階：" + sclass[arrayStatus[4]] + "```");
                        var String = "SELECT firstcharacter WHERE EXISTS ( SELECT * WHERE id = '" + msg.author.id + "' ) LIMIT 1;";
                        pool.query(String, (err, res) => {
                            if (err) {
                                console.log(err.stack);
                                throw err;
                            } else if ( typeof(res.rows[0]) == "undefined" ) {
                                var String = "INSERT INTO playerslist (id, firstcharacter) VALUES ('" + msg.author.id + "', '" + statusString + "')";
                                pool.query(String, (err, res) => {
                                    if (err) {
                                        console.log(err.stack);
                                        throw err;
                                    }
                                });
                            } else if (typeof(res.rows[0]) != "undefined") {
                                var String = "SELECT secondcharacter WHERE EXISTS ( SELECT * WHERE id ='" + msg.author.id + "' ) LIMIT 1;";
                                pool.query(String, (err, res) => {
                                    console.log(typeof(res.rows[0]));
                                    console.log(JSON.stringify(res.rows[0]));
                                    if (err) {
                                        console.log(err.stack);
                                        throw err;
                                    } else if (JSON.stringify(res.rows[0]).includes("null")){
                                        var String = "UPDATE playerslist SET secondcharacter = '" + statusString + "' WHERE id = '" + msg.author.id + "'";
                                        pool.query(String, (err, res) => {
				    
                                            if (err) {
                                                console.log(err.stack);
                                                throw err;
                                            }
                                        });
                                    } else if (typeof(res.rows[0]) != "undefined") {
                                        var String = "SELECT thirdcharacter WHERE EXISTS ( SELECT * WHERE id ='" + msg.author.id + "' ) LIMIT 1;";
                                        pool.query(String, (err, res) => {
                                            console.log(typeof(res.rows[0]));
                                            console.log(JSON.stringify(res.rows[0]));
                                            if (err) {
                                                console.log(err.stack);
                                                throw err;
                                            } else if (JSON.stringify(res.rows[0]).includes("null")) {
                                                var String = "UPDATE playerslist SET thirdcharacter = '" + statusString + "' WHERE id = '" + msg.author.id + "'";
                                                pool.query(String, (err, res) => {
				    
                                                    if (err) {
                                                        console.log(err.stack);
                                                        throw err;
                                                    }
                                                });
                                            } else if (typeof(res.rows[0]) != "undefined") {
                                                var String = "SELECT fourthcharacter WHERE EXISTS ( SELECT * WHERE id ='" + msg.author.id + "' ) LIMIT 1;";
                                                pool.query(String, (err, res) => {
                                                    console.log(typeof(res.rows[0]));
                                                    console.log(JSON.stringify(res.rows[0]));
                                                    if (err) {
                                                        console.log(err.stack);
                                                        throw err;
                                                    } else if (JSON.stringify(res.rows[0]).includes("null")) {
                                                        var String = "UPDATE playerslist SET fourthcharacter = '" + statusString + "' WHERE id = '" + msg.author.id + "'";
                                                        pool.query(String, (err, res) => {
				    
                                                            if (err) {
                                                                console.log(err.stack);
                                                                throw err;
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    } else if (typeof(res.rows[0]) != "undefined") {
                        msg.channel.send( "<@" + msg.author.id + "> " + "角色生成次數已用盡，請使用「--FGOQ CC:(號碼，1~4)」來選擇素質設定。");
                    }
                });
                }
                if (msg.content == "--FGOQ CC:1") {
                    msg.channel.send( "<@" + msg.author.id + "> " + "確定以此角色為最終角色？").then(async function (message) {
                        await message.react('⭕')
                        await message.react('❌')
      
                        var filterO = (reaction, user) => reaction.emoji.name === '⭕' && user.id === msg.author.id;
                        var filterX = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

                        const collectorO = message.createReactionCollector(filterO);

                        const collectorX = message.createReactionCollector(filterX);


                        collectorO.on('collect', (reaction, reactionCollector) => {
                            var String = "SELECT firstcharacter WHERE EXISTS ( SELECT * WHERE id = '" + msg.author.id + "' ) LIMIT 1;";
                            pool.query(String, (err, res) => {
                                if (err) {
                                    console.log(err.stack);
                                    throw err;
                                } else if ( typeof(res.rows[0]) != "undefined" ) {
                                    var String = "UPDATE playerslist SET finalcharacter = firstcharacter WHERE id = '" + msg.author.id + "'";;
                                    pool.query(String, (err, res) => {
                                        if (err) {
                                            console.log(err.stack);
                                            throw err;
                                        }
                                        msg.channel.send("已確認設定，歡迎使用「--FGOQ Login」進入遊戲！")
                                    });
                                } else {
                                    msg.channel.send( "<@" + msg.author.id + "> " + "尚未進行第一次角色創建。");
                                }
                            });

                            collectorX.on('collect', (reaction, reactionCollector) => {
                                msg.channel.send("已取消設定。")
                            });
                        });
                    });
                }

                if (msg.content == "--FGOQ CC:2") {
                    msg.channel.send( "<@" + msg.author.id + "> " + "確定以此角色為最終角色？").then(async function (message) {
                        await message.react('⭕')
                        await message.react('❌')
      
                        var filterO = (reaction, user) => reaction.emoji.name === '⭕' && user.id === msg.author.id;
                        var filterX = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

                        const collectorO = message.createReactionCollector(filterO);

                        const collectorX = message.createReactionCollector(filterX);


                        collectorO.on('collect', (reaction, reactionCollector) => {
                            var String = "SELECT secondcharacter WHERE EXISTS ( SELECT * WHERE id = '" + msg.author.id + "' ) LIMIT 1;";
                            pool.query(String, (err, res) => {
                                if (err) {
                                    console.log(err.stack);
                                    throw err;
                                } else if ( typeof(res.rows[0]) != "undefined" ) {
                                    var String = "UPDATE playerslist SET finalcharacter = secondcharacter WHERE id = '" + msg.author.id + "'";;
                                    pool.query(String, (err, res) => {
                                        if (err) {
                                            console.log(err.stack);
                                            throw err;
                                        }
                                        msg.channel.send("已確認設定，歡迎使用「--FGOQ Login」進入遊戲！")
                                    });
                                } else {
                                    msg.channel.send( "<@" + msg.author.id + "> " + "尚未進行第二次角色創建。");
                                }
                            });

                            collectorX.on('collect', (reaction, reactionCollector) => {
                                msg.channel.send("已取消設定。")
                            });
                        });
                    });
                }

                if (msg.content == "--FGOQ CC:3") {
                    msg.channel.send( "<@" + msg.author.id + "> " + "確定以此角色為最終角色？").then(async function (message) {
                        await message.react('⭕')
                        await message.react('❌')
      
                        var filterO = (reaction, user) => reaction.emoji.name === '⭕' && user.id === msg.author.id;
                        var filterX = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

                        const collectorO = message.createReactionCollector(filterO);

                        const collectorX = message.createReactionCollector(filterX);


                        collectorO.on('collect', (reaction, reactionCollector) => {
                            var String = "SELECT thirdcharacter WHERE EXISTS ( SELECT * WHERE id = '" + msg.author.id + "' ) LIMIT 1;";
                            pool.query(String, (err, res) => {
                                if (err) {
                                    console.log(err.stack);
                                    throw err;
                                } else if ( typeof(res.rows[0]) != "undefined" ) {
                                    var String = "UPDATE playerslist SET finalcharacter = thirdcharacter WHERE id = '" + msg.author.id + "'";;
                                    pool.query(String, (err, res) => {
                                        if (err) {
                                            console.log(err.stack);
                                            throw err;
                                        }
                                        msg.channel.send("已確認設定，歡迎使用「--FGOQ Login」進入遊戲！")
                                    });
                                } else {
                                    msg.channel.send( "<@" + msg.author.id + "> " + "尚未進行第三次角色創建。");
                                }
                            });

                            collectorX.on('collect', (reaction, reactionCollector) => {
                                msg.channel.send("已取消設定。")
                            });
                        });
                    });
                }

                if (msg.content == "--FGOQ CC:4") {
                    msg.channel.send( "<@" + msg.author.id + "> " + "確定以此角色為最終角色？").then(async function (message) {
                        await message.react('⭕')
                        await message.react('❌')
      
                        var filterO = (reaction, user) => reaction.emoji.name === '⭕' && user.id === msg.author.id;
                        var filterX = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

                        const collectorO = message.createReactionCollector(filterO);

                        const collectorX = message.createReactionCollector(filterX);


                        collectorO.on('collect', (reaction, reactionCollector) => {
                            var String = "SELECT fourthcharacter WHERE EXISTS ( SELECT * WHERE id = '" + msg.author.id + "' ) LIMIT 1;";
                            pool.query(String, (err, res) => {
                                if (err) {
                                    console.log(err.stack);
                                    throw err;
                                } else if ( typeof(res.rows[0]) != "undefined" ) {
                                    var String = "UPDATE playerslist SET finalcharacter = fourthcharacter WHERE id = '" + msg.author.id + "'";;
                                    pool.query(String, (err, res) => {
                                        if (err) {
                                            console.log(err.stack);
                                            throw err;
                                        }
                                        msg.channel.send("已確認設定，歡迎使用「--FGOQ Login」進入遊戲！")
                                    });
                                } else {
                                    msg.channel.send( "<@" + msg.author.id + "> " + "尚未進行第四次角色創建。");
                                }
                            });

                            collectorX.on('collect', (reaction, reactionCollector) => {
                                msg.channel.send("已取消設定。")
                            });
                        });
                    });
                }
            }



                
if (!msg.author.bot) {
    console.log(msg.author.username + " says:");
    console.log(msg.content);
}

if (!msg.author.bot && msg.author.id == 282187584484933634) {
    if (msg.content.match(/--TRPGSay[ ](.+)[ ](\d*)/)) {
        var MatchDataSay = msg.content.match(/--TRPGSay[ ](.+)[ ](\d*)/);
        console.log(MatchDataSay);
        var content = MatchDataSay[1];
        var channelId = client.channels.get(MatchDataSay[2].toString());
        if (typeof channelId != "undefined") {
            channelId.startTyping();
            setTimeout(function () {
                channelId.send(content);
            }, 1500*msg.content.length);
            channelId.stopTyping();
        } else {
            msg.channel.send("發送失敗。");
        }
    }
}

if (!msg.author.bot) {
    if (msg.content.match(/--[Dice|dice|DICE]{4}[ ](.+)[ ]([1-9])[d]([1-9][0-9]*)[+]([1-9][0-9]*)/)) {
        var MatchData = msg.content.match(/--[Dice|dice|DICE]{4}[ ](.+)[ ]([1-9])[d]([1-9][0-9]*)[+]([1-9][0-9]*)/);
        var strA = MatchData[1];
        var varA = 1;
        var varB = parseInt(MatchData[3]);
        var varD = parseInt(MatchData[2]);
        var varC = parseInt(MatchData[4]);

        var stringA = "";

        if (varD != 1) {
            for (i = 0; i < varD; i++) {
                if (i >= varD - 1) {
                    stringA = stringA + (Math.floor(Math.random() * varB) + 1);
                } else if (i <= varD - 1) {
                    stringA = stringA + (Math.floor(Math.random() * varB) + 1) + ", ";
                }
            }
            total = stringA.split(", ");
            total_number = 0;
            for (i = 0; i < total.length; i++) {
                total_number += parseInt(total[i]);
            }
            total_number += varC;
            ResultStr = strA + " 擲出 " + stringA + " ，總合是： " + total_number;
            msg.channel.send(ResultStr);

        } else if (varD == 1) {
            stringA = (Math.floor(Math.random() * (varB - varA + 1)) + varA + varC);
            if ((stringA >= 90 && stringA < 100 && varB == 100) || (stringA == 20 && varB == 20)) {
                ResultStr = strA + " 擲出 " + stringA + "，大失敗！(σ′▽‵)′▽‵)σ";
            } else if (stringA == 100 && varB == 100) {
                ResultStr = strA + " 擲出 " + stringA + "，極☆大失敗！(☞ﾟ∀ﾟ)ﾟ∀ﾟ)☞";
            } else if ((stringA <= 10 && stringA > 1 && varB == 100) || (stringA == 1 && varB == 20)) {
                ResultStr = strA + " 擲出 " + stringA + "，大成功！d(`･∀･)b";
            } else if (stringA == 1 && varB == 100) {
                ResultStr = strA + " 擲出 " + stringA + "，極☆大成功！⎝༼ ◕▽◕ ༽⎠";
            } else {
                ResultStr = strA + " 擲出 " + stringA;
            }
            msg.channel.send(ResultStr);
        }

    } else if (msg.content.match(/--[Dice|dice|DICE]{4}[ ](.+)[ ]([1-9])[d]([1-9][0-9]*)[-]([1-9][0-9]*)/)) {
        var MatchData = msg.content.match(/--[Dice|dice|DICE]{4}[ ](.+)[ ]([1-9])[d]([1-9][0-9]*)[-]([1-9][0-9]*)/);
        var strA = MatchData[1];
        var varA = 1;
        var varB = parseInt(MatchData[3]);
        var varD = parseInt(MatchData[2]);
        var varC = parseInt(MatchData[4]);

        var stringA = "";

        if (varD != 1) {
            for (i = 0; i < varD; i++) {
                if (i >= varD - 1) {
                    stringA = stringA + (Math.floor(Math.random() * varB) + 1);
                } else if (i <= varD - 1) {
                    stringA = stringA + (Math.floor(Math.random() * varB) + 1) + ", ";
                }
            }
            total = stringA.split(", ");
            total_number = 0;
            for (i = 0; i < total.length; i++) {
                total_number += parseInt(total[i]);
            }
            total_number -= varC;
            ResultStr = strA + " 擲出 " + stringA + " ，總合是： " + total_number;
            msg.channel.send(ResultStr);

        } else if (varD == 1) {
            stringA = (Math.floor(Math.random() * (varB - varA + 1)) + varA - varC);
            if ((stringA >= 90 && stringA < 100 && varB == 100) || (stringA == 20 && varB == 20)) {
                ResultStr = strA + " 擲出 " + stringA + "，大失敗！(σ′▽‵)′▽‵)σ";
            } else if (stringA == 100 && varB == 100) {
                ResultStr = strA + " 擲出 " + stringA + "，極☆大失敗！(☞ﾟ∀ﾟ)ﾟ∀ﾟ)☞";
            } else if ((stringA <= 10 && stringA > 1 && varB == 100) || (stringA == 1 && varB == 20)) {
                ResultStr = strA + " 擲出 " + stringA + "，大成功！d(`･∀･)b";
            } else if (stringA == 1 && varB == 100) {
                ResultStr = strA + " 擲出 " + stringA + "，極☆大成功！⎝༼ ◕▽◕ ༽⎠";
            } else {
                ResultStr = strA + " 擲出 " + stringA;
            }
            msg.channel.send(ResultStr);
        }

    } else if (msg.content.match(/--[Dice|dice|DICE]{4}[ ](.+)[ ]([1-9])[d]([1-9][0-9]*)/)) {
        var MatchData = msg.content.match(/--[Dice|dice|DICE]{4}[ ](.+)[ ]([1-9])[d]([1-9][0-9]*)/);
        var strA = MatchData[1];
        var varA = 1;
        var varB = parseInt(MatchData[3]);
        var varD = parseInt(MatchData[2]);

        var stringA = "";

        if (varD != 1) {
            for (i = 0; i < varD; i++) {
                if (i >= varD - 1) {
                    stringA = stringA + (Math.floor(Math.random() * varB) + 1);
                } else if (i <= varD - 1) {
                    stringA = stringA + (Math.floor(Math.random() * varB) + 1) + ", ";
                }
            }
            total = stringA.split(", ");
            total_number = 0;
            for (i = 0; i < total.length; i++) {
                total_number += parseInt(total[i]);
            }
            ResultStr = strA + " 擲出 " + stringA + " ，總合是： " + total_number;
            msg.channel.send(ResultStr);

        } else if (varD == 1) {
            stringA = (Math.floor(Math.random() * (varB - varA + 1)) + varA);
            if ((stringA >= 90 && stringA < 100 && varB == 100) || (stringA == 20 && varB == 20)) {
                ResultStr = strA + " 擲出 " + stringA + "，大失敗！(σ′▽‵)′▽‵)σ";
            } else if (stringA == 100 && varB == 100) {
                ResultStr = strA + " 擲出 " + stringA + "，極☆大失敗！(☞ﾟ∀ﾟ)ﾟ∀ﾟ)☞";
            } else if ((stringA <= 10 && stringA > 1 && varB == 100) || (stringA == 1 && varB == 20)) {
                ResultStr = strA + " 擲出 " + stringA + "，大成功！d(`･∀･)b";
            } else if (stringA == 1 && varB == 100) {
                ResultStr = strA + " 擲出 " + stringA + "，極☆大成功！⎝༼ ◕▽◕ ༽⎠";
            } else {
                ResultStr = strA + " 擲出 " + stringA;
            }
            msg.channel.send(ResultStr);
        }

    } else if (msg.content.match(/--FGO[ ](B|A|Q)(B|A|Q)(B|A|Q)(B|A|Q)(B|A|Q)/)) {
        var MatchData = msg.content.match(/--FGO[ ](B|A|Q)(B|A|Q)(B|A|Q)(B|A|Q)(B|A|Q)/);
        console.log(MatchData);
        var Card = [MatchData[1], MatchData[2], MatchData[3], MatchData[4], MatchData[5]];
        console.log(Card);
        var ReArray = [];
        var FGOTimes = 1;
        while (FGOTimes < 4) {
            var result = Math.floor(Math.random() * 5) + 1;
            if (ReArray.indexOf(result) == -1) {
                ReArray[FGOTimes - 1] = result;
                FGOTimes += 1;
                console.log(ReArray);
            }    
        }
        msg.reply("本回合卡片：" + Card[ReArray[0] - 1] + "、" + Card[ReArray[1] - 1] + "、" + Card[ReArray[2] - 1]);
    }
}
    

if (!msg.author.bot) {
    if (msg.content === "--Dice ?") {
        msg.channel.send("```指令：--Dice 擲骰理由[任何字元] 骰子數量[數字]d骰子最大值[數字]+總合補正[數字]```");
    }
}

if (!msg.author.bot && msg.channel.type == "text") {
    if (!msg.author.bot && msg.content == "給我上BUFF" && msg.guild.id == 554169939263750144) {
        msg.react(msg.guild.emojis.get('555012424504311808'));
        msg.react(msg.guild.emojis.get('555012344955142144'));
        msg.react(msg.guild.emojis.get('555012311140532235'));
        msg.react(msg.guild.emojis.get('555012408435933184'));
        msg.react(msg.guild.emojis.get('555012390169608192'));
        msg.react(msg.guild.emojis.get('555021337735725066'));
        msg.react(msg.guild.emojis.get('555021319503216661'));
        msg.react(msg.guild.emojis.get('555012329364783104'));
        msg.react(msg.guild.emojis.get('555012374424322060'));
        msg.react(msg.guild.emojis.get('555021392161013772'));
    }
    if (!msg.author.bot && msg.content.includes("給他上BUFF") && msg.guild.id == 554169939263750144) {
        var messageOther = msg.mentions.members.first().lastMessage;
        function check_if_null1() {
            if (messageOther == null) {
                client.setTimeout(function () {
                    check_if_null1();
                }, 1000);
            } else {
                client.setTimeout(function () {
                    messageOther.react(msg.guild.emojis.get('555012424504311808'));
                    messageOther.react(msg.guild.emojis.get('555012344955142144'));
                    messageOther.react(msg.guild.emojis.get('555012311140532235'));
                    messageOther.react(msg.guild.emojis.get('555012408435933184'));
                    messageOther.react(msg.guild.emojis.get('555012390169608192'));
                    messageOther.react(msg.guild.emojis.get('555021337735725066'));
                    messageOther.react(msg.guild.emojis.get('555021319503216661'));
                    messageOther.react(msg.guild.emojis.get('555012329364783104'));
                    messageOther.react(msg.guild.emojis.get('555012374424322060'));
                    messageOther.react(msg.guild.emojis.get('555021392161013772'));
                }, 1000);
            }
        }
        check_if_null1();
    }
    if (!msg.author.bot && msg.content == "給我上BUFF" && msg.guild.id != 554169939263750144) {
        var emojis_array = msg.guild.emojis.random(10);
        for (i = 0; i < 9; i++) {
            msg.react(emojis_array[i]);
        }
    }
    if (!msg.author.bot && msg.content.includes("給他上BUFF") && msg.guild.id != 554169939263750144) {
        var messageOther = msg.mentions.members.first().lastMessage;
        function check_if_null2() {
            if (messageOther == null) {
                client.setTimeout(function () {
                    check_if_null2();
                }, 1000);
            } else {
                client.setTimeout(function () {
                    var emojis_array = msg.guild.emojis.random(10);
                    for (i = 0; i < 9; i++) {
                        messageOther.react(emojis_array[i]);
                    }
                }, 1000);
            }
        }
        check_if_null2();
    }
    if (!msg.author.bot && msg.content.includes("說你快樂就快樂")) {
        var messageOther = msg.mentions.members.first().lastMessage;
        function check_if_null3() {
            if (messageOther == null) {
                client.setTimeout(function () {
                    check_if_null3();
                }, 1000);
            } else {
                client.setTimeout(function () {
                    messageOther.react(client.emojis.find(emoji => emoji.name === "HappyShake"));
                    messageOther.react(client.emojis.find(emoji => emoji.name === "HappyPills"));
                    messageOther.react(client.emojis.find(emoji => emoji.name === "GAY"));
                    messageOther.react(client.emojis.find(emoji => emoji.name === "EvilPatrick"));
                    messageOther.react(client.emojis.find(emoji => emoji.name === "TrollFace"));
                    messageOther.react(client.emojis.find(emoji => emoji.name === "AAAAH"));
                }, 1000);
            }
        }
        check_if_null3();
    }
    if (!msg.author.bot && msg.content == "快樂") {
        msg.react(client.emojis.find(emoji => emoji.name === "HappyShake"));
        msg.react(client.emojis.find(emoji => emoji.name === "HappyPills"));
        msg.react(client.emojis.find(emoji => emoji.name === "GAY"));
        msg.react(client.emojis.find(emoji => emoji.name === "EvilPatrick"));
        msg.react(client.emojis.find(emoji => emoji.name === "TrollFace"));
        msg.react(client.emojis.find(emoji => emoji.name === "AAAAH"));
    }

    if (!msg.author.bot && msg.content == "軍師的指揮 EX" && msg.guild.id != 554169939263750144) {
        var guild = client.guilds.get("554169939263750144");
        msg.react(guild.emojis.get('555012424504311808'));
        msg.react(guild.emojis.get('555012344955142144'));
        msg.react(guild.emojis.get('555012311140532235'));
        msg.react(guild.emojis.get('555012408435933184'));
        msg.react(guild.emojis.get('555012390169608192'));
        msg.react(guild.emojis.get('555021337735725066'));
        msg.react(guild.emojis.get('555021319503216661'));
        msg.react(guild.emojis.get('555012329364783104'));
        msg.react(guild.emojis.get('555012374424322060'));
        msg.react(guild.emojis.get('555021392161013772'));
    }
}

if (!msg.author.bot && msg.channel.type == "text" && msg.content === "--Flag") {
    var Flag = []
    Flag = [
    '「打完這仗我就回老家結婚（この戦いが終わったら、故郷に帰って結婚するんだ）」',
    '「打完這一仗後我請你喝酒！」',
    '「你、你要錢嗎！要什麼我都能給你！」',
    '「誰雇用你的！出多少錢！？我出兩倍，不、三倍的錢！」',
    '「做完這次任務，我就要結婚了。」',
    '「幹完這一票我就金盆洗手了。」',
    '「戰鬥力只有5的渣渣！」',
    '「已經沒什麼好害怕的了（もう何も恐くない）……」',
    '「我一定會回來的（必ず帰る）。」',
    '「差不多該走了……」',
    '「我只是希望你永遠不要忘記我。」',
    '「我只是希望能永遠和你在一起。」',
    '「啊啊……為什麼會在這種時候、想起了那些無聊的事呢？」',
    '「能遇見你真是太好了。」',
    '「我終於…為你們報仇了！」',
    '「等到一切結束後，我有些話想跟妳說！」',
    '「這段時間我過的很開心啊。」',
    msg.member.displayName + '把自己的寶物借給其他人，然後說了：「待一切結束後記得還給我。」',
    '「真希望這份幸福可以永遠持續下去。」',
    '「我們三個人要永永遠遠在一起！」',
    '「這是我女兒的照片，很可愛吧？」',
    '「請告訴他，我永遠愛他……」',
    '「聽好，在我回來之前絕不要亂走動哦（いいか、俺が帰ってくるまでここを動くんじゃないぞ）。」',
    '「要像一個乖孩子一樣等著我回來。」',
    '「我去去就來（先に行って、すぐ戻るから）。」',
    '「快逃！(逃げろう！)」',
    '「對方只有一個人，大家一起上啊」',
    '「我就不信，這麼多人還殺不了他一個！」',
    '「幹，幹掉了嗎？（やったのか？）」',
    '「身體好輕……」',
    '「可惡！你給我等著！」',
    '「躲在這裡就應該不會被發現了吧。」',
    '「我不會讓任何人死的。」',
    '「可惡！原來是這麼回事！」',
    '「跑這麼遠應該就行了。」',
    '「我已經甚麼都不怕了（もう何も恐くない）。」',
    '「這是什麼，怎麼之前沒見過？」',
    '「什麽聲音……？就去看一下吧（「何の音だ？ちょっと見てくる」）」',
    '「是我的錯覺嗎？可能是我看錯了。」',
    '「是我的錯覺嗎？可能是我聽錯了。」',
    '「果然是錯覺吧，可能是我聽錯了。」',
    '「果然是錯覺吧，可能是我看錯了。」',
    '「二十年後又是一條好漢！」',
    '「' + msg.member.displayName + '，祝武運昌隆。」',
    '「這次工作的報酬是以前無法比較的」',
    '「我才不要和罪犯待在一起，我回自己的房間去了！（この中に殺人者がいるかもしれないのに、一緒に居られるか!俺は自分の部屋に戻るぞ！）」',
    '「一切的謎題都解開了！」',
    '「我已經天下無敵了～～」',
    '「大人！這邊就交給小的吧，請快離開這邊吧」',
    '「這就是我們流派的最終奧義。這一招我只會演示一次，你看好了！」',
    '「誰敢殺我？」',
    '「從來沒有人能越過我的劍圍。」',
    '「看我塔下強殺！」',
    '「騙人的吧，我們不是朋友嗎？」',
    '「我老爸是……你有種就……」',
    '「我可以好好利用這件事。」',
    '「就算我不在了，靈魂也會陪伴在你身邊。」',
    '「啊哩？懷錶停掉了，明明剛才才上過發條的。」',
    '「既然說是要拖延對方的話，那麼把那傢伙打倒也沒關係吧？」',
    '「從這邊出去之後，我要寫很多很多的信。」',
    '「我出門了～」',
    '「過了明天就沒事了。」',
    '「出來混，遲早要還的。」',
    '「你的生命值已經猶如風中殘燭了。」',
    '「看來沒死過一次是不會瞭解的呢。」',
    '「我讓你連後悔自己死的時間都沒有！」',
    '「這就是我最後的波紋！」',
    '「成功了……結束了……『白金之星』終究還是被我的『世界』所擊敗了……」',
    '「我要過著平靜安逸的生活……我要活得比任何人都更加幸福……！」',
    '「將體內的空氣排出，利用那壓差阻力改變軌道，回到地球！」',
    '「放心，這艘船非常堅固，絕對不可能沉沒的！」',
    '「今天真是和平啊……」',
    '「我在大都等你！」',
    '「Lancer，' + msg.member.displayName + '，接受召喚現界。」',
    '「我走這邊，你去那邊看看。」',
    '「儘管喊破喉嚨吧，沒有人會來救你的！」',
    '「我去去就來。」',
    '「我買幾個橘子去，你就在此地，不要走動。」',
    '「明明什麼都沒有啊？」',
    '「我累了，讓我先睡一會兒。」'
    ];
    Flag_random = Math.floor(Math.random() * Flag.length) - 1;
    console.log(Flag_random);
    console.log(Flag[Flag_random]);
    msg.channel.send(Flag[Flag_random]);
}
}
});

client.login('NTQ1MTc4Mzk1NzcyNzE1MDE5.XbH66Q._J14cco6JIhyERc-cgHZz74AVNI');
