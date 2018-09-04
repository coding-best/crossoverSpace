import BaseProxy from './baseProxy'

class CategoryProxy extends BaseProxy {
  constructor(parameters = {}) {
    super('categorys', parameters)
  }
}

export default CategoryProxy
