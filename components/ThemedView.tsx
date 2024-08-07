import React, { ReactNode } from "react";
import { TVFocusGuideView, View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { VStack } from '@/components/Stack/VStack';
import { HStack } from '@/components/Stack/HStack';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  as?: 'VStack' | 'HStack' | 'TVFocusGuideView';
  children?: ReactNode;
  flex?: number;
};

export const ThemedView: React.FC<ThemedViewProps> = ({ style, lightColor, darkColor, as, children, flex, ...otherProps }) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const styles = [{ backgroundColor, flex }, style];
  
  if (as === 'VStack') {
    return (
        <VStack style={styles} {...otherProps}>{children}</VStack>
    )
  }

  if (as === 'HStack') {
    return (
        <HStack style={styles} {...otherProps}>{children}</HStack>
    )
  }
  
  if (as === 'TVFocusGuideView') {
    return (
        <TVFocusGuideView style={styles} {...otherProps}>{children}</TVFocusGuideView>
    )
  }

  return <View style={styles} {...otherProps}>{children}</View>;
}
