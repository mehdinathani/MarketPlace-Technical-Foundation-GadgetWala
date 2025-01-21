/* eslint-disable */


interface CartItem {
    title: string;
    price: number;
    quantity: number;
    image?: string;
    slug: string;
    product_id: string;
}

interface Product {
    title: string;
    price: number;
    discountedPrice?: number;
    image?: string;
    slug: string;
}
