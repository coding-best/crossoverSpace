import BaseProxy from './baseProxy'

class RegionsProxy extends BaseProxy {
  constructor(parameters = {}) {
    super('regions', parameters)
  }

  async Regions() {
    const data = {}
    const ret = await this.submit('get', `${this.endpoint}/`, data)
    return ret.data
  }
}

export default RegionsProxy
