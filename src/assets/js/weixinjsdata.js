var wxdata={
	access_token:"", //凭证
	jsapi_ticket:"",  //凭证
	ShareAppMessage:{},
	ShareTimeline:{},
 
	//获取jsapi_ticket 
	//url:"https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token="+wxdata.access_token+"&type=jsapi",
	get_jsapi_ticket:function(){
		let that = this;
		$.ajax({
			type:"GET",
            url:"https://api.yuntunwj.com/scs/public/wx/conf",
            data:"",
			success:function(msg){
				if(msg.errcode==0){
					wxdata.jsapi_ticket = msg.ticket;  //需要缓存，存活时间为ticket_expires_in
					that.wx_onload();
				}else{
					console.log(msg);
				}
			},
			error:function(msg){
				console.log("get jsapi_ticket error!!");
			}
		});
	},
	//数据签名
	create_signature:function(noncestr,ticket,timestamp,url){
		var signature="";
		//这里参数的顺序要按照key值ascii 码升序排序
    var e="jsapi_ticket="+ticket+"&noncestr="+noncestr+"&timestamp="+timestamp+"&url="+url
    , s = new jsSHA(e,"TEXT")
    , t = s.getHash("SHA-1", "HEX");
    console.log(e);
    console.log(t);
    return t;
	},
	//自定义创建随机串
	create_noncestr:function(){
		var str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		var val="";
		for(var i=0;i<16;i++){
			val+=str.substr(Math.round((Math.random()*10)),1);
		}
		return val;
	},
	//自定义创建时间戳
	create_timestamp:function(){
		//return new Date().getSeconds();
		return Date.parse(new Date()).toString().substr(0,10);
		
	},
	wx_onload:function(){
		let timestamp = this.create_timestamp();
		let noncestr = this.create_noncestr();
		let url = window.location.href.split('#')[0];
		wx.config({
			debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			appId: 'wx83b6a811c58fa8ee', // 必填，公众号的唯一标识
			timestamp: timestamp, // 必填，生成签名的时间戳
			nonceStr: noncestr, // 必填，生成签名的随机串
			signature: wxdata.create_signature(noncestr,wxdata.jsapi_ticket,timestamp,url),// 必填，签名，见附录1
			jsApiList: [
				'onMenuShareTimeline',
				'onMenuShareAppMessage',
			] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
		wx.ready(() => {
			//分享给好友
			this.init_fx();
		});
	},
	//初始化分享
	init_fx:function(){
		wx.onMenuShareAppMessage({
			title: wxdata.ShareAppMessage.title,
			desc: wxdata.ShareAppMessage.desc,
			link: wxdata.ShareAppMessage.link,
			imgUrl: wxdata.ShareAppMessage.imgUrl,
			trigger: function (res) {
				// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			//   alert('用户点击发送给朋友');
			},
			success: function (res) {
			//   alert('已分享');
			},
			cancel: function (res) {
			//   alert('已取消');
			},
			fail: function (res) {
			//   alert(JSON.stringify(res));
			}
		});
		//分享到朋友圈
		wx.onMenuShareTimeline({
			title: wxdata.ShareTimeline.title,
			link: wxdata.ShareTimeline.link,
			imgUrl: wxdata.ShareTimeline.imgUrl,
			trigger: function (res) {
			// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			//   alert('用户点击分享到朋友圈');
			},
			success: function (res) {
			//   alert('已分享');
			},
			cancel: function (res) {
			//   alert('已取消');
			},
			fail: function (res) {
			//   alert(JSON.stringify(res));
			}
		});
	}
}
$(function(){
	wxdata.get_jsapi_ticket();
});
//微信好友分享
function wx_friend_fx(title,desc,link = window.location.href,imgUrl = "http://www.yuntunwj.com/assets/images/logo.png"){
	wxdata.ShareAppMessage.title = title;
	wxdata.ShareAppMessage.desc = desc;
	wxdata.ShareAppMessage.link = link;
	wxdata.ShareAppMessage.imgUrl = imgUrl;
	wxdata.init_fx();
}
//微信朋友圈分享
function wx_pengyou_fx(title,link = window.location.href,imgUrl = "http://www.yuntunwj.com/assets/images/logo.png"){
	wxdata.ShareTimeline.title = title;
	wxdata.ShareTimeline.link = link;
	wxdata.ShareTimeline.imgUrl = imgUrl;
	wxdata.init_fx();
}