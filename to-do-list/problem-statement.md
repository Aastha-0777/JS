# Problem Statement: Simple To-Do List

## The Situation

You are building the first interactive page of your own. A friend wants a tiny
to-do list for their browser: type a task, press Add, see it in a list, and click
a finished task to remove it. There is no saving between visits yet.

This is a small project, but every professional DOM app starts with these steps:
read input, create elements, put them on the page, and react to clicks.

---

## What You Build

A single page with:

1. a text **input**
2. an **Add** button
3. an empty **`ol`** (ordered list) where tasks appear

```
┌────────────────────────────────────┐
│  My To-Do List                     │
│                                    │
│  [ Type a task.. ]  [Add]          │
│                                    │
│   • Buy milk                       │
│   • Finish DOM Phase 1             │
│   • Call the bank                  │
│                                    │
│  Click a task to remove it.        │
└────────────────────────────────────┘
```

**Files:** `index.html`, `script.js` (and `style.css` if you want it to look nice).

---

## Requirements

| # | Rule |
|---|---|
| R1 | The page has an input, an Add button, and an empty `ol`. |
| R2 | Clicking **Add** creates a new `li` with the typed text and appends it to the **end** of the `ol`. |
| R3 | After adding, the input is **cleared** and the cursor is back in it. |
| R4 | If the input is empty or only spaces, **nothing is added**. |
| R5 | Spaces at the start and end of a task are removed (`"  milk  "` shows as `milk`). |
| R6 | Clicking a task **removes that task only**. The others stay. |
| R7 | Clicking the empty space inside the list (not on a task) does nothing and causes **no error**. |
| R8 | Task text is shown **exactly as typed**. If you type `<b>hi</b>`, you must see those characters on the page, not bold text. |
| R9 | Adding the same text twice is allowed (two separate tasks). |

---

## Constraints

- Vanilla JavaScript only.
- Create each task with `document.createElement("li")`.
- Put the text in with **`textContent`**. Do not use `innerHTML` for task text (see R8).
- Use **one** click listener on the `ol` for removing tasks. Do not add a listener to each `li`.
- No `localStorage` yet (you are still revising it). Refreshing the page empties the list, and that is fine.

---

## Topics You Need

| Topic | Roadmap phase |
|---|---|
| `querySelector` / `getElementById` | Phase 1 |
| `createElement`, `append` / `appendChild`, `remove()` | Phase 3 |
| `input.value`, `.trim()`, `focus()` | Phase 7 and 6 |
| `addEventListener("click", ...)` | Phase 6 |
| `event.target` and `closest("li")` | Phase 6 (delegation) |

**The one new idea: event delegation.** When you click a task, the click "bubbles up"
to the `ol`. Your single listener on the `ol` can ask `event.target` which element was
really clicked. If a click lands on the `ol` itself and not on an `li`, `closest("li")`
gives you `null`, so check for that (this is R7).

---

## Milestones

| # | Build | Done when |
|---|---|---|
| 1 | HTML: input, button, empty `ol` | The page shows the three pieces, and selecting each one in the console works |
| 2 | Add a task | Clicking Add appends a `li` with the typed text (R2) |
| 3 | Clean up input | Input clears and refocuses (R3). Empty or space-only text is ignored (R4, R5) |
| 4 | Remove a task | One listener on the `ol` removes the clicked task (R6, R7) |
| 5 | Safety check | `<b>hi</b>` appears as plain text (R8) |

Build one milestone at a time and test each before you move on.

---

## Test Checklist

Try each of these by hand and tick it off.

| Action | Expected result |
|---|---|
| Type `Buy milk`, click Add | `Buy milk` appears. Input is empty |
| Click Add with an empty input | Nothing happens |
| Type three spaces, click Add | Nothing happens |
| Type `  Tea  `, click Add | Shows `Tea` with no extra spaces |
| Add `A`, `B`, `C`, click `B` | `B` disappears. `A` and `C` remain, in order |
| Click the empty space inside the list | Nothing happens. No error in the console |
| Add `Tea` twice | Two separate `Tea` tasks |
| Type `<b>hi</b>`, click Add | The page shows the text `<b>hi</b>` literally |
| Remove every task, then add a new one | It works as normal |
| Add a very long task (100+ characters) | The page does not break (add `word-break: break-word` in CSS if needed) |

---

## Definition of Done

- [ ] All 9 requirements pass the test checklist
- [ ] Only one click listener is attached for removing tasks
- [ ] No `innerHTML` is used for task text
- [ ] There are no errors in the browser console during any test
- [ ] You can explain every line of your code out loud

---

## Stretch Goals

**Level 2 (small upgrades)**
1. Pressing **Enter** in the input also adds the task. (Hint: wrap the input and button in a `<form>` and listen for `submit`, with `preventDefault()`.)
2. Show a counter: `3 tasks left`.
3. A friendly empty state: "No tasks yet" when the list is empty.

**Level 3 (more like a real app)**
4. Click a task to **mark it done** (strikethrough with a class and `classList.toggle`), and add a separate **delete button** on each task.
5. A filter: All / Active / Done.
6. Keep the tasks in an **array of objects** (`{ id, text, done }`) and write one `render()` function that redraws the list from that array.
7. When you finish revising it, save the array to `localStorage`.

---

## Interview Questions This Project Prepares You For

1. How do you add an element to the page with JavaScript, step by step?
2. What is event delegation, and why is one listener on the `ol` better than one per `li`?
3. What is the difference between `event.target` and `event.currentTarget`?
4. Why use `textContent` instead of `innerHTML` for text typed by a user?
5. What does `closest()` do, and why can it return `null`?
6. What does `trim()` do, and why does an empty-input check need it?