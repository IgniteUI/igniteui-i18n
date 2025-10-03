import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Japanese resource strings for IgxCarousel
 */
export const CarouselResourceStringsJA: ICarouselResourceStrings = {
  carousel_of: '/',
  carousel_slide: 'スライド',
  carousel_previous_slide: '前のスライド',
  carousel_next_slide: '次のスライド',
} satisfies Required<ICarouselResourceStrings>;
