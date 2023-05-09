import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import product from './schemas/product'
import collections from './schemas/collections'
import vendor from './schemas/vendor'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, product,collections,vendor]
}
