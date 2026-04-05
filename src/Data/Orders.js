// src/data/orders.js

export const orders = [
  {
    _id: "o1",
    name: "Nour Hasan",
    user: "1",
    numberOrder: 1,
    tableNumber: 3,
    products: [
      { product: "p1", quantity: 2 },
      { product: "p31", quantity: 1 },
    ],
    status: "pending",
    totalAmount: 6.5,
    isCompleted: false,
  },
  {
    _id: "o2",
    name: "Nour Hasan",
    user: "1",
    numberOrder: 2,
    tableNumber: 5,
    products: [
      { product: "p16", quantity: 1 },
      { product: "p59", quantity: 1 },
    ],
    status: "ready",
    totalAmount: 5.25,
    isCompleted: false,
  },
  
    
];

