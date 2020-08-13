// pages/myregistration/myregistration.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List:[{
        image:"/image/banner_1.PNG",
        title:"2019年度文化部艺术发展中心美术考级报考简章",
        date:"2019-3-2",
        type:1   
        //状态1表示已报名，状态2表示活动结束，状态3表示审核中
    },{
      image:"/image/banner_1.PNG",
      title:"2019年度文化部艺术发展中心美术考级报考简章",
      date:"2019-3-2",
      type:3   
      //状态1表示已报名，状态2表示活动结束，状态3表示审核中
    },{
      image:"/image/banner_1.PNG",
      title:"2019年度文化部艺术发展中心美术考级报考简章",
      date:"2019-3-2",
      type:1   
      //状态1表示已报名，状态2表示活动结束，状态3表示审核中
    },{
      image:"/image/banner_1.PNG",
      title:"2019年度文化部艺术发展中心美术考级报考简章",
      date:"2019-3-2",
      type:2  
      //状态1表示已报名，状态2表示活动结束，状态3表示审核中
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindType: function (e) {
    console.log(e)
    var {index,id}=e.currentTarget.dataset;
    console.log(index,id)
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