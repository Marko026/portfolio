export default {
  name: 'tech',
  title: 'Technologies',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'techImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // todo: remove
    // {
    //   name: 'tags',
    //   title: 'Tags',
    //   type: 'array',
    //   of: [{type: 'reference', to: [{type: 'tech'}]}], // wrong
    // },
  ],
}
