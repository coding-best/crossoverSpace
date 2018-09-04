import BaseProxy from './baseProxy'

class CartsProxy extends BaseProxy {
  constructor(parameters = {}) {
    super('usercarts', parameters)
  }
}

export default CartsProxy
