import React from 'react';
import { StyleSheet } from 'react-native';
import { MenuItem } from './MenuItem';
import { ThemedView } from '@/components/ThemedView';
import { ParallaxScrollView } from '@/components/ParallaxScrollView';
import { Colors } from '@/constants/Colors';

export const Menu: React.FC = () => {
    const handlePress = (label: string) => {
        console.log(`Pressed ${label}`);
    };
    
    return (
        <ParallaxScrollView>
            <ThemedView as="TVFocusGuideView" darkColor={Colors.dark.background} style={styles.container}>
                <MenuItem label="Main" onPress={() => handlePress('Main')} />
                <MenuItem label="Movies" onPress={() => handlePress('Movies')} />
                <MenuItem label="Series" onPress={() => handlePress('Serias')} />
                <MenuItem label="Сhannels" onPress={() => handlePress('Channels')} />
            </ThemedView>
        </ParallaxScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        gap: 30,
    },
});
