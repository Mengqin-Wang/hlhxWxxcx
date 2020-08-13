// pages/form2/form2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectArray: [{
      "id": "1",
      "text": "1类"
    }, {
      "id": "2",
      "text": "2类"
    }],
    name: "",
    profession: "",
    rank: "",
    idCard: "",
    textId: "",
    phone: "",
    id: 0
  },
  getDate: function (e) {
    this.setData({
      id: e.detail.id
    })
  },
  formSubmit: function (e) {
    let result = e.detail.value;
    if (result.name == "" || result.profession == "" || result.rank == "" || result.idCard == "" || result.textId == "" || result.phone == "" || result.id == 0) {
      wx.showModal({
        title: '提示',
        content: '请输入完整信息'
      })
    } else {
      result.id = this.data.id
      console.log('form发生了submit事件，携带数据为：', result);
      wx.navigateTo({
        url: '/pages/scoreInquiryResult/scoreInquiryResult',
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