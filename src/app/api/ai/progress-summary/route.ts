import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { role: 'system', content: `You are a helpful AI assistant. Analyzes a child's completed books and activities to generate a plain-language developmental progress summary for parents` },
      { role: 'user', content: prompt },
    ],
    max_tokens: 2048,
  });

  const result = completion.choices[0]?.message?.content ?? '';
  return Response.json({ result });
}
