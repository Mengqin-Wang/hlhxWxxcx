// pages/exchangeMall/exchangeMall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList:[{
      name:"全部",id:0,isActive:true
    },{
      name:"考级报名",id:1
    },{
      name:"赛事活动",id:2
    }],
    List:[{
      image:"/image/banner_1.PNG",
      title:"2019年度文化部艺术发展中术考级报考简章",
      date:"2020-06-25"
    },{
      image:"/image/banner_1.PNG",
      title:"2019年度文化部艺术发展中术考级报考简章",
      date:"2020-06-25"
    },{
      image:"/image/banner_1.PNG",
      title:"2019年度文化部艺术发展中术考级报考简章",
      date:"2020-06-25"
    },{
      image:"/image/banner_1.PNG",
      title:"2019年度文化部艺术发展中术考级报考简章",
      date:"2020-06-25"
    }]

  },

  detail:function(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/activityRegistration/activityRegistration',
    })
  },
  SignUp:function(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/registerTestFirst/registerTestFirst',
    })
  },

  headerItemTap:function(e){
    console.log(e.currentTarget.dataset)
    var {id}=e.currentTarget.dataset;
    let {tabList}=this.data;
    tabList.forEach((v,i)=>{
      if(v.id==id){
        v.isActive=true
      }else{
        v.isActive=false
      }
    })
    this.setData({
      tabList
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