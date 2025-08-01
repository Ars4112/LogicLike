import { FlatList, FlatListProps, StyleSheet, TouchableOpacity, View } from "react-native";
import ThemeItem from "./ThemeItem";

interface Props extends Omit<FlatListProps<string>, "renderItem" | "data"> {
	tags: string[];
	selectedTags: number;
	setSelectedTags: (value: number) => void;
	setIsOpen: (value: boolean) => void;
}
export default function ThemesList({ tags, selectedTags, setSelectedTags, setIsOpen, ...props }: Props) {
	const onPressHandler = (index: number) => {
		setSelectedTags(index);
		setIsOpen(false);
	};
	return (
		<View style={styles.container}>
			<FlatList
				data={tags}
				keyExtractor={(i) => i}
				renderItem={({ item, index }) => (
					<TouchableOpacity onPress={() => onPressHandler(index)}>
						<ThemeItem value={item} style={styles.item} isActive={selectedTags === index} />
					</TouchableOpacity>
				)}
				contentContainerStyle={styles.listContent}
				showsVerticalScrollIndicator={false}
				snapToAlignment="start"
				decelerationRate="fast"
				{...props}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
	listContent: {
		width: "100%",
		gap: 6,
		alignItems: "center",
		paddingVertical: 9,
	},
	item: {
		width: 336,
	},
});
