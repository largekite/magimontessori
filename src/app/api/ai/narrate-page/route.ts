import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    system: 'You are a helpful AI assistant for MagiMontessori. Produces a natural, engaging narration script for each book page optimized for text-to-speech playback',
    prompt,
    maxTokens: 2048,
  });

  return result.toDataStreamResponse();
}
