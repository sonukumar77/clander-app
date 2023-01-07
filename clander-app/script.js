const monthsRef = document.getElementById("months");
const yearsRef = document.getElementById("years");

const dt = new Date();

function renderClander(dataParam) {
  const getDay = dt.getDay();
  let today;
  if (dataParam == "") {
    today = new Date();
  } else {
    today = dataParam;
  }

  const endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
  const prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let m = "";
  for (let i = 0; i < 12; i++) {
    m = m + `<option value=${i}>${months[i]}</option>`;
  }
  monthsRef.innerHTML = m;

  let y = "";
  for (let i = 2025; i >= 2000; i--) {
    y = y + `<option value=${i}>${i}</option>`;
  }
  yearsRef.innerHTML = y;

  let cells = "";

  for (let i = getDay; i >= 0; i--) {
    cells = cells + `<div class="prev_dates"> ${prevDate - i}</div>`;
  }

  for (let i = 1; i <= endDate; i++) {
    if (dataParam == "") {
      if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
        cells = cells + `<div class='current_date'> ${i}</div>`;
      } else {
        cells = cells + `<div> ${i}</div>`;
      }
    } else {
      cells = cells + `<div> ${i}</div>`;
    }


  }

  document.querySelector(".date").innerHTML = cells;
}



const enterBtn = document.getElementById("enterBtn");
const dateInput = document.getElementById("dateInput");

enterBtn.addEventListener("click", () => {
  console.log(monthsRef.value, yearsRef.value, dateInput.value);
  dt.setDate(dateInput.value);
  dt.setFullYear(yearsRef.value);
  dt.setMonth(monthsRef.value);
  renderClander(dateInput.value);
  console.log(
    dt.setDate(dateInput.value),
    dt.setFullYear(yearsRef.value),
    dt.setMonth(monthsRef.value)
  );
});
