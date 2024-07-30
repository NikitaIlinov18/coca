export const useScrollHeader = () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const headerHeight = header.offsetHeight;
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance > lastScrollTop) {
      header.classList.remove('header--fixed');
      hero.style.marginTop = null;
    } else {
      header.classList.add('header--fixed');
      hero.style.marginTop = `${headerHeight}px`;
    }

    if (scrollDistance < headerHeight/20) {
      header.classList.remove('header--fixed');
      hero.style.marginTop = null;
    }

    lastScrollTop = scrollDistance;
  });
};
