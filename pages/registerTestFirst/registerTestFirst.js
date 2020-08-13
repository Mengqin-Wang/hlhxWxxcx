// pages/registerTestFirst/registerTestFirst.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    idCard:"",
    phone:"",
    major:"",
    level:""
  },
  formSubmit:function(e){
    var name=e.detail.value.name;
    var idCard=e.detail.value.idCard;
    var phone=e.detail.value.phone;
    var major=e.detail.value.major;
    var level=e.detail.value.level;
    if (name=="" || idCard=="" || phone=="" || major=="" || level==""){
      wx.showModal({
        title: '提示',
        content: '请输入完整信息'
      })
    }else{
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
      wx.navigateTo({
        url: '/pages/registerTestSecond/registerTestSecond?major='+major+'&level='+level,
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