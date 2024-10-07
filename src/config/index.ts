const config = {
  siteUrl: process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : `http://localhost:${process.env.PORT || 3000}`,
  title: 'Artyom Zankevich | Software Engineer, Manager, Mentor',
  description: 'Artyom Zankevich — Expert in Frontend Development, Backend Development, and Cloud Services. Highly proficient in React, NextJS, NestJS, AWS, and more',
  author: 'Artyom Zankevich',
};

export default config;
