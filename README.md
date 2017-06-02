# FormSlicer



### O que é?
Uma biblioteca de criação de formulários de várias páginas. Feito principalmente visando a criação de orçamentos e contatos iniciais com clientes.

Com o formSlicer você pode transformar formulários enormes em múltiplas etapas, somente com a utilização de um id! 

Além disso você pode escolher entre cores e validação utilizando javascript puro, sem também necessitar de um arquivo css adicional.

### Observação
O package contém um arquivo chamado "index.html", que é um exemplo de como deve ficar o seu formulário ao instalar o FormSlicer.

### Instalação

	$ npm install form-slicer

	git clone github.com/SadboysAcademy/FormSlicer.git



### Usando

	var formSlicer = require("form-slicer");

Ou basta referenciar após o seu código principal

	<!-- FormSlicer -->

	<script src="js/formslicer.min.js"></script>

Em um formulário coloque o id #fslicer para ativar, todas as fieldsets que não forem a primeira irão ser escondidas. Os botões de next são criados automaticamente.

Validação:

	<form name="form" action="" id="fslicer" class="fs-validate">

Cores:

A biblioteca vem também com cores padrões para os botões, só é necessário colocar a classe correspondente no formulário

![](http://imgur.com/UgTO6mI.gif) ![](http://imgur.com/GYNwb4Z.gif) ![](http://imgur.com/GXhcOWc.gif) ![](http://imgur.com/jzGlFnq.gif)


	<form action="" id="fslicer" class="fs-padrao">
	<form action="" id="fslicer" class="fs-erro">
	<form action="" id="fslicer" class="fs-sucesso">
	<form action="" id="fslicer" class="fs-aviso">

### Mantidas por

* [Gabriel Craveiro](gabrielcraveiro.github.io)
* [Fernando Moreira](ihfernando.github.io)
* Leonardo Abreu

### License

MIT License

Copyright (C) 2012 Veselin Todorov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
