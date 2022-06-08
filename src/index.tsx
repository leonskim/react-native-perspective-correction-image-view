import React from 'react';
import { View, ViewProps, Image, ImageSourcePropType, ColorValue } from 'react-native';
import { getTransformMatrix, CornerPoints } from './getTransformMatrix';

interface PerspectiveCorrectionImageProps extends ViewProps {
  source: ImageSourcePropType,
  sourceCorners: CornerPoints;
  sourceWidth: number;
  sourceHeight: number;
  width: number;
  height: number;
  backgroundColor?: ColorValue;
}

export const PerspectiveCorrectionImage = React.forwardRef<View, PerspectiveCorrectionImageProps>((
  {
    source,
    sourceCorners,
    sourceWidth,
    sourceHeight,
    width,
    height,
    backgroundColor,
    ...props
  }: PerspectiveCorrectionImageProps,
  ref?: React.ForwardedRef<View>
) => {
  const targetCorners: CornerPoints = [
    0,
    0,
    width,
    0,
    0,
    height,
    width,
    height,
  ];
  const c = getTransformMatrix(sourceCorners, targetCorners);

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
        width: width,
        height: height,
        backgroundColor: backgroundColor || 'red',
        overflow: 'hidden',
        ...props,
      }}
      ref={ref}
    >
      <Image
        source={source}
        style={{
          width: sourceWidth,
          height: sourceHeight,
          transform: [
            { translateX: -sourceWidth / 2 },
            { translateY: -sourceHeight / 2 },
            { matrix },
            { translateX: sourceWidth / 2 },
            { translateY: sourceHeight / 2 },
          ],
        }}
      />
    </View>
  );
});
