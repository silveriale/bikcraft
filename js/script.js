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

const perguntas = document.querySelectorAll(".perguntas button"); // Seleciona todos os botões das perguntas

function ativarPergunta(event) {
	// Função para ativar a pergunta
	const pergunta = event.currentTarget; // Pega o botão clicado
	const controls = pergunta.getAttribute("aria-controls"); // Pega o valor do atributo aria-controls
	const resposta = document.getElementById(controls); // Pega o elemento com o ID do aria-controls

	resposta.classList.toggle("ativa"); // Adiciona ou remove a classe ativa da resposta
	const ativa = resposta.classList.contains("ativa"); // Verifica se a resposta está ativa
	pergunta.setAttribute("aria-expanded", ativa); // Atualiza o atributo aria-expanded do botão
}

function eventosPerguntas(pergunta) {
	// Função para adicionar eventos às perguntas
	pergunta.addEventListener("click", ativarPergunta); // Adiciona o evento de clique à pergunta
}

perguntas.forEach(eventosPerguntas); // Para cada pergunta, chama a função eventosPerguntas

// Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
	const img = event.currentTarget;
	const media = matchMedia("(min-width: 1000px)").matches;
	if (media) {
		galeriaContainer.prepend(img);
	}
}

function eventosGaleria(img) {
	img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);
