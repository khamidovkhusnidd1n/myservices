import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, service, description, contact, budget, deadline } = body;

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const message = `
🚀 *Yangi Buyurtma! (KHAMIDOV Studio)*

👤 *Ism/Kompaniya:* ${name}
💼 *Xizmat turi:* ${service}
📞 *Aloqa:* ${contact}
💰 *Budjet:* ${budget || 'Kiritilmagan'}
📅 *Muddat:* ${deadline || 'Kiritilmagan'}

📝 *Loyihaning qisqacha ta'rifi:*
${description}
`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      throw new Error('Telegram API error');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Telegram API error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
