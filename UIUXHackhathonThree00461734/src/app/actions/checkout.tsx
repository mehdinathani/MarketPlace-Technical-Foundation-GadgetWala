import { client } from "@/sanity/lib/client";

const createCustomerInSanity = async (
    name: string,
    phone: string,
    address: string,
    email: string
) => {
    try {

        const customerObject = {
            _type: "customer",
            name: name,
            phone: phone,
            address: address,
            email: email,
        };

        // Await the creation of the customer
        const response = await client.create(customerObject);
        console.log("User created in Sanity:", response);
        return response; // This contains the _id needed for the order
    } catch (error) {
        console.error("Error creating user in Sanity:", error);
        throw error;
    }
};

const createOrderInSanity = async (cart: CartItem[], customer_id: string) => {
    try {
        const cartArray = Object.values(cart);


        const orderObject = {
            _type: "order",
            customer: {
                _type: "reference",
                _ref: customer_id,
            },
            items: cartArray.map((item: CartItem) => ({
                _type: "items",
                product_id: item.product_id,
                product_name: item.title,
                product_price: item.price,
                product_quantity: item.quantity,
                product_image: item.image,
            })),
            order_date: new Date().toISOString(),
        };

        console.log("Order object being sent to Sanity:", orderObject);

        const response = await client.create(orderObject);
        console.log("Order created in Sanity:", response);
        return response;
    } catch (error) {
        console.error("Error creating order in Sanity:", error);
        throw error;
    }
};


export default async function CheckOut(
    cart: CartItem[],
    name: string,
    phone: string,
    address: string,
    email: string
) {
    try {
        // Create the customer and wait for its completion
        const customer = await createCustomerInSanity(name, phone, address, email);

        // Create the order using the returned customer ID
        const order = await createOrderInSanity(cart, customer._id);

        console.log("Order successfully created in Sanity:", order);
        return order; // Optional: Return the order for further processing
    } catch (error) {
        console.error("Error in checkout process:", error);
        throw error;
    }
}
