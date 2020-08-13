// pages/teacher/teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: [{
      title: "主讲课程",
      isActive: true
    }, {
      title: "老师作品"
    }],
    isAttention: false,
    majorClass: [{
      image: "/image/banner_1.PNG",
      title: "少儿美术创意课程",
      price: 200,
      discount: 300,
      num: 120
    }, {
      image: "/image/banner_1.PNG",
      title: "少儿美术创意课程",
      price: 200,
      discount: 300,
      num: 120
    }, {
      image: "/image/banner_1.PNG",
      title: "少儿美术创意课程",
      price: 200,
      discount: 300,
      num: 120
    }, {
      image: "/image/banner_1.PNG",
      title: "少儿美术创意课程",
      price: 200,
      num: 120
    }],
    culumList: "",
    isMajor: true,
    teacherWork: [{
      image: "/image/banner_1.PNG",
    }, {
      image: "/image/banner_2.PNG",
    }, {
      image: "/image/banner_3.PNG",
    }, {
      image: "/image/banner_4.jfif"
    }, ]
  },
  hanldeItemTab: function (e) {
    const {
      index,
      id
    } = e.currentTarget.dataset;
    console.log({
      index,
      id
    })
    let {
      tabList
    } = this.data;
    tabList.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false)
    if (index == 1) {
      this.setData({
        tabList,
        culumList: this.data.teacherWork,
        isMajor: false
      });
    } else {
      this.setData({
        tabList,
        culumList: this.data.majorClass,
        isMajor: true
      });
    }
  },

  changAttention: function (e) {
    var {
      flg
    } = e.currentTarget.dataset
    console.log(flg)
    let flag = !flg
    this.setData({
      isAttention: flag
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log(this.data.majorClass)
    this.setData({
      culumList: this.data.majorClass
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