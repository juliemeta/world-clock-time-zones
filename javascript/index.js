function updateTimeZone() {
  let copenhagenTime = moment().tz("Europe/Copenhagen");

  let copenhagenElement = document.querySelector("#copenhagen");
  let copenhagenDateElement = copenhagenElement.querySelector(".date");
  let copenhagenTimeElement = copenhagenElement.querySelector(".time");

  copenhagenDateElement.innerHTML = copenhagenTime.format("MMMM Do YYYY, dddd");
  copenhagenTimeElement.innerHTML = copenhagenTime.format(
    "h:mm [<small>]A[</small>]"
  );

  let tokyoTime = moment().tz("Asia/Tokyo");

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY, dddd");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm [<small>]A[</small>]");
}

updateTimeZone;
setInterval(updateTimeZone, 100);
