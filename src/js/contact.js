import '/scss/contact.scss';

//  components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useScrollHeader } from './components/scrollHeader.js';
import { usePhone } from './components/contact/phone.js';
import { useMap } from './components/contact/map.js';
import { usePartnersSlider } from './components/partners/slider.js';
import { useValidInput } from './components/contact/validInput.js';

useTheme();
useBurger();
useScrollHeader();
usePhone();
useMap();
useValidInput();
usePartnersSlider();
