import softwaresData from '../data/softwares.json'

const getCategoriesAndSoftwares = (causeId) => {
  const cause = require(`../data/causes/${causeId}.json`)
  const categories = cause.categories

  const categoriesAndSoftwares = categories.map((category) => {
    const softwares = category.softwares.map((softwareId) => {
      return softwaresData.filter((software) => {
        return software.id === softwareId
      })[0]
    })

    category.softwares = softwares
    return category
  })

  return categoriesAndSoftwares
}

export default getCategoriesAndSoftwares
