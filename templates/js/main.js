// Слайдер
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },

  // Keyboard control
  keyboard: {
    enabled: true,
  },
});

// Карта
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [7.890712, 98.294725],
    zoom: 17,
  });
  // Создание геообъекта с типом точка (метка).
  var myPlacemark = new ymaps.Placemark(
    [7.890712, 98.294725],
    {
      balloonContentHeader: "DoubleTree by Hilton Phuket Banthai Resort",
    },
    {
      preset: "islands#redHotelIcon",
    }
  );

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}
