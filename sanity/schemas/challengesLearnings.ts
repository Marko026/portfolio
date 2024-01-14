export default {
  name: 'challengesLearnings',
  title: 'Challenges & Learnings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'learnings',
      title: 'Learnings',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
