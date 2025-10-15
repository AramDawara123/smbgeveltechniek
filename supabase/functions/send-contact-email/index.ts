import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email for:", { name, email });

    // Send notification email to company
    const companyEmailResponse = await resend.emails.send({
      from: "SMB Geveltechniek <onboarding@resend.dev>",
      to: ["info@smbgeveltechniek.nl"],
      reply_to: email,
      subject: `Nieuwe contactaanvraag van ${name}`,
      html: `
        <h2>Nieuwe contactaanvraag</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phone}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "SMB Geveltechniek <onboarding@resend.dev>",
      to: [email],
      subject: "Bedankt voor uw bericht - SMB Geveltechniek",
      html: `
        <h2>Bedankt voor uw bericht, ${name}!</h2>
        <p>We hebben uw bericht ontvangen en nemen zo spoedig mogelijk contact met u op.</p>
        <p><strong>Uw bericht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <br>
        <p>Met vriendelijke groet,<br>SMB Geveltechniek</p>
        <p>Telefoon: 06-39 58 03 41<br>E-mail: info@smbgeveltechniek.nl</p>
      `,
    });

    console.log("Emails sent successfully:", { companyEmailResponse, customerEmailResponse });

    return new Response(JSON.stringify({ 
      success: true, 
      companyEmail: companyEmailResponse,
      customerEmail: customerEmailResponse 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);