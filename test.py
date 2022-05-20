import requests
import json

cxdx = "319532"
cxxl = 50
url = "https://api.bilibili.com/x/relation/followers?vmid="+cxdx+"&pn=1"#粉丝
# url = "https://api.bilibili.com/x/relation/followings?vmid="+cxdx+"&pn=1"#关注
getjson = requests.get(url).text
coun = json.loads(getjson)
coun = coun['data']['total']
count = 0
e = 0
o = 0
while (count < coun):
    count = count + cxxl
    e=e+1
    url = "https://api.bilibili.com/x/relation/followers?vmid="+cxdx+"&pn="+str(e)+"&ps="+str(cxxl)+"&order=desc&order_type=attention&jsonp=jsonp"#粉丝
    # url = "https://api.bilibili.com/x/relation/followings?vmid="+cxdx+"&pn="+str(e)+"&ps="+str(cxxl)+"&order=desc&order_type=attention&jsonp=jsonp"#关注
    getjson = requests.get(url).text
    data = json.loads(getjson)
    zong = len(data['data']['list'])
    i = -1
    print(url)
    while (i < zong-1):
        i = i + 1
        o = o + 1
        mid = data['data']['list'][i]['mid']
        una = data['data']['list'][i]['uname']
        sig = data['data']['list'][i]['sign'].replace("\n","")
        fac = data['data']['list'][i]['face']
        print(str(o)+","+str(mid)+","+una+","+sig+","+fac)
