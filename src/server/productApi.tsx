"use server"

import { API_BASE_URL } from "@/constants";
const fetchProduct = async (slug: string, lang: string = "bn") => {
    try {
        const res = await fetch(
            `${API_BASE_URL}/${slug}?lang=${lang}`,
            {
                headers: {
                    'X-TENMS-SOURCE-PLATFORM': 'web',
                    'accept': 'application/json',
                },
                cache: 'force-cache'
            }
        );

        if (!res.ok) {
            throw new Error(`API request failed with status ${res.status} `);
        }

        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error('Failed to fetch product data:', error);
        throw error;
    }
}

export { fetchProduct };

