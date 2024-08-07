import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';

interface Props {
    label: string;
    onPress: () => void;
}

export const MenuItem: React.FC<Props> = ({ label, onPress }) => (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <ThemedView darkColor={Colors.dark.tab} style={styles.container}>
            <ThemedText type="menuItem" darkColor={Colors.dark.text} style={styles.text}>{label}</ThemedText>
        </ThemedView>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
    },
});
