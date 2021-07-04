let map;
let infoWindow;
let dataArr;
var gtype;
var colArr = [];

var map1, map2, map3, map4, map5, map6, map7;
var map8, map9, map10, map11, map12, map13, map14;
var map15, map16, map17, map18, map19, map20, map21;
var map22, map23, map24, map25, map26, map27, map28;
var map29, map30, map31, map32, map33, map34, map35;

var basemap = { lat: 20.59, lng: 78.96 };
var bangalore = { lat: 12.93, lng: 77.57 };
var chennai = { lat: 13.04, lng: 80.24 };
var delhi = { lat: 28.64, lng: 77.08 };
var gurgaon = { lat: 28.37, lng: 76.93 };
var hyderabad = { lat: 17.38, lng: 78.46 };
var kolkata = { lat: 22.55, lng: 88.34 };
var mumbai = { lat: 19.08, lng: 72.88 };

var op = { zoom: 5, center: basemap };

function initMap(flag) {
    if (flag == 1) initMap1(1);
    else if (flag == 2) initMap2(1);
    else if (flag == 3) initMap3(1);
    else if (flag == 4) initMap4(2);
    else if (flag == 5) initMap5(1);
}

function initMap1(flag) {
    //OSM
    var mapset1 = [map1, map2, map3, map4, map5, map6, map7];
    mapset1.forEach(element => {
        if (element != undefined)
            element.remove();
    });

    map1 = L.map('map1').setView(bangalore, 9.25);
    map2 = L.map('map2').setView(chennai, 10.75);
    map3 = L.map('map3').setView(delhi, 9.25);
    map4 = L.map('map4').setView(gurgaon, 9.25);
    map5 = L.map('map5').setView(hyderabad, 10.75);
    map6 = L.map('map6').setView(kolkata, 10.75);
    map7 = L.map('map7').setView(mumbai, 9.75);

    var mapset2 = [map1, map2, map3, map4, map5, map6, map7];
    mapset2.forEach(element => {
        tile(element);
        makeLegend1(element, flag);
    });

    catmap(flag);
}

function initMap2(flag) {
    //POPULATION
    var mapset1 = [map8, map9, map10, map11, map12, map13, map14];
    mapset1.forEach(element => {
        if (element != undefined)
            element.remove();
    });

    map8 = L.map('map8').setView(bangalore, 9.25);
    map9 = L.map('map9').setView(chennai, 10.75);
    map10 = L.map('map10').setView(delhi, 9.25);
    map11 = L.map('map11').setView(gurgaon, 9.25);
    map12 = L.map('map12').setView(hyderabad, 10.75);
    map13 = L.map('map13').setView(kolkata, 10.75);
    map14 = L.map('map14').setView(mumbai, 9.75);

    var mapset2 = [map8, map9, map10, map11, map12, map13, map14];
    mapset2.forEach(element => {
        tile(element);
        makeLegend2(element, flag);
    });

    popmap(flag);
}

function initMap3(flag) {
    //NEAREST AMENITY
    var mapset1 = [map15, map16, map17, map18, map19, map20, map21];
    mapset1.forEach(element => {
        if (element != undefined)
            element.remove();
    });

    map15 = L.map('map15').setView(bangalore, 9.25);
    map16 = L.map('map16').setView(chennai, 10.75);
    map17 = L.map('map17').setView(delhi, 9.25);
    map18 = L.map('map18').setView(gurgaon, 9.25);
    map19 = L.map('map19').setView(hyderabad, 10.75);
    map20 = L.map('map20').setView(kolkata, 10.75);
    map21 = L.map('map21').setView(mumbai, 9.75);

    var mapset2 = [map15, map16, map17, map18, map19, map20, map21];
    mapset2.forEach(element => {
        tile(element);
        makeLegend3(element, flag);
    });

    nmap(flag);
}

function initMap4(flag) {
    //NUM AMENITY
    var mapset1 = [map22, map23, map24, map25, map26, map27, map28];
    mapset1.forEach(element => {
        if (element != undefined)
            element.remove();
    });

    map22 = L.map('map22').setView(bangalore, 9.25);
    map23 = L.map('map23').setView(chennai, 10.75);
    map24 = L.map('map24').setView(delhi, 9.25);
    map25 = L.map('map25').setView(gurgaon, 9.25);
    map26 = L.map('map26').setView(hyderabad, 10.75);
    map27 = L.map('map27').setView(kolkata, 10.75);
    map28 = L.map('map28').setView(mumbai, 9.75);

    var mapset2 = [map22, map23, map24, map25, map26, map27, map28];
    mapset2.forEach(element => {
        tile(element);
        makeLegend4(element, flag);
    });

    nummap(flag);
}

function initMap5(flag) {
    //POP LOAD
    var mapset1 = [map29, map30, map31, map32, map33, map34, map35];
    mapset1.forEach(element => {
        if (element != undefined)
            element.remove();
    });

    map29 = L.map('map29').setView(bangalore, 9.25);
    map30 = L.map('map30').setView(chennai, 10.75);
    map31 = L.map('map31').setView(delhi, 9.25);
    map32 = L.map('map32').setView(gurgaon, 9.25);
    map33 = L.map('map33').setView(hyderabad, 10.75);
    map34 = L.map('map34').setView(kolkata, 10.75);
    map35 = L.map('map35').setView(mumbai, 9.75);

    var mapset2 = [map29, map30, map31, map32, map33, map34, map35];
    mapset2.forEach(element => {
        tile(element);
        makeLegend5(element, flag);
    });

    loadmap(flag);
}

function catmap(flag) {
    ban(1, flag, map1);
    che(1, flag, map2);
    del(1, flag, map3);
    gur(1, flag, map4);
    hyd(1, flag, map5);
    kol(1, flag, map6);
    mum(1, flag, map7);
}


function popmap(flag) {
    ban(2, flag, map8);
    che(2, flag, map9);
    del(2, flag, map10);
    gur(2, flag, map11);
    hyd(2, flag, map12);
    kol(2, flag, map13);
    mum(2, flag, map14);
}

function nmap(flag) {
    ban(3, flag, map15);
    che(3, flag, map16);
    del(3, flag, map17);
    gur(3, flag, map18);
    hyd(3, flag, map19);
    kol(3, flag, map20);
    mum(3, flag, map21);
}

function nummap(flag) {
    ban(3, flag, map22);
    che(3, flag, map23);
    del(3, flag, map24);
    gur(3, flag, map25);
    hyd(3, flag, map26);
    kol(3, flag, map27);
    mum(3, flag, map28);
}

function loadmap(flag) {
    ban(4, flag, map29);
    che(4, flag, map30);
    del(4, flag, map31);
    gur(4, flag, map32);
    hyd(4, flag, map33);
    kol(4, flag, map34);
    mum(4, flag, map35);
}

function tile(mapx) {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaGFyc2hpdGEyNjA1IiwiYSI6ImNrcW94a2YxOTBpZTYycnFoZnhrZHV2d2UifQ.vjNlkRwqbMgDjrKhBAHkDA'
    }).addTo(mapx);

    //POPUP
    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("Location Clicked: " + e.latlng.toString())
            .openOn(mapx);
    }
    mapx.on('click', onMapClick);
}