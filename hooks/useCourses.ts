import { useState, useEffect } from "react";
import axios from "axios";
import { Course } from "../types/courses.d";

const API_URL = "https://logiclike.com/docs/courses.json";

export const useCourses = () => {
	const [courses, setCourses] = useState<Course[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchCourses = async () => {
			try {
				const response = await axios.get<Course[]>(API_URL);

				setCourses(response.data);
			} catch (err) {
				setError(err as Error);
			} finally {
				setLoading(false);
			}
		};

		fetchCourses();
	}, []);

	return { courses, loading, error };
};
