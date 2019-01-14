
var url = new UrlSearch();
var id = url.couponId;
console.log(id)
//发送ajax请求渲染当前优惠券页面
$.ajax({
    url:"http://127.0.0.1:9090/api/getcouponproduct",
    dataType:"json",
    data:{
        couponid:id || 0
    },
    success:function(info){
        console.log(info);
        var htmlStr = template("couponTpl",info);
        $(".coupon-list ul").html(htmlStr);
    }
})