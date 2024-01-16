export default {
  name: 'challengesLearnings',
  title: 'Challenges & Learnings',
  type: 'document',
  fields: [
    {
      name: 'title', // project title
      title: 'Title',
      type: 'string',
    },
    // {
    //   name: 'subtitle',
    //   title: 'Subtitle',
    //   type: 'string',
    // },
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
    // TODO: change this an array of string text
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
