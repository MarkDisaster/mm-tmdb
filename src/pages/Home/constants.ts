import { AnimationType } from 'react-alice-carousel';

const CAROUSEL_RESPONSIVE = {
   0: { items: 1 },
};
const CAROUSEL_INTERVAL = 5000;

export const CAROUSEL_SETTINGS = {
   autoPlay: true,
   mouseTracking: true,
   disableButtonsControls: true,
   infinite: true,
   autoPlayInterval: CAROUSEL_INTERVAL,
   animationType: AnimationType.FADEOUT,
   responsive: CAROUSEL_RESPONSIVE,
   controlsStrategy: 'alternate',
};
