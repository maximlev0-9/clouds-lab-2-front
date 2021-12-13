const allCarriers = document.getElementById("allCarriers");

export const addElementToPage = ({ id, name, latitude, longtitude, schedule, 
    vehicle_name, vehicle_size_in_meters}) => {
        allCarriers.insertAdjacentHTML(
        "afterbegin",
        `<div class="carrier-instance">
                <p class="card-header">Main Data: </p>
                <p>carrier name: ${name}</p>
                <p>latitude: ${latitude} </p>
                <p>longitude: ${longtitude} </p>
                <p>schedule: ${schedule} </p>
                <p>vehicle name: ${vehicle_name}</p>
                <p>vehicle size (in meters): ${vehicle_size_in_meters} </p>
            </div>`);
};

export const displayCarrier = (stations) => {
    allCarriers.innerHTML = ""; 
    for (const item of stations) {
        addElementToPage(item);   
    }
};
