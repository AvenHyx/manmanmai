

//发送ajax请求 进行页面渲染
var pageid = 1;
var pages;
function render(page){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getmoneyctrl",
        dataType:"json",
        data:{
            pageid : pageid
        },
        success:function(info){
            console.log(info)
            var htmlStr = template("moneyTpl",info);
            $(".list-pro-tem").html(htmlStr);
            pages = Math.ceil(info.totalCount / info.pagesize);
            console.log(pages);
            $("#selectPage").html(template("selectTpl",{
                pages : pages,
                pageid : pageid
            }))
        }
    })
}
render();
//判断上一页和下一页切换的逻辑
$(".next").on("click",function(){
    if(pageid >= pages){
        return;
    }
    pageid++;
    render()
})
$(".previous").on("click",function(){
    if(pageid == 1){
        return;
    }
    pageid--;
    render()
})
$("#selectPage").on("change",function(){
    pageid = $(this).val();
    render()
})