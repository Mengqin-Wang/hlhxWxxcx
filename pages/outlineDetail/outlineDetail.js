// pages/outlineDetail/outlineDetail.js
import { request } from "../../utils/http.js" 
import snyc from "../../utils/sync.js"
var WxParse = require('../../wxParse/wxParse.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
     detail:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id=options.id
    request({url:"wx/api/roughOne",data:{id:id}}).then((res)=>{
      var article=res.data.data.detail;
      WxParse.wxParse('article', 'html', article, this, 5);
      this.setData({
        detail:res.data.data.detail
      })
      console.log(typeof(res.data.data.detail))
      if (res.data.data.detail.indexOf("绘画")>0){
        wx.setNavigationBarTitle({
          title: "绘画考级大纲"
        })
      }
      else{
        wx.setNavigationBarTitle({
          title: "书法考级大纲"
        })
      }
    })
  },
})