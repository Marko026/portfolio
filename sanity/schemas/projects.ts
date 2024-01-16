export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of your project',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your project',
      options: {
        source: 'title',
      },
    },
    {
      name: 'imageTitle',
      title: 'Image of your project',
      type: 'image',
      validation: (Rule: any) => Rule.required().error('This field is required'),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    // todo: where is tag/technologies?
    {
      name: 'tags', // todo: improve naming
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tech'}]}], 
    },
  ],
}
