const xlsx = require("xlsx");

function readExcelData(filePath, sheetName) {
  console.log(filePath);
  const workbook = xlsx.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(worksheet); // returns array of objects
}

module.exports = { readExcelData };
