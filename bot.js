const { Client, Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const client = new Client({ disableEveryone: true });
const GOOGLE_API_KEY = 'AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8';
const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();
const PREFIX = '=';
client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => { 
console.log(`
------------------------------------------------------
> Logging in...
------------------------------------------------------
Logged in as ${client.user.tag}
Working on ${client.guilds.size} servers!
${client.channels.size} channels and ${client.users.size} users cached!
I am logged in and ready to roll!
LET'S GO!
------------------------------------------------------
-------------------------------------------------------
------------------------------------------------------
----------------------Bot's logs----------------------`);


});


client.on('ready', () => {
    console.log('Bot Is Ready Now !');
    client.user.setGame(`${PREFIX}help`,"http://twitch.tv/xkilleryt")
    });



client.on('message', message => {



    var prefix = "-";

          if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'bc')) {

if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

let args = message.content.split(" ").join(" ").slice(2 + prefix.length);

let copy = "SkyBot.";

let request = `Requested By ${message.author.username}`;

if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {

msg.react('✅')

.then(() => msg.react('❌'))

.then(() =>msg.react('✅'))



let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;



let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });

let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

reaction1.on("collect", r => {

message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));

message.guild.members.forEach(m => {



var bc = new

   Discord.RichEmbed()

   .setColor('RANDOM')

   .setTitle('Broadcast')

   .addField('سيرفر', message.guild.name)

   .addField('المرسل', message.author.username)

   .addField('الرسالة', args)

   .setThumbnail(message.author.avatarURL)

   .setFooter(copy, client.user.avatarURL);

m.send({ embed: bc })

msg.delete();

})

})

reaction2.on("collect", r => {

message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));

msg.delete();

})

})

}

});

client.login(process.env.BOT_TOKEN);
