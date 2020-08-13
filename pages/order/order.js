// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [{
      id: 0,
      name: "全部",
      isActive: false
    }, {
      id: 1,
      name: "待支付",
      isActive: false
    }, {
      id: 2,
      name: "已完成",
      isActive: false
    }],
    List: "",
    all: "",
    unpaid: [{
      date: "2020-1-1",
      type: "待支付",
      unpay: true,
      image: "/image/banner_2.PNG",
      title: "少儿创意美术课程",
      price: "0.01",
      discount: "999",
    }, {
      date: "2020-1-1",
      type: "待支付",
      unpay: true,
      image: "/image/banner_2.PNG",
      title: "少儿创意美术课程",
      price: "0.01",
      discount: "999",
    }, {
      date: "2020-1-1",
      type: "待支付",
      unpay: true,
      image: "/image/banner_2.PNG",
      title: "少儿创意美术课程",
      price: "0.01",
      discount: "999",
    }, {
      date: "2020-1-1",
      type: "待支付",
      unpay: true,
      image: "/image/banner_2.PNG",
      title: "少儿创意美术课程",
      price: "0.01",
      discount: "999",
    }],

    finish: [{
      date: "2020-3-1",
      type: "已完成",
      image: "/image/banner_2.PNG",
      title: "少儿创意美术课程",
      price: "0.01",
      discount: "999",
    }, {
      date: "2020-1-1",
      type: "已完成",
      image: "/image/banner_2.PNG",
      title: "少儿创意美术课程",
      price: "0.01",
      discount: "999",
    }, {
      date: "2020-1-1",
      type: "已完成",
      image: "/image/banner_2.PNG",
      title: "少儿创意美术课程",
      price: "0.01",
      discount: "999",
    }, {
      date: "2020-1-1",
      type: "已完成",
      image: "/image/banner_2.PNG",
      title: "少儿创意美术课程",
      price: "0.01",
      discount: "999",
    }]
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
    console.log(options)
    var unpaid = this.data.unpaid;
    var finish = this.data.finish;
    var all = unpaid;
    all = all.concat(finish);
    this.setData({
      all: all
    });
    if (options.name == "全部") {
      let {
        tabList
      } = this.data;
      tabList.forEach((v, i) => options.name === v.name ? v.isActive = true : v.isActive = false)
      this.setData({
        tabList,
        List: all
      });
    } else if (options.name == "待支付") {
      let {
        tabList
      } = this.data;
      tabList.forEach((v, i) => options.name === v.name ? v.isActive = true : v.isActive = false)
      this.setData({
        tabList,
        List: unpaid
      });
    } else if (options.name == "已完成") {
      let {
        tabList
      } = this.data;
      tabList.forEach((v, i) => options.name === v.name ? v.isActive = true : v.isActive = false)
      this.setData({
        tabList,
        List: finish
      });
    }
  },

  hanldeItemTab: function (e) {
    const {
      index,
      id
    } = e.currentTarget.dataset;
    let {
      tabList
    } = this.data;
    var unpaid = this.data.unpaid;
    var finish = this.data.finish;
    var all = this.data.all;
    tabList.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false)
    this.setData({
      tabList,
    });
    if (index == 0) {
      this.setData({
        List: all,
      });
    } else if (index == 1) {
      this.setData({
        List: unpaid,
      });
    } else if (index == 2) {
      this.setData({
        List: finish,
      });
    }

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