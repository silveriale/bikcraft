const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
	if (resposta.ok) {
		formulario.innerHTML =
			"<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;' ><span style= 'color: #317A00;'>Mensagem enviada</span>, em breve entraremos e contato. Geralmente respondemos em 24h.</p>";
	} else {
		formulario.innerHTML =
			"<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;' ><span style= 'color: #E00000;'>Erro no envio</span>, tente novamente.</p>";
	}

	const botao = document.createElement("button");
	botao.innerText = "Enviar";
	formulario.appendChild(botao);
	botao.addEventListener("click", enviarFormulario);
}

function enviarFormulario(event) {
	event.preventDefault();
	const botao = formulario.querySelector("form button");
	botao.disabled = true;
	botao.innerText = "Enviando...";

	const data = new FormData(formulario);
	fetch("./enviar.php", {
		method: "POST",
		body: data,
	}).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
