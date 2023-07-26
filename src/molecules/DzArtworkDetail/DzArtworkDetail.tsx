import React, { FC, useState } from 'react';
import { cn } from '../../utils/classnames';
import { DzMediaProps, DzButton } from '../../atoms';
import { DzComplexGrid } from "../DzComplexGrid/DzComplexGrid";
import { DzImageZoomModal } from "../DzImageZoom/DzImageZoom";

export interface DzArtworkDetailProps {
  artistName: string;
  artworkTitle: string;
  artworkYear?: string;
  mediaItems: DzMediaProps[];
  description: string;
}

const cardsData =
  [
    {
      "id": "1",
      "media": {
        "type": "image",
        "imgProps": {
          "src": "https://images.davidzwirner.com/v7/_images_/davidzwirner/artwork/non-dz-artists/peyton-elizabeth/peyel0094/peyel0094_framed.jpg?w=2000&q=85&org_if_sml=1&force_format=webp",
          "alt": "artwork"
        }
      },
    },
    {
      "id": "2",
      "media": {
        "type": "image",
        "imgProps": {
          "src": "https://assets.davidzwirner.com/v7/_assets_/davidzwirner/artwork/jb/music_new/music_new.jpg",
          "alt": "artwork"
        }
      },
    },
    {
      "id": "3",
      "media": {
        "type": "image",
        "imgProps": {
          "src": "https://assets.davidzwirner.com/v7/_assets_/davidzwirner/artwork/jb/van-dongen_new/van-dongen_new.jpg",
          "alt": "artwork"
        }
      },
    },
    {
      "id": "4",
      "media": {
        "type": "image",
        "imgProps": {
          "src": "https://assets.davidzwirner.com/v7/_assets_/davidzwirner/artwork/jb/sisteron_2021/sisteron_new.jpg",
          "alt": "artwork"
        }
      },
    },
    {
      "id": "5",
      "media": {
        "type": "image",
        "imgProps": {
          "src": "https://assets.davidzwirner.com/v7/_assets_/davidzwirner/artwork/non-dz-artists/lewis-tau/lewta0013/lewta0013_framed_render.jpg",
          "alt": "artwork"
        }
      },
    },
    {
      "id": "6",
      "media": {
        "type": "image",
        "imgProps": {
          "src": "https://assets.davidzwirner.com/v7/_assets_/davidzwirner/artwork/non-dz-artists/moore-frank/moofr0031/moofr0031_framed_render_new.jpg",
          "alt": "artwork"
        }
      },
    },
    {
      "id": "7",
      "media": {
        "type": "image",
        "imgProps": {
          "src": "https://assets.davidzwirner.com/v7/_assets_/davidzwirner/artwork/non-dz-artists/muslimova-ebecho/museb0019/museb001910apframed.jpg",
          "alt": "artwork"
        }
      },
    }
  ]

const styles: any = {
  container: `
    flex
    flex-col
    md:flex-row
    w-full
    relative
    scroll-smooth
    whitespace-pre-wrap
  `,
  leftPane: `
    basis-1/3
    relative    
    h-fit
    pt-10    
    md:sticky
    overflow-y-scroll
  `,
  rightPane: `
    flex
    flex-col
    basis-2/3
  `,
  ctaContainer: `
    bg-white-100
    sticky
    bottom-0
    text-center
    z-[300]        
  `
};

const gridImageStyles: any = {
  cursorZoom: `
    cursor-zoom-in
  `
}

// TODO externalize this to layouts/header.tsx
const HEADER_HEIGHT = "60px"

export const DzArtworkDetail: FC<DzArtworkDetailProps> = ({
  artistName,
  artworkTitle,
  artworkYear,
  mediaItems,
  description,
}) => {
  const [currentZoomedUrl, setCurrentZoomedUrl] = useState<string | undefined>(undefined);
  const onClickImage = (data) => {
    const src = data?.media?.imgProps?.src;
    if (src) {
      setCurrentZoomedUrl(src)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div
          className={cn(styles.leftPane)}
          style={{
            // TODO locate styles in styles.leftPane, currently not working there
            height: `calc(100vh - ${HEADER_HEIGHT})`,
            top: HEADER_HEIGHT
          }}
        >
          <div>{artistName}</div>
          <div>{artworkTitle}</div>
          <div>{artworkYear}</div>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
          <p>this is the last paragraph, it should still be visible</p>

          <div className={styles.ctaContainer}>
            <div>
              <DzButton>Primary CTA</DzButton>
            </div>
            <div>
              <DzButton>Tertiary CTA</DzButton>
            </div>
          </div>
        </div>
        {mediaItems ? (
          <div className={cn(styles.rightPane)}>
            <DzComplexGrid
              cards={cardsData}
              maxItemsPerRow={1}
              onClickImage={onClickImage}
              imageStyles={gridImageStyles.cursorZoom}
            />
          </div>
        ) : null}
      </div>
      <DzImageZoomModal
        imgUrl={currentZoomedUrl}
        onClose={() => setCurrentZoomedUrl(undefined)}
        isOpen={!!currentZoomedUrl}
      />
    </>
  );
};

export default DzArtworkDetail;
