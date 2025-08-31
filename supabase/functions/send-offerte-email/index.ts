import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface OfferteEmailRequest {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  projectType: string;
  projectDescription: string;
  timeline: string;
  budget: string;
  additionalInfo: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: OfferteEmailRequest = await req.json();

    console.log("Sending offerte email for:", { name: formData.name, email: formData.email });

    // Send notification email to company
    const companyEmailResponse = await resend.emails.send({
      from: "nieuwe offerte aanvraag <noreply@resend.dev>",
      to: ["info@smbgeveltechniek.nl"],
      reply_to: formData.email,
      subject: `Nieuwe offerteaanvraag van ${formData.name}`,
      html: `
        <h2>Nieuwe offerteaanvraag</h2>
        <h3>Persoonlijke Gegevens</h3>
        <p><strong>Naam:</strong> ${formData.name}</p>
        <p><strong>E-mail:</strong> ${formData.email}</p>
        <p><strong>Telefoon:</strong> ${formData.phone}</p>
        <p><strong>Adres:</strong> ${formData.address}</p>
        <p><strong>Plaats:</strong> ${formData.city}</p>
        <p><strong>Postcode:</strong> ${formData.postalCode}</p>
        
        <h3>Project Details</h3>
        <p><strong>Type Project:</strong> ${formData.projectType}</p>
        <p><strong>Projectbeschrijving:</strong></p>
        <p>${formData.projectDescription.replace(/\n/g, '<br>')}</p>
        <p><strong>Timeline:</strong> ${formData.timeline}</p>
        <p><strong>Budget:</strong> ${formData.budget}</p>
        
        ${formData.additionalInfo ? `
        <h3>Aanvullende Informatie</h3>
        <p>${formData.additionalInfo.replace(/\n/g, '<br>')}</p>
        ` : ''}
      `,
    });

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "nieuwe offerte aanvraag <noreply@resend.dev>",
      to: [formData.email],
      subject: "Bedankt voor uw offerteaanvraag - SMB Geveltechniek",
      html: `
        <h2>Bedankt voor uw offerteaanvraag, ${formData.name}!</h2>
        <p>We hebben uw offerteaanvraag ontvangen en zullen deze binnenkort uitwerken.</p>
        <p>U kunt binnen 2-3 werkdagen een uitgebreide offerte van ons verwachten.</p>
        
        <h3>Uw aanvraag samenvatting:</h3>
        <p><strong>Project:</strong> ${formData.projectType}</p>
        <p><strong>Locatie:</strong> ${formData.address}, ${formData.city}</p>
        <p><strong>Timeline:</strong> ${formData.timeline}</p>
        
        <br>
        <p>Heeft u nog vragen? Neem dan gerust contact met ons op.</p>
        
        <p>Met vriendelijke groet,<br>SMB Geveltechniek</p>
        <p>Telefoon: 06-12345678<br>E-mail: info@smbgeveltechniek.nl</p>
      `,
    });

    console.log("Offerte emails sent successfully:", { companyEmailResponse, customerEmailResponse });

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
    console.error("Error in send-offerte-email function:", error);
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