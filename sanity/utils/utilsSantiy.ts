import {client} from '../lib/sanity'

export async function getProjects() {
  const query = `*[_type=="project"] | order(_createdAt asc) {
        _id,
        title,
         "currnetSlug":slug.current,
          description,
          imageTitle,
          content,
          startDate,
          endDate,role
      }`

  const data = await client.fetch(query)
  return data
}
export async function getProject(slug: string) {
  const query = `*[_type=="project" && slug.current==$slug] {
        _id,
        title,
         "currnetSlug":slug.current,
          description,
          imageTitle,
          content,
          startDate,
          endDate,role
      }`

  const data = await client.fetch(query, {slug})
  return data
}
