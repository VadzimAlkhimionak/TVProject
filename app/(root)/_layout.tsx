import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { VideoList } from '@/components/VideoList';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/apollo';
import { Menu } from '@/components';
import { Appearance } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function RootLayout() {
  Appearance.setColorScheme('dark');

  return (
    <ApolloProvider client={client}>
        <ThemedView as="HStack">
            <Menu />

            <ThemedView darkColor={Colors.dark.background_2} style={{ width: '85%' }}>
                <ThemedView as="TVFocusGuideView" darkColor={Colors.dark.background_2} flex={1}>
                    <VideoList title="Latest videos (Carousel)" />
                </ThemedView>
            </ThemedView>
        </ThemedView>
    </ApolloProvider>
  );
}
