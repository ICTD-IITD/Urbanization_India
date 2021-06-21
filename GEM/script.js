function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var map1 = new google.maps.Map(document.getElementById("map1"), mapProp);
  var map2 = new google.maps.Map(document.getElementById("map2"), mapProp);
  var map3 = new google.maps.Map(document.getElementById("map3"), mapProp);
  var map4 = new google.maps.Map(document.getElementById("map4"), mapProp);
  var map5 = new google.maps.Map(document.getElementById("map5"), mapProp);
  var map6 = new google.maps.Map(document.getElementById("map6"), mapProp);

  var s2map1 = new google.maps.Map(
    document.getElementById("section-2-map1"),
    mapProp
  );
  var s2map2 = new google.maps.Map(
    document.getElementById("section-2-map2"),
    mapProp
  );
  var s2map3 = new google.maps.Map(
    document.getElementById("section-2-map3"),
    mapProp
  );
  var s2map4 = new google.maps.Map(
    document.getElementById("section-2-map4"),
    mapProp
  );
  var s2map5 = new google.maps.Map(
    document.getElementById("section-2-map5"),
    mapProp
  );
  var s2map6 = new google.maps.Map(
    document.getElementById("section-2-map6"),
    mapProp
  );
  var s2map7 = new google.maps.Map(
    document.getElementById("section-2-map7"),
    mapProp
  );

  var s3map1 = new google.maps.Map(
    document.getElementById("section-3-map1"),
    mapProp
  );
  var s3map2 = new google.maps.Map(
    document.getElementById("section-3-map2"),
    mapProp
  );
  var s3map3 = new google.maps.Map(
    document.getElementById("section-3-map3"),
    mapProp
  );
  var s3map4 = new google.maps.Map(
    document.getElementById("section-3-map4"),
    mapProp
  );
  var s3map5 = new google.maps.Map(
    document.getElementById("section-3-map5"),
    mapProp
  );
  var s3map6 = new google.maps.Map(
    document.getElementById("section-3-map6"),
    mapProp
  );
  var s3map7 = new google.maps.Map(
    document.getElementById("section-3-map7"),
    mapProp
  );
}
