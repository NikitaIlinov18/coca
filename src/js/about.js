import '/scss/about.scss';

//  components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useScrollHeader } from './components/scrollHeader.js';
import { useAboutHeroSlider } from './components/about/slider.js';
import { useTeamSlider } from './components/about/slider.js';

useTheme();
useBurger();
useScrollHeader();
useAboutHeroSlider();
useTeamSlider();
