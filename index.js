require("dotenv").config();
const config = require("./config.js");

const Discord = require("djst-client");
const client = new Discord.Client({
	intents: ["GUILDS", "GUILD_MESSAGES"],
	prefix: config.prefix,
	initCommands: true
});

// help
client.generateHelpCommand();

// command sendiri - simple
client.createCommand({
	category: "random",
	name: "port",
	aliases:["part"],
	cooldown: 4,
	description: "simple command",
	execute: async (message, args, bot) => {
		message.channel.send("Click Here http://growtopia2.com/growtopia/server_data.php")
	}
})

client.createCommand({
	category: "random",
	name: "Daily",
	aliases:["daily"],
	cooldown: 4,
	description: "simple command",
	execute: async (message, args, bot) => {
		message.channel.send("Click Me")
	}
})

client.createCommand({
	category: "random",
	name: "@LynX",
	aliases:["daily"],
	cooldown: 4,
	description: "simple command",
	execute: async (message, args, bot) => {
		message.channel.send("Halo")
	}
})



client.on("ready", () => {
	console.log("ready");
})
client.login(process.env.TOKEN);
