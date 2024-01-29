document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var accountNumber = document.getElementById('accountNumber').value;
  var balance = parseFloat(document.getElementById('balance').value);

  // Simulação de cadastro (poderia ser enviado para um servidor, armazenado em localStorage, etc.)
  var account = {
    name: name,
    accountNumber: accountNumber,
    balance: balance
  };

  // Exibindo mensagem de cadastro
  var messageElement = document.getElementById('message');
  messageElement.textContent = `Conta cadastrada com sucesso para ${account.name}.`;

  // Resetando o formulário
  document.getElementById('form').reset();
});