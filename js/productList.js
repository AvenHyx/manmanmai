//发送ajax请求 进行页面渲染


var url = new UrlSearch();
var id = url.categoryid;
console.log(url.categoryid)
var pageid= 1;//当前页码
var pages;

$.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getcategorybyid",
    data:{
        categoryid:id || 0
    },
    dataType:"json",
    success:function(info){
        console.log(info)
        var htmlStr = template("proTpl",info);
        console.log(htmlStr)
        $('.product-list-title').html(htmlStr);
    }
})

function render(page){
    $.ajax({
        type:"get",
        url:"http://127.0.0.1:9090/api/getproductlist",
        data:{
           categoryid : id || 0,
           pageid : pageid
        },
        dataType:"json",
        success : function(info){     
            console.log(info)
            pages = Math.ceil(info.totalCount / info.pagesize);//分页的页数
            var htmlStr = template("productTpl",info);
            $(".list-pro-tem").html(htmlStr); 
            $("#selectPage").html(template("selectTpl",{
                pageid:pageid,
                pages:pages
             }))
        }
    })
}
render()

$('.next').on("click",function(){
    if(pageid >= pages ){
        return;
    } //当前页数大于最大页码
      pageid++;
      render()
      
}) 
$(".previous").on("click",function(){
    if(pageid == 1){
        return; //当前页码为1
    }
   pageid--;
   render() 
})

$("#selectPage").on("change",function(){
    pageid = $(this).val();
    render()
})
    

    

