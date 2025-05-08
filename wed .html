<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>ARC Welding Calculator (Hover Image)</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 40px;
      background-color: #f4f4f4;
    }
    .illustration-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 20px;
    }
    .illustration-list li {
      background-color: #fff;
      padding: 10px 15px;
      border: 1px solid #ccc;
      cursor: pointer;
      position: relative;
    }
    .illustration-list li:hover {
      background-color: #f0f0f0;
    }
    .preview {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 100;
      background: #fff;
      border: 1px solid #ccc;
      padding: 5px;
    }
    .illustration-list li:hover .preview {
      display: block;
    }
    .preview img {
      max-width: 200px;
      max-height: 150px;
    }
    table {
      margin-top: 30px;
      border-collapse: separate;
      border-spacing: 0;
      width: 100%;
      background-color: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      overflow: hidden;
    }

    th, td {
      padding: 14px 20px;
      text-align: center;
    }

    thead {
      background-color: #cf8413;
      color: white;
    }

    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tbody tr:hover {
      background-color: #f1f1f1;
    }

    th:first-child, td:first-child {
      border-top-left-radius: 10px;
    }

    th:last-child, td:last-child {
      border-top-right-radius: 10px;
    }
  </style>
</head>
<body>

  <h1 style="background-color: #cf8413;">WELCOME TO WELDING Calculator V.1 </h1>
  <p>Program กำลังอยู่ในช่วงพัฒนา</p>
  <hr>
  <h2>เลือก รูปภาพท่าเชื่อมให้ตรงกับ DRAWING</h2>
<ul class="illustration-list">
  <li onclick="selectIllustration('ILL-01')">
    ILL-01
    <div class="preview">
      <img src="ILL-01.png" alt="ILL-01">
    </div>
  </li>
  
  <li onclick="selectIllustration('ILL-02')">
    ILL-02
    <div class="preview">
      <img src="ILL-02.png" alt="ILL-02">
    </div>
  </li>
  
  <li onclick="selectIllustration('ILL-03')">
    ILL-03
    <div class="preview">
      <img src="ILL-03.png" alt="ILL-03">
    </div>
  </li>
  
  <li onclick="selectIllustration('ILL-04')">
    ILL-04
    <div class="preview">
      <img src="ILL-04.png" alt="ILL-04">
    </div>
  </li>
  
  <li onclick="selectIllustration('ILL-05')">
    ILL-05
    <div class="preview">
      <img src="ILL-05.png" alt="ILL-05">
    </div>
  </li>
  
  <li onclick="selectIllustration('ILL-06')">
    ILL-06
    <div class="preview">
      <img src="ILL-06.png" alt="ILL-06">
    </div>
  </li>
</ul>

<br>

<label for="thickness">Plate Thickness (t) [mm]
  <br>กรอกความหนา MAT ที่น้อยที่สุด :</label>
  <br>
  <br>
  <br><input type="number" id="thickness" oninput="calculate()" placeholder="เช่น 5.0">

<img id="illustrationImage" src="" alt="" style="display:none; margin-top: 20px; max-width: 300px;"><br><br>

<table>
  <thead>
    <tr>
      <th>Plate Thickness (t) [mm]</th>
      <th>Fillet Leg Length (L)</thฤ>
      <th>Penetration Depth (d)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td id="tVal">-</td>
      <td id="lVal">-</td>
      <td id="dVal">-</td>
    </tr>
  </tbody>
</table>

<script>
  let selectedIllustration = "";

  function getL_ILL01(t) {
    if (t < 3.2) return "Not specified";
    if (t < 4.5) return "2.5";
    if (t < 6) return "3";
    if (t < 8) return "4";
    return "-";
  }

  function getL_ILL02(t) {
    if (t < 3.2) return "Not specified";
    if (t < 4.5) return "2.5";
    if (t < 6) return "3";
    if (t < 8) return "4";
    if (t < 9) return "6";
    if (t < 12) return "7";
    if (t < 14) return "9";
    if (t < 16) return "11";
    if (t < 19) return "13";
    if (t >= 19) return "-";
    return "-";
  }
  function getL_ILL03(t) {
  if (t < 9) return "Not specified";
  if (t < 12) return "5";
  if (t < 14) return "7";
  if (t < 16) return "8";
  if (t < 19) return "10";
  if (t < 22) return "12";
  if (t < 25) return "14";
  if (t >= 25) return "16";
  return "-";
}
function getL_ILL04(t) {
  if (t < 3.2) return "Not specified";
  if (t < 4.5) return "3";
  if (t < 6) return "4";
  if (t < 8) return "5";
  if (t < 9) return "6";
  if (t < 12) return "7";
  if (t < 14) return "9";
  if (t < 16) return "11";
  if (t < 19) return "13";
  if (t >= 19) return "-";
  return "-";
}
function getL_ILL05(t) {
  if (t < 4.5) return "Not specified";
  if (t < 6) return "3";
  if (t < 8) return "4";
  if (t < 9) return "4";
  if (t < 12) return "5";
  if (t < 14) return "6";
  if (t < 16) return "7";
  if (t < 19) return "8";
  if (t < 22) return "9";
  if (t < 25) return "10";
  if (t >= 25) return "11";
  return "-";
}
function getL_ILL06(t) {
  if (t < 3.2) return "Not specified";
  if (t < 4.5) return "2.5";
  if (t < 6) return "3";
  if (t < 8) return "4";
  if (t > 6) return "-";
  return "-";
}

  function getD_ByFormula(t, L, ill) {
    if (L === "Not specified") return (t * 0.2).toFixed(2);
    if (L === "-") return "1.50";
    const multipliable = ["2.5", "3", "4", "6", "7", "9", "11", "13"];
    const Lval = parseFloat(L);
    if (ill === "ILL-02" && Lval > 8) return "1.50";
    if (multipliable.includes(L)) return (Lval * 0.2).toFixed(2);
    return "";
  }

  function selectIllustration(ill) {
    selectedIllustration = ill;
    document.getElementById("illustrationImage").src = ill + ".png";
    document.getElementById("illustrationImage").style.display = "block";
    calculate();
  }

  function calculate() {
    const t = parseFloat(document.getElementById("thickness").value);
    if (!selectedIllustration || isNaN(t)) {
      document.getElementById("tVal").textContent = "-";
      document.getElementById("lVal").textContent = "-";
      document.getElementById("dVal").textContent = "-";
      return;
    }
    function getD_ByFormula(t, L, ill) {
  if (L === "Not specified") return (t * 0.2).toFixed(2);
  if (L === "-") return "1.50";
  const Lval = parseFloat(L);

  if (ill === "ILL-02" && Lval > 8) return "1.50";
  if (ill === "ILL-03") {
    if (["5", "7", "8"].includes(L)) return (Lval * 0.2).toFixed(2);
    if (Lval >= 8) return "1.50";
  }
  

  const multipliable = ["2.5", "3", "4", "6", "7", "9", "11", "13"];
  if (multipliable.includes(L)) return (Lval * 0.2).toFixed(2);

  return "";
}
function getD_ByFormula(t, L, ill) {
  if (L === "Not specified") return (t * 0.2).toFixed(2);
  if (L === "-") return "1.50";
  const Lval = parseFloat(L);

  if (ill === "ILL-02" && Lval > 8) return "1.50";
  if (ill === "ILL-03") {
    if (["5", "7", "8"].includes(L)) return (Lval * 0.2).toFixed(2);
    if (Lval >= 8) return "1.50";
  }
  if (ill === "ILL-04") {
    if (["3", "4", "5", "6", "7"].includes(L)) return (Lval * 0.2).toFixed(2);
    if (Lval >= 8) return "1.50";
  }
  if (ill === "ILL-05") {
  if (["3", "4", "5", "6", "7", "8"].includes(L)) return (parseFloat(L) * 0.2).toFixed(2);
  if (parseFloat(L) >= 8) return "1.50";
}
if (ill === "ILL-06") {
  if (["2.5", "3", "4"].includes(L)) return (L * 0.2).toFixed(2);
  if (L === "-") return "1.50";
}

  const multipliable = ["2.5", "3", "4", "6", "7", "9", "11", "13"];
  if (multipliable.includes(L)) return (Lval * 0.2).toFixed(2);

  return "";
}

    let L = "-";
    if (selectedIllustration === "ILL-01") {
      L = getL_ILL01(t);
    } else if (selectedIllustration === "ILL-02") {
      L = getL_ILL02(t);
    } else if (selectedIllustration === "ILL-03") {
  L = getL_ILL03(t);
}
else if (selectedIllustration === "ILL-04") {
  L = getL_ILL04(t);
}
else if (selectedIllustration === "ILL-05") {
  L = getL_ILL05(t);
}
else if (selectedIllustration === "ILL-06") {
  L = getL_ILL06(t);
}

    const d = getD_ByFormula(t, L, selectedIllustration);
    document.getElementById("tVal").textContent = t.toFixed(2);
    document.getElementById("lVal").textContent = L;
    document.getElementById("dVal").textContent = d;
  }
</script>

</body>
</html>
