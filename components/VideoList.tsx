import React from 'react';
import { Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { VideoItem } from './VideoItem';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Video, useVideos } from '@/apollo';

interface Props {
    title: string;
}

export const VideoList: React.FC<Props> = ({ title }) => {
    const { loading, data } = useVideos();
    
    const handlePress = () => {
        Alert.alert('Available soon!')
    }

    if (loading) return <Text>Loading...</Text>;

    const renderItem = ({ item }: { item: Video }) => {
        return (
            <VideoItem key={item.id} title={item.title} preview={item.preview} timer="00:10" onPress={handlePress} />
        )
    }

    return (
        <ThemedView darkColor={Colors.dark.background_2} style={styles.root}>
            <TouchableOpacity activeOpacity={0.7}>
                <ThemedText type="defaultSemiBold" style={{ paddingLeft: 50 }}>{title}</ThemedText>
            </TouchableOpacity>
            
            <FlatList data={data?.contents.nodes} renderItem={renderItem} keyExtractor={(data) => data.id} horizontal contentContainerStyle={styles.listContainerStyle} />
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    root: {
        gap: 10,
        paddingVertical: 20,
    },
    listContainerStyle: {
        gap: 20,
        paddingHorizontal: 50,
    }
});
