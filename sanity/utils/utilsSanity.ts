import {client} from '../lib/sanity'

export async function getProjects() {
  const query = `*[_type=="project"] | order(_createdAt asc) {
      _id,
      title,
      subtitle,
      problem,
      "slug":slug.current,
      imageTitle,
      overview,
      reflection,
      finalSite,
      learnings,
      challenges,
      future,
      tags[]->{
        _id,
        name,
      },
    workInProgress

      }`

  const data = await client.fetch(query)
  return data
}

export async function getProject(slug: string) {
  const query = `*[_type=="project" && slug.current==$slug][0] {
    _id,
    title,
    subtitle,
    "slug":slug.current,
    imageTitle{
      asset->{
        _id,
        url
      }
    },
    overview,
    reflection,
    finalSite,
    learnings,
    problem,
    challenges,
    future,
    tags[]->{
      _id,
      name,
      "techImage": techImage.asset->url
    },
    workInProgress,
    views
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
export async function incrementViewCount(slug: string) {
  const currentData = await client.fetch(
    `*[_type=="project" && slug.current==$slug][0] {
    views}`,
    {slug},
  )
  let currentViews = currentData?.views + 1
  return currentViews
}
