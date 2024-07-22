export interface Case {
    id: number;
    title: string;
    description: string;
    status: string;
  }
  
  export const cases: Case[] = [
    {
      id: 1,
      title: "Issue with Login",
      description: "Users are unable to log in to their accounts.",
      status: "Pending",
    },
    {
      id: 2,
      title: "Payment Gateway Integration",
      description: "Integrate a new payment gateway for online transactions.",
      status: "Accepted",
    },
    {
      id: 3,
      title: "Bug Fix: Homepage Banner",
      description: "Fix the alignment issue with the homepage banner.",
      status: "Pending",
    },
    {
      id: 4,
      title: "Feature Request: Dark Mode",
      description: "Implement a dark mode feature for better user experience.",
      status: "Pending",
    },
  ];
  