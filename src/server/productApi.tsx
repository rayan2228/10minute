"use server"

import { API_BASE_URL } from "@/constants";
const fetchProduct = async (slug: string) => {
    try {
        const res = await fetch(
            `${API_BASE_URL}/${slug}`,
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

        return await res.json();
    } catch (error) {
        console.error('Failed to fetch product data:', error);
        throw error;
    }
}

export { fetchProduct };

