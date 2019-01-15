
//发送ajax渲染排行榜位
//接收id
var url = new UrlSearch();
var id = url.brandTitleId;
console.log(id);
$.ajax({
    url:"http://127.0.0.1:9090/api/getbrand",
    data:{
        brandtitleid:id ||0
    },
    dataType:"json",
    success:function(info){
        console.log(info)
        var htmlStr = template("brandTpl",info);
        $(".brand-list-tit").html(htmlStr);
    }
})

$.ajax({
    url:"http://127.0.0.1:9090/api/getbrandproductlist",
    data:{
        brandtitleid: id,
        pageSize:4
    },
    dataType:"json",
    success:function(info){
        console.log(info);
        $("#list-pro-tem").html(template("list_tmp",info));
        var firstId=$("#list-pro-tem li").eq(0).data("id");
        var img = $("#list-pro-tem li:eq(0) img").attr("src");
        console.log(img)
        var text = $("#list-pro-tem li:eq(0) .info a").text();

        $.ajax({
            url:"http://127.0.0.1:9090/api/getproductcom",
            data:{
                productid:firstId
            },
            dataType:"json",
            success:function(info){
                console.log(info)
                if(info){
                    var result = info.result;
                    result.forEach(function(v,i){
                        console.log(v)
                        v.text = text;
                        v.img = img;
                    })
                    $("#coment-info").html(template("con_tmp",info));
                }
            }
        })
    }
})

$.ajax({
    url:"http://127.0.0.1:9090/api/getbrandtitle",
    dataType:"json",
    success:function(info){
        var str = info.result[id].brandTitle;
        var name = str.substring(0,str.length-4);
        console.log(name)
        $(".content").text(name);
    }
})