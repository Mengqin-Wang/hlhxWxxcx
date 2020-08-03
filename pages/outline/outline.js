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
  },
 /**
   * 轮播滑动时，获取当前的轮播id
   */
  swiperChange(e) {
    const that = this;
    that.setData({
      swiperIndex: e.detail.current,
      share:e.detail.current,
    })
  },
  outlineDetail(e) {
    var id=e.currentTarget.dataset.id;
    console.log(e)
    console.log(id)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {     
    request({url:"wx/api/roughAll"}).then((res)=>{
      console.log(res.data.data)
      this.setData({
        swiperImgUrls:res.data.data
     })
    });
  },

  detailItem:function(e){
    var id=e.currentTarget.dataset.id
    console.log(id)
    // wx.navigateTo({
    //   url: '/pages/dgDetail/dgDetail?id='+id,
    // }) 
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