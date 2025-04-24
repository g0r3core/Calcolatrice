import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress, color = '#e0e0e0' }) => (
    <TouchableOpacity
    style = {[ styles.button, { backgroundColor: color }]}
    onPress = {onPress}
    >
        <Text style = { styles.title}> {title} </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        borderRadius: 8,
        height: 80,
    },
    title: {
        fontSize: 24,
    },
});

export default Button;