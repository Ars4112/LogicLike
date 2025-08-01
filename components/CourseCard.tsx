import { View, Image, ViewProps } from "react-native";
import { Course } from "../types/courses.d";
import { StyleSheet } from "react-native";
import { Typography } from "./Typography";
import { memo } from "react";

interface Props extends ViewProps {
	course: Course;
}

export default memo(function CourseCard({ course, style, ...props }: Props) {
	
	return (
		<View style={[styles.container, style]} {...props}>
			<View style={[styles.card, { backgroundColor: course.bgColor }]}>
				<View style={styles.cardImageContainer}>
					<Image
						source={{ uri: course.image }}
						style={styles.cardImage}
						resizeMode="cover"
						progressiveRenderingEnabled
					/>
				</View>
				<View style={styles.cardTitle}>
					<Typography variant={"h2"} style={styles.cardText}>
						{course.name}
					</Typography>
				</View>
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#E5E8FE",
		borderRadius: 12,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
		width: 210,
		height: 204,
	},
	card: {
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
		width: "100%",
		height: 198,
	},
	cardImageContainer: {
		height: 168,
		justifyContent: "center",
	},
	cardImage: {
		width: 144,
		height: 144,
	},
	cardTitle: {
		backgroundColor: "#fff",
		width: "100%",
		borderBottomEndRadius: 12,
		borderBottomStartRadius: 12,
	},
	cardText: {
		fontFamily: "Nunito-SemiBold",
		fontSize: 14,
		fontWeight: "800",
		padding: 10,
		color: "#5A5776",
	},
});
