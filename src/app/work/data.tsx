export const experiences = [
  {
    id: '1',
    name: 'Software Engineer',
    company: 'Airasia Berhad',
    link: 'https://www.capitala.com',
    description: `Lead the blog initiatives. Increased users' time retention by 8%. Integrated webhooks from client's ERP system to automate email sending on each status changes.`,
    date: 'Dec 2022 - Present',
    products: [
      {
        title: 'ikhlas.com',
        href: 'https://ikhlas.com',
      },
      {
        title: 'Ikhlas iOS',
        href: 'https://apps.apple.com/my/app/ikhlas-your-companion/id1550705035',
      },
      {
        title: 'Ikhlas Android',
        href: 'https://play.google.com/store/apps/details?id=com.ikhlas.mobile&hl=en&gl=US',
      },
    ],
    labels: [
      'React',
      'NextJS',
      'TailwindCSS',
      'Flutter',
      'Go',
      'GraphQL',
      'Hasura',
      'Webhook',
      'ContentStack',
      'Firebase',
      'GCP',
    ],
  },
  {
    id: '2',
    name: 'Software Developer',
    company: 'Dex Labs Sdn Bhd',
    link: 'https://www.dex-labs.com/',
    description: `
    Leveraging company's in house React component library to build client's web and mobile apps. Integrated SNYK Open Source into a payment gateway project's deployment pipeline for a vulnerability scanning to make sure it met the PCI DSS certification. Developed, Test & Managed the release of a Unity AR mobile application on Apple App Store, Google Play Store & Huawei App Gallery. Make sure that the application is free of bugs and performant across low to high end mobile devices. Ohsem! AR now has over 500+ downloads and a 4.5+ star rating across 3 app stores.
    `,
    date: 'Feb - Dec 2022',
    products: [
      {
        title: 'Ohsem AR!',
        href: 'https://play.google.com/store/apps/details?id=com.blindspotstudios.ohsem',
      },
      {
        title: 'VO2Max',
        href: 'https://vo2.dex-labs.com/',
      },
      {
        title: 'LILA+',
        href: 'https://play.google.com/store/apps/details?id=lila.movement.revolution&hl=en_US&gl=US',
      },
      {
        title: 'Huddle World',
        href: 'https://play.google.com/store/apps/details?id=com.airupthere.huddle&hl=en_US',
      },
    ],
    labels: [
      'React',
      'React Native',
      'NodeJS',
      'LoopbackJS',
      'MongoDB',
      'Unity AR',
      'C#',
      'AWS Lambda',
      'Python',
      'HTML',
      'CSS',
    ],
  },
  {
    id: '3',
    name: 'Web Application Developer',
    company: 'Appasia Berhad',
    link: 'https://www.appasia.com/',
    description: `Modernized an existing yellopages.my's admin dashboard used by Advertisers. Built UI from Adobe XD mockup to real working screen. Achieving responsive design Achieving responsive design by using css media query. Developed modularized Angular components, to increase in app reusability. Took advantage of SCSS to make styling of the application less repeating. Utilizing PHP Laravel to ease back-end development and migration of databases.`,
    date: 'July 2021 - Feb 2022',
    products: [
      {
        title: 'yellowpages.my',
        href: 'https://yellowpages.my',
      },
    ],
    labels: ['Angular', 'PHP', 'Laravel', 'MySQL'],
  },
  {
    id: '4',
    name: 'Junior Software Engineer',
    company: 'Kerry Logistics',
    link: 'https://www.kerrylogistics.com/',
    description: `Involved in Kerry Warehouse Management V3 project for Kerry Logistics. A global focus product that aims to replace the current V2 for all their warehouses around the globe using AWS cloud tech.`,
    date: 'July 2020 - July 2021',
    products: [
      {
        title: 'Kerry WMS v3',
        href: 'https://www.kerrylogistics.com/en/products/digitalisation/',
      },
    ],
    labels: ['Angular', 'ASP.NET Core', 'MSSQL', 'Go', 'RabbitMQ', 'Redis'],
  },
  {
    id: '5',
    name: 'Software Engineer Intern',
    company: 'Theta Service Partner',
    link: 'https://www.thetasp.com/',
    description: `Involved in corporate loan origination system project for international bank brands. Worked under a project with a bank based in Taiwan. Developed Java API using Spring MVC and tested all the APIs using Swagger UI client. Also worked with the base team developing reusable angular components`,
    date: 'Jan - May 2020',
    products: [
      {
        title: 'Loan Origination System',
        href: 'https://www.thetasp.com/what-we-do/products/theta-origins/',
      },
    ],
    labels: ['Angular', 'Java', 'Spring MVC', 'OracleDB'],
  },
];

export type ExperienceType = (typeof experiences)[number];
