import { View, FlatList } from "react-native";
import { useCourses } from "../hooks/useCourses";
import CourseCard from "../components/CourseCard";
import { StyleSheet } from "react-native";
import LoadingIndicator from "@/components/LoadingIndicator";
import { Typography } from "@/components/Typography";
import SelectThemes from "@/components/SelectThemes";
import { useMemo, useState } from "react";
import Modal from "@/components/Modal";

export default function Home() {
	const { courses, loading, error } = useCourses();
	const [isOpen, setIsOpen] = useState(false);
	const [selectedTags, setSelectedTags] = useState(0);

	const tagsArray = useMemo(() => {
		return ["Все темы", ...new Set(courses.map((i) => i.tags).flat())];
	}, [courses]);

	const filteredCourses = useMemo(() => {
		if (selectedTags === 0) {
			return courses;
		} else {
			return courses.filter((i) => i.tags.includes(tagsArray[selectedTags]));
		}
	}, [selectedTags, tagsArray]);

	if (loading) {
		return <LoadingIndicator />;
	}

	if (error) {
		return (
			<View style={[styles.container, styles.containerError]}>
				<Typography variant={"h1"} style={{ color: "#fff" }}>
					Error: {error.message}
				</Typography>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.themeWrapper}>
				<SelectThemes setIsOpen={setIsOpen} value={tagsArray[selectedTags]} />
			</View>

			<FlatList
				data={filteredCourses}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <CourseCard course={item} style={styles.cardContainer} />}
				contentContainerStyle={styles.listContent}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				snapToAlignment="start"
				snapToInterval={210 + 16}
				decelerationRate="fast"
			/>
			{isOpen && (
				<Modal
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					tags={tagsArray}
					selectedTags={selectedTags}
					setSelectedTags={setSelectedTags}
				/>
			)}
		</View>
	);
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#7446EE",
	},
	themeWrapper: {
		justifyContent: "center",
		flexDirection: "row",
		width: "100%",
		marginTop: 12,
	},
	containerError: {
		justifyContent: "center",
		alignItems: "center",
	},
	listContent: {
		padding: 16,
		justifyContent: "center",
		alignItems: "center",
	},
	cardContainer: {
		marginRight: 16,
	},
});
