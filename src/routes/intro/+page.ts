export const load = () => {
	return {
		step: 4,
	} as {
		step: 1 | 2 | 3 | 4 | "checking" | "joingroup" | "success";
	};
};
