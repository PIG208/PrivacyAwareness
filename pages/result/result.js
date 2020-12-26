// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    privacyInfo:[{
      icon: "circlefill",
      text: "手机号码，邮箱bla"
    },{
      icon: "circlefill",
      text: "你的姓名信息"
    },{
      icon: "circlefill",
      text: "兴趣爱好"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on("acceptDataFromOpenedPage", data => {
      this.setData({
        username: data.username,
        phoneNum: data.phoneNum,
        email: data.email,
        interests: data.interests
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