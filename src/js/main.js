import '/scss/main.scss';

//  components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider } from './components/home/slider.js';
import { useTestimonialsSlider } from './components/home/slider.js';
import { useAccordion } from './components/footer-accordion.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
useAccordion();
