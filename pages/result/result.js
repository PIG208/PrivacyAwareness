// pages/result/result.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    privacyInfo:[{
      icon: "circlefill",
      text: "姓名"
    },{
      icon: "circlefill",
      text: "手机号码"
    },{
      icon: "circlefill",
      text: "邮箱"
    },{
      icon: "circlefill",
      text: "兴趣爱好"
    },{
      icon: "circlefill",
      text: "头像和用户名",
      leaked: false
    },{
      icon: "circlefill",
      text: "地址信息"
    }],
    comments: [
      {
        title: "熟练的个人隐私“卖家”",
        bounds: [0, 20],
        text: "我们发现你是一个十分愿意，或者说习惯于通过自己的隐私信息来换取互联网提供的服务的人。也许你会认为在第三方平台上填写这种程度的隐私数据无伤大雅，但是个人隐私泄露带来的可能是各种不可预知的后果。这个平台有可能失职，有可能将你的个人隐私泄露在公众的视野中，带来诈骗短息，广告信息的骚扰，甚至人身安全上的威胁。"
      },
      {
        title: "保持警惕的隐私安全保护小白",
        bounds: [21, 50],
        text: "你可能是一个不那么愿意完全向服务提供者透露不必要的隐私信息的人。对于各种互联网上的服务，你永远有拒绝提供你的隐私信息的权利。面对越来越多的，对访问隐私数据的不合理的要求，请记住，当程序所要求的隐私数据使你感到不适，请拒绝。"
      },
      {
        title: "成熟的个人隐私保护专家",
        bounds: [51, 90],
        text: "你已经是一个成熟的个人信息安全保护者了，相信你已经能在心中权衡个人信息的付出与得到的回报是否匹配。这杆心中的秤会在互联网的世界无时不刻地保护着你，请保持下去！然而，一些危险还是被你忽略了。或许所有人都认为仅仅一两条的个人信息无关紧要，但事实上这些隐私的泄露仍存在巨大的隐患，\"积少成多\"会在无意间将你拖入深渊。"
      },
      {
        title: "固若金汤的隐私\"防火墙\"",
        bounds: [91, 100],
        text: "恭喜你！你完美的通过了个人隐私安全测试。这证明你的互联网安全意识和习惯都非常优秀，不随意分享自己的信息是对自己最大的负责。请继续保持下去！同时，希望你能将自己的好习惯分享给周围的人，让他们也远离个人隐私泄露的危害。"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      authorizationCount: 0,
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
        privacyCount: inputCount,
        privacyInfo: this.data.privacyInfo
      });
    });
    eventChannel.on("acceptRefused", data => {
      this.setData({
        refused: true
      });
    }); 
    let aut=0;
    console.log(app.globalData.authorizationCount);
    if(app.globalData.authorizationCount[0]==true)
    {
      this.data.privacyInfo[4].leaked=true;
      aut++;
    }
    if(app.globalData.authorizationCount[1]==true)
    {
      this.data.privacyInfo[5].leaked=true;
      aut++;
    }
    this.setData({
      privacyInfo: this.data.privacyInfo,
      authorizationCount: aut
    });
  },
  share: function(){
    wx.navigateTo({
      url: '../../pages/share/share',
    })
  }
})