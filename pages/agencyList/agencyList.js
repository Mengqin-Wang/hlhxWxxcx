// pages/agencyList/agencyList.js
import {request}  from "../../utils/http.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
 getHlhxServiceId:function(params) {
  var that = this;
      //获取用户手机的经纬度
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          console.log(res)
          var longitude = res.longitude.toString()
          var latitude = res.latitude.toString()
          request({url:"wx/organ/nextOrgan",data:{longitude:longitude,latitude,latitude}}).then((res)=>{
            that.setData({
               list:res.data.data
            })
          }) 
        }
      })
  //      request({url:"hlhx/coordinateList"}).then((res)=>{
         
  //      })
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.getHlhxServiceId();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})