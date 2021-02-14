const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "-";

bot.login("ODEwNTkyOTI5MzA2NTA5MzEy.YCl5fg.DyFC3IyYNZ7NlHilucFJZNhCqzE")

bot.on('message', msg => {
    if (msg.content.startsWith( prefix + 'new')) {
       let author = msg.author.username;
       let server = msg.guild;
       console.log(author)
       server.channels.create(author ,{
            parent : "801950416283631626",
            type: 'text',
            permissionOverwrites: [
                {
                    id: msg.guild.id,
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: msg.author.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                },
            ],
       }).then(ch => {
            console.log('TICKET CREATED');
            let embed = new Discord.MessageEmbed()
            ch.send(`:bust_in_silhouette: **Ticket de <@${msg.author.id}>**\n\n:pushpin: **Raison** ${msg.content.slice(prefix.length + 4)}\n\n:tickets: **Votre Ticket à bien été reçu par nos staff**`);
            msg.reply('Vous avez créé un ticket, le support vous contactera via le canal créé.');
       }).catch(e => console.error(e));
       msg.delete();
    }
    else if (msg.content == prefix + 'close' || msg.content == prefix + 'supp') {
        let author = msg.author.username;
        let authorDis = msg.author.discriminator;
        let channel = msg.channel;
    
        if (channel.parent == "801950416283631626") {
            channel.send('Fermeture dans 3 secondes...');
            setTimeout(function() {
                channel.delete('Ticket closed');
                console.log('TICKET CLOSED')
            }, 3000);
            msg.delete();
        }
    
        console.log('TICKET FERMER : ' + channel.name + ' by ' + author + '#' + authorDis);
    
    }
    
});
