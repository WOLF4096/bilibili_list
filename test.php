<?php
header('Content-Type: text/txt; charset=utf-8');
$cxdx = "553402409";
$cxxl = 50;
// $url = "https://api.bilibili.com/x/relation/followers?vmid=$cxdx&pn=1";//粉丝
$url = "https://api.bilibili.com/x/relation/followings?vmid=$cxdx&pn=1";//关注
$result = file_get_contents($url);
$data = json_decode($result, true);
$guan = $data['data']['total'];
for ($w=0;$w<$guan;$w=$w+$cxxl){
    $e++;
    // $url = "https://api.bilibili.com/x/relation/followers?vmid=$cxdx&pn=$e&ps=$cxxl&order=desc&order_type=attention&jsonp=jsonp";//粉丝
    $url = "https://api.bilibili.com/x/relation/followings?vmid=$cxdx&pn=$e&ps=$cxxl&order=desc&order_type=attention&jsonp=jsonp";//关注
    $result = file_get_contents($url);
    $data = json_decode($result, true);
    $coun = count($data['data']['list']);
    for ($i=0;$i<$coun;$i++){
        $r++;
        $mid = $data['data']['list'][$i]['mid'];
        $una = $data['data']['list'][$i]['uname'];
        $sig = $data['data']['list'][$i]['sign'];
        $fac = $data['data']['list'][$i]['face'];
        $sig = str_replace(array("\r\n", "\r", "\n"), "", $sig);
        $val .= $r.",".$mid.",".$una.",".$sig.",".$fac."\n";
    }
}
echo $val."\n";
?>
