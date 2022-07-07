var dado

function mostra(item){
	console.log(item)
}

function conteudo(target){
	return target.textContent
}

function selecionaDado(target0, target1){
	return dado = target0.querySelector(target1)
}

function trocaDado(target0, target1, newData){
	selecionaDado(target0, target1)
	dado.textContent = newData
}

var pacientes = document.querySelectorAll(".paciente")

for(var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i]

	var tdPeso = selecionaDado(paciente, '.info-bloco')
	var peso  = conteudo(tdPeso)

	var tdAltura = selecionaDado(paciente, '.info-ap')
	var altura = conteudo(tdAltura)

	var pesoEhValido = validaPeso(peso)
	var alturaEhValida = validaAltura(altura)

	if(!pesoEhValido){
		trocaDado(paciente, '.info-veiculo', "Peso inválido!")
		paciente.classList.add("paciente-invalido")
	}

	if(!alturaEhValida){
		trocaDado(paciente, '.info-veiculo', "Altura inválida!")
	}

	
}

function validaPeso(peso){
	if(peso >= 0 && peso < 1000){
		return true
	}else{
		return false
	}
}

function validaAltura(altura){
	if(altura >= 0 && altura < 1000){
		return true
	}else{
		return false
	}
}