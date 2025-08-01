import { Text, TextProps, StyleSheet } from "react-native";

type Variant = "h1" | "h2" | "caption";

interface TypographyProps extends TextProps {
	variant?: Variant;
	children: React.ReactNode;
	color?: string;
}

export const Typography = ({ variant = "caption", children, style, color, ...props }: TypographyProps) => {
	const variantStyles = {
		h1: [styles.base, styles.h1],
		h2: [styles.base, styles.h2],
		caption: [styles.base, styles.caption],
	};

	return (
		<Text style={[variantStyles[variant], color ? { color } : {}, style]} {...props}>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create({
	base: {
		color: "#333",
		fontWeight: "800",
		fontFamily: "Nunito-Regular",
	},
	h1: {
		fontFamily: "Nunito-Bold",
		fontSize: 18,
		lineHeight: 18,
	},
	h2: {
		fontSize: 14,
		lineHeight: 12,
	},
	caption: {
		fontSize: 12,
		lineHeight: 12,
	},
});
