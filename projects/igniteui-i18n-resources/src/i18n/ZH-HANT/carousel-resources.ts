import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Traditional Chinese (zh-Hant) resource strings for IgxCarousel
 */
export const CarouselResourceStringsZHHANT: ICarouselResourceStrings = {
    carousel_of: '的',
    carousel_slide: '投影片',
    carousel_previous_slide: '上一張投影片',
    carousel_next_slide: '下一張投影片'
} satisfies MakeRequired<ICarouselResourceStrings>;
