// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit: function(e){
    wx.navigateTo({
      url: "../result/result",
      success: function(res) {
        res.eventChannel.emit("acceptDataFromOpenedPage", e.detail.value)
      }
    })
  }
})