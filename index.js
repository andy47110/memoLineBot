var linebot = require('linebot');
var express = require('expresss');

var bot = linebot({
    channelId: channel Id,
    channelSecret: channel Secret,
    channelAccessToken: channel Access Toke
});

bot.on('message', function(event){
     console.log(event);
})

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });