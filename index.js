var request= require("request");
var cheerio = require("cheerio");
var split = require("split-string");
var url= "https://www.cricbuzz.com/";
request(url,function(err,response,html){
    return gethtml(html)
})
function gethtml(html){
    var $ = cheerio.load(html);
    var div =$("div");
    var element = $(div).find("nav.cb-nav>a.cb-hm-mnu-itm").attr('title')
    console.log(element)
}