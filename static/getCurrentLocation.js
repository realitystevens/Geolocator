(function() {
    const currentLocation = document.getElementById('current_location');
    const addressGetLocation = document.querySelector('.address_getLocation');

    const getCurrentLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
            
                    const locationData = {
                        latitude: latitude,
                        longitude: longitude
                    };
            
                    console.log(locationData);
                    
                    // Send the latitude and longitude to the Flask app
                    fetch('http://localhost:5000/get_location', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(locationData)
                    })
                    .then(response => {
                        if (!response.ok) {
                          throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json()
                      })
                      .then(data => {
                        console.log('Success:', data);
                      })
                      .catch(error => {
                        console.error('Error:', error);
                      });
                },
                error => {
                    console.error(error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    // Make getCurrentLocation() available in the global scope
    window.getCurrentLocation = getCurrentLocation;
})();