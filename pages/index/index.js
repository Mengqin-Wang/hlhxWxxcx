//index.j
//引入http.js
import { request } from "../../utils/http.js" 
import snyc from "../../utils/sync.js"

//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    interval: 5000,
    duration: 500,
    rotationList:"",//轮播图集合
    functionList:"",//功能列表集合
    dynamicList:"",//动态集合
    teacherList:"",//考级风采列表
    serviceList:[
      {name:"成绩查询",color:"#00D6B9",url:"/pages/short/short"},
      {name:"考级大纲",color:"#00B9F2",url:"/pages/outline/outline"},
      {name:"地图导航",color:"#FE9600",url:"/pages/map/map"},
      {name:"机构简介",color:"#8965FD",url:"/pages/jg/jg"},
    ]//自助服务集合
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //这里是机构列表页传过来的机构id
    var organId = options.organId;
    if(!organId){
      organId = ''
    }
    //这里是分享页面传过来的推荐人id
    var userId = options.userId;
    if(!userId){
      userId=''
    }
    wx.login({
         complete: (res) => {
           var code=res.code
           console.log(code)
           request({url:"wx/api/login",data:{code:code,organId:organId,userId:userId}}).then((res)=>{
            var token=res.data.data.principal;
            console.log(token)
            
            //向后台发送code 获取token  token里包含了id organId  openId 放入缓存
            snyc.put("Authorization",token,24*60*60)
            //向后台获取到用户信息
             request({url:"wx/api/info",
               header:{
                 'context-type': 'application/json',
                 'Authorization':snyc.get("Authorization")}}).then((res)=>{
                   app.globalData.userInfo=res.data.data;
                  if(res.data.data.organId){
                    // 头部轮播图
                    that.getRotation();
                    // 功能列表
                    that.getNav();
                    //动态列表
                    that.getDynaimc();
                    // that.getContest();
                    that.getTeacher();
                    //考级风采老师列表
                  }
                  // else{
                    // wx.navigateTo({
                      // url: '/pages/agencyList/agencyList',
                    // })
                  // }
               })
             })
          },
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
  getRotation(){
    request({url:"wx/api/rotation"}).then((res)=>{
      console.log(res.data.data)
      this.setData({
        rotationList: res.data.data
      })
    })
  },
  getNav(){
    request({url:"wx/api/navAll"}).then((res)=>{
      console.log(res.data.data)
      this.setData({
        functionList: res.data.data
      })
    })
  },
  getDynaimc(){
    request({url:"wx/api/dynamic"}).then((res)=>{
      console.log(res.data.data)
      this.setData({
        dynamicList: res.data.data
      })
    })
  },
  getTeacher(){
    request({url:"wx/api/teacherAll",
     header:{
      'context-type': 'application/json',
      'Authorization':snyc.get("Authorization")}
    }).then((res)=>{
      console.log(res.data.data)
      this.setData({
        teacherList:res.data.data
      })
    })
  },
  DynamicDetail:function(e){
    var id=e.currentTarget.dataset.id;
    console.log(e)
    console.log(id)
    // wx.navigateTo({
    //   url: '/pages/dtDetail/dtDetail?id='+id,
    // })
  },
  // 最新动态更多
  moreDynaimc:function(e){
    console.log(e)
    // wx.navigateTo({
    //   url: '/pages/dtDetail/dtDetail?id='+id,
    // })
  },
  // 考级风采更多
  moreGradingTest:function(e){
    console.log(e);
  },
  teacherDetail:function(e){
    var id=e.currentTarget.dataset.id;
    console.log(e)
    console.log(id)
  }
})