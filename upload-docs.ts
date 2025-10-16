import 'dotenv/config';
import { Langbase } from 'langbase';
import { readFile } from 'fs/promises';
import path from 'path';

const langbase = new Langbase({
  apiKey: process.env.LANGBASE_API_KEY || '',
});

async function main() {
    const cwd = process.cwd();
    const memoryName = 'knowledge-base';
    const langbaseFag = await readFile(path.join(cwd, 'docs', 'specs.txt'));

    try {
        const faqResults = await langbase.memories.documents.upload({
            memoryName,
            contentType: 'text/plain',
            documentName: 'specs.txt',
            document: langbaseFag,
            meta: { category: 'support', topic: 'PC Specifications' }
        });
        
        console.log('Upload Status:', faqResults.ok ? 'Success' : 'Failed');
        console.log('Document Details:', {
            name: 'specs.txt',
            memory: memoryName,
            size: langbaseFag.length,
            response: faqResults
        });
    } catch (error) {
        console.error('Upload failed:', error);
        throw error;
    }
}

main().catch(console.error);