/* eslint-disable @typescript-eslint/no-explicit-any */


import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-01-27.acacia",
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, totalPrice } = body; // Extract title and total price

        // Validate input
        if (!title || totalPrice == null) {
            return NextResponse.json(
                { error: "Missing total price or title." },
                { status: 400 }
            );
        }

        // Create a single line item for the total bill
        const lineItems = [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: title, // Title received from the frontend
                        description: "Total Bill", // You can change this if needed
                    },
                    unit_amount: Math.round(totalPrice * 100), // Convert totalPrice to cents
                },
                quantity: 1, // Only 1 item for the total bill
            },
        ];

        // Create a Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${req.headers.get("origin")}/success`,
            cancel_url: `${req.headers.get("origin")}/cancel`,
            metadata: {
                order_id: `order_${Date.now()}`, // Unique order tracking
            },
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        console.error("Stripe Checkout Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 }
    );
}
