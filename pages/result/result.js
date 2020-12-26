// pages/result/result.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    privacyInfo:[{
      icon: "circlefill",
      text: "手机号码"
    },{
      icon: "circlefill",
      text: "邮箱"
    },{
      icon: "circlefill",
      text: "姓名"
    },{
      icon: "circlefill",
      text: "兴趣爱好"
    },{
      icon: "circlefill",
      text: "头像和用户名"
    },{
      icon: "circlefill",
      text: "地址信息"
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      authorizationCount: app.globalData.authorizationCount,
      privacyCount: 0
    });
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on("acceptDataFromOpenedPage", data => {
      this.setData({
        username: data.username,
        phoneNum: data.phoneNum,
        email: data.email,
        interests: data.interests,
        refused: false
      });
      let inputCount = 0;
      let index = 0;
      Object.values(data).forEach(val => {
        if(val != undefined && val.trim().length > 0){
          this.data.privacyInfo[index].leaked = true;
          inputCount++;
        }
        index++;
      });
      this.setData({
        privacyInfo: this.data.privacyInfo
      });
      this.setData({
        privacyCount: inputCount
      });
    });
    eventChannel.on("acceptRefused", data => {
      this.setData({
        refused: true
      });
    });
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