var escopo = function(valor1, valor2)
{
	return{
		soma: function() { return valor1 + valor2}, 
		subtracao: function() { return valor1 - valor2}, 
		multiplicacao: function() { return valor1 * valor2}, 
		divisao: function() { return valor1 / valor2}, 
	}
}

module.exports = escopo;