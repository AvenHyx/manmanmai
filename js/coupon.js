

//发送 ajax请求 渲染优惠券页面
$.ajax({
    url:"http://127.0.0.1:9090/api/getcoupon",
    dataType:"json",
    success:function(info){
        console.log(info)
        var htmlStr = template("couponTpl",info);
        $(".coupon-title ul").html(htmlStr);
    }
})