import BaseProxy from './baseProxy'

// usercollections Proxy
class CollectionsProxy extends BaseProxy {
  constructor(parameters = {}) {
    super('usercollections', parameters)
  }
}

export default CollectionsProxy
