var initMap = function() {
	var w = $(window).width();
	var zm = 14;
	var coords = [51.661953505612296,39.14955035581963];
	if (w<768) {
		coords = [51.661953505612296,39.14955035581963];
	}
	ymaps.ready(init);
	function init(){
		var myMap = new ymaps.Map("map", {
			// Координаты центра карты.
			// Порядок по умолчанию: «широта, долгота».
			// Чтобы не определять координаты центра карты вручную,
			// воспользуйтесь инструментом Определение координат.
			center: coords,
			// Уровень масштабирования. Допустимые значения:
			// от 0 (весь мир) до 19.
			zoom: zm,
			controls: ['zoomControl']
		});

		myMap.behaviors.disable('scrollZoom');

		var myPlacemark = new ymaps.Placemark(coords, {
			hintContent: '',
			balloonContent: 'АВТОМИР БОГЕМИЯ ВОРОНЕЖ'
		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: 'img/map-marker.svg',
			// Размеры метки.
			iconImageSize: [30, 45],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-15, -23]
		});

		myMap.geoObjects
			.add(myPlacemark);
	}
}

export default initMap;