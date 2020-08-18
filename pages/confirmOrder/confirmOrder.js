// pages/confirmOrder/confirmOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image: "/image/banner_1.PNG",
    title: "少儿创意美术课程",
    price: 0.1,
    discount: 112

  },
  formSubmit: function (e) {
    console.log(e.detail.value)
    var name = e.detail.value.name
    var phone = e.detail.value.phone
    console.log(phone)
    var telStr = /^[1][3,4,5,7,8][0-9]{9}$/;
    // var telStr =/^[1][3,4,5,7,8][0-9]{9}$/;
    console.log(telStr.test(phone))
    
    if (telStr.test(phone) == false) {
      console.log('手机号码输入不规范');
      wx.showModal({
        title: '提示',
        content: '手机号码输入不规范',
        success(res) {
        }
      })
    }


    if (name == '' || phone == '') {
      wx.showModal({
        title: '提示',
        content: '请输入完整信息',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
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