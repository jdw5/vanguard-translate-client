import { usePage } from "@inertiajs/vue3";

export type VanguardTranslateProps = object | null;

const page = usePage();

const unwrap = (obj: object) => {
	const unwrapped = {};
	Object.keys(obj).forEach((key) => {
		unwrapped[key] = obj[key].value;
	});
	return unwrapped;
};

export default (props: VanguardTranslateProps = null) => {
	// Unwrap the props as dot notation
	const translations = unwrap(props === null ? {} : page.props.translations);

	const retrieve = (key: string) => {
		return translations[key] || key;
	};

	return retrieve;
};
