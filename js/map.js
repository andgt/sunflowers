var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map('map', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: [44.575366, 34.344181], // Партенит
    zoom: 18
  }, {
    searchControlProvider: 'yandex#search'
  });

  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [44.575366, 34.344181] // координаты точки
    }
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject);

  myMap.behaviors.disable("scrollZoom");
}
