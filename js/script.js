function precos(){
    var orig = parseInt(document.getElementById('orig').value);
    var dest = parseInt(document.getElementById('dest').value);
    var min = parseFloat(document.getElementById('min').value);
    var select = document.getElementById('select');
    var plano = select.options[select.selectedIndex].value;
    var preco = null;

    if(orig == "011" && dest == "016" && plano == "Sem plano"){
        var valor = 1.90;
        for (var i = 1; i <= min; i++) {
            preco = i * valor;
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "011" && dest == "016" && plano == "FaleMais 30"){
        var valor = 1.90;
        if(min <= 30){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-30; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "011" && dest == "016" && plano == "FaleMais 60"){
        var valor = 1.90;
        if(min <= 60){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-60; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "011" && dest == "016" && plano == "FaleMais 120"){
        var valor = 1.90;
        if(min <= 120){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-120; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }

    if(orig == "016" && dest == "011" && plano == "Sem plano"){
        var valor = 2.90;
        for (var i = 1; i <= min; i++) {
            preco = i * valor;
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "016" && dest == "011" && plano == "FaleMais 30"){
        var valor = 2.90;
        if(min <= 30){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-30; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "016" && dest == "011" && plano == "FaleMais 60"){
        var valor = 2.90;
        if(min <= 60){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-60; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "016" && dest == "011" && plano == "FaleMais 120"){
        var valor = 2.90;
        if(min <= 120){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-120; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }

    if(orig == "011" && dest == "017" && plano == "Sem plano"){
        var valor = 1.70;
        for (var i = 1; i <= min; i++) {
            preco = i * valor;
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "011" && dest == "017" && plano == "FaleMais 30"){
        var valor = 1.70;
        if(min <= 30){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-30; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "011" && dest == "017" && plano == "FaleMais 60"){
        var valor = 1.70;
        if(min <= 60){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-60; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "011" && dest == "017" && plano == "FaleMais 120"){
        var valor = 1.70;
        if(min <= 120){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-120; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }

    if(orig == "017" && dest == "011" && plano == "Sem plano"){
        var valor = 2.70;
        for (var i = 1; i <= min; i++) {
            preco = i * valor;
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "017" && dest == "011" && plano == "FaleMais 30"){
        var valor = 2.70;
        if(min <= 30){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-30; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "017" && dest == "011" && plano == "FaleMais 60"){
        var valor = 2.70;
        if(min <= 60){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-60; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "017" && dest == "011" && plano == "FaleMais 120"){
        var valor = 2.70;
        if(min <= 120){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-120; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }

    if(orig == "011" && dest == "018" && plano == "Sem plano"){
        var valor = 0.90;
        for (var i = 1; i <= min; i++) {
            preco = i * valor;
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "011" && dest == "018" && plano == "FaleMais 30"){
        var valor = 0.90;
        if(min <= 30){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-30; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "011" && dest == "018" && plano == "FaleMais 60"){
        var valor = 0.90;
        if(min <= 60){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-60; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "011" && dest == "018" && plano == "FaleMais 120"){
        var valor = 0.90;
        if(min <= 120){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-120; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }

    if(orig == "018" && dest == "011" && plano == "Sem plano"){
        var valor = 1.90;
        for (var i = 1; i <= min; i++) {
            preco = i * valor;
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "018" && dest == "011" && plano == "FaleMais 30"){
        var valor = 1.90;
        if(min <= 30){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-30; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "018" && dest == "011" && plano == "FaleMais 60"){
        var valor = 1.90;
        if(min <= 60){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-60; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
    if(orig == "018" && dest == "011" && plano == "FaleMais 120"){
        var valor = 1.90;
        if(min <= 120){
            preco = 0;
        }
        else{
            var porc = valor + valor/10;
            for (var i = 1; i <= min-120; i++) {
                preco = i * porc;
            }
        }
        document.getElementById('total').value = preco.toFixed(2);
    }
}

function condicao(e)
{
	var tecla=new Number();
	if(window.event){
		tecla = e.keyCode;
	}
	else if(e.which){
		tecla = e.which;
	}
	else{
		return true;
	}
	if((tecla >= "97") && (tecla <= "122")){
		return false;
	}
}
