function selection() {
  const taux = 0.87738
  const saisie = document.getElementById('dollar').value;
  
  change = saisie * taux
  document.getElementById('euros').innerHTML = Number.parseFloat(change).toFixed(5);
}