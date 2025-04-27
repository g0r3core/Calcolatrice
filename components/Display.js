import { Text, View, StyleSheet } from 'react-native';


const Display = ({ value }) => (
    <View style = {styles.container}>
        <Text style = { styles.text}> {value || '0'} </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#2d2d2d',
        marginBottom: 20,
        padding: 24,
        borderRadius: 16,
    },
    text: {
        fontSize: 48,
        color: '#ffffff',
        fontWeight: '300',
    },
});

export default Display;