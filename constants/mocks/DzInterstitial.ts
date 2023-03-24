import { MEDIA_TYPES } from '../../src/atoms/DzMedia';

export const interstitial = {
  split: true,
  category: 'Category Slug',
  title: 'Lorem ipsum dolor sit amet, consectetuer adipiscin',
  description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu',
  primaryCta: {
    text: 'Sign Up',
  },
  media: {
    url: '/',
    type: MEDIA_TYPES.IMAGE,
    imgProps: {
      src:
        'https://images.davidzwirner.com/v7/_images_/davidzwirner/home/cta/cta-background-image-v3.jpg',
      alt: 'artwork',
    },
  }
}