import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Typography } from "./Typography";
import ThemesList from "./ThemesList";
import { useMemo } from "react";

interface Props {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
	tags: string[];
	selectedTags: number;
	setSelectedTags: (value: number) => void;
}
export default function ModalPage({ isOpen, setIsOpen, tags, selectedTags, setSelectedTags }: Props) {
	const closeModal = () => {
		setIsOpen(false);
	};
	const Сlose = useMemo(() => <Ionicons name="close" size={24} color="#A3B3D0" />, []);

	return (
		<Modal animationType="slide" transparent={true} visible={isOpen}>
			<View style={styles.modal}>
				<View style={styles.titleWrapper}>
					<Typography variant={"h1"}>Выбор темы</Typography>
					<TouchableOpacity onPress={closeModal} style={styles.button}>
						{Сlose}
					</TouchableOpacity>
				</View>
				<ThemesList tags={tags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} setIsOpen={setIsOpen} />
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		backgroundColor: "#fff",
		gap: 9,
		width: "100%",
		padding: 24,
		justifyContent: "center",
		alignItems: "center",
	},
	titleWrapper: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		position: "relative",
	},
	button: {
		position: "absolute",
		right: 0,
	},
});
