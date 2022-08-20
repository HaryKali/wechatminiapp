//index.js
// 生成随机颜色
function getRandomColor(){
    let rgb = []
    for(let i=0;i<3;i++){
      let color = Math.floor(Math.random()*256).toString(16)
      // 三目运算法
      color = color.length==1?'0'+color:color
      rgb.push(color)
    }
  
    return '#'+rgb.join('')
  }
  
  Page({
  
    /**
     * 页面的初始数据
     */
    data: {
      danmuTxt:'test',
      list: [{
          id: '1001',
          title: '杨国宜先生口述校史实录',
          videoUrl: 'http://arch.ahnu.edu.cn/__local/6/CB/D1/C2DF3FC847F4CE2ABB67034C595_025F0082_ABD7AE2.mp4?e=.mp4'
        },
        {
          id: '1002',
          title: '唐成伦先生口述校史实录',
          videoUrl: 'http://arch.ahnu.edu.cn/__local/E/31/EB/2F368A265E6C842BB6A63EE5F97_425ABEDD_7167F22.mp4?e=.mp4'
        },
        {
          id: '1003',
          title: '倪光明先生口述校史实录',
          videoUrl: 'http://arch.ahnu.edu.cn/__local/9/DC/3B/35687573BA2145023FDAEBAFE67_AAD8D222_925F3FF.mp4?e=.mp4'
        },
        {
          id: '1004',
          title: '吴仪兴先生口述校史实录',
          videoUrl: 'http://arch.ahnu.edu.cn/__local/5/DA/BD/7A27865731CF2B096E90B522005_A29CB142_6525BCF.mp4?e=.mp4'
        }
      ]
  
    },
  
    /**
     * 自定义函数--播放视频
     */
    playVideo: function(e) {
  
      // 视频暂停
      this.videoCtx.stop()
  
      // 获取新的视频地址
      this.setData({
        src: e.currentTarget.dataset.url
      })
  
      // 开始播放另一个视频
      this.videoCtx.play()
    },
  
    /**
   * 自定义函数--获取弹幕内容
   */
    getDanmu: function (e) {
      this.setData({
        danmuTxt:e.detail.value
      })
    },
    
  /**
  * 自定义函数--发送弹幕
  */
    sendDanmu: function () {
      // 获取弹幕内容
      let text = this.data.danmuTxt
      // 发送弹幕
      this.videoCtx.sendDanmu({
        text:text,
        color:getRandomColor()
      })
    },
  

    onLoad: function(options) {
      this.videoCtx = wx.createVideoContext("myVideo")
  
    },
  

  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
  
    }
  })