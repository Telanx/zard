var express = require('express')
var request = require('request')
var app = express();
var  http = require('http');

var invoke = function (params, encSecKey, callback) {
    var reqData="params=" +params+
        "&encSecKey="+ encSecKey;
 
var post_options = {
    host: 'music.163.com',
    path: '/weapi/song/enhance/player/url?csrf_token=',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': reqData.length
    }
  };
 
  var post_req = http.request(post_options, function (response) {
    var responseText=[];
    var size = 0;
    response.on('data', function (data) {
      responseText.push(data);
      
      size+=data.length;
    });
    response.on('end', function () {
      // Buffer 是node.js 自带的库，直接使用
      responseText = Buffer.concat(responseText,size);
      console.log('返回结果'+responseText.toString())
      callback(responseText);
    });
  });
 
  // post the data
  post_req.write(reqData);
  post_req.end();       
}

app.get('/', function(req, res) {
    var netId = req.query.net_id;
    var encText = req.query.encText;
    var encSecKey = req.query.encSecKey;
    var data = {
        encText: encText,
        encSecKey: encSecKey
    };
   
    // 获取网易云歌曲的信息
    var neturl = '//music.163.com/weapi/song/enhance/player/url';
    invoke(data.encText, encSecKey, function(res2) {
        res.end(JSON.stringify(res2));
    })

})
app.listen(3000, function(){
    console.log('express start @localhost');
})