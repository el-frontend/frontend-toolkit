import fs from "fs";

export async function updatedJsonFile(
  filePath: string,
  updatedData: Record<string, unknown>,
) {
  try {
    // Step 1: Read the JSON file
    const data = await fs.promises.readFile(filePath, "utf8");

    // Step 2: Parse the JSON data
    const sanitizedData = sanitizeJSON(data);
    let jsonData = JSON.parse(sanitizedData);

    // Step 3: Modify properties (example: updating a "name" property)
    jsonData = { ...jsonData, ...updatedData };

    // Step 4: Convert the modified JSON object back to a string
    const updatedJson = JSON.stringify(jsonData, null, 2);

    // Step 5: Write the updated JSON back to the file
    await fs.promises.writeFile(filePath, updatedJson, "utf8");
  } catch (err) {
    console.error("Error updating JSON file:", err);
  }
}

export function sanitizeJSON(data: string) {
  return data.replace(/[\n\r]/g, "").replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
}
