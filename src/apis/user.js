import wepy from 'wepy'
import WxProxy from '../proxies/wxProxy'

async function checkLogin() {
  if (wepy.getStorageSync('userInfo') && wepy.getStorageSync('token')) {
    let res = await wepy.checkSession()
    console.log('====>>>checkLogin', res)
    if (res) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
global.checkLogin = checkLogin

async function doLogin() {
  try {  
    const { code } = await wepy.login()
    if (!code) throw new Error('Cannot fetch login code.')

    const data = await new WxProxy().Login({ code })

    wepy.setStorageSync('userInfo', data.profile)
    wepy.setStorageSync('token', data.token)
    return data
  } catch (e) {
    return null
  }
}

module.exports = {
  checkLogin,
  doLogin
}
