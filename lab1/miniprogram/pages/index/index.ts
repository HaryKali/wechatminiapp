// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    src:"images/logo.png",
    name:"Hello World"
  },

  getMyInfo() {
    wx.getUserProfile({
      desc: '信息用于展示', 
      success: (res) => {
        console.log(res)
        this.setData({
          name: res.userInfo.nickName,
          src:res.userInfo.avatarUrl
        })
      }
    })
  },



})
