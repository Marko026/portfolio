import {client} from '../lib/sanity'

export async function getProjects() {
  const query = `*[_type=="project"] | order(_createdAt asc) {
    _id,
    title,
      "slug":slug.current,
      description,
      imageTitle,
    overview,
      reflection,
      finalSite->{
        link,
      },
      learnings->{
        _id,
        title,
        challenges,
      },
      challenges->{
        _id,
        title,
        challenges,
      },
      featured,
      tags[]->{
        _id,
        name,
      }
      }`

  const data = await client.fetch(query)
  return data
}

export async function getProject(slug: string) {
  const query = `*[_type=="project" && slug.current==$slug] {
    _id,
    title,
      "slug":slug.current,
      description,
      imageTitle,
      content,
      startDate,
      endDate,
      role,
      }`

  const data = await client.fetch(query, {slug})
  return data
}

export async function getTechnologies() {
  const query = `
    *[_type=="technologies"] {
        _id,
        name,
        techImage
      }`
  const data = await client.fetch(query)
  return data
}
