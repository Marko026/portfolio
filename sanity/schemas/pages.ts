// todo: remove this
export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of your page',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your page',
      options: {
        source: 'title',
      },
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    },
  ],
}
