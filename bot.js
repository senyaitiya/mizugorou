const Botkit = require('botkit');

if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

const controller = Botkit.slackbot({
    debug: false
});

controller.spawn({
    token: process.env.token
}).startRTM(function(err){
    if (err) {
        throw new Error(err);
    }
});

controller.hears(['@Tsuruda', 'つる', 'ツル', 'ミズゴロウ', 'mizugorou'], ['direct_message','direct_mention','mention'], function (bot, message) {

    // bot.reply()で、botに発言をさせます。
    //bot.reply(message, ["ｷｭｴｰ","ｺﾞﾛｰ！","ｺﾞﾛ！","ﾐｽﾞｺﾞﾛｰ","ｷｭｷｭ","ﾐｽﾞｰ" ,"ﾐｽﾞｰｯ","ｺﾞﾘｮｰ","ｺﾞﾘｮｰｯ"]);
    bot.reply(message, "ｺﾞﾘｮｰ");

});