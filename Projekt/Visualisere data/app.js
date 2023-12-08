// Opret grafer
var ctxOrdre = document.getElementById("ordreGraf").getContext("2d");
var ctxPraecision = document.getElementById("praecisionGraf").getContext("2d");
var ctxUheld = document.getElementById("uheldGraf").getContext("2d");
var ctxOrdreBedstTilVaerst = document
  .getElementById("ordreGrafBedstTilVaerst")
  .getContext("2d");
var ctxOrdreVaerstTilBedst = document
  .getElementById("ordreGrafVaerstTilBedst")
  .getContext("2d");

console.log("ordreData:", ordreData);
console.log("praecisionData:", praecisionData);
console.log("uheldData:", uheldData);

// Funktion til at konvertere præcisionData til numeriske værdier
function convertPraecisionData(data) {
  return data.map((value) => parseFloat(value.replace(",", "."))); // Konverter komma til punktum og parse til float
}

// Konverter præcisionData til numeriske værdier
praecisionData = convertPraecisionData(praecisionData);

// Funktion til at filtrere ugyldige værdier (ikke numeriske eller NaN)
function filterValidValues(data) {
  return data.filter((value) => typeof value === "number" && !isNaN(value));
}

// Filtrer ugyldige værdier i dataene
ordreData = filterValidValues(ordreData);
praecisionData = filterValidValues(praecisionData);
uheldData = filterValidValues(uheldData);

// Sorter data før visualisering
ordreData.sort((a, b) => a - b);
praecisionData.sort((a, b) => a - b);
uheldData.sort((a, b) => a - b);

// Gennemsnit og median beregninger
var averageOrdre = calculateAverage(ordreData);
var medianOrdre = calculateMedian(ordreData);

var averagePraecision = calculateAverage(praecisionData);
var medianPraecision = calculateMedian(praecisionData);

var averageUheld = calculateAverage(uheldData);
var medianUheld = calculateMedian(uheldData);

console.log(
  "Average and Median:",
  averageOrdre,
  medianOrdre,
  averagePraecision,
  medianPraecision,
  averageUheld,
  medianUheld
);

// Find HTML elements to update
var averageOrdreElement = document.getElementById("averageOrdre");
var medianOrdreElement = document.getElementById("medianOrdre");
var averagePraecisionElement = document.getElementById("averagePraecision");
var medianPraecisionElement = document.getElementById("medianPraecision");
var averageUheldElement = document.getElementById("averageUheld");
var medianUheldElement = document.getElementById("medianUheld");

// Update HTML content
averageOrdreElement.textContent = "Average Ordre: " + averageOrdre;
medianOrdreElement.textContent = "Median Ordre: " + medianOrdre;
averagePraecisionElement.textContent =
  "Average Præcision: " + averagePraecision;
medianPraecisionElement.textContent = "Median Præcision: " + medianPraecision;
averageUheldElement.textContent = "Average Uheld: " + averageUheld;
medianUheldElement.textContent = "Median Uheld: " + medianUheld;

// Grafer for "Antal Ordre på Dagen"
var ordreGraf = new Chart(ctxOrdre, {
  type: "bar",
  data: {
    labels: Array.from({ length: ordreData.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Antal Ordre på Dagen",
        data: ordreData,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Grafer for "Præcision i %"
var praecisionGraf = new Chart(ctxPraecision, {
  type: "bar",
  data: {
    labels: Array.from({ length: praecisionData.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Præcision i %",
        data: praecisionData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Grafer for "Uheld"
var uheldGraf = new Chart(ctxUheld, {
  type: "bar",
  data: {
    labels: Array.from({ length: uheldData.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Uheld",
        data: uheldData,
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Grafer for "Bedst til værst"
var ordreGrafBedstTilVaerst = new Chart(ctxOrdreBedstTilVaerst, {
  type: "bar",
  data: {
    labels: Array.from({ length: ordreData.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Antal Ordre på Dagen (Bedst til værst)",
        data: ordreData,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Grafer for "Værst til bedst"
var ordreGrafVaerstTilBedst = new Chart(ctxOrdreVaerstTilBedst, {
  type: "bar",
  data: {
    labels: Array.from({ length: ordreData.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Antal Ordre på Dagen (Værst til bedst)",
        data: ordreData.slice().reverse(),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

function calculateAverage(array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
}

function calculateMedian(array) {
  var sortedArray = array.slice().sort((a, b) => a - b);
  var middle = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    return (sortedArray[middle - 1] + sortedArray[middle]) / 2;
  } else {
    return sortedArray[middle];
  }
}

// 1. Opsætning af Chart.js:
// Jeg starter koden ved at få fat i 2D-konteksterne for forskellige canvas-elementer, som repræsenterer mine grafer. Disse kontekster bruger jeg senere til at oprette mine Chart.js grafer.
var ctxOrdre = document.getElementById("ordreGraf").getContext("2d");
var ctxPraecision = document.getElementById("praecisionGraf").getContext("2d");

// 2. Validering og bearbejdning af data:
// Jeg bruger console.log-statements til at logge mine data (ordreData, praecisionData, uheldData) til konsollen for fejlfinding. Jeg har også to funktioner, convertPraecisionData og filterValidValues, der bruges til at håndtere og filtrere mine data.
console.log("ordreData:", ordreData);
console.log("praecisionData:", praecisionData);

function convertPraecisionData(data) {
  return data.map((value) => parseFloat(value.replace(",", ".")));
}

praecisionData = convertPraecisionData(praecisionData);

// 3. Sortering af data:
// Jeg sorterer mine data-arrays (ordreData, praecisionData, uheldData) i stigende rækkefølge for at forberede dem til visualisering.
ordreData.sort((a, b) => a - b);
praecisionData.sort((a, b) => a - b);

// 4. Beregning af gennemsnit og median:
// Jeg har funktionerne calculateAverage og calculateMedian, som bruges til at beregne gennemsnittet og medianen for hvert datasæt (ordreData, praecisionData, uheldData).
var averageOrdre = calculateAverage(ordreData);
var medianOrdre = calculateMedian(ordreData);

// 5. Opdatering af HTML-indhold:
// Jeg viser de beregnede gennemsnits- og medianværdier på HTML-siden ved at opdatere specifikke elementer.
var averageOrdreElement = document.getElementById("averageOrdre");
averageOrdreElement.textContent = "Gennemsnit Ordre: " + averageOrdre;

// 6. Oprettelse af grafer:
// Jeg bruger Chart.js til at oprette søjlediagrammer for "Antal Ordre på Dagen," "Præcision i %," "Uheld," "Bedst til værst," og "Værst til bedst." Hver graf konfigureres med passende data, labels, farver og indstillinger.
var ordreGraf = new Chart(ctxOrdre, {
  type: "bar",
  data: {
    labels: Array.from({ length: ordreData.length }, (_, i) => i + 1),
    datasets: [
      {
        label: "Antal Ordre på Dagen",
        data: ordreData,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// 7. Gennemsnit og median visning:
// Jeg sørger også for at vise mine beregnede gennemsnits- og medianværdier for hvert datasæt på HTML-siden. På den måde kan jeg få et hurtigt overblik over mine data.
