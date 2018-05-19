/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 Botkit Basic Template for Heroku

 Author: okajax (https://github.com/okajax)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

//=========================================================
// Botの準備
//=========================================================

if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

var Botkit = require('botkit');
var os = require('os');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: process.env.token
}).startRTM();



//=========================================================
// 基本的な受け答え
//=========================================================

// 以下がBotkitの基本形です。
// controller.hears()で、マッチした単語に応じて処理を実行します。

// 第一引数 ['ほげ','ふが'] の部分には、マッチさせたい単語を入れます。正規表現も使えます。
// 第二引数 'direct_message,direct_mention' の部分には、反応するパターンを入れます。

//  [反応パターン一覧]
//    direct_message: ダイレクトメッセージに反応します
//    direct_mention: 先頭に@付きで発言されたメッセージに反応します
//    mention: @付きで言及されたメッセージに反応します
//    ambient: どんなメッセージタイプにも反応します

controller.hears(['@Tsuruda', 'つる', 'ツル', 'ミズゴロウ', 'mizugorou'], 'direct_message,direct_mention,mention', function (bot, message) {

    // bot.reply()で、botに発言をさせます。
    bot.reply(message, ["ｷｭｴｰ","ｺﾞﾛｰ！","ｺﾞﾛ！","ﾐｽﾞｺﾞﾛｰ","ｷｭｷｭ","ﾐｽﾞｰ" ,"ﾐｽﾞｰｯ","ｺﾞﾘｮｰ","ｺﾞﾘｮｰｯ"]);

});


//=========================================================
// 絵文字リアクション
//=========================================================

controller.hears(['@Tsuruda', 'つる', 'ツル', 'ミズゴロウ', 'mizugorou'], 'direct_message,direct_mention,mention,ambient', function (bot, message) {

    bot.reply(message, ["ｷｭｴｰ","ｺﾞﾛｰ！","ｺﾞﾛ！","ﾐｽﾞｺﾞﾛｰ","ｷｭｷｭ","ﾐｽﾞｰ" ,"ﾐｽﾞｰｯ","ｺﾞﾘｮｰ","ｺﾞﾘｮｰｯ"]);

    //絵文字リアクションを追加
    bot.api.reactions.add({
        timestamp: message.ts,
        channel: message.channel,
        name: 'mizugorou', // ここで絵文字名を指定します (例 : smilely, muscle など)
    }, function (err, res) {
        if (err) {
            bot.botkit.log('Failed to add emoji reaction :(', err); // エラーが出たとき用の出力
        }
    });

});
