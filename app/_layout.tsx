import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { useFonts, Nunito_400Regular, Nunito_700Bold, Nunito_600SemiBold } from "@expo-google-fonts/nunito";
import LoadingIndicator from "@/components/LoadingIndicator";

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		"Nunito-Regular": Nunito_400Regular,
		"Nunito-Bold": Nunito_700Bold,
		"Nunito-SemiBold": Nunito_600SemiBold,
	});

	if (!fontsLoaded) return <LoadingIndicator />;
	
	return (
		<SafeAreaProvider>
			<View style={{ flex: 1 }}>
				<Stack>
					<Stack.Screen name="index" options={{ headerShown: false }} />
				</Stack>
			</View>
		</SafeAreaProvider>
	);
}
