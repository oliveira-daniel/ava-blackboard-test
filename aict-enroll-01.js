
// Inserir o css
var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://rawgit.com/oliveira-daniel/ava-blackboard-test/master/aict-enroll-01.css';
    link.media = 'all';
    head.appendChild(link);
}

jQuery(function($, undefined) {
  var anim = false;
  function typed(finish_typing) {
    return function(term, message, delay, finish) {
      anim = true;
      var prompt = term.get_prompt();
      var c = 0;
      if (message.length > 0) {
        term.set_prompt("");
        var new_prompt = "";
        var interval = setInterval(function() {
          var chr = $.terminal.substring(message, c, c + 1);
          new_prompt += chr;
          term.set_prompt(new_prompt);
          c++;
          if (c == length(message)) {
            clearInterval(interval);
            // execute in next interval
            setTimeout(function() {
              // swap command with prompt
              finish_typing(term, message, prompt);
              anim = false;
              finish && finish();
            }, delay);
          }
        }, delay);
      }
    };
  }
  function length(string) {
    string = $.terminal.strip(string);
    return $("<span>" + string + "</span>").text().length;
  }
  var typed_prompt = typed(function(term, message, prompt) {
    term.set_prompt(message + " ");
  });
  var typed_message = typed(function(term, message, prompt) {
    term.echo(message);
    term.set_prompt(prompt);
  });

  $("#term_demo").terminal(
    function(cmd, term) {
      var finish = false;
      if (cmd === "1") {
        window.open("http://www.aict.online/", "_blank");
      } else if (cmd === "0") {
        this.echo("\nTerminal encerrado.");
        this.pause();
      } else {
        this.error("Opção inexistente.");
      }
    },
    {
      greetings:
        "Notice Terminal [versão 1.4.1-0mvhsvLQRj]\n" +
        "Operações Tático-Cibernéticas - a.i.c.t.\n" +
        "Semestre 2018-1.\n",
      name: "enroll_terminal",
      prompt: "$> ",
      exit: false,
      onInit: function(term) {
        $(this).focus();
        var tmng = 105;
        // first question
        var msg = "Olá agente " 
          + agnt_nome + "." + "\nBem vindo à a.i.c.t.\n";
        typed_message(term, msg, tmng, function() {
          var msg =
            "Detectamos novas movimentações terroristas\n" +
            "que colocam em risco a segurança nacional.\n";
          typed_message(term, msg, tmng, function() {
            var msg = "Esteja preparado!\n";
            typed_message(term, msg, tmng, function() {
              typed_prompt(term, 
                 "Digite 1 para saber mais, 0 para encerrar:", tmng, 
                  function() {
                     this.focus();
                  }
              );
            });
          });
        });
      }
    }
  );
});
