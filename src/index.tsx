import React from 'react';
import { View, ViewProps, Image } from 'react-native';
import { getTransformMatrix } from './getTransformMatrix';

interface PerspectiveCorrectionImageProps extends ViewProps {
  source: any,
  srcImageWidth: number;
  srcImageHeight: number;
  targetWidth: number;
  targetHeight: number;
  corners: number[];
}

export const PerspectiveCorrectionImage: React.FC<
  PerspectiveCorrectionImageProps
> = ({
  source,
  srcImageWidth,
  srcImageHeight,
  targetWidth,
  targetHeight,
  corners,
  ...props
}) => {
  const dstCorners = [
    0,
    0,
    targetWidth,
    0,
    0,
    targetHeight,
    targetWidth,
    targetHeight,
  ];
  const c = getTransformMatrix(corners, dstCorners);

  /*
   * Transform matrix order (4x4, transposed)
   *
   *  0, 3, x, 6,
   *  1, 4, x, 7,
   *  x, x, x, x,
   *  2, 5, x, 8
   */
  const matrix = [
    c[0],
    c[3],
    0,
    c[6],
    c[1],
    c[4],
    0,
    c[7],
    0,
    0,
    1,
    0,
    c[2],
    c[5],
    0,
    c[8],
  ];

  return (
    <View
      style={{
        width: targetWidth,
        height: targetHeight,
        backgroundColor: 'red',
        overflow: 'hidden',
        ...props,
      }}
    >
      <Image
        source={source}
        style={{
          width: srcImageWidth,
          height: srcImageHeight,
          transform: [
            { translateX: -srcImageWidth / 2 },
            { translateY: -srcImageHeight / 2 },
            { matrix },
            { translateX: srcImageWidth / 2 },
            { translateY: srcImageHeight / 2 },
          ],
        }}
      />
    </View>
  );
};
