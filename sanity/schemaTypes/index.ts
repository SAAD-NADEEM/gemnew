import { type SchemaTypeDefinition } from 'sanity'
import gem from './gem'
import mineral from './mineral'
import otherCategory from './otherCategory'
import other from './other'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gem, mineral, otherCategory, other],
}
