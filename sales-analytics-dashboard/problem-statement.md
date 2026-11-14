# Problem Statement: Flatkart Sales Report (Console Project)

## The Situation

You are a junior developer at **Flatkart**, an online store. Priya, the operations
manager, opens a giant spreadsheet every morning to answer the same questions:

- How much money did we actually earn?
- Which products sell the most?
- Who are our best customers?
- How often do orders get cancelled?

She asks you to write a **sales report program**. You give it the list of orders,
and it prints the answers in the console. It should also work on a smaller list, for
example "only delivered orders" or "only orders from customers named Patel".

No web page is needed. You only use arrays, objects, and functions.

---

## What You Are Given

| File | What it is |
|---|---|
| `project.js` | The data (67 orders), a few helper functions, and empty functions with `// TODO` that **you fill in** |
| `answer-key.md` | Correct answers to check your work. Open it when you are done or stuck. |

**How to run it** (pick one):
- **Browser:** open any page, press F12, go to the Console tab, paste the whole file,
  and press Enter. (`console.table` looks great here.)
- **Node:** save as `project.js` and run `node project.js` in a terminal.

---

## What Is an Order?

One order is one purchase by one customer, like a shopping receipt.

```js
{
  orderId: "ORD-2002", date: "2026-10-01", status: "delivered",
  customer: "Yash Parmar", city: "Rajkot", payment: "COD",
  items: [
    { sku: "CAB-03", name: "USB-C Cable", category: "Accessories", price: 399, qty: 3 },
    { sku: "TSH-02", name: "Cotton T-Shirt", category: "Fashion", price: 599, qty: 3 },
  ],
}
```

| Field | Meaning |
|---|---|
| `status` | `delivered`, `shipped`, `pending`, or `cancelled` |
| `price` | Price of ONE unit, in rupees |
| `qty` | How many units were bought |
| `items` | The products in the order (0 to 4 items) |

**An order's total** = sum of `price × qty` over its items.
For the order above: 399 × 3 + 599 × 3 = **2994**.

---

## Business Rules

1. **Revenue** counts only `delivered` orders. Shipped and pending orders are not
   earned yet, and cancelled orders earn nothing.
2. **Orders** is the number of orders in the list you pass in.
3. **Average order** = revenue ÷ number of **delivered** orders, rounded to the
   nearest rupee. No delivered orders → `0` (never `NaN`).
4. **Cancel rate** = cancelled orders ÷ all orders in the list, as a whole
   percentage. Empty list → `0`.
5. **Top products:** rank product names by total quantity sold, counting only
   **non-cancelled** orders.
6. **Top customers:** rank customers by total spend, counting only
   **non-cancelled** orders.
7. **Ties:** if two entries have the same value, sort them A–Z by name.
8. **Missing customer:** `customer: null` counts as **"Unknown customer"**.
9. **Search** is case-insensitive and matches any part of the name
   (`"aar"` finds "Aarav Shah"). It must not crash on `customer: null`.
10. **Sorting** never changes the original `orders` array. Ties keep their original order.

> With a Shipped or Pending list, revenue is ₹0 by design (Rule 1). That is not a bug.

---

## The Functions You Write (in `project.js`)

Each one is small and does one job. They take a list of orders and return a result.

### Part A: Summary numbers
| Function | Returns |
|---|---|
| `getOrderTotal(order)` | total of one order |
| `getRevenue(list)` | revenue (delivered only) |
| `getAverageOrderValue(list)` | average per delivered order |
| `getCancelRate(list)` | cancel rate, whole number |
| `getSummary(list)` | `{ orders, revenue, average, cancelRate }` |

### Part B: Rankings
| Function | Returns |
|---|---|
| `getTopProducts(list, n)` | `[ { name, qty }, ... ]` |
| `getTopCustomers(list, n)` | `[ { customer, spend }, ... ]` |

### Part C: Filter and search
| Function | Returns |
|---|---|
| `filterByStatus(list, status)` | orders with that status (`"all"` = everything) |
| `searchByCustomer(list, text)` | orders whose customer name contains the text |
| `applyFilters(list, status, text)` | both applied together |

### Part D: Sorting
| Function | Returns |
|---|---|
| `sortOrders(list, key, direction)` | a NEW sorted array. `key` is `"orderId"`, `"customer"`, `"status"`, or `"total"`. `direction` is `"asc"` or `"desc"`. |

### Part E: The report
`printReport(list, title)` prints a report like this:

```
===== DELIVERED ORDERS =====
Orders: 36 | Revenue: ₹3,75,814 | Average: ₹10,439 | Cancel rate: 0%

TOP PRODUCTS
Boat Earbuds         ████████████████████ 13
USB-C Cable          ████████████████████ 13
Water Bottle         ████████████████████ 13

TOP CUSTOMERS
Vikram Singh         ████████████████████ ₹55,988
Neha Desai           ██████████████████ ₹49,437
Meera Patel          ████████████████ ₹45,789

FIRST 5 ORDERS
(use console.table here)
```

Use the `bar()` and `formatINR()` helpers that are already written for you. If the
list is empty, print "No orders found." instead of the report.

---

## Constraints

- Vanilla JavaScript only.
- Use array methods (`filter`, `map`, `flatMap`, `reduce`, `sort`, `slice`) for the
  calculations. **No `for` or `while` loops** in Parts A to D.
- Do not change `orders`. Copy before sorting: `[...list]`.
- Every function takes its input as a parameter. Do not use `orders` directly
  inside them. That is what lets you reuse them on any filtered list.

---

## Milestones

| # | Build | Done when |
|---|---|---|
| 1 | `getOrderTotal`, `getRevenue`, `getAverageOrderValue`, `getCancelRate`, `getSummary` | `getSummary(orders)` matches the "All" row in the answer key |
| 2 | `getTopProducts`, `getTopCustomers` | Both top-3 lists match the key, including tie order |
| 3 | `filterByStatus`, `searchByCustomer`, `applyFilters` | Counts match the key's filter checks, and `null` customers don't crash |
| 4 | `sortOrders` | First 3 results match the key, and `orders[0]` is still `ORD-2001` |
| 5 | `printReport` | The report prints for all 5 statuses and for an empty list |

Build one milestone at a time. Uncomment its test line in the TEST AREA and check
the output before moving on.

---

## Definition of Done

- [ ] Every number matches `answer-key.md`
- [ ] `getSummary` works on `[]` with no crash and no `NaN`
- [ ] `ORD-2021` (empty items) and `ORD-2042` (null customer) are handled
- [ ] Sorting never changes the original `orders`
- [ ] You can explain every line of your code out loud

---

## Tools You Might Need (small hints)

- **Group and total:** `reduce` with `{}` as the starting value, and
  `acc[key] = (acc[key] || 0) + value`
- **Object to array:** `Object.entries(obj)` gives `[["Aarav", 5], ["Neha", 3]]`.
  Then `.map(([name, value]) => ({ name, value }))` turns pairs into objects.
- **Sorting numbers:** `list.sort((a, b) => b.value - a.value)` sorts biggest first.
  `sort` changes the array it is called on, so copy first.
- **Sorting text:** `a.name.localeCompare(b.name)` sorts A–Z.
- **Combining sort rules (ties):** `(b.qty - a.qty) || a.name.localeCompare(b.name)`.
  If the first part is `0`, JavaScript uses the second part.
- **Case-insensitive search:** `text.toLowerCase()` on both sides, and `.includes()`.
- **Null-safe name:** `order.customer || "Unknown customer"`.

---

## Stretch Goals

1. Add `getRevenueByCategory(list)` and print it with bars.
2. Add `getBestDay(list)`: the date with the highest delivered revenue.
3. Add `getRepeatCustomers(list)`: customers with 3 or more orders.
4. Later, when you learn the DOM, show this report on a web page. The
   functions you wrote can be reused as they are.

---

## Interview Questions This Project Prepares You For

1. How do you group an array of objects by a property and total a value per group?
2. What is the difference between `map`, `filter`, and `reduce`?
3. Why does `sort` change the original array, and how do you avoid that?
4. What happens if you call `reduce` on an empty array without an initial value?
5. How do you make a search case-insensitive and safe when a value might be `null`?
6. Why is it better to write small functions that take parameters, instead of one big block of code?