const apiConfig = {
	baseUrl: "https://api.themoviedb.org/3/",
	apiKey: "3637d28dc904c6ea8ee42a679c0026fa",
	originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
