export const cammpaignData = [
  {
    id: 1,
    title: "Cosmetics",
    click: 18,
    cost: 4255,
    conversion: 8,
    revenue: 16568,
  },
  {
    id: 2,
    title: "Serum",
    click: 155,
    cost: 5122,
    conversion: 45,
    revenue: 78444,
  },
  {
    id: 3,
    title: "Fashwash",
    click: 5,
    cost: 185,
    conversion: 98,
    revenue: 444,
  },
  {
    id: 4,
    title: "Shampoo",
    click: 87,
    cost: 965,
    conversion: 35,
    revenue: 605,
  },
  {
    id: 5,
    title: "Conditioner",
    click: 60,
    cost: 23,
    conversion: 12,
    revenue: 456,
  },
  {
    id: 6,
    title: "Fashwash 2",
    click: 425,
    cost: 260,
    conversion: 45,
    revenue: 789,
  },
];

export const campaignColumn = [
  {
    name: "Campaigns",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Click",
    selector: (row) => row.click,
    sortable: true,
  },
  {
    name: "Cost",
    selector: (row) => row.cost,
    sortable: true,
  },
  {
    name: "Conversion",
    selector: (row) => row.conversion,
    sortable: true,
  },
  {
    name: "Revenue",
    selector: (row) => row.revenue,
    sortable: true,
  },
];

export const groupData = [
  {
    id: 1,
    title: "Male",
    click: 348,
    cost: 12526,
    conversion: 42,
    revenue: 61123,
  },
  {
    id: 2,
    title: "Female",
    click: 425,
    cost: 24912,
    conversion: 45,
    revenue: 789,
  },
  {
    id: 1,
    title: "Unknown",
    click: 425,
    cost: 3943,
    conversion: 45,
    revenue: 789,
  },
];

export const groupColummn = [
  {
    name: "Group",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Click",
    selector: (row) => row.click,
    sortable: true,
  },
  {
    name: "Cost",
    selector: (row) => row.cost,
    sortable: true,
  },
  {
    name: "Conversion",
    selector: (row) => row.conversion,
    sortable: true,
  },
  {
    name: "Revenue",
    selector: (row) => row.revenue,
    sortable: true,
  },
];
