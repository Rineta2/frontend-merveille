import axios from "axios";

export const fetchProduk = async () => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_URL_PRODUK!, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            },
        });
        return response.data.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message || "Error fetching Produk");
        } else {
            throw new Error("Error fetching Produk");
        }
    }
};