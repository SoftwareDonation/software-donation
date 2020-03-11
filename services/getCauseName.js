import causesData from '../data/causes.json'

const getCauseName = (causeId) => {
  return causesData.causes.filter((item) => {
    return item.id === causeId
  })[0].name
}

export default getCauseName
