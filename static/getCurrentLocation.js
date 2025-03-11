import { inputText, actionBtn } from "./form.js";



```
Function to get the current location of the user
```
const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                const locationData = {
                    lat: latitude,
                    lon: longitude,
                };

                inputText.value = JSON.stringify(locationData);
                actionBtn.disabled = false;
            },
            error => {
                console.error(error);
            }
        );
    } else {
        console.error("Geolocation (in Navigator) is not supported by this browser.");
    }
};


```
Make function globally accessible
```
window.getCurrentLocation = getCurrentLocation;
