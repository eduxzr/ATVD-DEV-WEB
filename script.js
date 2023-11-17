var popup;

function abrirPopup() {
  popup = window.open('', 'Janela Pop-Up', 'width=400,height=500');
  popup.document.write(`
    <div class="popup">
      <h2>Calculadora de Notas</h2>
      <label>Nota 1:</label>
      <input type="number" id="nota1"><br>
      <label>Nota 2:</label>
      <input type="number" id="nota2"><br>
      <label>Nota 3:</label>
      <input type="number" id="nota3"><br>
      <button id="calcularButton">Calcular</button>
      <div id="resultado"></div>
    </div>
  `);

  popup.document.getElementById('calcularButton').addEventListener('click', calcularMedia);
}

function calcularMedia() {
  var nota1 = parseFloat(popup.document.getElementById('nota1').value);
  var nota2 = parseFloat(popup.document.getElementById('nota2').value);
  var nota3 = parseFloat(popup.document.getElementById('nota3').value);
  var soma = nota1 + nota2 + nota3;
  var media = soma / 3;
  popup.document.getElementById('resultado').innerHTML = `
    <p>Soma das Notas: ${soma}</p>
    <p>Média das Notas: ${media.toFixed(2)}</p>
  `;
}
