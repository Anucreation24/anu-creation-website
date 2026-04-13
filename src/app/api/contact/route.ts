import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Contact delivery is not configured. Please add RESEND_API_KEY to your environment variables." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, company, service, message, budget } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    // 1. Send internal notification to ANU CREATION
    const { error: inquiryError } = await resend.emails.send({
      from: "ANU CREATION Inquiries <onboarding@resend.dev>",
      to: ["24anucreation@gmail.com"],
      subject: `New Project Inquiry: ${service || "General"} from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: #1A1A1A; max-width: 600px; margin: auto; border: 1px solid #E5E7EB; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #0A0A0A; padding: 30px; text-align: center;">
            <h1 style="color: #C9A64B; margin: 0; font-size: 24px; letter-spacing: 2px; text-transform: uppercase;">New Inquiry</h1>
          </div>
          
          <div style="padding: 30px;">
            <div style="margin-bottom: 25px;">
              <p style="margin: 0 0 5px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 1px;">Client Identity</p>
              <p style="margin: 0; font-size: 16px; font-weight: 600;">${name} (${email})</p>
            </div>

            <div style="display: flex; gap: 20px; margin-bottom: 25px;">
              <div style="flex: 1;">
                <p style="margin: 0 0 5px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 1px;">Company</p>
                <p style="margin: 0; font-size: 14px;">${company || "N/A"}</p>
              </div>
              <div style="flex: 1;">
                <p style="margin: 0 0 5px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 1px;">Interest</p>
                <p style="margin: 0; font-size: 14px;">${service || "General Inquiry"}</p>
              </div>
            </div>

            <div style="margin-bottom: 25px;">
              <p style="margin: 0 0 5px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 1px;">Budget Range</p>
              <p style="margin: 0; font-size: 14px; color: #C9A64B; font-weight: 600;">${budget || "To be discussed"}</p>
            </div>

            <div style="background-color: #F9FAFB; padding: 20px; border-left: 4px solid #C9A64B; border-radius: 4px;">
              <p style="margin: 0 0 10px 0; font-size: 12px; color: #6B7280; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="margin: 0; font-size: 14px; color: #374151; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="background-color: #F3F4F6; padding: 20px; text-align: center; border-t: 1px solid #E5E7EB;">
            <p style="margin: 0; font-size: 12px; color: #9CA3AF;">Inquiry delivered via anucreation.com</p>
          </div>
        </div>
      `,
    });

    if (inquiryError) {
      const isUnverified = inquiryError.message?.toLowerCase().includes("unverified") || 
                           inquiryError.name === "validation_error";
      
      console.error("[RESEND_ERROR]:", inquiryError);
      
      return NextResponse.json({ 
        error: isUnverified 
          ? "ACTION REQUIRED: Please log into your Resend.com dashboard and verify '24anucreation@gmail.com' as a recipient, or add your domain."
          : "Failed to deliver inquiry. Please check your RESEND_API_KEY.",
        details: inquiryError.message 
      }, { status: 500 });
    }

    // 2. Send branded confirmation to the user
    try {
      await resend.emails.send({
        from: "ANU CREATION <onboarding@resend.dev>",
        to: [email],
        subject: "Confirmation: We've received your inquiry",
        html: `
          <div style="font-family: 'Inter', sans-serif; line-height: 1.6; color: #F5F2EA; max-width: 600px; margin: auto; background-color: #0A0A0A; border: 1px solid #1A1A1A; border-radius: 12px; overflow: hidden;">
            <div style="padding: 40px; text-align: center; border-bottom: 1px solid #1A1A1A;">
              <p style="margin: 0 0 10px 0; font-size: 10px; letter-spacing: 3px; color: #C9A64B; text-transform: uppercase;">A N U  C R E A T I O N</p>
              <h1 style="margin: 0; font-size: 28px; font-weight: 300; font-family: serif;">Thank You, ${name.split(' ')[0]}.</h1>
            </div>
            
            <div style="padding: 40px;">
              <p style="margin: 0 0 20px 0; font-size: 15px; color: #B7B1A3;">We have successfully received your inquiry for ${service || "your project"}. Our team is reviewing your details and will get in touch within the next 24 hours.</p>
              
              <div style="margin: 30px 0; padding: 25px; border: 1px solid #C9A64B20; background-color: #C9A64B05; border-radius: 8px;">
                <p style="margin: 0 0 15px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #6B6560;">Summary of your message</p>
                <p style="margin: 0; font-size: 14px; color: #F5F2EA; font-style: italic; opacity: 0.8;">"${message.length > 200 ? message.substring(0, 200) + '...' : message}"</p>
              </div>

              <p style="margin: 0; font-size: 14px; color: #B7B1A3;">In the meantime, feel free to explore more of our work.</p>
            </div>

            <div style="padding: 30px; background-color: #0F0F0F; text-align: center; border-top: 1px solid #1A1A1A;">
              <p style="margin: 0 0 10px 0; font-size: 10px; color: #6B6560; letter-spacing: 1px;">ANU CREATION — The Cinematic Curator</p>
              <div style="font-size: 10px; color: #4A4540;">
                <p style="margin: 4px 0;">Video Editing • Graphic Design • Marketing</p>
              </div>
            </div>
          </div>
        `,
      });
    } catch (confirmErr) {
      console.error("User confirmation email failed:", confirmErr);
      // We don't return error here because the main inquiry was successful
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
