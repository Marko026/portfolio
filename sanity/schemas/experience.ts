// experience is a document or array of records of companies you have worked with
export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'title', // should be company title you have worked with
      title: 'Title',
      type: 'string',
    },
    // todo: remove this, it's almost a fixed entity/data
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // todo: improving naming
    {
      name: 'subtitle', // role
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
    },
    {
      name: 'dateFrom',
      title: 'Date from',
      type: 'date',
    },
    {
      name: 'dateTo',
      title: 'Date to',
      type: 'date',
    },
  ],
}
