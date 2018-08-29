import wepy from 'wepy'
import { ApiRootUrl } from '../utils/constant'

class BaseProxy {
  constructor(endpoint, parameters = {}) {
    this.endpoint = endpoint
    this.parameters = parameters
  }

  setParameters(parameters) {
    Object.keys(parameters).forEach((key) => {
      this.parameters[key] = parameters[key]
    })

    return this
  }

  setParameter(parameter, value) {
    this.parameters[parameter] = value

    return this
  }

  removeParameters(parameters) {
    parameters.forEach((parameter) => {
      delete this.parameters[parameter]
    })

    return this
  }

  removeParameter(parameter) {
    delete this.parameters[parameter]

    return this
  }

  getParameterString() {
    const keys = Object.keys(this.parameters)

    const parameterStrings = keys
      .filter(key => !!this.parameters[key])
      .map(key => `${key}=${this.parameters[key]}`)

    return parameterStrings.length === 0 ? '' : `?${parameterStrings.join('&')}`
  }

  async submit(requestType, url, data = null) {
    let res = await wepy.request({
      url: `${ApiRootUrl}/${url}${this.getParameterString()}`,
      data: data,
      method: requestType,
      header: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${wepy.getStorageSync('token')}`,
      }
    })

    if (res.statusCode !== 200) return false
    // if (res.statusCode === 400) await login()
    return res.data
  }

  all(params) {
    const url = params ? `/${this.endpoint}/${params.join('/')}` : `/${this.endpoint}/`
    return this.submit('get', url)
  }

  find(id) {
    return this.submit('get', `/${this.endpoint}/${id}/`)
  }

  create(item) {
    return this.submit('post', `/${this.endpoint}/`, item)
  }

  update(id, item) {
    return this.submit('put', `/${this.endpoint}/${id}/`, item)
  }

  destroy(id) {
    return this.submit('delete', `/${this.endpoint}/${id}`)
  }
}

export default BaseProxy