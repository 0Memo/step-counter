import { useFonts } from "expo-font";

export default function FontsLoaded() {
    useFonts({
        'Kalam-Regular': require('./../../assets/fonts/Kalam-Regular.ttf'),
        'Kalam-Bold': require('./../../assets/fonts/Kalam-Bold.ttf'),
        'Kalam-Light': require('./../../assets/fonts/Kalam-Light.ttf'),
    });
}