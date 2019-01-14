
//发送ajax请求，渲染品牌排行
$.ajax({
    url:"http://127.0.0.1:9090/api/getbrandtitle",
    dataType:"json",
    type:"get",
    success:function(info){
        console.log(info)
        var htmlStr = template("brandTitTpl",info);
        $(".brandtitle-con").html(htmlStr);
    }
})