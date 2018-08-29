import BaseProxy from './baseProxy'

class WxProxy extends BaseProxy {
  constructor(parameters = {}) {
    super('wx', parameters)
  }

  async Login({ code }) {
    const data = { code }
    const ret = await this.submit('post', `${this.endpoint}/login/`, data)
    return ret.data
  }
}

export default WxProxy