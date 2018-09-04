import BaseProxy from './baseProxy'

class AddressProxy extends BaseProxy {
  constructor(parameters = {}) {
    super('useraddresss', parameters)
  }
}

export default AddressProxy
