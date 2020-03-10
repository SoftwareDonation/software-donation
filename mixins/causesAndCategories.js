import { DEFAULT_CAUSE } from '../config'
import getCauses from '../services/getCauses'
import getCategoriesAndSoftwares from '../services/getCategoriesAndSoftwares'

export default {
  asyncData({ params }) {
    const cause = params.cause ? params.cause : DEFAULT_CAUSE
    return {
      causes: getCauses(),
      categories: getCategoriesAndSoftwares(cause)
    }
  }
}
