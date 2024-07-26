import '/scss/blog.scss';

//  components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useBlogHeroSlider } from './components/blog/slider.js';
import { useBlogTab } from './components/blog/tab.js';
import { useBottomSlider } from './components/blog/slider.js';

useTheme();
useBurger();
useBlogHeroSlider();
useBlogTab();
useBottomSlider();
