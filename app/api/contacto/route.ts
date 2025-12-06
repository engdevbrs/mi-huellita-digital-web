import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Aquí puedes integrar con un servicio de email (SendGrid, Resend, etc.)
    // Por ahora, solo simulamos el envío
    console.log("Mensaje de contacto recibido:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simular delay de red
    await new Promise((resolve) => setTimeout(resolve, 500));

    // TODO: Implementar envío real de email
    // Ejemplo con Resend o SendGrid:
    /*
    await resend.emails.send({
      from: 'contacto@mihuellitadigital.cl',
      to: 'tu-email@example.com',
      subject: `Contacto: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    });
    */

    return NextResponse.json(
      { message: "Mensaje enviado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al procesar el mensaje de contacto:", error);
    return NextResponse.json(
      { error: "Error al procesar el mensaje" },
      { status: 500 }
    );
  }
}

