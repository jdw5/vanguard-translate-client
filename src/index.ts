import { usePage } from "@inertiajs/vue3";

export type KeyedObject = { [key: string]: KeyedObject | string };

export type VanguardTranslateProps = KeyedObject | null;

export type VanguardTranslate = (key: string) => string;

export default (props: VanguardTranslateProps = null): VanguardTranslate => {
	/** Allow for props to be empty and it to autofill, in case where it is globally defined */
	const translations = (props ?? usePage().props.translations) as KeyedObject;

	/** Unwrap the dot rotation */
	const __ = (key: string): string =>
		key
			.split(".")
			.reduce(
				(acc: any, part: string) =>
					acc !== undefined && acc[part] !== undefined ? acc[part] : key,
				translations,
			);

	return __;
};
