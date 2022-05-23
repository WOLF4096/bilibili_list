uid = 553402409;
num = 50
url = "https://api.bilibili.com/x/relation/followers?vmid=" + uid + "&pn=1";//粉丝
url = "https://api.bilibili.com/x/relation/followings?vmid=" + uid + "&pn=1";//关注

httpRequest = new XMLHttpRequest();
httpRequest.open('GET', url, true);
httpRequest.send();
httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        json = httpRequest.responseText;
        obj = JSON.parse(json);
        zon = obj.data.total;
    }
};
// console.log(zon);
var e = 0;
var n = 0;
for (i = 0; i < zon;i = i + num) {
    e++;
    url = "https://api.bilibili.com/x/relation/followers?vmid=" + uid + "&pn=" + e + "&ps=" + num + "&order=desc&order_type=attention&jsonp=jsonp";//粉丝
    url = "https://api.bilibili.com/x/relation/followings?vmid=" + uid + "&pn=" + e + "&ps=" + num + "&order=desc&order_type=attention&jsonp=jsonp";//关注
    jsonlist(url);
}
//成了，又好像没成
function jsonlist(url){
    httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url, true);
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            json = httpRequest.responseText;
            obj = JSON.parse(json);
            console.log(url);
            zon = obj.data.list.length;
            for (o = 0; o < zon; o++) {
                n++
                uid = obj.data.list[o].mid;
                nam = obj.data.list[o].uname;
                sig = obj.data.list[o].sign.replace(/[\r\n]/g,"");
                fac = obj.data.list[o].face;
                console.log(n + "," + uid + "," + nam + "," + sig + "," + fac);
            }
        }
    };    
}
