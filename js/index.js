
var flag = true;
//ajax发送请求,渲染导航
$.ajax({
    url:"http://127.0.0.1:9090/api/getindexmenu",
    dataType:"json",
    success: function(info){
        console.log(info)
        var htmlStr = template("menuTpl",info);
        $(".template-list").html(htmlStr)
        //给更多注册点击事件
        var more = $('.template-list li[data-id="7"]');
        var id = $(".template-list li[data-id]");
     
         more.on("click",function(){
           if(flag){
               $(".template-list li[data-type='1']").slideDown();
           }else{
               $(".template-list li[data-type ='1']").slideUp()
           }
           flag = !flag
         })
    }
})

//产品清单类的渲染
$.ajax({
    url:"http://127.0.0.1:9090/api/getmoneyctrl",
    dataType:"json",
    success:function(info){
        console.log(info)
        var htmlStr = template("listTpl",info);
        // console.log(htmlStr);
        $(".list-pro-tem").html(htmlStr)
    }
})

//返回顶部
$(".icon_top").on("click",function(){
    $(window).scrollTop("0");
})