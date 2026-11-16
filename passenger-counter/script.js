let count = 0;
const entries = [];

const counterList = document.createElement('p');
document.body.appendChild(counterList);
counterList.textContent = "Previous Entries : ";
const spanOutside = document.createElement('span');
counterList.appendChild(spanOutside);
spanOutside.textContent = "No saved entries yet";

const incBtn = document.getElementById('increment-btn');
const saveBtn = document.getElementById('save-btn');
const h2 = document.getElementById('counter-el');

incBtn.addEventListener('click', () => {
    count++;
    h2.textContent = count;
});

saveBtn.addEventListener("click", () => {
  if (count === 0) return;                    
  entries.push(count);
  count = 0;
  h2.textContent = count;
  spanOutside.textContent = entries.join(' - ');
});