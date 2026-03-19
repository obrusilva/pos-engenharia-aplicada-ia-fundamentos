console.assert(process.env.OPENROUTER_API_KEY, 'OPENROUTER_API_KEY é obrigatória')

export type ModelConfig = {
    apiKey: string;
    httpReferer: string;
    xTitle: string;
    port: number;
    models: string[];
    temperature: number;
    maxTokens: number;
    systemPrompt: string;
    provider:{
        sort:{
            by: string;
            partition: string;
        }
    }
}


export const config: ModelConfig = {
    apiKey: process.env.OPENROUTER_API_KEY!,
    httpReferer: 'http://teste.com',
    xTitle: "Teste de integração com Smart Router LLM",
    port: 3000,
    models:[
        'openrouter/healer-alpha',
        'arcee-ai/trinity-large-preview:free',
        'nvidia/nemotron-3-nano-30b-a3b:free'
    ],
    temperature: 0.2,
    maxTokens: 100,
    systemPrompt: "Você é um assistente útil e prestativo.",
    provider:{
        sort:{
            by: "throughput",
            partition: "none"
        }
    }
}