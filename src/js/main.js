import '/scss/main.scss';

//  components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useScrollHeader } from './components/scrollHeader.js';
import { useInsightSlider } from './components/home/slider.js';
import { useTestimonialsSlider } from './components/home/slider.js';
import { usePartnersSlider } from './components/partners/slider.js';
import { useAccordion } from './components/footer-accordion.js';

useTheme();
useBurger();
useScrollHeader();
useInsightSlider();
useTestimonialsSlider();
usePartnersSlider();
useAccordion();
