// pages/registerTestSecond/registerTestSecond.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    major:"",
    level:"",
    fee:20,
    skipLevel:0,
    isSkip:true,
    //isSkip是否存在跨级费，true存在，false不存在
  },
  next:function(e){
    wx.navigateTo({
      url: '/pages/registrationSuccess/registrationSuccess',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      major:options.major,
      level:options.level
    })
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