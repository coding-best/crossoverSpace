import BaseProxy from './baseProxy'

class LevelsProxy extends BaseProxy {
  constructor(parameters = {}) {
    super('userlevels', parameters)
  }
}

export default LevelsProxy
