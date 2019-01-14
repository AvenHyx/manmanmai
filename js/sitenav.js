

//发送ajax请求 去渲染导航页面

$.ajax({
    url:"http://127.0.0.1:9090/api/getsitenav",
    dataType:"json",
    success:function(info){
        console.log(info)
        var htmlStr = template("sitenavTpl",info);
        $(".sitenav-center").html(htmlStr);
    }
})