import '/scss/pricing.scss';

//  components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useScrollHeader } from './components/scrollHeader.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';

useTheme();
useBurger();
useScrollHeader();
usePriceSwitcher();