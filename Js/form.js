document.getElementById("agendar")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const dados = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      tel: document.getElementById("tel").value,
      dataHora: document.getElementById("dataHora").value
    };

    try {
      const resposta = await fetch("http://localhost:3000/agendar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
      });

      const texto = await resposta.text();
      alert(texto);

    } catch (erro) {
      alert("Erro ao enviar agendamento");
      console.error(erro);
    }
  });
