const Discord = require('discord.js');
const client = new Discord.Client();
var a = 0;
var switchA = true;
var switchC = 0;
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
var the_end_of_world;
var Buff_A = 0;
var Buff_B = 0;
var Debuff_A = 0;
var Debuff_B = 0;
var Turn_count = 0;
var BC_A = false;
var BC_B = false;
var BC_COUNT_A = 0;
var BC_COUNT_B = 0;
var evade_A = false
var evade_B = false;

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

        var Jesus_fucking_long = function () {
            var God_Damn_Long = function () {
                if ((msg.content.includes("--NeroFes")) && (msg.mentions.users != null) && (msg.content !== "--NeroFes")) {
                    var arr = msg.mentions.users.array();
                    if (arr.length == 2) {
                        userWhoGotTagged = msg.mentions.users.last(); //2nd
                        first_attack = msg.mentions.users.first(); //1st
                        userWhoGotTagged_COPY = msg.mentions.users.last().username; //2nd
                        if (switchA == true) {
                            switchA = false;
                            a = a + 1;
                            second_attack = msg.mentions.users.first().username; //2nd
                            msgA = '尼祿祭第 ' + a.toString() + ' 演技，開演！';
                            msgB = (msg.mentions.users.first() //1st
                                + ' ＶＳ ' + userWhoGotTagged//2nd
                                + "！");

                        } else if (switchA == false) {
                            const embedB = new Discord.RichEmbed()
                                .setDescription('有決鬥正在進行，請耐心等候。');
                            msg.channel.send(embedB);
                        }
                    } else if (arr.length == 1) {
                        userWhoGotTagged = msg.mentions.users.first();
                        first_attack = msg.author.username;
                        userWhoGotTagged_COPY = msg.mentions.users.first().username;
                        if (switchA == true) {
                            switchA = false;
                            a = a + 1;
                            second_attack = msg.mentions.users.first().username;
                            msgA = '尼祿祭第 ' + a.toString() + ' 演技，開演！';
                            msgB = (msg.author.toString() + ' ＶＳ ' + userWhoGotTagged + "！");

                        } else if (switchA == false) {
                            const embedB = new Discord.RichEmbed()
                                .setDescription('有決鬥正在進行，請耐心等候。');
                            msg.channel.send(embedB);
                        }
                    } else {
                        msg.channel.send("ERROR(1).");
                    }
                } else if (msg.content === "--NeroFes") {
                    Y = msg.guild.members.random();
                    userWhoGotTagged = Y;
                    userWhoGotTagged_COPY = Y.user.username;
                    first_attack = Y.user.username;
                    if (switchA == true) {
                        switchA = false;
                        a = a + 1;
                        second_attack = msg.author.username;
                        msgA = '尼祿祭第 ' + a.toString() + ' 演技，開演！';
                        msgB = (msg.author.toString() + ' ＶＳ ' + userWhoGotTagged + "！");

                    } else if (switchA == false) {
                        const embedB = new Discord.RichEmbed()
                            .setDescription('有決鬥正在進行，請耐心等候。');
                        msg.channel.send(embedB);
                    }
                } else if (arr.length == 0) {
                    Y = msg.guild.members.random();
                    userWhoGotTagged = Y;
                    userWhoGotTagged_COPY = Y.user.username;
                    first_attack = Y.user.username;
                    if (switchA == true) {
                        switchA = false;
                        a = a + 1;
                        second_attack = msg.author.username;
                        msgA = '尼祿祭第 ' + a.toString() + ' 演技，開演！';
                        msgB = (msg.author.toString() + ' ＶＳ ' + userWhoGotTagged + "！");

                    } else if (switchA == false) {
                        const embedB = new Discord.RichEmbed()
                            .setDescription('有決鬥正在進行，請耐心等候。');
                        msg.channel.send(embedB);
                    }
                }
                return msgA + '\n' + msgB + '\n';
            }



            client.setTimeout(function () {
                var Embed_A = function () {
                    var arr = msg.mentions.users.array();
                    if (msg.content == "--NeroFes") {
                        embedA = new Discord.RichEmbed();
                        embedA.setColor(0xFF0000);
                        embedA.addBlankField();
                        embedA.addField(msg.author.username, 750 + "/750", true);
                        embedA.addField(userWhoGotTagged_COPY, 750 + "/750", true);
                        embedA.setDescription("");
                    } else if (arr.length == 2) {
                        embedA = new Discord.RichEmbed();
                        embedA.setColor(0xFF0000);
                        embedA.addBlankField();
                        embedA.addField(msg.mentions.users.first().username, 750 + "/750", true);
                        embedA.addField(userWhoGotTagged_COPY, 750 + "/750", true);
                        embedA.setDescription("");
                    } else if (arr.length == 1) {
                        embedA = new Discord.RichEmbed();
                        embedA.setColor(0xFF0000);
                        embedA.addBlankField();
                        embedA.addField(msg.author.username, 750 + "/750", true);
                        embedA.addField(userWhoGotTagged_COPY, 750 + "/750", true);
                        embedA.setDescription("");
                    } else {
                        msg.channel.send("ERROR(2).");
                    }
                    return embedA;
                }


                msg.channel.send(God_Damn_Long(), Embed_A()).then(msgBOT => {
                    var Damage_caculate = function (a, b, c) {
                        if (Round == 1) {
                            Damage = a + Math.floor(Math.random() * b) - c + Buff_A - Debuff_A;
                            Buff_A = 0;
                            Debuff_A = 0;
                        } else if (Round == 2) {
                            Damage = a + Math.floor(Math.random() * b) - c + Buff_B - Debuff_B;
                            Buff_B = 0;
                            Debuff_B = 0;
                        }
                        return Damage;
                    };

                    var Embed_battle = function (action) {
                        var arr = msg.mentions.users.array();
                        if (msg.content.includes("--NeroFes") && arr.length == 0) {
                            const embedB = new Discord.RichEmbed();
                            embedB.setColor(0xFF0000);
                            embedB.addBlankField();
                            embedB.addField(msg.author.username, healthA + "/750", true);
                            embedB.addField(userWhoGotTagged_COPY, healthB + "/750", true);
                            embedB.setDescription("");
                        } else if (arr.length == 2) {
                            embedB = new Discord.RichEmbed();
                            embedB.setColor(0xFF0000);
                            embedB.addBlankField();
                            embedB.addField(msg.mentions.users.first().username, healthA + "/750", true);
                            embedB.addField(msg.mentions.users.last().username, healthB + "/750", true);
                            embedB.setDescription(action);
                        } else if (arr.length == 1) {
                            embedB = new Discord.RichEmbed();
                            embedB.setColor(0xFF0000);
                            embedB.addBlankField();
                            embedB.addField(msg.author.username, healthA + "/750", true);
                            embedB.addField(userWhoGotTagged_COPY, healthB + "/750", true);
                            embedB.setDescription(action);
                        } else {
                            msg.channel.send("ERROR(3).");
                        }
                    };

                    var healthTest = function () {
                        if (healthA <= 0 && BC_A == true && BC_COUNT_A >= Turn_count && BC_COUNT_A != 0) {
                            string = first_attack + "的戰鬥續行發動！用毅力再次地站了起來！";
                            healthA = Math.floor(Math.random() * 10) + 1;
                            Embed_battle(string);
                            msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                            BC_A = false;
                            np_switch = false;
                            BC_COUNT_A = 0;
                            Battle_loop();
                        } else if (healthB <= 0 && BC_B == true && BC_COUNT_B >= Turn_count && BC_COUNT_B != 0) {
                            string = second_attack + "的戰鬥續行發動！用毅力再次地站了起來！";
                            healthB = Math.floor(Math.random() * 10) + 1;
                            Embed_battle(string);
                            msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                            BC_B = false;
                            np_switch = false;
                            BC_COUNT_B = 0;
                            Battle_loop();
                        } else if (healthA > 0 && healthB > 0) {
                            if (Round == 1 && !(healthA <= 0)) {
                                Round = 2;
                                Battle_loop();
                            } else if (Round == 2 && !(healthB <= 0)) {
                                Round = 1;
                                Battle_loop();
                            } else if (Round == 1 && !(healthA <= 0) && world_First == true) {
                                Round = 1;
                                Battle_loop();
                            } else if (Round == 2 && !(healthB <= 0) && world_Second == true) {
                                Round = 2;
                                Battle_loop();
                            }
                        } else if (healthB <= 0) {
                            client.setTimeout(function () {
                                if (world_Second == true) {
                                    string = first_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_Second = false;
                                    worldTimes = 0;
                                    client.setTimeout(function () {
                                        string = "戰鬥結束，" + first_attack + "獲勝！";
                                        Embed_battle(string);
                                        msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                        switchA = true;
                                    }, 2500);
                                } else if (world_First == true) {
                                    string = second_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_First = false;
                                    worldTimes = 0;
                                    client.setTimeout(function () {
                                        string = "戰鬥結束，" + first_attack + "獲勝！";
                                        Embed_battle(string);
                                        msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                        switchA = true;

                                    }, 2500);
                                } else {
                                    client.setTimeout(function () {
                                        string = "戰鬥結束，" + first_attack + "獲勝！";
                                        Embed_battle(string);
                                        msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                        switchA = true;
                                    }, 2500);
                                }
                            }, 2500);
                        } else if (healthA <= 0) {
                            client.setTimeout(function () {
                                if (world_Second == true) {
                                    string = second_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_Second = false;
                                    worldTimes = 0;
                                    client.setTimeout(function () {
                                        string = "戰鬥結束，" + second_attack + "獲勝！";
                                        Embed_battle(string);
                                        msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                        switchA = true;
                                    }, 2500);
                                } else if (world_First == true) {
                                    string = second_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_First = false;
                                    worldTimes = 0;
                                    client.setTimeout(function () {
                                        string = "戰鬥結束，" + second_attack + "獲勝！";
                                        Embed_battle(string);
                                        msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                        switchA = true;
                                    }, 2500);
                                } else {
                                    client.setTimeout(function () {
                                        string = "戰鬥結束，" + second_attack + "獲勝！";
                                        Embed_battle(string);
                                        msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                        switchA = true;
                                    }, 2500);
                                }
                            }, 2500);
                        }
                    };

                    var np = function (string1, string2, string3, string4, duration) {
                        if (np_switch != false) {
                            if (switchC == 1) { //偶數回合，即為第二位攻擊者的回合
                                string = second_attack + string1;
                                Embed_battle(string);
                                msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                if (string3 != "") {
                                    client.setTimeout(function () {
                                        string = second_attack + string2;
                                        Embed_battle(string);
                                        msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                        client.setTimeout(function () {
                                            string = second_attack + string3;
                                            Embed_battle(string);
                                            embedB.setImage(string4);
                                            msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                            client.setTimeout(function () {
                                                if (evade_A == true) {
                                                    Buff_B = 0;
                                                    Damage_caculate(0, 0, 0);
                                                    evade_A = false;
                                                } else {
                                                    Damage_caculate(200000, 100000, 50000);
                                                }
                                                healthB = 0;
                                                string = "對" + first_attack + "造成" + Damage + "點傷害。";
                                                Embed_battle(string);
                                                embedB.setImage();
                                                msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                                client.setTimeout(function () {
                                                    healthTest();
                                                }, 2500);
                                            }, duration);
                                        }, 2500);
                                    }, 2500);
                                } else if (string3 == "") {
                                    client.setTimeout(function () {
                                        string = second_attack + string2;
                                        Embed_battle(string);
                                        embedB.setImage(string4);
                                        msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                        client.setTimeout(function () {
                                            if (evade_A == true) {
                                                Buff_B = 0;
                                                Damage_caculate(0, 0, 0);
                                                evade_A = false;
                                            } else {
                                                Damage_caculate(200000, 100000, 50000);
                                            }
                                            healthB = 0;
                                            string = "對" + first_attack + "造成" + Damage + "點傷害。";
                                            Embed_battle(string);
                                            embedB.setImage();
                                            msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                            client.setTimeout(function () {
                                                healthTest();
                                            }, 2500);
                                        }, duration);
                                    }, 2500);
                                }
                            } else if (switchC == 2) { //奇數回合，即為第一位攻擊者的回合
                                string = first_attack + string1;
                                Embed_battle(string);
                                msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                if (string3 != "") {
                                    client.setTimeout(function () {
                                        string = first_attack + string2;
                                        Embed_battle(string);
                                        msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                        client.setTimeout(function () {
                                            string = first_attack + string3;
                                            Embed_battle(string);
                                            embedB.setImage(string4);
                                            msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                            client.setTimeout(function () {
                                                if (evade_B == true) {
                                                    Buff_A = 0;
                                                    Damage_caculate(0, 0, 0);
                                                    evade_B = false;
                                                } else {
                                                    Damage_caculate(200000, 100000, 50000);
                                                }
                                                console.log(Damage);
                                                string = "對" + second_attack + "造成" + Damage + "點傷害。";
                                                healthB = 0;
                                                Embed_battle(string);
                                                embedB.setImage();
                                                msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                                client.setTimeout(function () {
                                                    healthTest();
                                                }, 2500);
                                            }, duration);
                                        }, 2500);
                                    }, 2500);
                                } else if (string3 == "") {
                                    client.setTimeout(function () {
                                        string = second_attack + string2;
                                        Embed_battle(string);
                                        embedB.setImage(string4);
                                        msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                        client.setTimeout(function () {
                                            if (evade_B == true) {
                                                Buff_A = 0;
                                                Damage_caculate(0, 0, 0);
                                                evade_B = false;
                                            } else {
                                                Damage_caculate(200000, 100000, 50000);
                                            }
                                            healthA = 0;
                                            string = "對" + first_attack + "造成" + Damage + "點傷害。";
                                            Embed_battle(string);
                                            embedB.setImage();
                                            msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                            client.setTimeout(function () {
                                                healthTest();
                                            }, 2500);
                                        }, duration);
                                    }, 2500);
                                }
                            }
                        } else {
                            if (Round == 1) {
                                Battle_loop();
                            } else if (Round == 2) {
                                Battle_loop();
                            }
                        }
                    };

                    var AA = function (line, image, basic, maximum, minimum, duration) {
                        if (Round % 2 != 0) { //奇數 A的回合
                            if (world_First != true) { //如果A的時間沒被暫停
                                client.setTimeout(function () {
                                    if (evade_A == true) {
                                        Buff_B = 0;
                                        Damage_caculate(0, 0, 0);
                                        evade_A = false;
                                    } else {
                                        Damage_caculate(basic, maximum, minimum);
                                    }
                                        healthB = healthB - Damage;
                                        if (healthB <= 0) {
                                            healthB = 0;
                                        }
                                    string = line + "對" + second_attack + "造成" + Damage + "點傷害。";
                                    Embed_battle(string);
                                    embedB.setImage(image);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        healthTest();
                                        embedB.setImage();
                                    }, duration);
                                }, 1500);
                            } else { //如果A的時間被暫停
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = second_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_First = false;
                                    worldTimes = 0;
                                    Round = 1;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        } else {
                            if (world_Second != true) { //如果B的時間沒被暫停
                                client.setTimeout(function () {
                                    if (evade_B == true) {
                                        Buff_A = 0;
                                        Damage_caculate(0, 0, 0);
                                        evade_B = false;
                                    } else {
                                        Damage_caculate(basic, maximum, minimum);
                                    }
                                        healthA = healthA - Damage;
                                        if (healthA <= 0) {
                                            healthA = 0;
                                        }
                                    string = line + "對" + first_attack + "造成" + Damage + "點傷害。";
                                    Embed_battle(string);
                                    embedB.setImage(image);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        healthTest();
                                        embedB.setImage();
                                    }, duration);
                                }, 1500);
                            } else { //如果B的時間被暫停
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = first_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_Second = false;
                                    worldTimes = 0;
                                    Round = 2;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        }
                    };

                    var za_warudo = function () {
                        if (Round % 2 == 0) { //偶數
                            if (world_First != true) {
                                client.setTimeout(function () {
                                    string = second_attack + "用「世界（ザ・ワールド）」暫停了時間！";
                                    Embed_battle(string);
                                    embedB.setImage("https://i.imgur.com/wWKP5vq.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        world_First = true;
                                        Round = 2;
                                        Battle_loop();
                                    }, 3000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = first_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_Second = false;
                                    worldTimes = 0;
                                    Round = 2;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        } else {
                            if (world_Second != true) {
                                client.setTimeout(function () {
                                    string = first_attack + "用「世界（ザ・ワールド）」暫停了時間！";
                                    Embed_battle(string);
                                    embedB.setImage("https://i.imgur.com/wWKP5vq.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        world_Second = true;
                                        Round = 1;
                                        Battle_loop();
                                    }, 3000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = second_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_First = false;
                                    worldTimes = 0;
                                    Round = 1;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        }
                    };

                    var za_warudo2 = function () {
                        if (Round % 2 == 0) { //奇數回合
                            if (world_First != true) {
                                client.setTimeout(function () {
                                    string = second_attack + "用「白金之星‧世界（スタープラチナ・ザ・ワールド）」暫停了時間！";
                                    Embed_battle(string);
                                    embedB.setImage("http://pa1.narvii.com/6908/f66359dc41808f6490b11039cb7e88a481ef8c29r5-480-270_00.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        world_First = true;
                                        Round = 2;
                                        Battle_loop();
                                    }, 3000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = first_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_Second = false;
                                    worldTimes = 0;
                                    Round = 2;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        } else {
                            if (world_Second != true) {
                                client.setTimeout(function () {
                                    string = first_attack + "用「白金之星‧世界（スタープラチナ・ザ・ワールド）」暫停了時間！";
                                    Embed_battle(string);
                                    embedB.setImage("http://pa1.narvii.com/6908/f66359dc41808f6490b11039cb7e88a481ef8c29r5-480-270_00.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        world_Second = true;
                                        Round = 1;
                                        Battle_loop();
                                    }, 3000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = second_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_First = false;
                                    worldTimes = 0;
                                    Round = 1;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        }
                    };

                    var za_warudo3 = function () {
                        if (Round % 2 == 0) { //奇數
                            if (world_First != true) { //第一行動者沒被暫停
                                client.setTimeout(function () {
                                    string = second_attack + "用「白金之星‧世界（スタープラチナ・ザ・ワールド）」暫停了時間！";
                                    Embed_battle(string);
                                    embedB.setImage("https://i.imgur.com/9Ftf91q.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        world_First = true;
                                        Round = 2;
                                        Battle_loop();
                                    }, 3000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = first_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_Second= false;
                                    worldTimes = 0;
                                    Round = 2;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        } else {
                            if (world_Second != true) {
                                client.setTimeout(function () {
                                    string = first_attack + "用「白金之星‧世界（スタープラチナ・ザ・ワールド）」暫停了時間！";
                                    Embed_battle(string);
                                    embedB.setImage("https://i.imgur.com/9Ftf91q.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        world_Second = true;
                                        Round = 1;
                                        Battle_loop();
                                    }, 3000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = second_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_First = false;
                                    worldTimes = 0;
                                    Round = 1;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        }
                    };

                    var liar_no_taste = function () {
                        if (Round % 2 != 0) { //偶數
                            if (world_First != true) {
                                client.setTimeout(function () {
                                    string = first_attack + "舔了" + second_attack + "，感覺到說謊的味道，但沒有任何實質傷害。";
                                    Embed_battle(string);
                                    embedB.setImage("https://i.kym-cdn.com/photos/images/newsfeed/001/418/189/945.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        healthTest();
                                    }, 6000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = second_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_First = false;
                                    worldTimes = 0;
                                    Round = 1;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        } else {
                            if (world_Second != true) {
                                client.setTimeout(function () {
                                    string = second_attack + "舔了" + first_attack + "，感覺到說謊的味道，但沒有任何實質傷害。";
                                    Embed_battle(string);
                                    embedB.setImage("https://i.kym-cdn.com/photos/images/newsfeed/001/418/189/945.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        healthTest();
                                    }, 6000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = first_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_Second = false;
                                    worldTimes = 0;
                                    Round = 2;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        }
                    };

                    var You_have_to_be_stronger = function () {
                        if (Round % 2 != 0) { //偶數
                            if (world_First != true) {
                                client.setTimeout(function () {
                                    string = first_attack + "：「" + second_attack + "，你要成長啊，不要再用你的『海灘男孩』釣魚了。」，" + second_attack + "下一次的攻擊傷害上升了。";
                                    Embed_battle(string);
                                    Buff_B = 100;
                                    embedB.setImage("https://i.imgur.com/QHrieRy.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        healthTest();
                                    }, 6000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = second_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_First = false;
                                    worldTimes = 0;
                                    Round = 1;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        } else {
                            if (world_Second != true) {
                                client.setTimeout(function () {
                                    string = second_attack + "：「" + first_attack + "你要成長啊，不要再用你的『海灘男孩』釣魚了。」，" + first_attack + "下一次的攻擊傷害上升了。";
                                    Embed_battle(string);
                                    Buff_A = 100;
                                    embedB.setImage("https://i.imgur.com/QHrieRy.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        healthTest();
                                    }, 6000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = first_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_Second = false;
                                    worldTimes = 0;
                                    Round = 2;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        }
                    };
                    
                    var Battle_Contiune = function () {
                        if (Round % 2 != 0) { //偶數
                            if (world_First != true && BC_A != true) {
                                client.setTimeout(function () {
                                    string = first_attack + "發動戰鬥續行！";
                                    Embed_battle(string);
                                    BC_A = true;
                                    BC_COUNT_A = Turn_count + 5;
                                    embedB.setImage("https://i.imgur.com/r5KBPNF.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        healthTest();
                                    }, 6000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = second_attack + "「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_First = false;
                                    worldTimes = 0;
                                    Round = 1;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        } else {
                            if (world_Second != true && BC_B != true) {
                                client.setTimeout(function () {
                                    string = second_attack + "發動戰鬥續行！";
                                    Embed_battle(string);
                                    BC_B = true;
                                    BC_COUNT_B = Turn_count + 5;
                                    embedB.setImage("https://i.imgur.com/r5KBPNF.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        healthTest();
                                    }, 6000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = first_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_Second = false;
                                    worldTimes = 0;
                                    Round = 2;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        }
                    };

                    var Gang_Torture_Dance = function () {
                        if (Round % 2 != 0) { //偶數
                            if (world_First != true) {
                                client.setTimeout(function () {
                                    string = first_attack + "跳起奇怪的舞蹈！" + first_attack + "下一次的攻擊傷害上升了。";
                                    Embed_battle(string);
                                    Buff_A = 100;
                                    embedB.setImage("https://i.imgur.com/KXwlAFv.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        healthTest();
                                    }, 3000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = second_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_First = false;
                                    worldTimes = 0;
                                    Round = 1;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        } else {
                            if (world_Second != true) {
                                client.setTimeout(function () {
                                    string = second_attack + "跳起奇怪的舞蹈！" + second_attack + "下一次的攻擊傷害上升了。";
                                    Embed_battle(string);
                                    Buff_B = 100;
                                    embedB.setImage("https://i.imgur.com/KXwlAFv.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        healthTest();
                                    }, 3000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = first_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_Second = false;
                                    worldTimes = 0;
                                    Round = 2;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        }
                    };

                    var Legendary_Super_Saiyan = function () {
                        if (Round % 2 != 0) { //偶數
                            if (world_First != true) {
                                client.setTimeout(function () {
                                    string = first_attack + "變身成「傳說中的超級賽亞人」！" + first_attack + "下一次的攻擊傷害上升了。";
                                    Embed_battle(string);
                                    Buff_A = 150;
                                    embedB.setImage("https://i.imgur.com/U5oE6FM.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        healthTest();
                                    }, 3000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = second_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_First = false;
                                    worldTimes = 0;
                                    Round = 1;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        } else {
                            if (world_Second != true) {
                                client.setTimeout(function () {
                                    string = second_attack + "變身成「傳說中的超級賽亞人」" + second_attack + "下一次的攻擊傷害上升了。";
                                    Embed_battle(string);
                                    Buff_B = 150;
                                    embedB.setImage("https://i.imgur.com/U5oE6FM.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        healthTest();
                                    }, 3000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = first_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_Second = false;
                                    worldTimes = 0;
                                    Round = 2;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        }
                    };

                    var I_REFUSE = function () {
                        if (Round % 2 != 0) { //偶數
                            if (world_First != true) {
                                client.setTimeout(function () {
                                    string = first_attack + "：「但是我拒絕。」" + first_attack + "將免疫下一次的攻擊。";
                                    Embed_battle(string);
                                    evade_A = true;
                                    embedB.setImage("https://i.kym-cdn.com/photos/images/newsfeed/001/178/131/588.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        healthTest();
                                    }, 6000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = second_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_First = false;
                                    worldTimes = 0;
                                    Round = 1;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        } else {
                            if (world_Second != true) {
                                client.setTimeout(function () {
                                    string = second_attack + "「但是我拒絕。」" + second_attack + "將免疫下一次的攻擊。";
                                    Embed_battle(string);
                                    evade_B = true;
                                    embedB.setImage("https://i.kym-cdn.com/photos/images/newsfeed/001/178/131/588.gif");
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    client.setTimeout(function () {
                                        embedB.setImage("");
                                        healthTest();
                                    }, 6000);
                                }, 1500);
                            } else {
                                the_end_of_world = Math.floor(Math.random() * 100) + 1;
                                if (the_end_of_world <= 50 || worldTimes >= 3 && worldTimes != 0) {
                                    string = first_attack + "：「時間恢復流動。」";
                                    Embed_battle(string);
                                    msgBOT.edit(msgA + '\n' + msgB + '\n', embedB);
                                    world_Second = false;
                                    worldTimes = 0;
                                    Round = 2;
                                    Battle_loop();
                                } else {
                                    worldTimes += 1;
                                    healthTest();
                                }
                            }
                        }
                    };


                    var SpecialSkill = function () {
                        var RandomSkill = Math.floor(Math.random() * 9) + 1;
                        if (RandomSkill == 1) {
                            if (world_First != true && world_Second != true) {
                                za_warudo();
                            } else {
                                Battle_loop();
                            }
                        } else if (RandomSkill == 2) {
                            if (world_First != true && world_Second != true) {
                                za_warudo2();
                            } else {
                                Battle_loop();
                            }
                        } else if (RandomSkill == 3) {
                            if (world_First != true && world_Second != true) {
                                za_warudo3();
                            } else {
                                Battle_loop();
                            }
                        } else if (RandomSkill == 4) {
                            liar_no_taste();

                        } else if (RandomSkill == 5) {
                            You_have_to_be_stronger();

                        } else if (RandomSkill == 6) {
                            Battle_Contiune();

                        } else if (RandomSkill == 7) {
                            Gang_Torture_Dance();

                        } else if (RandomSkill == 8) {
                            Legendary_Super_Saiyan();

                        } else if (RandomSkill == 9) {
                            I_REFUSE();
                        }
                    };

                    var Battle_loop = function () {
                        var skillOrAttack = Math.random() * 100 + 1;
                        if ((healthA <= 100 && healthA != 0) || (healthB <= 100 && healthB != 0)) {
                            if (healthA <= 100) {
                                switchC = 1;
                            }
                            if (healthB <= 100) {
                                switchC = 2;
                            }
                            const data = require("./NeroFes/noble_phantasm.json");
                            var Datalength = data["member"].length;
                            X = Math.floor(Math.random() * Datalength);
                            var A = data["member"][X].line1;
                            var B = data["member"][X].line2;
                            if (data["member"][X].line3 == "") {
                                var C = "";
                            } else {
                                var C = data["member"][X].line3;
                            }
                            var D = data["member"][X].image;
                            var E = data["member"][X].duration;
                            np(A, B, C, D, E);
                        } else if (skillOrAttack <= 40 && skillOrAttack > 0) {
                            SpecialSkill();
                        } else {
                            const data = require("./NeroFes/skill.json");
                            var Datalength = data["member"].length;
                            X = Math.floor(Math.random() * Datalength);
                            var F = data["member"][X].line;
                            var G = data["member"][X].image;
                            var H = data["member"][X].basicDamage;
                            var J = data["member"][X].maximumCorrection;
                            var K = data["member"][X].minimumCorrection;
                            var L = data["member"][X].duration;
                            AA(F, G, H, J, K, L);
                        }
                    };
                    Battle_loop();
                });
                Buff_A = 0;
                Buff_B = 0;
                Debuff_A = 0;
                Debuff_B = 0;
                Turn_count = 0;
                BC_A = false;
                BC_B = false;
                BC_COUNT_A = 0;
                BC_COUNT_B = 0;
                healthA = 750;
                healthB = 750;
                evade_A = false;
                evade_B = false;
                worldTimes = 0;
                world_Second = false;
                world_First = false;
            }, 1000);
        }

        if (switchA != false) {
            if ((msg.content.includes("--NeroFes")) && (msg.mentions.users != null) && (msg.content != "--NeroFes")) {
                Jesus_fucking_long();
            }
            if (msg.content == "--NeroFes") {
                Jesus_fucking_long();
            }
        }
        switchC = 0;
    };

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

            if (varD != 1) {
                for (i = 0; i < varD; i++) {
                    if (i >= varD - 1) {
                        stringA = stringA + (Math.floor(Math.random() * (varB - varA + 1)) + varA + varC);
                    } else if (i <= varD - 1) {
                        stringA = stringA + (Math.floor(Math.random() * (varB - varA + 1)) + varA + varC) + ", ";
                    }
                }
                if (varD = 1) {
                    if (stringA >= 90 && stringA < 100) {
                        ResultStr = strA + " 擲出 " + stringA + "，大失敗！(σ′▽‵)′▽‵)σ";
                    } else if (stringA == 100) {
                        ResultStr = strA + " 擲出 " + stringA + "，極☆大失敗！(☞ﾟ∀ﾟ)ﾟ∀ﾟ)☞";
                    } else if (stringA <= 10 && stringA > 1) {
                        ResultStr = strA + " 擲出 " + stringA + "，大成功！d(`･∀･)b";
                    } else if (stringA == 1) {
                        ResultStr = strA + " 擲出 " + stringA + "，極☆大成功！⎝༼ ◕▽◕ ༽⎠";
                    } else {
                        ResultStr = strA + " 擲出 " + stringA;
                    }
                } else {
                    ResultStr = strA + " 擲出 " + stringA;
                }
                msg.channel.send(ResultStr);
            } else if (varD == 1) {
                stringA = (Math.floor(Math.random() * (varB - varA + 1)) + varA + varC);
                if (stringA >= 90 && stringA < 100) {
                    ResultStr = strA + " 擲出 " + stringA + "，大失敗！(σ′▽‵)′▽‵)σ";
                } else if (stringA == 100) {
                    ResultStr = strA + " 擲出 " + stringA + "，極☆大失敗！(☞ﾟ∀ﾟ)ﾟ∀ﾟ)☞";
                } else if (stringA <= 10 && stringA > 1) {
                    ResultStr = strA + " 擲出 " + stringA + "，大成功！d(`･∀･)b";
                } else if (stringA == 1) {
                    ResultStr = strA + " 擲出 " + stringA + "，極☆大成功！⎝༼ ◕▽◕ ༽⎠";
                } else {
                    ResultStr = strA + " 擲出 " + stringA;
                }
                msg.channel.send(ResultStr);
            }

        } else if (msg.content.match(/--Dice[ ](.+)[ ]([1-9][0-9]*)[d]([1-9][0-9]*)[-]([1-9][0-9]*|0)[,]([1-9])/)) {
            MatchData = msg.content.match(/--Dice[ ](.+)[ ]([1-9][0-9]*)[d]([1-9][0-9]*)[-]([1-9][0-9]*|0)[,]([1-9])/);
            strA = MatchData[1];
            var varA = parseInt(MatchData[2]);
            var varB = parseInt(MatchData[3]);
            var varC = parseInt(MatchData[4]);
            var varD = parseInt(MatchData[5]);

            var stringA = "";

            for (i = 0; i < varD; i++) {
                if (i >= varD - 1) {
                    stringA = stringA + (Math.floor(Math.random() * (varB - varA + 1)) + varA - varC);
                } else if (i <= varD - 1) {
                    stringA = stringA + (Math.floor(Math.random() * (varB - varA + 1)) + varA - varC) + " ,";
                }
            }
            if (varD = 1) {
                if (stringA >= 90 && stringA < 100) {
                    ResultStr = strA + " 擲出 " + stringA + "，大失敗！(σ′▽‵)′▽‵)σ";
                } else if (stringA == 100) {
                    ResultStr = strA + " 擲出 " + stringA + "，極☆大失敗！(☞ﾟ∀ﾟ)ﾟ∀ﾟ)☞";
                } else if (stringA <= 10 && stringA > 1) {
                    ResultStr = strA + " 擲出 " + stringA + "，大成功！d(`･∀･)b";
                } else if (stringA == 1) {
                    ResultStr = strA + " 擲出 " + stringA + "，極☆大成功！⎝༼ ◕▽◕ ༽⎠";
                } else {
                    ResultStr = strA + " 擲出 " + stringA;
                }
            } else {
                ResultStr = strA + " 擲出 " + stringA;
            }
            msg.channel.send(ResultStr);
        }
    }

    if (!msg.author.bot) {
        if (msg.content === "--Dice ?") {
            msg.channel.send("```指令：--Dice 玩家暱稱[任何字元] 骰子最小值[數字]d骰子最大值[數字]+補正值[數字],次數[數字]```");
        }
    }
});


client.login('NTQ3MzkzMTI0Mjg5MjE2NTUy.D02JYQ.rvALpoMXxLDk7MLu2WFgLmTXTkI'); //2號機
