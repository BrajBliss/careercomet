// Tests if a string is a valid image URL for the purpose of displaying it as an image.
// Returns true if the string is a valid image URL, otherwise returns false.
// Valid image URL's must be a valid URL (https://...) and must end in .png, .jpg, .jpeg, .bmp, .gif, or .webp.

export const checkImageURL = (url) => {
	if (!url) return false;
	else {
		const pattern = new RegExp(
			'^https?:\\/\\/.+\\.(png|jpe?g|bmp|gif|webp)$',
			'i'
		);
		return pattern.test(url);
	}
};
