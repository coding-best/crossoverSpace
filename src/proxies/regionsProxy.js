import BaseProxy from './baseProxy'

class RegionsProxy extends BaseProxy {
  constructor(parameters = {}) {
    super('regions', parameters)
  }
}

export default RegionsProxy
