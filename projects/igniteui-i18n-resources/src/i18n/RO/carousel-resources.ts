import type { ICarouselResourceStrings } from 'igniteui-i18n-core';

// only use `satisfies` operator so export is typed by its schema
/**
 * Romanian resource strings for IgxCarousel
 */
export const CarouselResourceStringsRO: ICarouselResourceStrings = {
    carousel_of: 'din',
    carousel_slide: 'alunecare',
    carousel_previous_slide: 'diapozitivul anterior',
    carousel_next_slide: 'următorul diapozitiv'
} satisfies Required<ICarouselResourceStrings>;
