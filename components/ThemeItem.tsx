import { View, StyleSheet, ViewStyle, ViewProps } from "react-native";
import { Typography } from "./Typography";

interface Props extends ViewProps {
	value: string;
	isActive?: boolean;
}
export default function ThemeItem({ value, style, isActive, ...props }: Props) {
	return (
		<View style={[styles.container, isActive && styles.active, style]} {...props}>
			<Typography variant={"h1"} style={isActive && styles.text}>
				{value}
			</Typography>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingHorizontal: 18,
		paddingVertical: 15,
		borderColor: "#C5D0E6",
		borderWidth: 2,
		borderRadius: 12,
	},
	active: {
		backgroundColor: "#5CBB73",
		borderColor: "#5CBB73",
	},
	text: {
		color: "#fff",
	},
});
