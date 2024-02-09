import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// READ Client of Sanity
export const client = createClient({
  projectId: 'pctozvsn',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
})

// WRITE Client of Sanity
export const writeClient = createClient({
  projectId: 'pctozvsn',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_SECRET_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(client: string) {
  return builder.image(client)
}
