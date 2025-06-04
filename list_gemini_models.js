const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: "AIzaSyC-N2m8jB0zVxB55mIrxuy0-hvKqA5Gi9s" });

async function listModels() {
  try {
    console.log("Listando modelos disponíveis:");
    for await (const model of ai.models.list()) {
      console.log(`${model.name} - Métodos Suportados: ${JSON.stringify(model.supportedGenerationMethods)}`);
    }
  } catch (error) {
    console.error("Erro ao listar modelos:", error);
  }
}

listModels(); 