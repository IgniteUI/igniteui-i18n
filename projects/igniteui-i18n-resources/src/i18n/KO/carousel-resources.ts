import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Korean resource strings for IgxCarousel
 */
export const CarouselResourceStringsKO: ICarouselResourceStrings = {
    carousel_of: '의',
    carousel_slide: '슬라이드',
    carousel_previous_slide: '이전 슬라이드',
    carousel_next_slide: '다음 슬라이드'
} satisfies Required<ICarouselResourceStrings>;
