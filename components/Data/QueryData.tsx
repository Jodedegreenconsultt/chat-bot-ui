export type QueryDataProps = {
  user: string;
  robot: string;
  _id: string;
};

export const textNotFound: string = `I don't have any personal experiences or viewpoints of this; I'm just an AI language model. However, it's crucial to be truthful and helpful in your response if you are talking to a specific business or circumstance. If you have any comments or recommendations for the business, you are welcome to make them in a courteous and professional manner. Remember to give concrete examples and suggest potential fixes rather than merely criticizing without making suggestions for change.`;

export const QueryData: QueryDataProps[] = [
  {
    user: 'AI',
    robot:
      'AI stands for Artificial Intelligence. It is a field of computer science that focuses on creating machines that can perform tasks that typically require human intelligence, such as recognizing speech, understanding language, making decisions, and learning. AI systems can be designed to be autonomous or semi-autonomous, meaning they can operate independently or with human supervision.',
    _id: 'acc8-ec33-4dd4-1001'
  },
  {
    user: 'Reactjs',
    robot:
      'ReactJS is a popular open-source JavaScript library used for building user interfaces. Developed by Facebook, React allows developers to build reusable UI components and manage the state of their applications efficiently. React uses a virtual DOM (Document Object Model) to optimize rendering performance, allowing developers to build complex and responsive UIs with ease.',
    _id: 'acc8-ec33-4dd4-1002'
  },
  {
    user: 'Nextjs',
    robot:
      'Next.js is a popular open-source web framework built on top of React that enables server-side rendering (SSR) and static site generation (SSG) for React-based web applications. It is built with developer experience and performance in mind and provides many features out-of-the-box, such as automatic code splitting, server-side rendering, static site generation, and optimized image loading.',
    _id: 'acc8-ec33-4dd4-1003'
  },
  {
    user: 'Frontend developer',
    robot:
      'A frontend developer is a type of software developer who is primarily responsible for building the client-side, user-facing portion of a web application or website. This includes designing, building, and implementing the visual elements that users see and interact with, such as layouts, buttons, forms, and navigation menus.\nFrontend developers typically use a combination of programming languages, frameworks, and libraries such as HTML, CSS, JavaScript, React, Angular, or Vue.js, to create and maintain web applications.They must also have a strong understanding of user experience(UX) and user interface(UI) design principles to create effective and engaging web interfaces.',
    _id: 'acc8-ec33-4dd4-1004'
  },
  {
    user: 'Backend developer',
    robot:
      'A backend developer is a software engineer who is responsible for developing and maintaining the server-side of a web application. This includes the logic, databases, APIs, and other server-side components that are necessary to make the application work.\nBackend developers also need to be familiar with software architecture and design patterns, as well as security and scalability considerations, to ensure that their applications are reliable, efficient, and secure.They may work closely with frontend developers, designers, and other stakeholders to ensure that the backend and frontend components of an application work seamlessly together.',
    _id: 'acc8-ec33-4dd4-1005'
  }
];
