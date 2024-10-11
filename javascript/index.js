function updateTimeZone() {
  let copenhagenTime = moment().tz("Europe/Copenhagen");

  let copenhagenElement = document.querySelector("#copenhagen");
  let copenhagenDateElement = copenhagenElement.querySelector(".date");
  let copenhagenTimeElement = copenhagenElement.querySelector(".time");

  copenhagenDateElement.innerHTML = copenhagenTime.format("MMMM Do YYYY, dddd");
  copenhagenTimeElement.innerHTML = copenhagenTime.format(
    "h:mm [<small>]A[</small>]"
  );

  let newYorkTime = moment().tz("America/New_York");

  let newYorkElement = document.querySelector("#new_york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY, dddd");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm [<small>]A[</small>]"
  );

  let tokyoTime = moment().tz("Asia/Tokyo");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY, dddd");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm [<small>]A[</small>]");
}

function addCityToList(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace(`_`, ` `).split(`/`)[1];
  let cityDate = moment().tz(cityTimeZone).format("MMMM Do YYYY, dddd");
  let cityTime = moment().tz(cityTimeZone).format("h:mm [<small>]A[</small>]");
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city-box">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div>
            <div class="time">${cityTime}</div>
          </div>
        </div>
        `;
}

let citySelectElement = document.querySelector("#city-select");

citySelectElement.addEventListener("change", addCityToList);

updateTimeZone;
setInterval(updateTimeZone, 100);
