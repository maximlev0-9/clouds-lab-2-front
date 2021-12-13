import { post } from "./post-method.js";

const submitButton = document.getElementById("submit_button");

const carrierNameElement = document.getElementById("carrier_name");
const latitudeElement = document.getElementById("latitude");
const longitudeElement = document.getElementById("longitude");
const scheduleElement = document.getElementById("schedule");
const vehicleNameElement = document.getElementById("vehicle_name");
const vehicleSizeInMetersElement = document.getElementById(
  "vehicle_size_in_meters"
);

submitButton.addEventListener("click", async (event) => {
  const {
    name,
    latitude,
    longtitude,
    schedule,
    vehicle_name,
    vehicle_size_in_meters,
  } = getInputValues();
  var obj = getInputValues();
  console.log(obj)
  console.log(name);
  if (
    name != null &&
    latitude != null &&
    longtitude != null &&
    schedule != null &&
    vehicle_name != null &&
    vehicle_size_in_meters != null
  ) {
    let newItem = getInputValues();
    console.log(newItem);
    await post(newItem);
    clearInputs();
    event.preventDefault();
  }
});

function clearInputs() {
  carrierNameElement.value = "";
  latitudeElement.value = "";
  longitudeElement.value = "";
  scheduleElement.value = "";
  vehicleNameElement.value = "";
  vehicleSizeInMetersElement.value = "";
}

function getInputValues() {
  return {
    carrier_depth: 0,
    name: carrierNameElement.value,
    latitude: latitudeElement.value,
    longtitude: longitudeElement.value,
    schedule: scheduleElement.value,
    vehicle_name: vehicleNameElement.value,
    vehicle_size_in_meters: vehicleSizeInMetersElement.value,
  };
}
