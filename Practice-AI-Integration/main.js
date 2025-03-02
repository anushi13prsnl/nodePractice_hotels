const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

async function generateEmbedding(text) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY environment variable is not set.");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

    const result = await model.embedContent(text);

    if (!result || !result.embedding) { //Check if embedding is present in result
      throw new Error("No embedding returned from the model.");
    }
    return result.embedding; // Return only the embedding, not the whole result object
  } catch (error) {
    console.error("Error generating embedding:", error);
    // Consider re-throwing the error or returning a specific error value
    throw error; // Re-throwing is generally better for calling functions to handle the error as needed.
    //return null; // or return an error object: { error: error.message }
  }
}

async function main() {
  try {
    const textToEmbed = "What is the meaning of life?";
    const embedding = await generateEmbedding(textToEmbed);
    console.log(`Embedding for "${textToEmbed}":`, embedding);
  } catch (error) {
    console.error("Main function error:", error);
  }
}

main();