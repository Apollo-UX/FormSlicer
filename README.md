# FormSlicer

[![NPM](https://nodei.co/npm/form-slicer.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/form-slicer/)
### O que é?
Uma biblioteca de criação de formulários de várias páginas. Feito principalmente visando a criação de orçamentos e contatos iniciais com clientes.

Com o formSlicer você pode transformar formulários enormes em múltiplas etapas, somente com a utilização de um id! 

Além disso você pode escolher entre cores e validação utilizando javascript puro, sem também necessitar de um arquivo css adicional.

### Observação
O package contém um arquivo chamado "index.html", que é um exemplo de como deve ficar o seu formulário ao instalar o FormSlicer.

### Instalação

	$ npm install form-slicer

	git clone github.com/Apollo-UX/FormSlicer.git



### Usando

	var formSlicer = require("form-slicer");

Ou basta referenciar após o seu código principal

	<!-- FormSlicer -->

	<script src="js/formslicer.min.js"></script>

Em um formulário coloque o id #fslicer para ativar, todas as fieldsets que não forem a primeira irão ser escondidas. Os botões de next são criados automaticamente.

Validação:

	<form name="form" action="" id="fslicer" class="fs-validate">

Cores:

A biblioteca vem com cores padrões para os botões, só é necessário colocar a classe correspondente nos botões

	<button class="fs-btn_default"></button>
	<button class="fs-btn_success"></button>
	<button class="fs-btn_warning"></button>
	<button class="fs-btn_danger"></button

### Mantidas por

* [Gabriel Craveiro](gabrielcraveiro.github.io)
* [Fernando Moreira](ihfernando.github.io)
* Leonardo Abreu