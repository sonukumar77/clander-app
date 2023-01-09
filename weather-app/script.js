const getWeatherBtn = document.querySelector("#getWeatherBtn"),
  searchBtn = document.querySelector("#searchBtn"),
  searchBox = document.querySelector("#searchBox"),
  cityList = document.querySelector("#cityList");
table = document.querySelector("#table");
city = document.querySelectorAll(".city");
rows = document.getElementsByTagName("tr");

const dt = new Date();
const cityArr = ["London", "New York", "Los Angeles", "Las Vegas"];
const apidataArr = [];

async function getWeatherDetails(city) {
  try {
    const res = await fetch(
      "https://python3-dot-parul-arena-2.appspot.com/test?cityname=" + city
    );
    const data = await res.json();
    data.cityName = city;
    apidataArr.push(data);
    localStorage.setItem("apiData", JSON.stringify(apidataArr));
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}

function createRow() {
  const apiLocalData = JSON.parse(localStorage.getItem("apiData"));
  apiLocalData.forEach((e) => {
    city.forEach((singleCity) => {
      if (singleCity.innerText == e.cityName) {
        singleCity.classList.add("fetchedCity");
      }
    });
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = e.cityName;
    const td2 = document.createElement("td");
    const input = document.createElement("input");
    input.value = e.description;
    input.classList.add("editInput");

    const td3 = document.createElement("td");
    td3.innerText = e.temp_in_celsius;
    const td4 = document.createElement("td");
    td4.innerText = e.pressure_in_hPa;
    const td5 = document.createElement("td");
    td5.innerText =
      dt.getFullYear() - e.date_and_time.split(",")[0].split("/")[2];
    const td6 = document.createElement("td");
    const deleteBtn = document.createElement("a");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.style.textDecoration = "underline";
    deleteBtn.style.cursor = "pointer";

    input.addEventListener("keyup", (event) => {

      for (var i = 0; i < apiLocalData.length; i++) {
        if (e.cityName === apiLocalData[i].cityName) {
          apiLocalData[i].description = event.target.value;
          break;
        }
      }
      localStorage.setItem("apiData", JSON.stringify(apiLocalData));
    });

    deleteBtn.addEventListener("click", () => {
      for (var i = 0; i < apiLocalData.length; i++) {
        if (e.cityName === apiLocalData[i].cityName) {
          apiLocalData.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("apiData", JSON.stringify(apiLocalData));
      table.removeChild(tr);
      window.location.reload();
    });

    td2.appendChild(input);
    td6.appendChild(deleteBtn);
    tr.append(td1, td2, td3, td4, td5, td6);
    table.appendChild(tr);
  });
}

getWeatherBtn.addEventListener("click", () => {
  cityArr.forEach((element) => {
    getWeatherDetails(element);
  });
});
createRow();

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const keyword = searchBox.value;

  const apiLocalData = JSON.parse(localStorage.getItem("apiData"));
  const filterData = apiLocalData.filter((element) => {
    if (element.cityName == keyword) {
      return true;
    }
  });

  Array.from(table.rows).forEach((element, i) => {
    if (table.rows[i].cells[0].innerText == filterData[0].cityName) {
      table.rows[i].classList.add("foundRow");
      setTimeout(() => {
        table.rows[i].classList.remove("foundRow");
      }, 3000);
    }
  });
});
