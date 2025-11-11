// варіант 5 — Міжнвродні резерви

// дата, формат YYYYMMDD)
const date = "20220201";
const baseURL = "https://bank.gov.ua/";
const fullURL = new URL("NBUStatService/v1/statdirectory/res", baseURL);
fullURL.searchParams.append("date", date);
fullURL.searchParams.append("json", "");

console.log("Сформований URL:");
console.log(fullURL.href);
