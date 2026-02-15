export function toPersianNumbersWithComma(num) {
  return num.toLocaleString("fa-IR");
}

export default function toPersianNumbers(num) {
  return num.toLocaleString("fa-IR", { useGrouping: false });
}
