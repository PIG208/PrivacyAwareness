// pages/form/form.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function(){
    app.globalData.authorizationCount[1]=false;
  },
  formSubmit: function(e){
    wx.authorize({
      scope: 'scope.userLocation',
      success: function(){
        app.globalData.authorizationCount[1]=true;
      },
      complete: function(){
        wx.navigateTo({
          url: "../progressbar/progressbar",
          success: function(res) {
            res.eventChannel.emit("acceptDataFromOpenedPage", e.detail.value)
          }
        })
      }
    })
    
  },
  refuseSubmit: function(){
    wx.navigateTo({
      url: "../result/result",
      success: function(res) {
        res.eventChannel.emit("acceptRefused")
      }
    })
  }
})