import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Hungarian resource strings for IgxCarousel
 */
export const CarouselResourceStringsHU: ICarouselResourceStrings = {
  carousel_of: '/',
  carousel_slide: 'dia',
  carousel_previous_slide: 'előző dia',
  carousel_next_slide: 'következő dia',
} satisfies Required<ICarouselResourceStrings>;
