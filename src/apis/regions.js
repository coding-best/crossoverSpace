import RegionsProxy from '../proxies/regionsProxy'

async function getRegions() {
  try {
    const data = await new RegionsProxy().Regions()

    return data
  } catch (e) {
    return null
  }
}

module.exports = {
  getRegions
}
