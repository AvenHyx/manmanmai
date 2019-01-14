

//做页面渲染页面

 var url = new UrlSearch(); 
 var id = url.productId;
 var categoryid = url.categoryid;
 console.log(id) 

 $.ajax({
     type:"get",
     url:"http://127.0.0.1:9090/api/getcategorybyid",
     data:{
         categoryid:categoryid
     },
     dataType:"json",
     success:function(info){
         $(".list-title2").html(template("cate_tmp",info))
     }
 })

 //发送ajax 渲染对应的图片页面
 $.ajax({
     url:"http://127.0.0.1:9090/api/getproduct",
     data:{
        productid:id || 0
     },
     dataType:"json",
     success:function(info){
         console.log(info)
         var htmlStr= template("productTpl",info);
        //  console.log(htmlStr)
         $(".large-part").html(htmlStr)
         var proName = info.result[0].productName.split(' ')[0];
         console.log(proName)
       //三级分类的渲染、
         $(".list-title3").html(template("pro_tmp",{list:proName}))
     }
 })

 //发送ajax 渲染对应的网友评论页面

 $.ajax({
     url:"http://127.0.0.1:9090/api/getproductcom",
     dataType:"json",
     data:{
         productid : id || 0
     },
     success:function(info){
         console.log(info)
         var htmlStr = template("commentTpl",info);
         $(".comment-bijia-list ul").html(htmlStr)
     }
 })