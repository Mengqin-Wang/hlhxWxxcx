// pages/outline/outline.js
import { request } from "../../utils/http.js" 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperImgUrls: {},
    swiperIndex: 0,
    share:0,
    title:""
  },
 /**
   * 轮播滑动时，获取当前的轮播id
   */
  swiperChange(e) {
    const that = this;
    let id=e.detail.current;
    let name="绘画考级大纲";
    if (that.data.swiperImgUrls[id].detail.indexOf("绘画")>0){
      name="绘画考级大纲"
    }else{
      name="书法考级大纲"
    }
    that.setData({
      swiperIndex: e.detail.current,
      share: e.detail.current,
      title:name
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {     
    request({url:"wx/api/roughAll"}).then((res)=>{
      let name=""
      console.log(res.data.data)
      if (res.data.data[0].detail.indexOf("绘画")>0){
        name="绘画考级大纲"
      }else{
        name="书法考级大纲"
      }

      this.setData({
        swiperImgUrls:res.data.data,
        title:name
     })
    });
  },

  detailItem:function(e){
    var id=e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({
      url: '/pages/outlineDetail/outlineDetail?id='+id,
    }) 
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '活灵活现',
      path: '/pages/outline/outline',
      success: function (res) {
        console.log('成功', res)
      }
    }
  }
})