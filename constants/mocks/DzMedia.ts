export const videoProps = {
  type: 'video',
  title: 'Example title',
  sources: [
    {
      src: '/path/to/movie.mp4',
      type: 'video/mp4',
      size: 720,
    },
    {
      src: '/path/to/movie.webm',
      type: 'video/webm',
      size: 1080,
    },
  ],
  poster: '/path/to/poster.jpg',
  previewThumbnails: {
    src: '/path/to/thumbnails.vtt',
  },
  tracks: [
    {
      kind: 'captions',
      label: 'English',
      srclang: 'en',
      src: '/path/to/captions.en.vtt',
      default: true,
    },
    {
      kind: 'captions',
      label: 'French',
      srclang: 'fr',
      src: '/path/to/captions.fr.vtt',
    },
  ],
};

// src property for YouTube and Vimeo can either be the video ID or the whole URL.

export const vimeoProps = {
  type: 'video',
  sources: [
    {
      src:
        'https://player.vimeo.com/video/812862186?h=d3919b94c1&loop=true&autoplay=true&muted=false&gesture=media&playsinline=true&byline=false&portrait=false&title=false&speed=true&transparent=false&controls=false&background=true',
      provider: 'vimeo',
    },
  ],
};

export const youtubeProps = {
  type: 'video',
  sources: [
    {
      src: 'lLWOcE91_T4',
      provider: 'youtube',
    },
  ],
};
