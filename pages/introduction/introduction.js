// pages/introduction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList:[
    {"imgUrl":"/image/banner_1.PNG"},
    {"imgUrl":"/image/banner_1.PNG"},
    {"imgUrl":"/image/banner_1.PNG"},
  ],

  shopInfo:{
    name:"阜阳市活灵活现颍州区店",
    address:"安徽省阜阳市颍州区京九开发区润龙吉利",
    serviceTime:"12:00-5:00",
    introduction:"深圳瑞宝电脑技术服务有限公司，成立于2008年，我公司为各行各业提供专业的it技术服务，经过3年多的努力与发展，已具一定的规模及实力，现拥有一支技术精湛的it服务团队，以卓越的服务品质、专业安全的技术服务实力，为不同群体的用户提供更高更优质的it服务。",
  },
  bannerConfig: { 
    mode: "aspectFit",
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    color: "#aaaaaa",
    active: "#fff",
    circular: true
  },
  isCollection:true,


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