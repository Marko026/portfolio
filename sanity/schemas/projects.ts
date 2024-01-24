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
      name: 'subtitle',
      title: 'Subtitle ',
      type: 'string',
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
    },
    {
      name: 'problem',
      title: 'Problem',
      type: 'text',
    },
    {
      name: 'tags',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'technologies'}]}],
      validation: (Rule: any) => Rule.required().error('This field is required'),
    },
    {
      name: 'reflection',
      title: 'Reflection',
      type: 'text',
    },
    {
      name: 'finalSite',
      title: 'Final Site',
      type: 'object',
      fields: [
        {
          name: 'link',
          title: 'Link',
          type: 'url',
        },
        {
          name: 'siteImage',
          title: 'Site Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'learnings',
      title: 'Learnings',
      type: 'array',
      of: [
        {
          name: 'learning',
          title: 'Learning',
          type: 'string',
        },
      ],
    },
    {
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [
        {
          name: 'challenge',
          title: 'Challenge',
          type: 'string',
        },
      ],
    },
    {
      name: 'future',
      title: 'Future',
      type: 'text',
    },
  ],
}
