import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    system: `You are a helpful AI assistant for MagiMontessori. Generates a full illustrated Montessori learning book with chapters, activities, and age-appropriate language based on the child's profile and chosen topic`,
    prompt,
    maxTokens: 2048,
  });

  return result.toDataStreamResponse();
}
