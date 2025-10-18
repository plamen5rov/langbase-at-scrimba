import { runMemoryAgent } from "./agent";

async function main() {
    const query = "What Qwen LLM model can I run smoothly on my PC via Ollama?";
    const chunks = await runMemoryAgent(query);
    console.log("Retrieved Chunks:", chunks);
}

main().catch(console.error);