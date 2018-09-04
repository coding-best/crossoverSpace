import BaseProxy from './baseProxy'

// Userprofiles Proxy
class UserproProxy extends BaseProxy {
  constructor(parameters = {}) {
    super('userprofiles', parameters)
  }
}

export default UserproProxy
