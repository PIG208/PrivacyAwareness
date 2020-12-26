// pages/Picture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
    var that = this;
    //1. 请求后端API生成小程序码
    that.getQr();
    
    //2. canvas绘制文字和图片
    const ctx = wx.createCanvasContext('myCanvas');
    var imgPath = '../../../image/intro.png'
    var bgImgPath = '../../../image/bgImgPath.png';
    ctx.drawImage(imgPath, 0, 0, 600, 520);
    
    ctx.setFillStyle('white')
    ctx.fillRect(0, 520, 600, 280);
    
    ctx.drawImage(imgPath, 30, 550, 60, 60);
    ctx.drawImage(bgImgPath, 30, 550, 60, 60);
    ctx.drawImage(imgPath, 410, 610, 160, 160); 
    ctx.setFontSize(30)
    ctx.setFillStyle('#111111')
    ctx.fillText('一起来找朋友吧', 30, 660)
    
    ctx.setFontSize(24)
    ctx.fillText('长按扫码查看详情', 30, 770)
    ctx.draw()
    // 3. canvas画布转成图片
    wx.canvasToTempFilePath({
    x: 0,
    y: 0,
    width: 600,
    height: 800,
    destWidth: 600,
    destHeight:800,
    canvasId: 'myCanvas',
    success: function(res) {
    console.log(res.tempFilePath);
    that.setData({
     shareImgSrc : res.tempFilePath
    })
    
    },
    fail:function (res) {
    console.log(res)
    }
    })
    //4. 当用户点击分享到朋友圈时，将图片保存到相册
    wx.saveImageToPhotosAlbum({
    filePath:that.data.shareImgSrc,
    success(res) {
    wx.showModal({
     title: '存图成功',
     content: '图片成功保存到相册了，去发圈噻~',
     showCancel:false,
     confirmText:'好哒',
     confirmColor:'#72B9C3',
     success: function(res) {
     if (res.confirm) {
     console.log('用户点击确定');
     }
     that.hideShareImg()
     }
    })
    }
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