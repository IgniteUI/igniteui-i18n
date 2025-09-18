import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Simplified Chinese (zh-Hans) resource strings for IgxCarousel
 */
export const CarouselResourceStringsZHHANS: ICarouselResourceStrings = {
    carousel_of: '的',
    carousel_slide: '幻灯片',
    carousel_previous_slide: '上一张幻灯片',
    carousel_next_slide: '下一张幻灯片'
} satisfies MakeRequired<ICarouselResourceStrings>;
