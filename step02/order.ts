export const order = {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
        {
            name: "customerID",
            type: "string",
            title: "customer Id"
        },
        {
            name: "orderDate",
            type: "datetime",
            title: "Order Date"
        },
        {
            name: "orderStatus",
            type: "string",
            title: "Order Status"
        },
        {
            name: "orderTotal",
            type: "number",
            title: "Order Total"
        },
        {
            name: "orderItems",
            type: "array",
            title: "Order Items",
            of: [{ type: "reference", to: [{ type: "orderItem" }] }]
        }
    ]
}