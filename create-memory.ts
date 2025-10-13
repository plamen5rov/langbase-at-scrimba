import 'dotenv/config';
import { Langbase } from 'langbase';

const langbase = new Langbase({
  apiKey: process.env.LANGBASE_API_KEY || '',
});

async function main() {
    const memory = await langbase.memories.create({
        name: 'knowledge-base',
        embedding_model: 'openai:text-embedding-3-large',
    });
    console.log('Created memory:', memory);
}

main().catch(console.error);
// To run this file, use the command: `nvm use --lts && ts-node create-memory.ts`
// Make sure you have `ts-node` installed globally or in your project dependencies.