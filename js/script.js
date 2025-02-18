//Ativar link do menu
const links = document.querySelectorAll(".header-menu a"); // Seleciona todos os links do menu

function ativarLink(link) {
	const url = location.href; // Pega a URL atual
	const href = link.href; // Pega o href do link
	if (url.includes(href)) {
		// Se a URL atual incluir o href do link
		link.classList.add("ativo"); // Adiciona a classe ativo
	}
}

links.forEach(ativarLink); // Para cada link, chama a função ativarLink

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search); // Pega os parâmetros da URL

function ativarProduto(parametro) {
	// Função para ativar o produto
	const elemento = document.getElementById(parametro); // Pega o elemento com o ID do parâmetro
	if (elemento) {
		// Se o elemento existir
		elemento.checked = true; // Verifica se o elemento existe
	}
}

parametros.forEach(ativarProduto); // Para cada parâmetro, chama a função ativarProduto

// perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
	const pergunta = event.currentTarget;
	const controls = pergunta.getAttribute("aria-controls");
	const resposta = document.getElementById(controls);

	resposta.classList.toggle("ativa");
	const ativa = resposta.classList.contains("ativa");
	pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
	pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
