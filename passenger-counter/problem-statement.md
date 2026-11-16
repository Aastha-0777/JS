# Problem Statement: Subway Passenger Counter

## The Situation

You work for a subway company. At the station gate, an attendant stands by the
turnstile. Every time a person walks in, they tap a button. At the end of each train,
they press **Save** to record how many people boarded, and the counter starts again
from zero for the next train.

Right now the attendants use a notebook. You are building a small web page that
replaces it.

---

## What You Build

A single page with:

1. a heading
2. a big **count** (starts at 0)
3. an **Increment** button
4. a **Save** button
5. a line that shows the **previous entries**

```
┌──────────────────────────────────────┐
│         People entering              │
│                                      │
│                 5                    │
│                                      │
│    [ INCREMENT ]      [ SAVE ]       │
│                                      │
│    Previous entries: 7 - 3 - 12      │
└──────────────────────────────────────┘
```

**Files:** `index.html`, `script.js`, `style.css`.
You may build the page in HTML or create it in JavaScript like your to-do list.
Either is fine.

---

## Requirements

| # | Rule |
|---|---|
| R1 | On load, the count shows **0**. The entries line shows a friendly message such as "No saved entries yet". |
| R2 | Each click on **Increment** adds exactly **1** to the count, and the page shows the new number. |
| R3 | The count is stored in a **JavaScript number variable**. You never read it back from the page text. |
| R4 | Clicking **Save** adds the current count to the list of previous entries, then **resets the count to 0** (variable and display). |
| R5 | Previous entries show in the order they were saved, separated by ` - `, for example `7 - 3 - 12`. |
| R6 | The entries line has **no leading or trailing separator**. `7 - 3 - ` is wrong. |
| R7 | Saving when the count is **0 does nothing**. No empty entries are added. |
| R8 | 50 fast clicks on Increment give exactly **50**. No click is lost. |
| R9 | Large numbers (for example 10,000) display without breaking the layout. |
| R10 | Both buttons are real `<button>` elements, so they work with the **keyboard** (Tab, then Enter or Space). |
| R11 | The page never reloads while you use it. |

---

## Constraints

- Vanilla JavaScript only.
- Keep the count in a variable declared with **`let`** (it changes, so `const` would not work).
- Use **`addEventListener`**, not the inline `onclick="..."` attribute.
- Update the page with **`textContent`**.
- Keep the saved entries in an **array**, and build the displayed text from it.
- No `localStorage` yet. Refreshing the page starts over, and that is fine.

---

## Topics You Need

| Topic | Roadmap phase |
|---|---|
| `let`, numbers, `count++` | JavaScript basics |
| Functions | JavaScript basics |
| Arrays: `push()`, `join()`, `length` | JavaScript basics (you know these) |
| `getElementById` / `querySelector` | Phase 1 |
| `textContent` | Phase 3 |
| `addEventListener("click", ...)` | Phase 6 |
| `<button>` and keyboard behaviour | Phase 4 and 9 |

**Two ideas to understand before you start**

1. **The variable is the truth. The page only shows it.**
   If you read the count back from the page, you get a **string**, and `"5" + 1` is
   `"51"`, not `6`. Keep the real number in your variable, and copy it to the page.
2. **Build the entries text from an array.** If you add `" - "` after every entry as
   you go, the last one leaves a trailing separator (R6). An array with `join(" - ")`
   avoids that problem.

---

## Milestones

| # | Build | Done when |
|---|---|---|
| 1 | The static page: heading, count, two buttons, entries line | The page shows all five pieces, and you can select each one from the console |
| 2 | Increment | Each click adds 1 and the display updates (R2, R3) |
| 3 | Save and reset | Save stores the number, then count and display return to 0 (R4) |
| 4 | Entries display | Entries show with ` - ` between them, no extra separator, and the empty message works (R1, R5, R6) |
| 5 | Edge cases | Saving at 0 is ignored, and fast clicking and large numbers work (R7, R8, R9) |
| 6 | Style | The count is big and clear, the buttons are easy to tap, and the layout works on a phone |

Build one milestone at a time and test each before moving on.

---

## Test Checklist

Try each one by hand and tick it off.

| Action | Expected result |
|---|---|
| Open the page | Count is 0. Entries show "No saved entries yet" |
| Click Increment 3 times | The count shows 3 |
| Click Save | Entries show `3`. Count is back at 0 |
| Click Increment 5 times, then Save | Entries show `3 - 5`. Count is 0 |
| Click Save when the count is 0 | Nothing changes (R7) |
| Save three entries in a row | No leading or trailing ` - ` anywhere (R6) |
| Click Increment 50 times quickly | The count shows exactly 50 |
| Click Increment 10,000 times (use a loop in the console) | The count shows 10000 and the layout holds |
| Use only the keyboard (Tab to a button, press Enter or Space) | Both buttons work |
| In the console, type `count` (if it is accessible) | It equals the number on screen |
| Refresh the page | Everything resets (expected for now) |

---

## Definition of Done

- [ ] All 11 requirements pass the test checklist
- [ ] The count is a `let` number variable that is never read back from the page
- [ ] Saved entries are kept in an array and shown with `join`
- [ ] Both buttons use `addEventListener`
- [ ] There are no errors in the browser console during any test
- [ ] You can explain every line of your code out loud

---

## Stretch Goals

**Level 2**
1. A **Decrement** button that never goes below 0.
2. Show the **total** of all saved entries (use `reduce`).
3. Show the **highest** saved entry (use `Math.max(...entries)`).
4. A **Clear history** button.

**Level 3**
5. An **Undo last save** button that removes the last entry (`pop()`).
6. Show entries as a numbered list (`ol`) instead of one line.
7. Press the **Space bar** anywhere on the page to increment (listen for `keydown`).
8. Save the entries with `localStorage` when you finish revising it.

---

## Interview Questions This Project Prepares You For

1. Why did you use `let` for the count and not `const`?
2. Why is it a bad idea to read the count back from the page? What type does `textContent` give you?
3. What is the difference between `getElementById` and `querySelector`?
4. Why use `addEventListener` instead of an inline `onclick` attribute?
5. How did you avoid the trailing ` - ` in the entries line?
6. What should happen if the user clicks Save at 0, and why did you choose that?
7. How would you keep the entries after the page refreshes?