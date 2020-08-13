// pages/myinvitation2/myinvitation2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:0,
    index:0,
    List:"",
    person:[{
      image:"/image/banner_1.PNG",
      name:"123123",
      date:"2020-1-21",
      num:"+50"
    },{
      image:"/image/banner_1.PNG",
      name:"123123",
      date:"2020-1-21",
      num:"+50"
    },{
      image:"/image/banner_1.PNG",
      name:"123123",
      date:"2020-1-21",
      num:"+50"
    },{
      image:"/image/banner_1.PNG",
      name:"123123",
      date:"2020-1-21",
      num:"+50"
    },{
      image:"/image/banner_1.PNG",
      name:"123123",
      date:"2020-1-21",
      num:"+50"
    }],
    buy:[{
      image:"/image/banner_1.PNG",
      name:"庞大开心购买《创意美术课程》",
      date:"2020-1-21",
      num:"+50"
    },{
      image:"/image/banner_1.PNG",
      name:"庞大开心购买《创意美术课程》",
      date:"2020-1-21",
      num:"+50"
    },{
      image:"/image/banner_1.PNG",
      name:"庞大开心购买《创意美术课程》",
      date:"2020-1-21",
      num:"+50"
    },{
      image:"/image/banner_1.PNG",
      name:"庞大开心购买《创意美术课程》",
      date:"2020-1-21",
      num:"+50"
    },{
      image:"/image/banner_1.PNG",
      name:"庞大开心购买《创意美术课程》",
      date:"2020-1-21",
      num:"+50"
    },{
      image:"/image/banner_1.PNG",
      name:"庞大开心购买《创意美术课程》",
      date:"2020-1-21",
      num:"+50"
    },{
      image:"/image/banner_1.PNG",
      name:"庞大开心购买《创意美术课程》",
      date:"2020-1-21",
      num:"+50"
    }]
  },
  exchange:function(e){
    console.log(this.data.tab)
    console.log("id:",e.currentTarget.dataset.id,"   index: ",e.currentTarget.dataset.index)
    if((e.currentTarget.dataset.index) != this.data.tab){
      var tab=(this.data.tab+1)%2
      var person=this.data.person; 
      this.setData({
        tab,
        // index:0
        List:person
      })
    }
  },

  exchange2:function (e){
    console.log(this.data.tab)
    console.log("id:",e.currentTarget.dataset.id,"   index: ",e.currentTarget.dataset.index)
    if((e.currentTarget.dataset.index) == this.data.tab){
      var buy=this.data.buy
      var tab=(this.data.tab+1)%2
      this.setData({
        tab,
        List:buy
        // index:0
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var person=this.data.person;
    this.setData({
      // index:0
      List:person
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