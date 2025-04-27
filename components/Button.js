import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress, color = '#333333', flex = 1 }) => (
    <TouchableOpacity
    style = {[ styles.button, { backgroundColor: color, flex: flex, height: 80 }]}
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
        margin: 1,
        borderRadius: 16,
        height: 80
    },
    title: {
        fontSize: 32,
        fontWeight: '500',
        color: '#ffffff',
    },
});

export default Button;