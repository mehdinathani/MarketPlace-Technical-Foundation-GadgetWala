import { client } from "@/sanity/lib/client";

const createCustomerInSanity = (name: string,
    phone: string,
    address: string,
    email: string) => {
    try {
        const customerObject = {
            _type: "customer",
            name: name,
            phone: phone,
            address: address,
            email: email
        }
        const response = client.create(customerObject);
        console.log("User created in sanity", response);
        return response;

    } catch (error) {
        console.log("Error creating user in sanity", error);
        throw error;
    }
}

const createOrderInSanity = (cart: CartItem[], customer_id: string) => {
    try {
        const orderObject = {
            _type: "order",
            customer: {
                _type: "reference",
                _ref: customer_id
            },
            items: cart.map((item: CartItem) => (
                {
                    _type: "items",
                    product_id: item.product_id,
                    product_name: item.title,
                    product_price: item.price,
                    product_quantity: item.quantity,
                    product_image: item.image,

                }
            )),
            order_date: new Date().toISOString(),

        }
        const response = client.create(orderObject);
        console.log("Order created in sanity", response);
        return response;

    } catch (error) {
        console.log("Error creating order in sanity", error);
        throw error;
    }
}

export default async function CheckOut(cart: CartItem[], name: string,
    phone: string,
    address: string,
    email: string) {
    try {
        const customer = await createCustomerInSanity(name, phone, address, email);
        await createOrderInSanity(cart, customer._id);
        console.log("Order created in sanity", customer);
    } catch (error) {
        console.log("Error creating order in sanity", error);
        throw error;
    }

}