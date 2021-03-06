// Функция ymaps.ready() будет вызвана, когда загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчнию: «широта, долгота».
    center: [59.968392, 30.317626],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,
    controls: [
      'zoomControl', // Ползунок масштаба
    ]
  });

  // Добавление метки
  var myPlacemark = new ymaps.Placemark([59.968392, 30.317626], {
    // Хинт показывается при наведении мышкой на иконку метки.
    hintContent: 'Drink2Go',
    // Балун откроется при клике по метке.
    balloonContent: 'Интернет-магазин кофейных напитков'
  },{
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',

    // Своё изображение иконки метки.
    iconImageHref: '../img/map-pin.png',
    // Размеры метки.
    iconImageSize: [38, 50],
    // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
    iconImageOffset: [-19, -45],
  });

  // После того как метка была создана, добавляем её на карту.
  myMap.geoObjects.add(myPlacemark);
}
