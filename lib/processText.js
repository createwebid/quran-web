export default function processText(text) {
  const listText = text.split(". ");
  return listText.join(".\n");
}
