Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:["福建省","厦门市","思明区"],
    now:{
        temp:0,
        text:"unknown",
        humidity:0,
        pressure:0,
        vis:0,
        windDir:"unknown",
        windSpeed:0,
        windScale:0

    }
  },


  
  regionChange:function(e:any){
    this.setData({region:e.detail.value})
    this.getWeather();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getWeather();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(opts): WechatMiniprogram.Page.ICustomShareContent {
    console.log(opts.target)
    return {}
  },
  getWeather:function(){
    var that=this
    wx.request({
        //get city id first
        url:"https://geoapi.qweather.com/v2/city/lookup?",
        data:{
            location:that.data.region[1],
            key:"b800e802ab2d4944aab0b604817db936"
        },  
        success:function(res){
            //use city id to find the weather
            wx.request({
                url:"https://devapi.qweather.com/v7/weather/now?",
                data:{
                    location:res.data.location[0].id,
                    key:"b800e802ab2d4944aab0b604817db936"
                },
                success:function(res){
                     that.setData({now:res.data.now})
                }
            })
             
        }   
    })
   
  },
})
