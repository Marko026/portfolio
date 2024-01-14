export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
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
    {
      name: 'subtitle',
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
