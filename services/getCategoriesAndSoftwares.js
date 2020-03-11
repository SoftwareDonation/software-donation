import softwaresData from '../data/softwares.json'

const getCategoriesAndSoftwares = (causeId) => {
  const softwareList = softwaresData.softwares
  const cause = require(`../data/causes/${causeId}.json`)
  const categories = cause.categories

  const categoriesAndSoftwares = categories.map((category) => {
    const softwares = category.softwares.map((softwareItem) => {
      return softwareList.filter((software) => {
        return software.id === softwareItem.id
      })[0]
    })

    category.softwares = softwares
    return category
  })

  return categoriesAndSoftwares
}

export default getCategoriesAndSoftwares
