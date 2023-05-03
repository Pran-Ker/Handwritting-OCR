const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

// The path to the local image file, e.g. /path/to/image.png
const fileName = './pic.png';

// Read the image file as a text document
async function detectHandwrittenText() {
  const [result] = await client.documentTextDetection(fileName);
  const fullTextAnnotation = result.fullTextAnnotation;
  console.log(`Full text: ${fullTextAnnotation.text}`);
}

detectHandwrittenText();