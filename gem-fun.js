function setCoords(props, mapx) {
    var gridNumber = props.properties.num
    var lat1 = props.properties.lat
    var lng1 = props.properties.lng
    var lat2 = props.properties.lat + 0.01
    var lng2 = props.properties.lng
    var lat3 = props.properties.lat + 0.01
    var lng3 = props.properties.lng + 0.01
    var lat4 = props.properties.lat
    var lng4 = props.properties.lng + 0.01

    const myGrid = new google.maps.Polygon({
        paths: [{
            lat: lat1,
            lng: lng1
        }, {
            lat: lat2,
            lng: lng2
        }, {
            lat: lat3,
            lng: lng3
        }, {
            lat: lat4,
            lng: lng4
        }, ],

        strokeColor: "#808080",
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: getColor(gridNumber),
        fillOpacity: getOpacity(gridNumber),
    });

    myGrid.setMap(mapx);
    myGrid.addListener("click", showArrays);
    infoWindow = new google.maps.InfoWindow();
}

function getColor(gridNumber) {
    var color = "#";
    /* var index = 0;
    for (var x = 1; x < gtype.length; x += 2)
        if (gridNumber >= index + gtype[x]) index += gtype[x];
        else {
            if (gtype[x - 1] == "Rejected") color += "000000";
            else if (gtype[x - 1] == "Rural") color += "FFFFFF";
            else color += colArr[gridNumber];
        } */

    color += colArr[gridNumber];
    return color;
}

function getColorArrays(arr, arrc) {
    arrc.length = 0;
    var init = 0;
    for (var x = 1; x < arr.length; x += 2) {
        init = arr[x];
        for (var y = 0; y < init; y++) arrc.push(_Color(arr[x - 1]));
    }
}

function getOpacity(gridNumber) {
    //document.getElementById("demo").innerHTML = "hello";
    var index = 0;
    for (var x = 1; x < gtype.length; x += 2)
        if (gridNumber >= index + gtype[x]) index += gtype[x];
        else {
            if (gtype[x - 1] == "Rejected" || gtype[x - 1] == "Rural") return 0;
            else return 0.3;
        }
    return 0.3;
}

function _Color(type) {
    if (type == "Rejected") return "000000";
    else if (type == "0") return "444444";
    else if (type == "1") return "481567";
    else if (type == "2" || type == "Urban") return "453781";
    else if (type == "3") return "39569C";
    else if (type == "4") return "2D708E";
    else if (type == "5") return "238A8D";
    else if (type == "6") return "20A387";
    else if (type == "7" || type == "PeriUrban") return "3CBB75";
    else if (type == "8") return "95D840";
    else if (type == "9") return "FDE725";
    else if (type == "10") return "FFFF99";

    else return "FFFFFF";
}

function showArrays(event) {
    const polygon = this;
    const vertices = polygon.getPath();
    let contentString =
        "Location: <br>" + event.latLng.lat() + ", " + event.latLng.lng() + "<br>" +
        "Bottom Left Coordinate: " + vertices.getAt(3).lat().toFixed(2) + ", " + vertices.getAt(0).lng().toFixed(2);

    infoWindow.setContent(contentString);
    infoWindow.setPosition(event.latLng);
    infoWindow.open(map);
}