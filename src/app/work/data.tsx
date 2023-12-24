export const mails = [
  {
    id: '1',
    name: 'Software Engineer',
    subject: 'Airasia Berhad',
    link: 'https://google.com',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
    subject: 'Dex Labs Sdn Bhd',
    link: 'https://google.com',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
    subject: 'Appasia Berhad',
    link: 'https://google.com',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: 'July - Feb 2022',
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
    subject: 'Kerry Logistics',
    link: 'https://google.com',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '2020 - 2021',
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
    subject: 'Theta Service Partner',
    link: 'https://google.com',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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

export type MailType = (typeof mails)[number];

export const accounts = [
  {
    label: 'Alicia Koch',
    email: 'alicia@example.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Vercel</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Alicia Koch',
    email: 'alicia@gmail.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Gmail</title>
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'Alicia Koch',
    email: 'alicia@me.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>iCloud</title>
        <path
          d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export type Account = (typeof accounts)[number];

export const contacts = [
  {
    name: 'Emma Johnson',
    email: 'emma.johnson@example.com',
  },
  {
    name: 'Liam Wilson',
    email: 'liam.wilson@example.com',
  },
  {
    name: 'Olivia Davis',
    email: 'olivia.davis@example.com',
  },
  {
    name: 'Noah Martinez',
    email: 'noah.martinez@example.com',
  },
  {
    name: 'Ava Taylor',
    email: 'ava.taylor@example.com',
  },
  {
    name: 'Lucas Brown',
    email: 'lucas.brown@example.com',
  },
  {
    name: 'Sophia Smith',
    email: 'sophia.smith@example.com',
  },
  {
    name: 'Ethan Wilson',
    email: 'ethan.wilson@example.com',
  },
  {
    name: 'Isabella Jackson',
    email: 'isabella.jackson@example.com',
  },
  {
    name: 'Mia Clark',
    email: 'mia.clark@example.com',
  },
  {
    name: 'Mason Lee',
    email: 'mason.lee@example.com',
  },
  {
    name: 'Layla Harris',
    email: 'layla.harris@example.com',
  },
  {
    name: 'William Anderson',
    email: 'william.anderson@example.com',
  },
  {
    name: 'Ella White',
    email: 'ella.white@example.com',
  },
  {
    name: 'James Thomas',
    email: 'james.thomas@example.com',
  },
  {
    name: 'Harper Lewis',
    email: 'harper.lewis@example.com',
  },
  {
    name: 'Benjamin Moore',
    email: 'benjamin.moore@example.com',
  },
  {
    name: 'Aria Hall',
    email: 'aria.hall@example.com',
  },
  {
    name: 'Henry Turner',
    email: 'henry.turner@example.com',
  },
  {
    name: 'Scarlett Adams',
    email: 'scarlett.adams@example.com',
  },
];

export type Contact = (typeof contacts)[number];
