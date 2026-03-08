const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const generateAIResponse = async ({ agentConfig, message, context }) => {
    try {
        if (!process.env.OPENAI_API_KEY) {
            return "OpenAI API key missing. This is a mock response from AgentForge AI.";
        }

        const response = await openai.chat.completions.create({
            model: agentConfig.model || "gpt-3.5-turbo",
            messages: [
                { role: "system", content: agentConfig.systemPrompt || "You are a helpful AI assistant." },
                { role: "user", content: message }
            ]
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error('AI response error:', error);
        return "Error generating AI response. Please try again later.";
    }
};

module.exports = { generateAIResponse };
