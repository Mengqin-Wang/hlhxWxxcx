// pages/unpaid/unpaid.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:"待支付",
    typeid:2,
    detail:"订单未支付，点击继续支付既可完成订单",
    name:"庞大开心",
    phone:"12312378456",
    rank:"2级",
    image:"/image/banner_2.PNG",
    classTitle:"少儿创意美术课程",
    price:12,
    time:"2020-1-1",
    shouldPay:12,
    code:"1212323412311341478",
    startTime:"2019-3-1",
    payTime:""
  },
  cancelOrder: function (e) {
    wx.showModal({
      title: '提示',
      content: '您确定要取消该订单吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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