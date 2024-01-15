import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'pctozvsn',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
})
const builder = imageUrlBuilder(client)

export function urlFor(client: string) {
  return builder.image(client)
}
