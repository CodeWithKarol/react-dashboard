// Revenue Data
export const REVENUE_DATA = [
  // ... data points ...
];

// Stats Data
export const DASHBOARD_STATS = [
  {
    title: "Total Revenue",
    value: "$45,231",
    trend: "12%",
    trendType: "positive",
    color: "indigo",
    bgClass: "bg-indigo-50 dark:bg-indigo-900/20",
  },
  {
    title: "Active Users",
    value: "12,456",
    trend: "3.2%",
    trendType: "positive",
    color: "emerald",
    bgClass: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    title: "New Clients",
    value: "45",
    trend: "0.5%",
    trendType: "negative",
    color: "purple",
    bgClass: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    title: "Satisfaction",
    value: "98%",
    trend: "4%",
    trendType: "positive",
    color: "amber",
    bgClass: "bg-amber-50 dark:bg-amber-900/20",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    isOnline: true,
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    isOnline: true,
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    isOnline: false,
  },
  {
    name: "Whitney Francis",
    role: "Copywriter",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    isOnline: true,
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    isOnline: false,
  },
];

export const PROJECTS = [
  {
    name: "Website Redesign",
    tech: "React, Tailwind",
    progress: 75,
    dueDate: "2023-11-15",
    members: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    ],
  },
  {
    name: "Mobile App Integration",
    tech: "Flutter, Firebase",
    progress: 45,
    dueDate: "2023-12-01",
    members: [
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    ],
  },
  {
    name: "Marketing Campaign",
    tech: "SEO, Content",
    progress: 90,
    dueDate: "2023-10-30",
    members: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    ],
  },
  {
    name: "Database Migration",
    tech: "PostgreSQL, AWS",
    progress: 15,
    dueDate: "2024-01-20",
    members: [
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    ],
  },
];

export const TRANSACTIONS = [
  {
    id: "1",
    user: {
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      avatar:
        "https://ui-avatars.com/api/?name=Lindsay+Walton&background=random",
    },
    amount: "$2,450.00",
    status: "Paid",
    date: "Jan 12, 2026",
  },
  {
    id: "2",
    user: {
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      avatar:
        "https://ui-avatars.com/api/?name=Courtney+Henry&background=random",
    },
    amount: "$1,950.00",
    status: "Pending",
    date: "Jan 11, 2026",
  },
  {
    id: "3",
    user: {
      name: "Tom Cook",
      email: "tom.cook@example.com",
      avatar: "https://ui-avatars.com/api/?name=Tom+Cook&background=random",
    },
    amount: "$850.00",
    status: "Paid",
    date: "Jan 10, 2026",
  },
];
