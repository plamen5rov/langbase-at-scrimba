import { runMemoryAgent, runAiSupportAgent } from './agents';

async function main() {
	const query = 'What Qwen LLM model can I run smoothly on my PC via Ollama?';
	const chunks = await runMemoryAgent(query);

	const completion = await runAiSupportAgent({
		chunks,
		query,
	});

	console.log('Completion:', completion);
}

// async function main() {
//     const query = "What Qwen LLM model can I run smoothly on my PC via Ollama?";
//     const chunks = await runMemoryAgent(query);
//     console.log("Retrieved Chunks:", chunks);
// }

main().catch(console.error);