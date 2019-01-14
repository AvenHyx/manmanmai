//模板渲染分类数据列表

$.ajax({
    url:"http://127.0.0.1:9090/api/getcategorytitle",
    dataType:"json",
    success:function(info){
        console.log(info)
        var htmlStr = template("catetitTpl",info);
        // console.log(htmlStr)
        $(".cate-list-title").html(htmlStr);
        //给a注册点击事件
        $(".cate-list-title ").on("click",".title",function(){
            var id = $(this).data("id");  
            console.log(id)  
            var content = $(this).parent().find('.cate-list-content'); 
            content.toggleClass("move") 
         $.ajax({
            url:"http://127.0.0.1:9090/api/getcategory",
            dataType:"json",
            data:{
                titleid:id
            },
            success:function(info){
                console.log(info)
                var htmlStr = template("catelistTpl",info);
                console.log(htmlStr)
                content.html(htmlStr)
            }
          })
          
        })

    }
})

