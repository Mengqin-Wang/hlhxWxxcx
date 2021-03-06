import { request } from "../../utils/http.js" 
import snyc from "../../utils/sync.js"
Page({
  data: {
      //判断小程序的API，回调，参数，组件等是否在当前版本可用。
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      isHide: false,
      nikename:"",
      nike_name_url:"",
      "three_function":[{
          image:"/image/mineAll.png",
          name:"全部"
       },{
        image:"/image/mineUnpaid.png",
        name:"待支付"
       },{
        image:"/image/mineFinish.png",
        name:"已完成"
       }],

      "personal_function" :[{
        fun_url:"/pages/myregistration/myregistration",
        name:"我的报名",
        imgUrl:"/image/Myregistration.png"
    },{
        fun_url:"/pages/myfocus/myfocus",
        name:"我的关注",
        imgUrl:"/image/mineFocus.png"
  },{
        fun_url:"/pages/myfavorite/myfavorite",
        name:"我的收藏",
        imgUrl:"/image/Myregistration.png"
  },{
        fun_url:"/pages/myinvitation/myinvitation",
        name:"我的邀请",
        imgUrl:"/image/mineInvitation.png"
  },{
        fun_url:"/pages/detail/detail",
        name:"意见反馈",
        imgUrl:"/image/mineFeedback.png"
}]
  },

  chooseFun:function (e){
    var that = this
    console.log(e)//打印数据
    console.log(e.currentTarget.dataset.id)//打印数据
    var id = e.currentTarget.dataset.id

    console.log(this.data.three_function)

     wx.navigateTo({
      url: '/pages/order/order?name=' + that.data.three_function[id].name
      // success: function (res) { },
      // fail: function (res) { },
      // complete: function (res) { },
    })
    
  },

  onLoad: function() {
      var that = this;
      wx.login({
      success: function(res) {
        var code = res.code;
        if (code) {
          
          console.log('获取用户登录凭证：' + code);
        } else {
          console.log('获取用户登录态失败：' + res.errMsg);
        }
      }
    });

      // 查看是否授权
      wx.getSetting({
          success: function(res) {
              if (res.authSetting['scope.userInfo']) {
                  wx.getUserInfo({
                      success: function(res) {
                          // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
                          // 根据自己的需求有其他操作再补充
                          // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
                          wx.login({
                              success: res => {
                                  // 获取到用户的 code 之后：res.code
                                  console.log("用户的code:" + res.code);
                                  
                                  console.log(res)
                                 
                                  // 可以传给后台，再经过解析获取用户的 openid
                                  // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
                                //   wx.request({
                                //       // 自行补上自己的 APPID 和 SECRET
                                //     url: 'https://api.weixin.qq.com/sns/jscode2session?appid={{自己的appid}}&secret={{自己的secret}}&js_code=' + res.code + '&grant_type=authorization_code',
                                //       success: res => {
                                //           // 获取到用户的 openid
                                //           console.log(res)
                                //           console.log("用户的openid:" + res.data.openid)
                                //           console.log("[session_key]", res.data.session_key)
                                //       }
                                //   });
// <<<<<<< HEAD
// =======
//                                   wx.request({
//                                       // 自行补上自己的 APPID 和 SECRET
//                                       url: 'https://api.weixin.qq.com/sns/jscode2session?appid={{自己的appid}}&secret={{自己的密码}}&js_code=' + res.code + '&grant_type=authorization_code',
//                                       success: res => {
//                                           // 获取到用户的 openid
//                                           console.log(res)
//                                           console.log("用户的openid:" + res.data.openid)
//                                           console.log("[session_key]", res.data.session_key)
//                                       }
//                                   });

// >>>>>>> e0514b5b7992ca36c9a75de5d74b6063b6c59a5f
                              }
                          });
                      }
                  });
              } else {
                  // 用户没有授权
                  // 改变 isHide 的值，显示授权页面
                  that.setData({
                      isHide: true
                  });
              }
          }
      });
  },
  onShareAppMessage: function() {
    if (res.from === 'button') {}
    return {
      title: '转发',
      path: '/pages/index/index',
      success: function(res) {console.log(1)}
    }
  },

  bindGetUserInfo: function(e) {
      if (e.detail.userInfo) {
          //用户按了允许授权按钮
          var that = this;
          // 获取到用户的信息了，打印到控制台上看下
          console.log("用户的信息如下：");
          console.log(e);
          that.setData({
            nikename:e.detail.userInfo.nickName,
            nike_name_url:e.detail.userInfo.avatarUrl
          });
          console.log(e.detail.userInfo.avatarUrl);
          //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
          that.setData({
              isHide: false
          });
      } else {
          //用户按了拒绝按钮
          wx.showModal({
              title: '警告',
              content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
              showCancel: false,
              confirmText: '返回授权',
              success: function(res) {
                  // 用户没有授权成功，不需要改变 isHide 的值
                  if (res.confirm) {
                      console.log('用户点击了“返回授权”');
                  }
              }
          });
      }
  }
})
