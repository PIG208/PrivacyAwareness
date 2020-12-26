// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  formSubmit: function(e){
    wx.navigateTo({
      url: "../progressbar/progressbar",
      success: function(res) {
        res.eventChannel.emit("acceptDataFromOpenedPage", e.detail.value)
      }
    })
  }
})