$(document).ready(function () {
    
    //i mandarini totali e al secondo
    var cookies = 0
    var cps = 0

    //tutte le variabili dei powerups, n sta per il numero dei powerup, m per i mandarini fatti, v per i mandarini/s, p il moltip. del prezzo, u per costo dell'upgrade
    var nsami = 0
    var msami = 0
    var vsami = 10
    var psami = 1
    var usami = 9000
    var nfattoria = 0
    var mfattoria = 0
    var vfattoria = 40
    var pfattoria = 1
    var ufattoria = 21000
    var nfabbrica = 0
    var mfabbrica = 0
    var vfabbrica = 90
    var pfabbrica = 1
    var ufabbrica = 45000
    
    //main()
    main();

    //se clicchi sul mandarinoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
    $('#cookie').click(function () { 
        $(this).attr('class', 'animate')
        cookies++;
        $('#total').html('mandarini counter: ' + cookies);
        setTimeout(function(){
            $('#cookie').removeAttr('class');
        }, 350);
    });9

    //se clicchi compra un samiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
    $('#sami').click(function () { 
        if (cookies >= 250 * psami){
            cookies -= 250 * psami;
            psami = psami * 2;
            nsami++;
            cps += vsami
            $('#cost').html('Ti costerà ' + (250 * psami) + ' mandarini');
            $('#nsami').html('n di sami: ' + nsami);
            if (nsami == 1){
                sami();
            }
        }        
    });

    function sami() {
        msami += nsami * vsami;
        $('#msami').html('mandarini fatti dai sami: ' + msami);        
        setTimeout(function(){
            sami();    
        }, 1000);
    }
    $('#sami').hover(function () {
            $('#details').css('display', 'unset');
            $('#text').html('Che fai? Compri un sami?');
            $('#cost').html('Ti costerà ' + (250 * psami) + ' mandarini');
            $('#boost').html('Il tuo sami produrrà ' + vsami + ' mandarini/s');
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    //se clicchi compra una fattoriaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    $('#fattoria').click(function () { 
        if (cookies >= 10000 * pfattoria){
            cookies -= 10000 * pfattoria;
            pfattoria = pfattoria * 2;
            nfattoria++;
            cps += vfattoria
            $('#cost').html('Ti costerà ' + (10000 * pfattoria) + ' mandarini');
            $('#nfattoria').html('n di fattorie: ' + nfattoria);
            if (nfattoria == 1){
                fattoria();
            }
        }        
    });

    function fattoria() {
        mfattoria += nfattoria * vfattoria;
        $('#mfattoria').html('mandarini fatti dalle fattorie: ' + mfattoria);        
        setTimeout(function(){
            fattoria();    
        }, 1000);
    }
    $('#fattoria').hover(function () {
            $('#details').css('display', 'unset');
            $('#text').html('Che fai? Compri una fattoria?');
            $('#cost').html('Ti costerà ' + (10000 * pfattoria) + ' mandarini');
            $('#boost').html('La tua fattoria produrrà ' + vfattoria + ' mandarini/s');
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    // fabbricaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    $('#fabbrica').click(function () { 
        if (cookies >= 22500 * pfabbrica){
            cookies -= 22500 * pfabbrica;
            pfabbrica = pfabbrica * 2;
            nfabbrica++;
            cps += vfabbrica;
            $('#cost').html('Ti costerà ' + (22500 * pfabbrica) + ' mandarini');
            $('#nfabbrica').html('n di fattorie: ' + nfabbrica);
            if (nfabbrica == 1){
                fabbrica();
            }
        }        
    });

    function fabbrica() {
        mfabbrica += nfabbrica * vfabbrica;
        $('#mfabbrica').html('mandarini fatti dalle fattorie: ' + mfabbrica);        
        setTimeout(function(){
            fabbrica();    
        }, 1000);
    }
    $('#fabbrica').hover(function () {
            $('#details').css('display', 'unset');
            $('#text').html('Che fai? Compri una fabbrica?');
            $('#cost').html('Ti costerà ' + (22500 * pfabbrica) + ' mandarini');
            $('#boost').html('La tua fabbrica produrrà ' + vfabbrica + ' mandarini/s');
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    // super ultra fighissima cookie updater funcition that is very complexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    function main() {
        cookies += cps;
        $('#total').html('mandarini counter: ' + cookies);
        $('#cps').html('mandarini al secondo: ' + cps);
        setTimeout(function () {
            main()       
        }, 1000)
    }

    //mantieni il codice dei powerups sopra questo commento
    //cose che succedono quando clicchi per comprare gli upgradessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

    $('#upgradesami').click(function () { 
        if (cookies >= usami && nsami != 0) {
            cookies -= usami
            usami *= 2
            vsami *= 2
            $('#cost').html('Ti costerà ' + usami + ' mandarini');
        }        
    });
    $('#upgradesami').hover(function () {
            $('#details').css('display', 'unset');
            $('#text').html('Vuoi far evolvere sami, eh?');
            $('#cost').html('Ti costerà ' + usami + ' mandarini');
            $('#boost').html('Sami produrrà il doppio dei mandarini/s');
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    $('#upgradefattoria').click(function () { 
        if (cookies >= ufattoria && nfattoria != 0) {
            cookies -= ufattoria
            ufattoria *= 2
            vfattoria *= 2
            $('#cost').html('Ti costerà ' + ufattoria + ' mandarini');
        }        
    });
    $('#upgradefattoria').hover(function () {
            $('#details').css('display', 'unset');
            $('#text').html('Vuoi far evolvere le fattori, eh?');
            $('#cost').html('Ti costerà ' + ufattoria + ' mandarini');
            $('#boost').html('Le fattorie produrranno il doppio dei mandarini/s');
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    $('#upgradefabbrica').click(function () { 
        if (cookies >= ufabbrica && nfabbrica != 0) {
            cookies -= ufabbrica
            ufabbrica *= 2
            vfabbrica *= 2
            $('#cost').html('Ti costerà ' + ufabbrica + ' mandarini');
        }        
    });
    $('#upgradefabbrica').hover(function () {
            $('#details').css('display', 'unset');
            $('#text').html('Vuoi far evolvere le fabbriche, eh?');
            $('#cost').html('Ti costerà ' + ufabbrica + ' mandarini');
            $('#boost').html('Le fabbriche produrranno il doppio dei mandarini/s');
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    // mantieni il codice degli upgrades sopra questo commento
});
