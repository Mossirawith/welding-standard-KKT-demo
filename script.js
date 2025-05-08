function calculate() {
  const t = parseFloat(document.getElementById('thickness').value);
  const result = document.getElementById('result');
  if (isNaN(t)) {
    result.textContent = 'กรุณากรอกค่าที่ถูกต้อง';
    return;
  }
  const L = (t < 6) ? 3 : 5;
  result.textContent = `ผลลัพธ์: L = ${L}, d = ${(L * 0.2).toFixed(2)}`;
}
