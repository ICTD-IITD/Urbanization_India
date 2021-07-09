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
    map1 = new google.maps.Map(document.getElementById("map1"), op);
    map2 = new google.maps.Map(document.getElementById("map2"), op);
    map3 = new google.maps.Map(document.getElementById("map3"), op);
    map4 = new google.maps.Map(document.getElementById("map4"), op);
    map5 = new google.maps.Map(document.getElementById("map5"), op);
    map6 = new google.maps.Map(document.getElementById("map6"), op);
    map7 = new google.maps.Map(document.getElementById("map7"), op);

    catmap(flag);

    divid("legend1", "map1");
    divid("legend2", "map2");
    divid("legend3", "map3");
    divid("legend4", "map4");
    divid("legend5", "map5");
    divid("legend6", "map6");
    divid("legend7", "map7");

    makeLegend1("legend1", map1, flag);
    makeLegend1("legend2", map2, flag);
    makeLegend1("legend3", map3, flag);
    makeLegend1("legend4", map4, flag);
    makeLegend1("legend5", map5, flag);
    makeLegend1("legend6", map6, flag);
    makeLegend1("legend7", map7, flag);
}

function initMap2(flag) {
    //POPULATION
    map8 = new google.maps.Map(document.getElementById("map8"), op);
    map9 = new google.maps.Map(document.getElementById("map9"), op);
    map10 = new google.maps.Map(document.getElementById("map10"), op);
    map11 = new google.maps.Map(document.getElementById("map11"), op);
    map12 = new google.maps.Map(document.getElementById("map12"), op);
    map13 = new google.maps.Map(document.getElementById("map13"), op);
    map14 = new google.maps.Map(document.getElementById("map14"), op);

    popmap(flag);

    divid("legend1", "map8");
    divid("legend2", "map9");
    divid("legend3", "map10");
    divid("legend4", "map11");
    divid("legend5", "map12");
    divid("legend6", "map13");
    divid("legend7", "map14");

    makeLegend2("legend1", map8, 1);
    makeLegend2("legend2", map9, 2);
    makeLegend2("legend3", map10, 3);
    makeLegend2("legend4", map11, 4);
    makeLegend2("legend5", map12, 5);
    makeLegend2("legend6", map13, 6);
    makeLegend2("legend7", map14, 7);
}

function initMap3(flag) {
    //NEAREST AMENITY
    map15 = new google.maps.Map(document.getElementById("map15"), op);
    map16 = new google.maps.Map(document.getElementById("map16"), op);
    map17 = new google.maps.Map(document.getElementById("map17"), op);
    map18 = new google.maps.Map(document.getElementById("map18"), op);
    map19 = new google.maps.Map(document.getElementById("map19"), op);
    map20 = new google.maps.Map(document.getElementById("map20"), op);
    map21 = new google.maps.Map(document.getElementById("map21"), op);

    nmap(flag);

    divid("legend1", "map15");
    divid("legend2", "map16");
    divid("legend3", "map17");
    divid("legend4", "map18");
    divid("legend5", "map19");
    divid("legend6", "map20");
    divid("legend7", "map21");

    makeLegend3("legend1", map15, flag);
    makeLegend3("legend2", map16, flag);
    makeLegend3("legend3", map17, flag);
    makeLegend3("legend4", map18, flag);
    makeLegend3("legend5", map19, flag);
    makeLegend3("legend6", map20, flag);
    makeLegend3("legend7", map21, flag);
}

function initMap4(flag) {
    //NUM AMENITY
    map22 = new google.maps.Map(document.getElementById("map22"), op);
    map23 = new google.maps.Map(document.getElementById("map23"), op);
    map24 = new google.maps.Map(document.getElementById("map24"), op);
    map25 = new google.maps.Map(document.getElementById("map25"), op);
    map26 = new google.maps.Map(document.getElementById("map26"), op);
    map27 = new google.maps.Map(document.getElementById("map27"), op);
    map28 = new google.maps.Map(document.getElementById("map28"), op);

    nummap(flag);

    divid("legend1", "map22");
    divid("legend2", "map23");
    divid("legend3", "map24");
    divid("legend4", "map25");
    divid("legend5", "map26");
    divid("legend6", "map27");
    divid("legend7", "map28");

    makeLegend4("legend1", map22, flag);
    makeLegend4("legend2", map23, flag);
    makeLegend4("legend3", map24, flag);
    makeLegend4("legend4", map25, flag);
    makeLegend4("legend5", map26, flag);
    makeLegend4("legend6", map27, flag);
    makeLegend4("legend7", map28, flag);
}

function initMap5(flag) {
    //POP LOAD
    map29 = new google.maps.Map(document.getElementById("map29"), op);
    map30 = new google.maps.Map(document.getElementById("map30"), op);
    map31 = new google.maps.Map(document.getElementById("map31"), op);
    map32 = new google.maps.Map(document.getElementById("map32"), op);
    map33 = new google.maps.Map(document.getElementById("map33"), op);
    map34 = new google.maps.Map(document.getElementById("map34"), op);
    map35 = new google.maps.Map(document.getElementById("map35"), op);

    loadmap(flag);

    divid("legend1", "map29");
    divid("legend2", "map30");
    divid("legend3", "map31");
    divid("legend4", "map32");
    divid("legend5", "map33");
    divid("legend6", "map34");
    divid("legend7", "map35");

    makeLegend5("legend1", map29, flag);
    makeLegend5("legend2", map30, flag);
    makeLegend5("legend3", map31, flag);
    makeLegend5("legend4", map32, flag);
    makeLegend5("legend5", map33, flag);
    makeLegend5("legend6", map34, flag);
    makeLegend5("legend7", map35, flag);
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

function divid(legend, map) {
    const div = document.createElement("div");
    div.setAttribute("class", "legend");
    div.setAttribute("id", legend);
    document.getElementById(map).appendChild(div);
}