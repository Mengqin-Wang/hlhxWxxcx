// pages/culum/culum.js
import { request } from "../../utils/http.js" 
import snyc from "../../utils/sync.js"
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    tabList:[{
      title:"全部",
      isActive:true
    },
    {
      title:"美术"
    },
    {
      title:"手工"
    },{
      title:"书法"
    }],
    culumList:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      request({url:"wx/api/type",data:{type:0},
      header:{
        'context-type': 'application/json',
        'Authorization':snyc.get('Authorization')}
      }).then((res)=>{
        console.log(res.data.data)
        this.setData({
           culumList:res.data.data
       })
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

  },
  culumDetail:function(e){
    var id=e.currentTarget.dataset.id
    console.log(id)
  //  wx.navigateTo({
  //   url: '/pages/culumdetail/culumdetail?id='+id,
  // })
  },
  hanldeItemTab:function(e){
    const {index,id}=e.currentTarget.dataset;
    console.log({index,id})
    let {tabList}=this.data;
    console.log(tabList)
    tabList.forEach((v,i) => i===index?v.isActive=true:v.isActive=false)
    this.setData({
      tabList
    });

    request({url:"wx/api/type",data:{type:id},
    header:{
      'context-type': 'application/json',
      'Authorization':snyc.get('Authorization')}
    }).then((res)=>{
      console.log(res)
      this.setData({
       culumList:res.data.data
      })
      console.log(res.data.data)
    })
  }
})