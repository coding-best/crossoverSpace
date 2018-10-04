import BaseProxy from './baseProxy'

class StadiumsProxy extends BaseProxy {
  constructor(parameters = {}) {
    super('stadiums', parameters)
  }

  async Stadiums() {
    const data = {}
    const ret = await this.submit('get', `${this.endpoint}/`, data)
    return ret.data
  }
}

export default StadiumsProxy
