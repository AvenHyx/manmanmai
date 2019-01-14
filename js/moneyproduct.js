

//发送ajax获取当前页面信息
var url = new UrlSearch();
var productid = url.productid;
// console.log(id)
$.ajax({
    url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
    dataType:"json",
    type:"get",
    data:{
        productid:productid || 0
    },
    success:function(info){
        console.log(info)
        var htmlStr = template("discountProTpl",info);
        $(".container").html(htmlStr)
    }
})