import React, { FC } from 'react';
import { cn } from '../../utils/classnames';
import { DzMediaProps, DzButton } from '../../atoms';
import { DzComplexGrid } from "../DzComplexGrid/DzComplexGrid";

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
        "url": "/",
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
        "url": "/",
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
        "url": "/",
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
        "url": "/",
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
        "url": "/",
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
        "url": "/",
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
        "url": "/",
        "type": "image",
        "imgProps": {
          "src": "https://assets.davidzwirner.com/v7/_assets_/davidzwirner/artwork/non-dz-artists/muslimova-ebecho/museb0019/museb001910apframed.jpg",
          "alt": "artwork"
        }
      },
    }
  ]
const cardsMediaOnlyData = cardsData.map(({ id, media }) => ({ id, media }))

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
    top-0
    h-fit
    pt-10    
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
    text-center
    z-[300]    
    pt-10    
  `
};

export const DzArtworkDetail: FC<DzArtworkDetailProps> = ({
  artistName,
  artworkTitle,
  artworkYear,
  mediaItems,
  description,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={cn(styles.leftPane)}
        style={{
          height: "calc(100vh - 60px - 40px)",
          position: "relative"
        }}
      >
        <div>
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
        </div>
        <div
          className={styles.ctaContainer}
          style={{ bottom: 0, border: "1px solid yellow" }}
        >
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
          {/*
          <div style={{ height: "200px", border: "1px solid green"}}>grid item</div>
          <div style={{ height: "200px", border: "1px solid green"}}>grid item</div>
          <div style={{ height: "200px", border: "1px solid green"}}>grid item</div>
          <div style={{ height: "200px", border: "1px solid green"}}>grid item</div>
          <div style={{ height: "200px", border: "1px solid green"}}>grid item</div>
          <div style={{ height: "200px", border: "1px solid green"}}>grid item</div>
          <div style={{ height: "200px", border: "1px solid green"}}>grid item</div>
          <div style={{ height: "200px", border: "1px solid green"}}>grid item</div>
          */}
          <DzComplexGrid cards={[]} displayNumberOfResults={false} maxItemsPerRow={1} />
        </div>
      ) : null}
    </div>
  );
};

export default DzArtworkDetail;
