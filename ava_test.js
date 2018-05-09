

// Para testar acesso ao AVA Blackboard

var msg = 'Teste de mensagem!';
document.write(msg);

var theCookies = document.cookie.split(';');
var aString = '';
for (var i = 1 ; i <= theCookies.length; i++) {
  aString += i + ' ' + theCookies[i-1] + "<br/>\n";
}

document.write(aString);

var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://rawgit.com/oliveira-daniel/ava-blackboard-test/master/main.css';
    link.media = 'all';
    head.appendChild(link);
}
