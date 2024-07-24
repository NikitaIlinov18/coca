export const useBlogTab = () => {

  // const tabs = document.querySelectorAll('.hero__tabs-link');

  // const slides = document.querySelectorAll('.bloghero__article');

  // const tabList = document.querySelectorAll('.hero__tabs-item');

  // tabs.forEach((tab) => {
  //     tab.addEventListener('click', function () {
        
  //       if (tab.classList.contains('hero__tabs-item--active')) {
  //               return;
  //             }

  //             // Удаляем класс активности со всех вкладок
  //     tabs.forEach((item) => {
  //       item.classList.remove('hero__tabs-item--active');
  //     });


  // ---------------------------------------------------------------------
  // const tabs = document.querySelectorAll('.hero__tabs-list button');

  // const slides = document.querySelectorAll('.bloghero__article');

  // const tabList = document.querySelectorAll('.hero__tabs-item');

  // tabs.forEach((tab) => {
  //   tab.addEventListener('click', function () {
  //     // Переменная для родителя
  //     const parentLi = tab.parentElement;

  //     // Проверяем, если текущая вкладка уже активна, отменяем действие
  //     if (parentLi.classList.contains('hero__tabs-item--active')) {
  //       return;
  //     }
  //     // Удаляем класс активности со всех вкладок
  //     tabList.forEach((item) => {
  //       item.classList.remove('hero__tabs-item--active');
  //     });

  //     // Добавляем класс активности к текущей вкладке
  //     parentLi.classList.add('hero__tabs-item--active');

  //     // Получаем значение дата атрибута кнопке по которой был клик
  //     const tabValue = tab.getAttribute('data-tab');

  //     if (tabValue) {
  //       // Добавляем класс none к слайдам, у которых data-rubric не совпадает с tabValue
  //       slides.forEach((slide) => {
  //         if (slide.getAttribute('data-rubric') !== tabValue) {
  //           slide.classList.add('none');
  //         } else {
  //           slide.classList.remove('none');
  //         }
  //       });
  //     } else {
  //       // Если кнопка не имеет data-tab, удаляем класс none со всех слайдов
  //       slides.forEach((slide) => {
  //         slide.classList.remove('none');
  //       });
  //     }
  //     // Обновляем Swiper
  //     swiperInstance.update();
  //   });
  // });

  // --------------------------------------------------------------

  // const tabControls = document.querySelector('.tab-controls');

  // tabControls.addEventListener('click', toggleTab);

  // function toggleTab(e) {
  //   const tabControl = e.target.closest('.tab-controls__link');

  //   if (!tabControl) return;
  //   e.preventDefault();
  //   if (tabControl.classList.contains('tab-controls__link--active')) return;

  //   const tabContentID = tabControl.getAttribute('href');
  //   const tabContent = document.querySelector(tabContentID);
  //   const activeControl = document.querySelector('.tab-controls__link--active');
  //   const activeContent = document.querySelector('.tab-content--show');

  //   if (activeControl) {
  //     activeControl.classList.remove('tab-controls__link--active');
  //   }
  //   if (activeContent) {
  //     activeContent.classList.remove('tab-content--show');
  //   }

  //   tabControl.classList.add('tab-controls__link--active');
  //   tabContent.classList.add('tab-content--show');
  // }
};
