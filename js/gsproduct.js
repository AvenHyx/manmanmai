
//点击切换类
//发送ajax请求 进行页面渲染

//先遍历nav-top里所有的li  并给他们注册点击事件，
// $(".pro-nav-l li").each(function(i,v){
//     $(this).on("click",function(){
//         $(".pro-show").toggleClass("show");
//         console.log(i)//获取索引
   
//     })
// })
// 需求1：获取凑单品的店铺的信息 并渲染到店铺的下拉列表
// 需求2：获取凑单品的区域的信息 并渲染到区域的下拉列表
// 需求3：根据店铺的id和区域的id获取该店铺该区域的商品列表信息
  

var areaid =0;
var shopid =0;
   
     //获取下拉列表（例如：京东天猫/ 华南华北/全部价格 等）
        //无需传参数
        function select(){
            $.ajax({
                url:"http://127.0.0.1:9090/api/getgsshop",
                dataType:"json",
                type:"get",
                success:function(info){
                    console.log(info)
                    var htmlStr = template("mallTpl",info);
                    $(".pro-show ul").html(htmlStr)

                }
            });
        }
        select();
 
        //获取城市的区域。(例如华南华北等)
        //无需传参数
        function area(){
            $.ajax({
                url:"http://127.0.0.1:9090/api/getgsshoparea",
                dataType:"json",
                type:"get",
                success:function(info){
                    console.log(info)
                var htmlStr = template("areaTpl",info);
                $(".area ul").html(htmlStr);

                }
            }) 
        }
        area();  
        
        $(".pro-show").on("click","li",function(){
            $(this).addClass("on");
            $(this).siblings().removeClass("on");
            $(this).parents().find("pro-show").removeClass("show")
            shopid = $(this).children().data("id");
            console.log(shopid); 
             totalSj(shopid,areaid)
        })

        $(".area").on("click","li",function(){
            $(this).addClass("on");
            $(this).siblings().removeClass("on");
            $(this).parents().find("area").removeClass("show")
            areaid = $(this).children().data("id");
            console.log(areaid);
            totalSj(shopid,areaid)
          })
    //获取下拉城市和商铺 对应的产品信息，
      //需要传入店铺id 和区域id
      function totalSj(shopid,areaid){
        $.ajax({
            url:"http://127.0.0.1:9090/api/getgsproduct",
            dataType:"json",
            type:"get",
            data:{
                shopid:shopid,
                areaid:areaid 
            },
            success:function(info){
                console.log(info)
                var htmlStr = template("prolistTpl",info);
                console.log(htmlStr)
                $(".product-content ul").html(htmlStr)
                console.log(shopid)
                console.log(areaid)
            }
        }) 
      }

      totalSj(shopid,areaid)  

//显示事件3切换显示类
    // $(".shopname3").on("click",function(){
    //     $(".select-price").toggleClass("show");  
    //     $(this).siblings().removeClass("show")
    // })
    // $(".select-price").on("click",function(){
    //   $(this).toggleClass("show")
    //   $(this).toggleClass("on")
    // })
    // //显示事件 价格
    // $(".select-price li").on("click",function(){
    //     $(this).addClass("on")
    // })
//显示事件1切换显示类    
//     $(".shopname1").on("click",function(){                      
//         $(".pro-show").toggleClass("show");
//     })
// //显示事件2 切换显示类    
//     $(".shopname2").on("click",function(){
//         $(".area").toggleClass("show");

//     })


      $('.nav-top li').on('click',function() {
          console.log(this);
          $(this).siblings().find('div').removeClass('show');
          $(this).find('div').toggleClass('show');
      })




