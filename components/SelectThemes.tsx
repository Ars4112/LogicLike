import { TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { Typography } from "./Typography";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ReactNode, useMemo } from "react";

interface Props {
	setIsOpen: (bool: boolean) => void;
	value: string;
}

export default function SelectThemes({ setIsOpen, value }: Props) {
	const onPressHandler = () => {
		setIsOpen(true);
	};

	const ChevronDown = useMemo(() => <Ionicons name="chevron-down" size={13} color="rgba(255, 255, 255, 1)" />, []);

	return (
		<TouchableOpacity onPress={onPressHandler} style={styles.container}>
			<Typography variant={"caption"} style={styles.themeText}>
				{value}
			</Typography>
			<View style={styles.arrowButton}>{ChevronDown}</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: "rgba(0, 0, 0, 0.2)",
		borderRadius: 20,
		padding: 5,
		alignSelf: "flex-start",
		alignItems: "center",
	},
	arrowButton: {
		width: 18,
		height: 18,
		backgroundColor: "rgba(0, 0, 0, 0.2)",
		borderRadius: 50,
		marginLeft: 3,
		justifyContent: "center",
		alignItems: "center",
	},
	themeText: {
		color: "#fff",
		marginLeft: 5,
	},
});
