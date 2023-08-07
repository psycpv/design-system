import { useState, useEffect } from 'react';

type Options = {
  timeout?: number;
};

type Dimensions = {
  width: number;
  height: number;
};

// TODO set UseImageSizeResult as return type when eslint version is upgraded to support tuple types, otherwise
// results in error: Parsing error: Cannot read properties of undefined (reading 'map')
//type UseImageSizeResult = [{ width: number, height: number} | null, { loading: boolean; error: string | null }];

const getImageSize = (
  url: string,
  options: Options = {}
): Promise<Dimensions> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      return reject('Window is not defined');
    }

    if (!url) {
      return reject('Url is not defined');
    }

    let timer: any = null;

    const img = new Image();

    img.addEventListener('load', () => {
      if (timer) {
        clearTimeout(timer);
      }

      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    });

    img.addEventListener('error', event => {
      if (timer) {
        clearTimeout(timer);
      }

      reject(`${event.type}: ${event.message}`);
    });

    img.src = url;

    if (options.timeout) {
      timer = setTimeout(() => reject('Timeout'), options.timeout);
    }
  });
};

export const useImageSize = (url?: string, options?: Options): any => {
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      if (!url) {
        return [
          { width: -1, height: -1 },
          { loading: false, error: null },
        ];
      }

      setLoading(true);
      setDimensions(null);

      try {
        const { width, height } = await getImageSize(url, options);

        setDimensions({ width, height });
      } catch (error) {
        setError((error as string).toString());
      } finally {
        setLoading(false);
      }
    };

    fetch().then(null);
  }, [url, options]);

  return [dimensions, { loading, error }];
};
