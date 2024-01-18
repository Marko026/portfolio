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
  ],
}
