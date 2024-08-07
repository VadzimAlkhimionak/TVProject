import React, { PropsWithChildren } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { ThemedView } from '@/components/ThemedView';

interface Props extends PropsWithChildren {}

export const ParallaxScrollView: React.FC<Props> = ({ children }) => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const styles = useParallaxScrollViewStyles();
  
  return (
      <ThemedView flex={1} style={styles.container}>
        <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
          <ThemedView flex={1} style={styles.content}>{children}</ThemedView>
        </Animated.ScrollView>
      </ThemedView>
  );
}

const useParallaxScrollViewStyles = function () {
  const windowHeight = Dimensions.get('window').height;
  
  return StyleSheet.create({
    container: {
      height: windowHeight,
    },
    content: {
      minHeight: windowHeight,
    },
  });
};
