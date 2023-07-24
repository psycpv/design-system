import React, { FC } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const DzImageZoom = () => {
  return (
    <TransformWrapper
      initialScale={1}
      initialPositionX={200}
      initialPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform}) => (
        <>
          <div className="tools">
            <button onClick={() => zoomIn()}>zoom in</button>
            <button onClick={() => zoomOut()}>zoom out</button>
            <button onClick={() => resetTransform()}>close</button>
          </div>
          <TransformComponent>
            <img
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fjuzvn5an%2Fartists%2F19209716a83e9ce1adfe63caa13b2e7b64d96c6d-2160x1228.webp&w=2048&q=75"
              alt="test"
            />
            <div>Example text</div>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};

export default DzImageZoom;
