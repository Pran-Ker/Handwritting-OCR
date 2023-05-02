// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

async function ocr(file) {
  // Read a local image as a text document
  const [result] = await client.documentTextDetection(file.path);
  const fullTextAnnotation = result.fullTextAnnotation;
  const text = fullTextAnnotation.text;
  console.log(`Full text: ${text}`);
  return text;
}

export default ocr;