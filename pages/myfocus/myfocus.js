// pages/myfocus/myfocus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List:[{
      name:"何欢",
      image:"/image/banner_1.PNG",
      teach:"中级钢琴",
      myFocus:0,
      id:1
    },{
      name:"何欢",
      image:"/image/banner_1.PNG",
      teach:"中级钢琴",
      myFocus:0,
      id:2
    },{
      name:"何欢",
      image:"/image/banner_1.PNG",
      teach:"中级钢琴",
      myFocus:0,
      id:3
    },{
      name:"何欢",
      image:"/image/banner_1.PNG",
      teach:"中级钢琴",
      myFocus:0,
      id:4
    },{
      name:"何欢",
      image:"/image/banner_1.PNG",
      teach:"中级钢琴",
      myFocus:0,
      id:5
    }]

  },
  changeFocu:function (e) {
    var {id,index}=e.currentTarget.dataset;
    let {List}=this.data
    List.forEach(function (v, i) {
      if(i==index){
        v.myFocus= (v.myFocus+1)%2
      }
      return v.myFocus
    });
    this.setData({
      List
    });
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