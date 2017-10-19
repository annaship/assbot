/*jshint esversion: 6 */
//...TOC...//
//..IMPORTS..//
//..ATTACHING OBJECTS..//
// Assign commands from in-chat to a variable
//..EXEC FUNCTIONS..//
//Login to the registered Discord server
//Message on successfull launch
//Basic messages delete command
//..SAMPLE TEXT..//
// -------

//..IMPORTS..//
// Config file import
var cfg = require("./config");
// Discord.js import
var Discord = require("discord.js");
// fs import
var fs = require("fs");

//..ATTACHING OBJECTS..//
// client from Discord
var client = new Discord.Client();
// Assign commands from in-chat to a variable
var command = args.shift().toLowerCase();