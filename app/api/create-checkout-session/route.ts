import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-06-20",
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { plan } = body;

  const priceIds: Record<string, string> = {
    starter: process.env.STRIPE_PRICE_STARTER || "",
    professional: process.env.STRIPE_PRICE_PROFESSIONAL || "",
    enterprise: process.env.STRIPE_PRICE_ENTERPRISE || "",
  };

  const priceId = priceIds[plan];
  if (!priceId) {
    return NextResponse.json({ error: "Ungültiger Plan" }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/erfolg?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}?canceled=true`,
      locale: "de",
      metadata: {
        plan: plan,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: "Fehler beim Erstellen der Checkout-Session" },
      { status: 500 }
    );
  }
}
