$(document).ready(function () {

    function validar() {
        event.preventDefault();
        if ($("#range").val() == "") {
            alerta("Por favor, selecione quantos pagamentos você faz por mês");
            $("#range").focus();
            return false
        } else if ($("#valor").val() == "") {
            alerta("Por favor, digite um valor");
            $("#valor").focus();
            return false
        } else {
            return true
        }
    }

    function alerta(msg) {
        swal({
            title: "",
            text: msg,
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "ok!"
        });
    }

    function somenteNumero(n){
        n = n.replace(/[^\d,]/g,'') 
        .replace(",", '.'); 
        return +n; 
    }

    //Calculadora
    $("#calcular").on("click", function () {
        var res = validar()
        if (res) {
            var qnt = document.getElementById('range').value
            var val = somenteNumero (document.getElementById('valor').value)
            var conta = qnt * val
            var desconto = conta * 0.53
            var resFinal = conta - desconto
            var resFormatado = resFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            swal({
            html: true,
            title: "Com o BPP Corp, você economiza",
            text: `<span>${resFormatado}</span> <br> por mês`,
            showCancelButton: false,
            confirmButtonColor: "#041F8F",
            confirmButtonText: "PEÇA JÁ SUA PROPOSTA",
            showCloseButton: true               
        })
        }else {
            $("#calcular").prop('disabled',false);
            swal("", retorno.mensagem, "error");   
        }
    });


});


