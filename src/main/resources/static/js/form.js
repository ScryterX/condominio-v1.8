var botaoAdicionar = selecionaDado(document, "#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault()

	var form = selecionaDado(document, "#form-adiciona")

	// Extraindo informacoes do paciente do form
	var paciente = obtemPacienteDoFormulario(form)
	
	var erros = validaPaciente(paciente)

	if(erros.length > 0){
		exibeMensagemDeErro(erros)
		return
	}

	adicionaPacienteNaTabela(paciente)

	form.reset()
	var mensagemErro = selecionaDado(document, "#mensagens-erro")
	mensagemErro.innerHTML = ""
})

function adicionaPacienteNaTabela(paciente){
	// Cria Tr e Td do paciente
	var pacienteTr = montaTr(paciente)
	// Adicionando o paciente na tabela
	var tabela = selecionaDado(document, "#tabela-pacientes")
	adicionaFilho(tabela, pacienteTr)
}

function exibeMensagemDeErro(erros){
	var ul = selecionaDado(document, "#mensagens-erro")
	ul.innerHTML = ""
	erros.forEach(function(erro){
		var li = document.createElement("li")
		li.textContent = erro
		adicionaFilho(ul, li)
	})
}

function obtemPacienteDoFormulario(form){

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: form.imc.value
	}
	return paciente
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr")
	pacienteTr.classList.add("paciente")

	adicionaFilho(pacienteTr, montaTd(paciente.nome, "info-nome"))
	adicionaFilho(pacienteTr, montaTd(paciente.peso, "info-bloco"))
	adicionaFilho(pacienteTr, montaTd(paciente.altura, "info-ap"))
	adicionaFilho(pacienteTr, montaTd(paciente.gordura, "info-vaga"))
	adicionaFilho(pacienteTr, montaTd(paciente.imc, "info-veiculo"))

	return pacienteTr
}

function montaTd(dado, classe){

	var td = document.createElement("td")
	td.classList.add(classe)
	td.textContent = dado
	return td
}

function adicionaFilho(tr, td){
	return tr.appendChild(td)
}

function validaPaciente(paciente){

	var erros = []

	if(paciente.nome.length == 0){
		erros.push("O nome não pode ser em branco!")
	}

	if(paciente.peso == 0) {erros.push("O bloco não pode ser em branco!")}

	if(paciente.altura == 0) {erros.push("A numero AP não pode ser em branco!")}

	if(paciente.gordura.length == 0){
		erros.push("A vaga não pode ser em branco!")
	}


	return erros
}