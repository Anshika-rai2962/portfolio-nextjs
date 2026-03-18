import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { message, visitorEmail, visitorName } = await request.json();

    // Validate inputs
    if (!message) {
      return Response.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Create transporter with Gmail
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to you (chat message notification)
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: `💬 New Chat Message from ${visitorName || 'Anonymous Visitor'}`,
      html: `
        <h2>New Chat Message!</h2>
        <p><strong>From:</strong> ${visitorName || 'Anonymous'}</p>
        <p><strong>Email:</strong> ${visitorEmail || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p><strong>Reply to visitor:</strong> ${visitorEmail || 'No email provided'}</p>
        <p><em>You can reply directly to this email to respond to the visitor.</em></p>
      `,
    });

    return Response.json(
      { success: true, message: 'Chat message sent!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Chat email error:', error);
    return Response.json(
      { error: 'Failed to send chat message', details: error.message },
      { status: 500 }
    );
  }
}
