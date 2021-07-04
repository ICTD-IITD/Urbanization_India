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

    var polygonPoints = [
        [lat1, lng1],
        [lat2, lng2],
        [lat3, lng3],
        [lat4, lng4]
    ];

    var poly = L.polygon(polygonPoints, {
        color: '#808080',
        weight: 2,
        opacity: 0.8,
        fillColor: getColor(gridNumber),
        fillOpacity: getOpacity(gridNumber)
    }).addTo(mapx);
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
            else return 0.5;
        }
    return 0.5;
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