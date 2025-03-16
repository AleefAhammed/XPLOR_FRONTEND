import axios from "axios";

export async function loader() {
    const url = `${import.meta.env.VITE_SERVER_URL}/user/verify`;

    try {

        const response = await axios.get(url, { withCredentials: true });
        return {
            userData: response?.data?.data || {},
            login: true
        };
    } catch (error) {
        console.error("User verification failed:", error.message);
        return { userData: {}, login: false }; // ✅ Ensure it always returns an object
    }
}