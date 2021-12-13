import { displayCarrier } from "./script.js";

const urlCarriers = "https://lab-2-function.azurewebsites.net/api/carrier";

const main_part = document.getElementById("main-page");

export const getCarriers = async () => {

  try {
    let response = await fetch(urlCarriers);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
  
};

export async function displayAllTheCarriers() {
  let allTheCarriers = await getCarriers();
  displayCarrier(allTheCarriers);
}

if (main_part != null) {
main_part.addEventListener("load", displayAllTheCarriers());
}