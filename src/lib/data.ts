export interface KPI {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
}

export interface ChartData {
  name: string;
  revenue: number;
  visitors: number;
}

// Simulated Server Data Fetching
export async function getDashboardData() {
  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    kpis: [
      {
        label: "Total Revenue",
        value: "$45,231.89",
        change: "+20.1% from last month",
        trend: "up",
      },
      {
        label: "Subscriptions",
        value: "+2350",
        change: "+180.1% from last month",
        trend: "up",
      },
      {
        label: "Sales",
        value: "+12,234",
        change: "+19% from last month",
        trend: "up",
      },
      {
        label: "Active Now",
        value: "+573",
        change: "+201 since last hour",
        trend: "up",
      },
    ] as KPI[],
    recentSales: [
      {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        amount: "+$1,999.00",
      },
      {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        amount: "+$39.00",
      },
      {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        amount: "+$299.00",
      },
    ],
    overview: [
      { name: "Jan", revenue: 2000, visitors: 1000 },
      { name: "Feb", revenue: 3000, visitors: 1500 },
      { name: "Mar", revenue: 5000, visitors: 2000 },
      { name: "Apr", revenue: 4000, visitors: 1800 },
      { name: "May", revenue: 6000, visitors: 2500 },
      { name: "Jun", revenue: 7000, visitors: 3000 },
    ] as ChartData[],
  };
}
