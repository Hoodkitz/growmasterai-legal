import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-06-20",
});

const PLANS: Record<string, { priceId: string; name: string }> = {
  starter: {
    priceId: process.env.STRIPE_PRICE_STARTER || "",
    name: "Starter",
  },
  professional: {
    priceId: process.env.STRIPE_PRICE_PROFESSIONAL || "",
    name: "Professional",
  },
  enterprise: {
    priceId: process.env.STRIPE_PRICE_ENTERPRISE || "",
    name: "Enterprise",
  },
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const plan = searchParams.get("plan") || "starter";

  const planData = PLANS[plan];
  if (!planData) {
    return NextResponse.json({ error: "Ungültiger Plan" }, { status: 400 });
  }

  if (!planData.priceId) {
    return NextResponse.json(
      { error: "Stripe nicht konfiguriert. Setze STRIPE_PRICE_* Umgebungsvariablen." },
      { status: 500 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: planData.priceId,
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

    return NextResponse.redirect(session.url || "/");
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: "Fehler beim Erstellen der Checkout-Session" },
      { status: 500 }
    );
  }
}
