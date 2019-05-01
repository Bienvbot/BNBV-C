const Discord = require('discord.js');

const fs = require('fs');

const client = new Discord.Client();

var prefix = "-";

var dat = JSON.parse("{}");







client.on('ready',  () => {

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~Team bc bot~~~~~~~~~~~');

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

console.log(`Logged in as  * [ "  Team #Plus Bot " ] servers! [ " ${client.guilds.size} " ] Users! [ " ${client.users.size} " ]`); 



});



client.on('message', msg => {

  if (msg.content === '-شغال bc') {

    msg.reply('يب انا شغال');

  }

});

client.on('ready', () => {
    console.log('Bot Is Ready Now !');
    client.user.setGame(`#RiyderzBot`,"http://twitch.tv/xkilleryt")
    });



client.on('message', message => {



    var prefix = "-";

          if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'bc')) {

if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

let args = message.content.split(" ").join(" ").slice(2 + prefix.length);

let copy = "#Riyderz.";

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
