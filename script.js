$(document).ready(function () {
    
    //i mandarini totali
    var cookies = 0

    //tutte le variabili dei powerups, n sta per il numero dei powerup, m per i mandarini fatti, v per i mandarini/s
    var nsami = 0
    var msami = 0
    var vsami = 10
    var psami = 1
    var nfattoria = 0
    var mfattoria = 0
    var vfattoria = 40
    var pfattoria = 1
    var nfabbrica = 0
    var mfabbrica = 0
    var vfabbrica = 90
    var pfabbrica = 1
    
    //se clicchi sul mandarino
    $('#cookie').click(function () { 
        $(this).attr('class', 'animate')
        cookies++;
        $('#total').html('mandarini counter: ' + cookies);
        setTimeout(function(){
            $('#cookie').removeAttr('class');
        }, 350);
    });

    //se clicchi compra un sami
    $('#sami').click(function () { 
        if (cookies >= 250 * psami){
            cookies -= 250 * psami;
            psami = psami * 2;
            $('#sami').attr('value', 'compra un sami per ' + (250 * psami) + ' mandarini!');
            $('#total').html('mandarini counter: ' + cookies);
            nsami++;
            $('#nsami').html('n di sami: ' + nsami);
            sami()
        }        
    });

    //cose fatte in automatico da un sami
    function sami() {
        cookies += nsami * vsami;
        $('#total').html('mandarini counter: ' + cookies);
        msami += nsami * vsami;
        $('#msami').html('mandarini fatti dai sami: ' + msami);
        setTimeout(function(){
            sami();    
        }, 1000);
    }

    //se clicchi compra una fattoria
    $('#fattoria').click(function () { 
        if (cookies >= 10000 * pfattoria){
            cookies -= 10000 * pfattoria;
            pfattoria = pfattoria * 2;
            $('#fattoria').attr('value', 'compra una fattoria per ' + (10000 * pfattoria) + ' mandarini!');
            $('#total').html('mandarini counter: ' + cookies);
            nfattoria++;
            $('#nfattoria').html('n di fattorie: ' + nfattoria);
            fattoria()
        }        
    });

    //cose fatte in automatico da una fattoria
    function fattoria() {
        cookies += nfattoria * vfattoria;
        $('#total').html('mandarini counter: ' + cookies);
        mfattoria += nfattoria * vfattoria;
        $('#mfattoria').html('mandarini fatti dalle fattorie: ' + mfattoria);
        setTimeout(function(){
            fattoria();    
        }, 1000);
    }

    //se clicchi compra una fabbrica
    $('#fabbrica').click(function () { 
        if (cookies >= 22500 * pfabbrica){
            cookies -= 22500 * pfabbrica;
            pfabbrica = pfabbrica * 2;
            $('#fabbrica').attr('value', 'compra una fabbrica per ' + (22500 * pfabbrica) + ' mandarini!');
            $('#total').html('mandarini counter: ' + cookies);
            nfabbrica++;
            $('#nfabbrica').html('n di fattorie: ' + nfabbrica);
            fabbrica()
        }        
    });

    //cose fatte in automatico da una fabbrica
    function fabbrica() {
        cookies += nfabbrica * vfabbrica;
        $('#total').html('mandarini counter: ' + cookies);
        mfabbrica += nfabbrica * vfabbrica;
        $('#mfabbrica').html('mandarini fatti dalle fattorie: ' + mfabbrica);
        setTimeout(function(){
            fabbrica();    
        }, 1000);
    }

    //mantieni il codice dei powerups sopra questo commento
    //cose che succedono quando clicchi per comprare gli upgrades

    //sami 1
    $('#sami1').click(function () { 
        if (cookies >= 9000 && nsami > 0) {  
            cookies -= 9000
            vsami = 20; 
            $(this).prop('disabled', true);
            $('#sami2').prop('disabled', false)
        }  
    });

    //sami 2
    $('#sami2').click(function () { 
        if (cookies >= 19000 && nsami > 0) {  
            cookies -= 19000
            vsami = 40; 
            $(this).prop('disabled', true)
            $('#sami3').prop('disabled', false)
        } 
    });

    //sami 3
    $('#sami3').click(function () { 
        if (cookies >= 35000 && nsami > 0) {  
            cookies -= 35000
            vsami = 100; 
            $(this).prop('disabled', true)
            $('#sami4').prop('disabled', false)
        } 
    });

    //sami 4
    $('#sami4').click(function () { 
        if (cookies >= 50000 && nsami > 0) {  
            cookies -= 50000
            vsami = 150; 
            $(this).prop('disabled', true)
            $('#sami5').prop('disabled', false)
        } 
    });

    //sami 5
    $('#sami5').click(function () { 
        if (cookies >= 100000 && nsami > 0) {  
            cookies -= 100000
            vsami = 200; 
            $(this).prop('disabled', true)
        } 
    });
 
    // fattorieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee fattoria1
    $('#fattoria1').click(function () { 
        if (cookies >= 21000 && nfattoria > 0) {  
            cookies -= 21000
            vfattoria = 80; 
            $(this).prop('disabled', true);
            $('#fattoria2').prop('disabled', false)
        }  
    });

    //fattoria2
    $('#fattoria2').click(function () { 
        if (cookies >= 35000 && nfattoria > 0) {  
            cookies -= 35000
            vfattoria = 150; 
            $(this).prop('disabled', true);
            $('#fattoria3').prop('disabled', false)
        }  
    });

    //fattoria3
    $('#fattoria3').click(function () { 
        if (cookies >= 60000 && nfattoria > 0) {  
            cookies -= 60000
            vfattoria = 280; 
            $(this).prop('disabled', true);
            $('#fattoria4').prop('disabled', false)
        }  
    });

    //fattoria4
    $('#fattoria4').click(function () { 
        if (cookies >= 100000 && nfattoria > 0) {  
            cookies -= 100000
            vfattoria = 550; 
            $(this).prop('disabled', true);
            $('#fattoria5').prop('disabled', false)
        }  
    });

    //fattoria5
    $('#fattoria5').click(function () { 
        if (cookies >= 200000 && nfattoria > 0) {  
            cookies -= 200000
            vfattoria = 1000; 
            $(this).prop('disabled', true);
        }  
    });

    // mantieni il codice delgi upgrades sopra questo commento
});
