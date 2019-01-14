

//发送ajax进行页面渲染 发送请求

$.ajax({
    url:"http://127.0.0.1:9090/api/getinlanddiscount",
    dataType:"json",
    type:"get",
    success:function(info){
        console.log(info)
        var htmlStr = template("discountTpl",info);
        $(".inland-discount-list").html(htmlStr);

        //进行懒加载模式
         //用插件写
    }
})