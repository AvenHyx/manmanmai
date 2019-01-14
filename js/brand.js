
//发送ajax渲染排行榜位
//接收id
var url = new UrlSearch();
var id = url.brandTitleId;
console.log(id);
$.ajax({
    url:"http://127.0.0.1:9090/api/getbrand",
    data:{
        brandtitleid:id ||0
    },
    dataType:"json",
    success:function(info){
        console.log(info)
        var htmlStr = template("brandTpl",info);
        $(".brand-list-tit").html(htmlStr);
    }
})