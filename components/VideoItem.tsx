import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { Video } from '@/apollo';

interface Props extends Omit<Video, 'id'> {
    timer: string;
    onPress: () => void;
}

export const VideoItem: React.FC<Props> = ({ title, preview, onPress, timer }) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.itemContainer} onPress={onPress}>
        <ImageBackground source={{ uri: preview }} style={styles.image} resizeMode="contain">
            <ThemedView style={styles.timerView}>
                <ThemedText type="timer" darkColor={Colors.dark.text}>
                    {timer}
                </ThemedText>
            </ThemedView>
        </ImageBackground>

        <ThemedText darkColor={Colors.dark.text} style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {title}
        </ThemedText>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    itemContainer: {
        width: 250,
        gap: 5,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 100,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    textContainer: {
        width: '100%',
    },
    title: {
        fontSize: 16,
        lineHeight: 25,
    },
    timerView: {
        backgroundColor: Colors.dark.background,
        margin: 10,
        borderRadius: 5,
        padding: 5
    },
});
