// todo: not needed
export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    // todo: not needed, it's almost a fixed entity/data
    {
      name: 'title',
      title: 'Contact Title',
      type: 'string',
    },
    // todo: not needed, it's almost a fixed entity/data
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'name',
      title: 'My Socials',
      type: 'string',
    },
    {
      name: 'socialIcons',
      title: 'Social Icons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
  ],
}
