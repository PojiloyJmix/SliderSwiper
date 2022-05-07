new Swiper('.swiper', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    draggable: true,
    // Буллеты
    // clickable: true,
    // type: 'bulets',
    // Динамические буллеты
    // dynamicBullets: true,
    // Кастомные буллеты (точки в булитах)
    // renderBullet: function (index, className) {
    // return '<span class=" ' + className + ' ">' + (index + 1) + '</span>';
    // },
    // под слыйдером будут значения (текущий слайд / количество) и можно добавить слова
    // type: 'fraction',
    // Заполнябщаеся линия / Прогрессбар
    // type: 'progressbar'
  },
  // Navigation arrows
  // Включение /отключение пертаскивания на ПК
  // simulateTouch: folse,
  // Чувствительность
  touchRatio: 1,

  // управление колесом мыши
  mousewheel: {
    // Чувствительность
    // sensitivity: .2,
    // Класс объекта на котором будет срабатывать прокрутка мышью
    eventsTarget: ".image-slider"
  },
  direction: 'horizontal',
  // Автовысота
  autoHeight: false,
  // Количество слайдеров для показа
  slidesPerView: 3,
  // Если слайдов меньше чем узаказано то отключаем его 
  // watchOverflow: true,
  // Отступ между слайдами 
  spaceBetween: 30,
  // Количество пролистываемых слайдов
  // slidesPerGroup: 1,
  // Активный слайд по центру
  centeredSlides: false,
  // Стартовый слайд
  // initialSlide: 0,
  // Мультирядность
  // slidesPerColumn: 2,
  // Бесконечный слайдер
  // loop: false,
  // Количество дублирующих слайдов
  // LoopedSlides: 0,
  // Свободный режим
  // freeMode: true,
  // Автопрокрутка
  // autoplay: {
  // Пауза между прокруткой
  // delay: 2000,
  // Закончить на последнем слайде
  // stopOnLastSlide: true,
  // Отключить после ручного переключения
  // disableOnInteraction: false,
  // },
  // Скорость
  speed: 800,
  // Вертикальный слайдер
  // direction: 'vertical',

  // Эффекты переключения слайдов.1
  // Смена прозрачности
  // effect: 'fade',
  // Дополнение в fade
  // fadeEffect: {
  //  Параллельная смена прозрачности
  // crossFade: true
  // },
  // Эффекты переключения слайдов.2
  //  Переворот
  // effect: 'flip',
  // Дополнение к flip
  // FlipEffect: {
  // Тень
  // slideShadows: true,
  // Показ только активного поля
  // limitRotation: true
  // },
  // Эффекты переключения слайдов.3
  // Куб
  // effect: 'cube',
  // Дополнительно к cube
  // cubeEffect: {
  // настройки тени
  //   slideShadows: true,
  //   shadow: true,
  //   shadowWffset: 20,
  //   shadowScale: 0.94
  // }, 
  // Эффекты переключения слайдов.4
  // Эффект потока
  // effect: 'coverflow',
  // Дополнение к coverflow
  // coverflowEffect: {
  // Угол
  // rotate: 20,
  // Наложение
  // stretch: 50,
  // Тень
  // slideShadows: true,
  // },

  // Брейк поинты (адаптив)
  // Ширина экрана
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   480: {
  //     slidesPerView: 2,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   }
  // },
  // Ленивая загрузка.
  // Отключить предзагрузки картинок
  preloadImages: false,
  // Lazy Loading
  // (подгрузка картинок)
  lazy: {
    // Подгружать на старте
    // Переключения слайда
    loadOnTransitionStart: false,
    // Подгрузить предыдущую и следующую картинку
    loadPrevNext: false,
  },
  // Слежка за видимыми слайдами
  // watchSlidesProgress: true,
  // Добавление класса видимым слайдам
  // watchSlidesVisibility: true,

  // Зум картинки
  zoom: {
    //  Максимальное увеличение
    maxRatio: 5,
    // Минимальное увеличение
    minRatio: 1,
  },

  // Кнопко прописывать в конце
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 
   scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
});
