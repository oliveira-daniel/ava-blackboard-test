

// Para testar acesso ao AVA Blackboard

var msg = 'Teste de mensagem!';
document.write(msg);

var theCookies = document.cookie.split(';');
var aString = '';
for (var i = 1 ; i <= theCookies.length; i++) {
  aString += i + ' ' + theCookies[i-1] + "\n";
}

document.write(aString);
