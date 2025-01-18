import { type SchemaTypeDefinition } from 'sanity'
import ProductSchema from './products';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProductSchema],
}
