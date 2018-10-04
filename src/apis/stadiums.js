import StadiumsProxy from '../proxies/stadiumsProxy'

async function getStadiums() {
  try {
    const data = await new StadiumsProxy().Stadiums()

    return data
  } catch (e) {
    return null
  }
}

module.exports = {
  getStadiums
}
