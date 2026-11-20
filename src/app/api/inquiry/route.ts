import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, phone, email, property, message, preferredDate } = data;

    // Validate essential fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    // Prepare formatted WhatsApp message
    const lines = [
      `*New Property Inquiry - Temer Property*`,
      `👤 Name: ${name}`,
      `📞 Phone: ${phone}`,
      email ? `✉️ Email: ${email}` : null,
      property ? `🏠 Property: ${property}` : null,
      preferredDate ? `📅 Preferred Visit Date: ${preferredDate}` : null,
      message ? `💬 Message: ${message}` : null,
      `⏰ Received: ${new Date().toLocaleString()}`,
    ].filter(Boolean);

    const formattedMessage = lines.join("\n");
    const recipientPhone = "251938125777";
    const whatsappUrl = `https://wa.me/${recipientPhone}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    // Log the lead for persistence
    console.log("[LEAD_RECEIVED]", {
      timestamp: new Date().toISOString(),
      name,
      phone,
      email,
      property,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully. Our sales team has been notified.",
      whatsappUrl,
    });
  } catch (error) {
    console.error("[INQUIRY_API_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to process inquiry." },
      { status: 500 }
    );
  }
}

