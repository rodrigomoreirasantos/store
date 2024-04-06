"use server";

import { CartProduct } from "@/providers/cart";
import Stripe from "stripe";

export const createCheckout = async (
  products: CartProduct[],
  // orderId: string,
) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: process.env.HOST_URL,
    cancel_url: process.env.HOST_URL,
    metadata: {
      // orderId,
      products: JSON.stringify(products),
    },
    line_items: products.map((product) => {
      return {
        price_data: {
          currency: "cad",
          product_data: {
            name: product.name,
            description: product.description,
            images: product.imageUrls,
          },
          unit_amount: Number(product.totalPrice) * 100,
        },
        quantity: product.quantity,
      };
    }),
  });

  return checkout;
};