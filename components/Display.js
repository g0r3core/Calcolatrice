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
        backgroundColor: '#f5f5f5',
        marginBottom: 10,
        padding: 20,
    },
    text: {
        fontSize: 48,
    },
});

export default Display;