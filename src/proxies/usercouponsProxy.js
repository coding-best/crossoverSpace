import BaseProxy from './baseProxy'

class CouponsProxy extends BaseProxy {
  constructor(parameters = {}) {
    super('usercoupons', parameters)
  }
}

export default CouponsProxy
