import axios from "axios";

const API_KEY = "2CZIt8j_FJC3jge75XjassONipb1t1iDn0-67U8XazQ";
axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPictures = async (searchQuery, currentPage) => {
    const response = await axios.get("/search/photos", {
        params: {
            client_id: API_KEY,
            query: searchQuery,
            page: currentPage,
            per_page: 15,
            orientation: "landscape",
        },
    });
    return response.data.results; 
};