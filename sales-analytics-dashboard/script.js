// =====================================================================
//  FLATKART SALES REPORT  (console project)
//  Run it:  node project.js     OR paste the whole file in your browser
//  console (F12 -> Console). Read the rules in problem-statement.md.
// =====================================================================

// ---------------------------- DATA (do not edit) ----------------------------
const orders = [
  {
    orderId: "ORD-2001",
    date: "2026-10-01",
    status: "cancelled",
    customer: "Imran Qureshi",
    city: "Mumbai",
    payment: "UPI",
    items: [
      {
        sku: "MOB-128",
        name: "Redmi Note 13",
        category: "Mobiles",
        price: 17999,
        qty: 1,
      },
      {
        sku: "STD-09",
        name: "Laptop Stand",
        category: "Computing",
        price: 1199,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2002",
    date: "2026-10-01",
    status: "delivered",
    customer: "Yash Parmar",
    city: "Rajkot",
    payment: "COD",
    items: [
      {
        sku: "CAB-03",
        name: "USB-C Cable",
        category: "Accessories",
        price: 399,
        qty: 3,
      },
      {
        sku: "TSH-02",
        name: "Cotton T-Shirt",
        category: "Fashion",
        price: 599,
        qty: 3,
      },
    ],
  },
  {
    orderId: "ORD-2003",
    date: "2026-10-02",
    status: "cancelled",
    customer: "Harsh Trivedi",
    city: "Ahmedabad",
    payment: "NetBanking",
    items: [
      {
        sku: "LMP-12",
        name: "Desk Lamp",
        category: "Home",
        price: 899,
        qty: 3,
      },
    ],
  },
  {
    orderId: "ORD-2004",
    date: "2026-10-05",
    status: "delivered",
    customer: "Neha Desai",
    city: "Surat",
    payment: "UPI",
    items: [
      {
        sku: "AIR-15",
        name: "Air Fryer",
        category: "Home",
        price: 5999,
        qty: 1,
      },
      {
        sku: "JKT-06",
        name: "Denim Jacket",
        category: "Fashion",
        price: 2499,
        qty: 1,
      },
      {
        sku: "SCR-05",
        name: "Screen Guard",
        category: "Accessories",
        price: 199,
        qty: 2,
      },
      {
        sku: "BTL-08",
        name: "Water Bottle",
        category: "Home",
        price: 449,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2005",
    date: "2026-10-06",
    status: "cancelled",
    customer: "Vikram Singh",
    city: "Delhi",
    payment: "COD",
    items: [
      {
        sku: "AIR-15",
        name: "Air Fryer",
        category: "Home",
        price: 5999,
        qty: 1,
      },
      {
        sku: "PWR-10",
        name: "Power Bank 10000mAh",
        category: "Accessories",
        price: 1299,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2006",
    date: "2026-10-06",
    status: "delivered",
    customer: "Karan Malhotra",
    city: "Delhi",
    payment: "COD",
    items: [
      {
        sku: "BTL-08",
        name: "Water Bottle",
        category: "Home",
        price: 449,
        qty: 1,
      },
      {
        sku: "MSE-04",
        name: "Wireless Mouse",
        category: "Computing",
        price: 699,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2007",
    date: "2026-10-06",
    status: "cancelled",
    customer: "Aarav Shah",
    city: "Surat",
    payment: "COD",
    items: [
      {
        sku: "MSE-04",
        name: "Wireless Mouse",
        category: "Computing",
        price: 699,
        qty: 1,
      },
      {
        sku: "KEY-07",
        name: "Mechanical Keyboard",
        category: "Computing",
        price: 3499,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2008",
    date: "2026-10-07",
    status: "delivered",
    customer: "Vikram Singh",
    city: "Delhi",
    payment: "UPI",
    items: [
      {
        sku: "TSH-02",
        name: "Cotton T-Shirt",
        category: "Fashion",
        price: 599,
        qty: 3,
      },
      {
        sku: "MOB-135",
        name: "Samsung Galaxy M35",
        category: "Mobiles",
        price: 21999,
        qty: 1,
      },
      {
        sku: "CAB-03",
        name: "USB-C Cable",
        category: "Accessories",
        price: 399,
        qty: 1,
      },
      {
        sku: "AIR-15",
        name: "Air Fryer",
        category: "Home",
        price: 5999,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2009",
    date: "2026-10-07",
    status: "cancelled",
    customer: "Vikram Singh",
    city: "Delhi",
    payment: "NetBanking",
    items: [
      {
        sku: "CVR-01",
        name: "Back Cover",
        category: "Accessories",
        price: 299,
        qty: 1,
      },
      {
        sku: "STD-09",
        name: "Laptop Stand",
        category: "Computing",
        price: 1199,
        qty: 1,
      },
      {
        sku: "JKT-06",
        name: "Denim Jacket",
        category: "Fashion",
        price: 2499,
        qty: 2,
      },
      {
        sku: "CAB-03",
        name: "USB-C Cable",
        category: "Accessories",
        price: 399,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2010",
    date: "2026-10-08",
    status: "cancelled",
    customer: "Ananya Iyer",
    city: "Bengaluru",
    payment: "NetBanking",
    items: [
      {
        sku: "AUD-22",
        name: "Boat Earbuds",
        category: "Accessories",
        price: 1499,
        qty: 2,
      },
      {
        sku: "MOB-128",
        name: "Redmi Note 13",
        category: "Mobiles",
        price: 17999,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2011",
    date: "2026-10-08",
    status: "delivered",
    customer: "Divya Reddy",
    city: "Hyderabad",
    payment: "COD",
    items: [
      {
        sku: "AUD-22",
        name: "Boat Earbuds",
        category: "Accessories",
        price: 1499,
        qty: 3,
      },
      {
        sku: "MSE-04",
        name: "Wireless Mouse",
        category: "Computing",
        price: 699,
        qty: 1,
      },
      {
        sku: "CAB-03",
        name: "USB-C Cable",
        category: "Accessories",
        price: 399,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2012",
    date: "2026-10-08",
    status: "delivered",
    customer: "Divya Reddy",
    city: "Hyderabad",
    payment: "UPI",
    items: [
      {
        sku: "STD-09",
        name: "Laptop Stand",
        category: "Computing",
        price: 1199,
        qty: 3,
      },
      {
        sku: "MSE-04",
        name: "Wireless Mouse",
        category: "Computing",
        price: 699,
        qty: 1,
      },
      {
        sku: "SCR-05",
        name: "Screen Guard",
        category: "Accessories",
        price: 199,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2013",
    date: "2026-10-10",
    status: "cancelled",
    customer: "Neha Desai",
    city: "Surat",
    payment: "UPI",
    items: [
      {
        sku: "TSH-02",
        name: "Cotton T-Shirt",
        category: "Fashion",
        price: 599,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2014",
    date: "2026-10-14",
    status: "shipped",
    customer: "Imran Qureshi",
    city: "Mumbai",
    payment: "NetBanking",
    items: [
      {
        sku: "LMP-12",
        name: "Desk Lamp",
        category: "Home",
        price: 899,
        qty: 1,
      },
      {
        sku: "PWR-10",
        name: "Power Bank 10000mAh",
        category: "Accessories",
        price: 1299,
        qty: 3,
      },
    ],
  },
  {
    orderId: "ORD-2015",
    date: "2026-10-15",
    status: "pending",
    customer: "Meera Patel",
    city: "Ahmedabad",
    payment: "UPI",
    items: [
      {
        sku: "SCR-05",
        name: "Screen Guard",
        category: "Accessories",
        price: 199,
        qty: 2,
      },
      {
        sku: "AIR-15",
        name: "Air Fryer",
        category: "Home",
        price: 5999,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2016",
    date: "2026-10-16",
    status: "pending",
    customer: "Aarav Shah",
    city: "Surat",
    payment: "NetBanking",
    items: [
      {
        sku: "SCR-05",
        name: "Screen Guard",
        category: "Accessories",
        price: 199,
        qty: 1,
      },
      {
        sku: "SHO-11",
        name: "Running Shoes",
        category: "Fashion",
        price: 2999,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2017",
    date: "2026-10-17",
    status: "shipped",
    customer: "Aarav Shah",
    city: "Surat",
    payment: "UPI",
    items: [
      {
        sku: "SCR-05",
        name: "Screen Guard",
        category: "Accessories",
        price: 199,
        qty: 1,
      },
      {
        sku: "KEY-07",
        name: "Mechanical Keyboard",
        category: "Computing",
        price: 3499,
        qty: 1,
      },
      {
        sku: "TSH-02",
        name: "Cotton T-Shirt",
        category: "Fashion",
        price: 599,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2018",
    date: "2026-10-17",
    status: "delivered",
    customer: "Harsh Trivedi",
    city: "Ahmedabad",
    payment: "Card",
    items: [
      {
        sku: "BTL-08",
        name: "Water Bottle",
        category: "Home",
        price: 449,
        qty: 3,
      },
      {
        sku: "MSE-04",
        name: "Wireless Mouse",
        category: "Computing",
        price: 699,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2019",
    date: "2026-10-19",
    status: "delivered",
    customer: "Meera Patel",
    city: "Ahmedabad",
    payment: "NetBanking",
    items: [
      {
        sku: "BTL-08",
        name: "Water Bottle",
        category: "Home",
        price: 449,
        qty: 3,
      },
      {
        sku: "AUD-22",
        name: "Boat Earbuds",
        category: "Accessories",
        price: 1499,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2020",
    date: "2026-10-19",
    status: "delivered",
    customer: "Meera Patel",
    city: "Ahmedabad",
    payment: "UPI",
    items: [
      {
        sku: "MSE-04",
        name: "Wireless Mouse",
        category: "Computing",
        price: 699,
        qty: 1,
      },
      {
        sku: "BTL-08",
        name: "Water Bottle",
        category: "Home",
        price: 449,
        qty: 1,
      },
      {
        sku: "MOB-135",
        name: "Samsung Galaxy M35",
        category: "Mobiles",
        price: 21999,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2021",
    date: "2026-10-19",
    status: "pending",
    customer: "Vikram Singh",
    city: "Delhi",
    payment: "Card",
    items: [],
  },
  {
    orderId: "ORD-2022",
    date: "2026-10-20",
    status: "shipped",
    customer: "Vikram Singh",
    city: "Delhi",
    payment: "Card",
    items: [
      {
        sku: "CAB-03",
        name: "USB-C Cable",
        category: "Accessories",
        price: 399,
        qty: 2,
      },
      {
        sku: "STD-09",
        name: "Laptop Stand",
        category: "Computing",
        price: 1199,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2023",
    date: "2026-10-21",
    status: "shipped",
    customer: "Ananya Iyer",
    city: "Bengaluru",
    payment: "UPI",
    items: [
      {
        sku: "MSE-04",
        name: "Wireless Mouse",
        category: "Computing",
        price: 699,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2024",
    date: "2026-10-21",
    status: "delivered",
    customer: "Aarav Shah",
    city: "Surat",
    payment: "Card",
    items: [
      {
        sku: "PWR-10",
        name: "Power Bank 10000mAh",
        category: "Accessories",
        price: 1299,
        qty: 1,
      },
      {
        sku: "SHO-11",
        name: "Running Shoes",
        category: "Fashion",
        price: 2999,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2025",
    date: "2026-10-22",
    status: "delivered",
    customer: "Aarav Shah",
    city: "Surat",
    payment: "UPI",
    items: [
      {
        sku: "PWR-10",
        name: "Power Bank 10000mAh",
        category: "Accessories",
        price: 1299,
        qty: 1,
      },
      {
        sku: "AUD-22",
        name: "Boat Earbuds",
        category: "Accessories",
        price: 1499,
        qty: 3,
      },
      {
        sku: "LMP-12",
        name: "Desk Lamp",
        category: "Home",
        price: 899,
        qty: 2,
      },
      {
        sku: "MOB-135",
        name: "Samsung Galaxy M35",
        category: "Mobiles",
        price: 21999,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2026",
    date: "2026-10-23",
    status: "delivered",
    customer: "Rohan Mehta",
    city: "Rajkot",
    payment: "COD",
    items: [
      {
        sku: "CAB-03",
        name: "USB-C Cable",
        category: "Accessories",
        price: 399,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2027",
    date: "2026-10-23",
    status: "pending",
    customer: "Vikram Singh",
    city: "Delhi",
    payment: "COD",
    items: [
      {
        sku: "JKT-06",
        name: "Denim Jacket",
        category: "Fashion",
        price: 2499,
        qty: 2,
      },
      {
        sku: "PWR-10",
        name: "Power Bank 10000mAh",
        category: "Accessories",
        price: 1299,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2028",
    date: "2026-10-24",
    status: "delivered",
    customer: "Ananya Iyer",
    city: "Bengaluru",
    payment: "Card",
    items: [
      {
        sku: "TSH-02",
        name: "Cotton T-Shirt",
        category: "Fashion",
        price: 599,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2029",
    date: "2026-10-24",
    status: "delivered",
    customer: "Neha Desai",
    city: "Surat",
    payment: "UPI",
    items: [
      {
        sku: "BTL-08",
        name: "Water Bottle",
        category: "Home",
        price: 449,
        qty: 2,
      },
      {
        sku: "LMP-12",
        name: "Desk Lamp",
        category: "Home",
        price: 899,
        qty: 2,
      },
      {
        sku: "MOB-128",
        name: "Redmi Note 13",
        category: "Mobiles",
        price: 17999,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2030",
    date: "2026-10-25",
    status: "delivered",
    customer: "Neha Desai",
    city: "Surat",
    payment: "NetBanking",
    items: [
      {
        sku: "MOB-128",
        name: "Redmi Note 13",
        category: "Mobiles",
        price: 17999,
        qty: 1,
      },
      {
        sku: "MSE-04",
        name: "Wireless Mouse",
        category: "Computing",
        price: 699,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2031",
    date: "2026-10-26",
    status: "delivered",
    customer: "Yash Parmar",
    city: "Rajkot",
    payment: "UPI",
    items: [
      {
        sku: "CAB-03",
        name: "USB-C Cable",
        category: "Accessories",
        price: 399,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2032",
    date: "2026-10-26",
    status: "delivered",
    customer: "Vikram Singh",
    city: "Delhi",
    payment: "COD",
    items: [
      {
        sku: "STD-09",
        name: "Laptop Stand",
        category: "Computing",
        price: 1199,
        qty: 1,
      },
      {
        sku: "MOB-128",
        name: "Redmi Note 13",
        category: "Mobiles",
        price: 17999,
        qty: 1,
      },
      {
        sku: "SCR-05",
        name: "Screen Guard",
        category: "Accessories",
        price: 199,
        qty: 2,
      },
      {
        sku: "AIR-15",
        name: "Air Fryer",
        category: "Home",
        price: 5999,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2033",
    date: "2026-10-26",
    status: "shipped",
    customer: "Neha Desai",
    city: "Surat",
    payment: "UPI",
    items: [
      {
        sku: "AUD-22",
        name: "Boat Earbuds",
        category: "Accessories",
        price: 1499,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2034",
    date: "2026-10-27",
    status: "delivered",
    customer: "Divya Reddy",
    city: "Hyderabad",
    payment: "UPI",
    items: [
      {
        sku: "JKT-06",
        name: "Denim Jacket",
        category: "Fashion",
        price: 2499,
        qty: 1,
      },
      {
        sku: "LMP-12",
        name: "Desk Lamp",
        category: "Home",
        price: 899,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2035",
    date: "2026-10-27",
    status: "delivered",
    customer: "Pooja Nair",
    city: "Pune",
    payment: "NetBanking",
    items: [
      {
        sku: "SHO-11",
        name: "Running Shoes",
        category: "Fashion",
        price: 2999,
        qty: 2,
      },
      {
        sku: "CVR-01",
        name: "Back Cover",
        category: "Accessories",
        price: 299,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2036",
    date: "2026-10-28",
    status: "delivered",
    customer: "Harsh Trivedi",
    city: "Ahmedabad",
    payment: "UPI",
    items: [
      {
        sku: "MSE-04",
        name: "Wireless Mouse",
        category: "Computing",
        price: 699,
        qty: 2,
      },
      {
        sku: "PWR-10",
        name: "Power Bank 10000mAh",
        category: "Accessories",
        price: 1299,
        qty: 1,
      },
      {
        sku: "SHO-11",
        name: "Running Shoes",
        category: "Fashion",
        price: 2999,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2037",
    date: "2026-10-28",
    status: "delivered",
    customer: "Yash Parmar",
    city: "Rajkot",
    payment: "NetBanking",
    items: [
      {
        sku: "AUD-22",
        name: "Boat Earbuds",
        category: "Accessories",
        price: 1499,
        qty: 3,
      },
      {
        sku: "LMP-12",
        name: "Desk Lamp",
        category: "Home",
        price: 899,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2038",
    date: "2026-10-29",
    status: "pending",
    customer: "Neha Desai",
    city: "Surat",
    payment: "COD",
    items: [
      {
        sku: "TSH-02",
        name: "Cotton T-Shirt",
        category: "Fashion",
        price: 599,
        qty: 3,
      },
    ],
  },
  {
    orderId: "ORD-2039",
    date: "2026-10-29",
    status: "delivered",
    customer: "Imran Qureshi",
    city: "Mumbai",
    payment: "Card",
    items: [
      {
        sku: "STD-09",
        name: "Laptop Stand",
        category: "Computing",
        price: 1199,
        qty: 3,
      },
      {
        sku: "CAB-03",
        name: "USB-C Cable",
        category: "Accessories",
        price: 399,
        qty: 1,
      },
      {
        sku: "CVR-01",
        name: "Back Cover",
        category: "Accessories",
        price: 299,
        qty: 3,
      },
    ],
  },
  {
    orderId: "ORD-2040",
    date: "2026-10-30",
    status: "delivered",
    customer: "Sneha Kulkarni",
    city: "Pune",
    payment: "NetBanking",
    items: [
      {
        sku: "MOB-135",
        name: "Samsung Galaxy M35",
        category: "Mobiles",
        price: 21999,
        qty: 1,
      },
      {
        sku: "SHO-11",
        name: "Running Shoes",
        category: "Fashion",
        price: 2999,
        qty: 1,
      },
      {
        sku: "CVR-01",
        name: "Back Cover",
        category: "Accessories",
        price: 299,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2041",
    date: "2026-10-30",
    status: "delivered",
    customer: "Meera Patel",
    city: "Ahmedabad",
    payment: "COD",
    items: [
      {
        sku: "MOB-128",
        name: "Redmi Note 13",
        category: "Mobiles",
        price: 17999,
        qty: 1,
      },
      {
        sku: "MSE-04",
        name: "Wireless Mouse",
        category: "Computing",
        price: 699,
        qty: 2,
      },
      {
        sku: "CAB-03",
        name: "USB-C Cable",
        category: "Accessories",
        price: 399,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2042",
    date: "2026-11-01",
    status: "delivered",
    customer: null,
    city: null,
    payment: "COD",
    items: [
      {
        sku: "PWR-10",
        name: "Power Bank 10000mAh",
        category: "Accessories",
        price: 1299,
        qty: 1,
      },
      {
        sku: "MSE-04",
        name: "Wireless Mouse",
        category: "Computing",
        price: 699,
        qty: 1,
      },
      {
        sku: "MOB-135",
        name: "Samsung Galaxy M35",
        category: "Mobiles",
        price: 21999,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2043",
    date: "2026-11-01",
    status: "delivered",
    customer: "Rohan Mehta",
    city: "Rajkot",
    payment: "Card",
    items: [
      {
        sku: "SCR-05",
        name: "Screen Guard",
        category: "Accessories",
        price: 199,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2044",
    date: "2026-11-01",
    status: "cancelled",
    customer: "Neha Desai",
    city: "Surat",
    payment: "NetBanking",
    items: [
      {
        sku: "SCR-05",
        name: "Screen Guard",
        category: "Accessories",
        price: 199,
        qty: 3,
      },
      {
        sku: "TSH-02",
        name: "Cotton T-Shirt",
        category: "Fashion",
        price: 599,
        qty: 3,
      },
      {
        sku: "SHO-11",
        name: "Running Shoes",
        category: "Fashion",
        price: 2999,
        qty: 1,
      },
      {
        sku: "MOB-128",
        name: "Redmi Note 13",
        category: "Mobiles",
        price: 17999,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2045",
    date: "2026-11-01",
    status: "delivered",
    customer: "Pooja Nair",
    city: "Pune",
    payment: "UPI",
    items: [
      {
        sku: "AUD-22",
        name: "Boat Earbuds",
        category: "Accessories",
        price: 1499,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2046",
    date: "2026-11-02",
    status: "delivered",
    customer: "Harsh Trivedi",
    city: "Ahmedabad",
    payment: "Card",
    items: [
      {
        sku: "MOB-128",
        name: "Redmi Note 13",
        category: "Mobiles",
        price: 17999,
        qty: 1,
      },
      {
        sku: "BTL-08",
        name: "Water Bottle",
        category: "Home",
        price: 449,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2047",
    date: "2026-11-02",
    status: "shipped",
    customer: "Pooja Nair",
    city: "Pune",
    payment: "UPI",
    items: [
      {
        sku: "KEY-07",
        name: "Mechanical Keyboard",
        category: "Computing",
        price: 3499,
        qty: 1,
      },
      {
        sku: "CVR-01",
        name: "Back Cover",
        category: "Accessories",
        price: 299,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2048",
    date: "2026-11-02",
    status: "shipped",
    customer: "Ananya Iyer",
    city: "Bengaluru",
    payment: "COD",
    items: [
      {
        sku: "STD-09",
        name: "Laptop Stand",
        category: "Computing",
        price: 1199,
        qty: 1,
      },
      {
        sku: "SHO-11",
        name: "Running Shoes",
        category: "Fashion",
        price: 2999,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2049",
    date: "2026-11-02",
    status: "cancelled",
    customer: "Pooja Nair",
    city: "Pune",
    payment: "UPI",
    items: [
      {
        sku: "LMP-12",
        name: "Desk Lamp",
        category: "Home",
        price: 899,
        qty: 2,
      },
      {
        sku: "AIR-15",
        name: "Air Fryer",
        category: "Home",
        price: 5999,
        qty: 1,
      },
      {
        sku: "STD-09",
        name: "Laptop Stand",
        category: "Computing",
        price: 1199,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2050",
    date: "2026-11-03",
    status: "delivered",
    customer: "Sneha Kulkarni",
    city: "Pune",
    payment: "COD",
    items: [
      {
        sku: "KEY-07",
        name: "Mechanical Keyboard",
        category: "Computing",
        price: 3499,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2051",
    date: "2026-11-04",
    status: "cancelled",
    customer: "Kavya Joshi",
    city: "Vadodara",
    payment: "Card",
    items: [
      {
        sku: "AIR-15",
        name: "Air Fryer",
        category: "Home",
        price: 5999,
        qty: 1,
      },
      {
        sku: "SCR-05",
        name: "Screen Guard",
        category: "Accessories",
        price: 199,
        qty: 3,
      },
      {
        sku: "PWR-10",
        name: "Power Bank 10000mAh",
        category: "Accessories",
        price: 1299,
        qty: 1,
      },
      {
        sku: "CVR-01",
        name: "Back Cover",
        category: "Accessories",
        price: 299,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2052",
    date: "2026-11-05",
    status: "delivered",
    customer: "Sneha Kulkarni",
    city: "Pune",
    payment: "Card",
    items: [
      {
        sku: "AUD-22",
        name: "Boat Earbuds",
        category: "Accessories",
        price: 1499,
        qty: 1,
      },
      {
        sku: "KEY-07",
        name: "Mechanical Keyboard",
        category: "Computing",
        price: 3499,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2053",
    date: "2026-11-05",
    status: "delivered",
    customer: "Kavya Joshi",
    city: "Vadodara",
    payment: "NetBanking",
    items: [
      {
        sku: "LMP-12",
        name: "Desk Lamp",
        category: "Home",
        price: 899,
        qty: 2,
      },
      {
        sku: "AUD-22",
        name: "Boat Earbuds",
        category: "Accessories",
        price: 1499,
        qty: 1,
      },
      {
        sku: "CVR-01",
        name: "Back Cover",
        category: "Accessories",
        price: 299,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2054",
    date: "2026-11-05",
    status: "cancelled",
    customer: "Rohan Mehta",
    city: "Rajkot",
    payment: "COD",
    items: [
      {
        sku: "JKT-06",
        name: "Denim Jacket",
        category: "Fashion",
        price: 2499,
        qty: 1,
      },
      {
        sku: "SCR-05",
        name: "Screen Guard",
        category: "Accessories",
        price: 199,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2055",
    date: "2026-11-05",
    status: "delivered",
    customer: "Ananya Iyer",
    city: "Bengaluru",
    payment: "UPI",
    items: [
      {
        sku: "SCR-05",
        name: "Screen Guard",
        category: "Accessories",
        price: 199,
        qty: 2,
      },
      {
        sku: "AIR-15",
        name: "Air Fryer",
        category: "Home",
        price: 5999,
        qty: 1,
      },
      {
        sku: "PWR-10",
        name: "Power Bank 10000mAh",
        category: "Accessories",
        price: 1299,
        qty: 3,
      },
      {
        sku: "SHO-11",
        name: "Running Shoes",
        category: "Fashion",
        price: 2999,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2056",
    date: "2026-11-06",
    status: "shipped",
    customer: "Ananya Iyer",
    city: "Bengaluru",
    payment: "Card",
    items: [
      {
        sku: "BTL-08",
        name: "Water Bottle",
        category: "Home",
        price: 449,
        qty: 3,
      },
    ],
  },
  {
    orderId: "ORD-2057",
    date: "2026-11-06",
    status: "shipped",
    customer: "Karan Malhotra",
    city: "Delhi",
    payment: "NetBanking",
    items: [
      {
        sku: "MSE-04",
        name: "Wireless Mouse",
        category: "Computing",
        price: 699,
        qty: 1,
      },
      {
        sku: "PWR-10",
        name: "Power Bank 10000mAh",
        category: "Accessories",
        price: 1299,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2058",
    date: "2026-11-06",
    status: "delivered",
    customer: "Vikram Singh",
    city: "Delhi",
    payment: "UPI",
    items: [
      {
        sku: "SCR-05",
        name: "Screen Guard",
        category: "Accessories",
        price: 199,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2059",
    date: "2026-11-07",
    status: "shipped",
    customer: "Rohan Mehta",
    city: "Rajkot",
    payment: "COD",
    items: [
      {
        sku: "PWR-10",
        name: "Power Bank 10000mAh",
        category: "Accessories",
        price: 1299,
        qty: 2,
      },
      {
        sku: "TSH-02",
        name: "Cotton T-Shirt",
        category: "Fashion",
        price: 599,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2060",
    date: "2026-11-07",
    status: "delivered",
    customer: "Ananya Iyer",
    city: "Bengaluru",
    payment: "UPI",
    items: [
      {
        sku: "CAB-03",
        name: "USB-C Cable",
        category: "Accessories",
        price: 399,
        qty: 2,
      },
      {
        sku: "MOB-128",
        name: "Redmi Note 13",
        category: "Mobiles",
        price: 17999,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2061",
    date: "2026-11-08",
    status: "delivered",
    customer: "Karan Malhotra",
    city: "Delhi",
    payment: "COD",
    items: [
      {
        sku: "AIR-15",
        name: "Air Fryer",
        category: "Home",
        price: 5999,
        qty: 1,
      },
      {
        sku: "SHO-11",
        name: "Running Shoes",
        category: "Fashion",
        price: 2999,
        qty: 1,
      },
      {
        sku: "LMP-12",
        name: "Desk Lamp",
        category: "Home",
        price: 899,
        qty: 2,
      },
      {
        sku: "PWR-10",
        name: "Power Bank 10000mAh",
        category: "Accessories",
        price: 1299,
        qty: 3,
      },
    ],
  },
  {
    orderId: "ORD-2062",
    date: "2026-11-08",
    status: "delivered",
    customer: "Sneha Kulkarni",
    city: "Pune",
    payment: "COD",
    items: [
      {
        sku: "AIR-15",
        name: "Air Fryer",
        category: "Home",
        price: 5999,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2063",
    date: "2026-11-09",
    status: "pending",
    customer: "Rohan Mehta",
    city: "Rajkot",
    payment: "UPI",
    items: [
      {
        sku: "SCR-05",
        name: "Screen Guard",
        category: "Accessories",
        price: 199,
        qty: 3,
      },
      {
        sku: "PWR-10",
        name: "Power Bank 10000mAh",
        category: "Accessories",
        price: 1299,
        qty: 2,
      },
      {
        sku: "AUD-22",
        name: "Boat Earbuds",
        category: "Accessories",
        price: 1499,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2064",
    date: "2026-11-09",
    status: "pending",
    customer: "Harsh Trivedi",
    city: "Ahmedabad",
    payment: "Card",
    items: [
      {
        sku: "STD-09",
        name: "Laptop Stand",
        category: "Computing",
        price: 1199,
        qty: 1,
      },
      {
        sku: "KEY-07",
        name: "Mechanical Keyboard",
        category: "Computing",
        price: 3499,
        qty: 2,
      },
      {
        sku: "AIR-15",
        name: "Air Fryer",
        category: "Home",
        price: 5999,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2065",
    date: "2026-11-10",
    status: "shipped",
    customer: "Ananya Iyer",
    city: "Bengaluru",
    payment: "NetBanking",
    items: [
      {
        sku: "CVR-01",
        name: "Back Cover",
        category: "Accessories",
        price: 299,
        qty: 1,
      },
      {
        sku: "MSE-04",
        name: "Wireless Mouse",
        category: "Computing",
        price: 699,
        qty: 2,
      },
    ],
  },
  {
    orderId: "ORD-2066",
    date: "2026-11-11",
    status: "shipped",
    customer: "Vikram Singh",
    city: "Delhi",
    payment: "UPI",
    items: [
      {
        sku: "SCR-05",
        name: "Screen Guard",
        category: "Accessories",
        price: 199,
        qty: 1,
      },
      {
        sku: "MOB-128",
        name: "Redmi Note 13",
        category: "Mobiles",
        price: 17999,
        qty: 1,
      },
      {
        sku: "KEY-07",
        name: "Mechanical Keyboard",
        category: "Computing",
        price: 3499,
        qty: 1,
      },
      {
        sku: "CAB-03",
        name: "USB-C Cable",
        category: "Accessories",
        price: 399,
        qty: 1,
      },
    ],
  },
  {
    orderId: "ORD-2067",
    date: "2026-11-11",
    status: "pending",
    customer: "Rohan Mehta",
    city: "Rajkot",
    payment: "COD",
    items: [
      {
        sku: "AIR-15",
        name: "Air Fryer",
        category: "Home",
        price: 5999,
        qty: 2,
      },
      {
        sku: "CVR-01",
        name: "Back Cover",
        category: "Accessories",
        price: 299,
        qty: 2,
      },
      {
        sku: "MSE-04",
        name: "Wireless Mouse",
        category: "Computing",
        price: 699,
        qty: 2,
      },
    ],
  },
];

// Turns 375814 into "₹3,75,814"
function formatINR(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

// Draws a bar for the top lists. bar(13, 19) -> a bar about 68% as long as full
function bar(value, max, width = 20) {
  if (max === 0) return "";
  return "".repeat(Math.round((value / max) * width));
}

// Returns the total of ONE order (sum of price x qty). Empty items -> 0.
function getOrderTotal(order) {
  return order.items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

// Revenue: total of DELIVERED orders only.
function getRevenue(list) {
  return list
    .filter((o) => o.status === "delivered")
    .reduce((sum, o) => sum + getOrderTotal(o), 0);
}

// Revenue / number of delivered orders, rounded. No delivered orders -> 0.
function getAverageOrderValue(list) {
  const deliveredCount = list.filter((o) => o.status === "delivered").length;
  if (deliveredCount === 0) return 0;
  return Math.round(getRevenue(list) / deliveredCount);
}

// Cancelled / all orders, as a whole percentage. Empty list -> 0.
function getCancelRate(list) {
  const cancelledCount = list.filter((o) => o.status === "cancelled").length;
  if (list.length === 0) return 0;
  return Math.round((cancelledCount / list.length) * 100);
}

// Returns { orders, revenue, average, cancelRate } for the list.
function getSummary(list) {
  return {
    orders: list.length,
    revenue: getRevenue(list),
    average: getAverageOrderValue(list),
    cancelRate: getCancelRate(list),
  };
}

// Top n products by total qty, cancelled orders excluded.
// Returns [ { name: "Wireless Mouse", qty: 19 }, ... ]. Ties: A-Z by name.
function getTopProducts(list, n) {
  const qtyByName = list
    .filter((o) => o.status !== "cancelled")
    .flatMap((o) => o.items)
    .reduce((acc, item) => {
      acc[item.name] = (acc[item.name] || 0) + item.qty;
      return acc;
    }, {});

  return Object.entries(qtyByName)
    .map(([name, qty]) => ({ name, qty }))
    .sort((a, b) => b.qty - a.qty || a.name.localeCompare(b.name))
    .slice(0, n);
}

// Top n customers by total spend, cancelled orders excluded.
// Returns [ { customer: "Vikram Singh", spend: 86378 }, ... ].
// customer: null counts as "Unknown customer". Ties: A-Z by name.
function getTopCustomers(list, n) {
  const qtyByName = list
    .filter((o) => o.status !== "cancelled")
    .reduce((acc, o) => {
      acc[o.customer || "Unknown customer"] =
        (acc[o.customer || "Unknown customer"] || 0) + getOrderTotal(o);
      return acc;
    }, {});

  return Object.entries(qtyByName)
    .map(([customer, spend]) => ({ customer, spend }))
    .sort((a, b) => b.spend - a.spend || a.customer.localeCompare(b.customer))
    .slice(0, n);
}

// status "all" returns everything; otherwise only orders with that status.
function filterByStatus(list, status) {
  if (status === "all") return list;
  return list.filter((o) => o.status === status);
}

// Keeps orders whose customer name contains the text (ANY letter case).
// Must not crash when customer is null.
function searchByCustomer(list, text) {
  return list.filter((o) =>
    (o.customer || "").toLowerCase().includes(text.toLowerCase()),
  );
}

// Applies the status filter AND the search together.
function applyFilters(list, status, text) {
  return searchByCustomer(filterByStatus(list, status), text);
}

// key: "orderId" | "customer" | "status" | "total"   direction: "asc" | "desc"
// Must return a NEW array. The original list must stay unchanged.
function sortOrders(list, key, direction) {
  return [...list].sort((a, b) => {
    let result;
    if (key === "total") {
      result = getOrderTotal(a) - getOrderTotal(b);
    } else if (key === "customer") {
      result = (a.customer || "Unknown customer").localeCompare(
        b.customer || "Unknown customer",
      );
    } else {
      result = a[key].localeCompare(b[key]);
    }
    return direction === "asc" ? result : -result;
  });
}

// Prints a readable report for the list (see problem-statement.md for layout).
function printReport(list, title) {
  if (list.length === 0) {
    console.log("No orders found.");
    return;
  }

  const summary = getSummary(list);
  console.log(`===== ${title} =====`);
  console.log(
    `Orders: ${summary.orders} | Revenue: ${formatINR(summary.revenue)} | ` +
      `Average: ${formatINR(summary.average)} | Cancel rate: ${summary.cancelRate}%`,
  );

  const products = getTopProducts(list, 3);
  console.log("\nTOP PRODUCTS");
  if (products.length === 0) {
    console.log("No data");
  } else {
    console.log(
      products
        .map(
          (p) => `${p.name.padEnd(20)} ${bar(p.qty, products[0].qty)} ${p.qty}`,
        )
        .join("\n"),
    );
  }

  const customers = getTopCustomers(list, 3);
  console.log("\nTOP CUSTOMERS");
  if (customers.length === 0) {
    console.log("No data");
  } else {
    console.log(
      customers
        .map(
          (c) => `${c.customer.padEnd(20)} ${bar(c.spend, customers[0].spend)} ${formatINR(c.spend)}`,
        )
        .join("\n"),
    );
  }
  console.log("\nFIRST 5 ORDERS");
  console.table(
    list.slice(0, 5).map((o) => ({
      orderId: o.orderId,
      customer: o.customer || "Unknown customer", // remember the "Unknown customer" fallback
      status: o.status,
      total: formatINR(getOrderTotal(o)),
    })),
  );
}

// ----------------------- TEST AREA (uncomment as you go) -----------------------
// console.log(getOrderTotal(orders[1])); // Milestone 1 -> 2994
// console.log(getOrderTotal(orders[0]));   // should print 19198
// console.log(getOrderTotal(orders[20]));  // empty items, should print 0
// console.log(getRevenue(orders));   // should print 375814
// console.log(getRevenue([]));       // should print 0, not crash
// console.log(getAverageOrderValue(orders));                                    // 10439
// console.log(getAverageOrderValue([]));                                        // 0
// console.log(getAverageOrderValue(orders.filter(o => o.status === "shipped"))); // 0
// console.log(getCancelRate(orders));                                       // 16
// console.log(getCancelRate([]));                                           // 0
// console.log(getCancelRate(orders.filter(o => o.status === "cancelled"))); // 100
// console.log(getCancelRate(orders.filter(o => o.status === "delivered"))); // 0
// console.log(getSummary(orders));                  // Milestone 1
// console.table(getSummary(orders));
// // orders: 67, revenue: 375814, average: 10439, cancelRate: 16
// console.table(getSummary([]));
// // orders: 0, revenue: 0, average: 0, cancelRate: 0
// console.table(getSummary(orders.filter((o) => o.status === "shipped")));
// // orders: 12, revenue: 0, average: 0, cancelRate: 0
// console.table(getSummary(orders.filter((o) => o.status === "cancelled")));
// // orders: 11, revenue: 0, average: 0, cancelRate: 100
// console.log(getTopProducts(orders, 3));           // Milestone 2
// console.table(getTopProducts(orders, 3));
// // Power Bank 10000mAh: 19, Wireless Mouse: 19, Screen Guard: 17
// // (the first two are tied, so they go A-Z)
// console.table(
//   getTopProducts(
//     orders.filter((o) => o.status === "delivered"),
//     3,
//   ),
// );
// // Boat Earbuds: 13, USB-C Cable: 13, Water Bottle: 13
// console.log(getTopProducts([], 3)); // []  (no crash)
// console.log(getTopCustomers(orders, 3));          // Milestone 2
// console.table(getTopCustomers(orders, 3));
// // Vikram Singh: 86378, Neha Desai: 52733, Meera Patel: 52186
// console.table(
//   getTopCustomers(
//     orders.filter((o) => o.status === "delivered"),
//     3,
//   ),
// );
// // Vikram Singh: 55988, Neha Desai: 49437, Meera Patel: 45789
// console.table(getTopCustomers(orders, 20));
// // Look for a row named "Unknown customer" with spend 23997 (that's ORD-2042)
// console.log(getTopCustomers([], 3)); // []
// console.log(filterByStatus(orders, "all").length);         // 67
// console.log(filterByStatus(orders, "delivered").length);   // 36
// console.log(filterByStatus(orders, "shipped").length);     // 12
// console.log(filterByStatus(orders, "pending").length);     // 8
// console.log(filterByStatus(orders, "cancelled").length);   // 11

// console.log(searchByCustomer(orders, "aar").length);       // 5
// console.log(searchByCustomer(orders, "AAR").length);       // 5 (capital letters)
// console.log(searchByCustomer(orders, "patel").length);     // 4
// console.log(searchByCustomer(orders, "xyz").length);       // 0
// console.log(searchByCustomer(orders, "").length);          // what do you get? and why? 67

// console.log(applyFilters(orders, "delivered", "patel").length);  // 3
// console.log(applyFilters(orders, "shipped", "shah").length);     // 1
// console.log(applyFilters(orders, "cancelled", "aar").length);    // 1
// console.log(applyFilters(orders, "delivered", "patel").length);  // Milestone 3

// console.table(sortOrders(orders, "total", "desc").slice(0, 3));
// // ORD-2008 (30194), ORD-2025 (29593), ORD-2040 (25596)
// console.table(sortOrders(orders, "customer", "asc").slice(0, 3));
// // ORD-2007, ORD-2016, ORD-2017 (all Aarav Shah)
// console.table(sortOrders(orders, "status", "asc").slice(0, 3));
// // ORD-2001, ORD-2003, ORD-2005 (all cancelled)
// console.table(sortOrders(orders, "orderId", "desc").slice(0, 3));
// // ORD-2067, ORD-2066, ORD-2065
// console.log(orders[0].orderId);   // must still be "ORD-2001"
// console.table(sortOrders(orders, "total", "desc").slice(0, 3));  // Milestone 4
// printReport(orders, "ALL ORDERS");                // Milestone 5const deliveredObj = orders.filter((o) => o.status === "delivered");

printReport(orders, "ALL ORDERS");
// printReport(filterByStatus(orders, "delivered"), "DELIVERED ORDERS");
// printReport(searchByCustomer(orders, "patel"), "PATEL ORDERS");
// printReport(applyFilters(orders, "shipped", "xyz"), "NO MATCH");
// printReport(filterByStatus(orders, "cancelled"), "CANCELLED ORDERS");
