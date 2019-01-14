

// $(".bcj-show").each(function(i,v){
//     console.log(i,v)
// })





//iScroll区域滚动
window.addEventListener("load",function(){
    new IScroll('#wrapper');
    new IScroll('#wrapper',{
        scrollX:true,
        scrollY:false
    });
})

//渲染底下主体内容
function render(id){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
        data:{
            titleid : id || 0
        },
        dataType:"json",
        success:function(info){
            // console.log(info)
            var htmlStr = template("contentTpl",info);
            $(".bcj-content").html(htmlStr);
        }
    })
}
render()

//发送ajax请求 进行页面渲染
$.ajax({
    url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
    type:"get",
    dataType:"json",
    success:function(info){
        console.log(info)
        var htmlStr = template("titleTpl",info);
        $(".ul-wrapper").html(htmlStr);
        var ulWidth = 0;
        $(".bcj-show").each(function(i,v){
            var liWidth = $(this).width();
            ulWidth+= liWidth; 
        })
        $(".ul-wrapper").width(ulWidth);
        $(".ul-wrapper").on("click",".bcj-show",function(){
             $('.bcj-show').children().removeClass("active");
            $(this).children().addClass("active");
            var id = $(this).data("id");
            render(id);
        })
    }
})




