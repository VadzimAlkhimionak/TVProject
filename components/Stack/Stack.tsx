import React, { ReactElement, ReactNode, memo, useMemo } from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';

export interface StackProps extends ViewProps {
  align?: 'center' | 'flex-end' | 'flex-start' | 'stretch';
  children: ReactNode;
  direction?: 'column' | 'row';
  flex?: number;
  gap?: number;
  justify?: 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between';
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  wrap?: 'nowrap' | 'wrap';
}

export const Stack: React.FC<StackProps> = ({
    align = 'stretch',
    children,
    direction = 'column',
    flex = 0,
    gap = 0,
    justify = 'flex-start',
    marginBottom = 0,
    marginLeft = 0,
    marginRight = 0,
    marginTop = 0,
    paddingHorizontal = 0,
    paddingVertical = 0,
    style,
    wrap = 'nowrap',
    ...props
}) => {
  const styles: StyleProp<ViewStyle>[] = useMemo(
      () => [
        {
          alignItems: align,
          flex,
          flexDirection: direction,
          flexWrap: wrap,
          gap,
          justifyContent: justify,
          marginBottom,
          marginLeft,
          marginRight,
          marginTop,
          paddingHorizontal,
          paddingVertical,
        },
        style,
      ],
      [
        align,
        direction,
        flex,
        gap,
        justify,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        paddingHorizontal,
        paddingVertical,
        style,
        wrap,
      ],
  );
  
  return (
      <View
          style={styles}
          {...props}
      >
        {children}
      </View>
  );
}
