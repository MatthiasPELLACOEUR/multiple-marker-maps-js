var crd
var crdLatitude
var crdLongitude
function initMap() {
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    
    function success(pos) {
        crd = pos.coords;
        crdLatitude = crd.latitude
        crdLongitude = crd.longitude
        console.log(crd.latitude);
        console.log(crd.longitude);
        return {
            crdLatitude: crdLatitude,
            crdLongitude: crdLongitude
            };
    }
    
    function error(err){
        console.warn(`ERREUR (${err.code}: ${err.message})`)
    }
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success, error, options)
    }


    const MyPosition = { lat: crdLatitude, lng: crdLongitude}
    const RoanneDechetterie = { lat: 46.054250, lng: 4.050996 };
    const LeCoteauDechetterie = { lat: 46.025519, lng: 4.082049 };
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: MyPosition,
    });
    new google.maps.Marker({
        position: RoanneDechetterie,
        map,
        title: "Roanne!",
    });
    new google.maps.Marker({
        position: LeCoteauDechetterie,
        map,
        title: "Le Coteau!",
    });
}