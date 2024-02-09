This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# 

### Code Review

- Always separte external imports from internal imports for better readability.
    For example:
    ```tsx
    // External imports
    import React from 'react';
    import Image from 'next/image';

    // Internal imports
    import { Header } from '../components/Header';
    import { Footer } from '../components/Footer';
    ```

    We can do this in two ways:
    1. Manually separate the imports when you are writing the code.
    2. Use the [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)

- Understand when to break code into components. I follow a simple rule:
    - Reusability
        If a component is used more than once, it should be a separate component.
    - Readability
        If a your main component is getting too big, break it into smaller components depending on the functionality
    - SOC
        Separation of Concerns. Specially in Next.js, we have two types of components: `client` and `server`. Depending on this state, we should separate the components.

- Remove background shadow for button elements. Instead use some other variants on hover like
    - Top Graident
    - Border Magic
    - Tailwind Connect
    - Shimmer
    from [Aceternity UI](https://ui.aceternity.com/components/tailwindcss-buttons) components

- 
