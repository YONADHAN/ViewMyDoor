import { model, models } from 'mongoose'
import mainCategorySchema, {
  IMainCategory,
} from '../schemas/main_category.schema'

const MainCategory =
  models.MainCategory ||
  model<IMainCategory>('MainCategory', mainCategorySchema)

export default MainCategory
