import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function LoadingIndicator() {
	return (
		<View style={styles.loadingContainer}>
			<ActivityIndicator size="large" color="#4a6da7" />
		</View>
	);
}

const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f8f9fa",
	},
});
