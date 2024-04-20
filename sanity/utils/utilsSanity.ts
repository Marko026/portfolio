import {client, writeClient} from '../lib/sanity'

export async function getProjects() {
  const query = `*[_type=="project"] | order(_createdAt desc) {
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
  await writeClient
    .patch({
      query: `*[_type == "project" && slug.current == $slug][0]`,
      params: {slug},
    })
    .inc({views: 1})
    .commit()
}

export async function getNextAndPrevious(slug: string) {
  const query = `*[_type=="project" && workInProgress == false] | order(_createdAt asc) {
    _id,
    title,
    "slug":slug.current
  }`

  const data = await client.fetch(query)

  const currentIndex = data.findIndex((project: any) => project.slug === slug)

  const next = currentIndex + 1 >= data.length ? {} : data[currentIndex + 1]
  const previous = currentIndex - 1 < 0 ? {} : data[currentIndex - 1]

  return {nextProject: next, previousProject: previous}
}
