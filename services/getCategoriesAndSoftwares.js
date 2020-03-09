import softwaresData from '../data/softwares.json'

const getCategoriesAndSoftwares = (causeId) => {
  const cause = require(`../data/causes/${causeId}.json`)
  const categories = cause.categories

  const categoriesAndSoftwares = categories.map((category) => {
    const softwares = category.softwares.map((softwareItem) => {
      return softwaresData.filter((software) => {
        return software.id === softwareItem.id
      })[0]
    })

    category.softwares = softwares
    return category
  })

  return categoriesAndSoftwares
}

export default getCategoriesAndSoftwares
