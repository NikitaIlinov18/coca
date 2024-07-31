export const useScrollHeader = () => {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const headerHeight = header.offsetHeight;
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance > headerHeight) {
      header.classList.remove('header--show');
    } else {
      header.classList.add('header--show');
    }
    
    if (scrollDistance > 1.5*headerHeight) {
      hero.style.marginTop = `117px`;
      header.classList.add('header--fixed');
    }
    
    if (scrollDistance == 0) {
      hero.style.marginTop = null;
      header.classList.remove('header--fixed');
    }

    if (scrollDistance > lastScrollTop) {
      header.classList.remove('header--visible');
    } else {
      header.classList.add('header--visible');
    }

    lastScrollTop = scrollDistance;
  });
};
