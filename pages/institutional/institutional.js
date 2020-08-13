// pages/institutional/institutional.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:"/pages/introduction/introduction",
    filtrate: false,
    classList: [{
      name: "美术",
      id: 0,
      isActive: false
    }, {
      name: "手工",
      id: 1,
      isActive: false
    }, {
      name: "书法",
      id: 2,
      isActive: false
    }],
    toolList: [{
      name: "毛笔",
      id: 10,
      isActive: false
    }, {
      name: "钢笔",
      id: 11,
      isActive: false
    }, {
      name: "宣纸",
      id: 12,
      isActive: false
    }, {
      name: "熟宣纸",
      id: 13,
      isActive: false
    }, {
      name: "油画",
      id: 14,
      isActive: false
    }, {
      name: "水彩",
      id: 15,
      isActive: false
    }],
    image: "/image/banner_1.PNG",
    name: "阜阳市活灵活现颍州区店",
    address: "安徽省阜阳市颍州区京九开发区润龙吉利",
    time: "09:00-22:00",
    distance: "129.3KM",
    goodList: [{
      image: "/image/banner_1.PNG",
      title: "少儿美术创意课程",
      type: "少儿创意美术课程",
      price: 200,
      discount: 300,
      num: 120
    }, {
      image: "/image/banner_1.PNG",
      title: "少儿美术创意课程",
      type: "少儿创意美术课程",
      price: 200,
      discount: 300,
      num: 120
    }, {
      image: "/image/banner_1.PNG",
      title: "少儿美术创意课程",
      type: "少儿创意美术课程",
      price: 200,
      discount: 300,
      num: 120
    }, {
      image: "/image/banner_1.PNG",
      title: "少儿美术创意课程",
      type: "少儿创意美术课程",
      price: 200,
      num: 120
    }],
  },

  filtrate: function (e) {
    this.setData({
      filtrate: true
    })
  },

  confirm: function (e) {
    this.setData({
      filtrate: false
    })
    let {
      toolList
    } = this.data;
    let {
      classList
    } = this.data;
    var toolid = toolList[0].id;
    var classid = classList[0].id;
    for (let i = 0; i < toolList.length; i++) {
      if (toolList[i].isActive == true) {
        toolid = toolList[i].id
      }
    }

    for (let i = 0; i < classList.length; i++) {
      if (classList[i].isActive == true) {
        classid = classList[i].id
      }
    }
    console.log(classid, toolid)
  },

  reset: function (e) {
    let {
      toolList
    } = this.data;
    toolList.forEach((v, i) => v.isActive = false)
    let {
      classList
    } = this.data;
    classList.forEach((v, i) => v.isActive = false)
    this.setData({
      toolList,
      classList
    });
  },

  chooseClass: function (e) {
    // console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    let {
      classList
    } = this.data;
    classList.forEach((v, i) => i === id ? v.isActive = true : v.isActive = false)
    this.setData({
      classList
    });

  },

  chooseTool: function (e) {
    // console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    let {
      toolList
    } = this.data;
    // console.log(classList)
    toolList.forEach((v, i) => (i + 10) === id ? v.isActive = true : v.isActive = false)
    this.setData({
      toolList
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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