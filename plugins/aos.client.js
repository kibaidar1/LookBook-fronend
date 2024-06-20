import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    AOS.init({
      // Добавьте ваши параметры конфигурации здесь
      offset: 400, // смещение (в пикселях) запуска анимации от верхней части окна
      delay: 100, // задержка анимации (в миллисекундах)
      duration: 600, // длительность анимации (в миллисекундах)
      easing: 'ease-in-out', // функция плавности анимации
      once: false, // запуск анимации только один раз
      mirror: true, // запуск анимации при прокрутке назад
      anchorPlacement: 'top-center', // положение якоря относительно элемента
    });
  });

  nuxtApp.hook('page:finish', () => {
    setTimeout(() => {
      AOS.refresh();
    }, 500); // небольшая задержка для того, чтобы дать странице полностью загрузиться
  });
});