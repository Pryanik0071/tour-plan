$(document).ready(function () {
  // Слайдер фото отеля
  const swiperHotel = new Swiper(".hotel-container", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-button--next",
      prevEl: ".hotel-button--prev",
    },

    // Keyboard control
    keyboard: {
      enabled: true,
    },
    effect: "coverflow",
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

  // Слайдер отзывов
  const swiperReviews = new Swiper(".reviews-container", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-button--next",
      prevEl: ".reviews-button--prev",
    },

    // Keyboard control
    keyboard: {
      enabled: true,
    },
  });

  // Кнопка в шапке
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.toggle("nav-menu--visible");
  });

  // Modal Window
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);

  closeModalButton.on("click", closeModal);

  $(document).keydown(function (e) {
    var modalIsOpen = $(".modal__dialog").hasClass("modal__dialog--visible");
    if (e.keyCode === 27 && modalIsOpen) {
      closeModal(e);
      console.log("Hi");
    }
  });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  // Валидация
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        "name-modal": "Name is required",
        "phone-modal": "Phone is required",
        "email-modal": "Email is required",
        name: "Name is required",
        phone: "Phone is required",
        email: "Email is required",
      },
    });
  });
});

// Parallax
$(".newsletter").parallax({ imageSrc: "templates/img/newsletter-bg.jpg" });
