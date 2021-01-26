$(document).ready(function () {
    
    //i mandarini totali e al secondo
    var cookies = 0
    var cps = 0

    //tutte le variabili dei powerups, n sta per il numero dei powerup, m per i mandarini fatti, v per i mandarini/s, p il moltip. del prezzo, u per costo dell'upgrade
    var nsami = nbidello = nfattoria = nfabbrica = nbidello = nbiblioteca = npiramide = ncaveau = nlab = nnether = nshrek = 0
    var msami = mbidello = mfattoria = mfabbrica = mbidello = mbiblioteca = mpiramide = mcaveau = mlab = mnether = mshrek = 0
    /**/var vsami = 10;
    var psami = 250
    var usami = 9000
    /**/var vfattoria = 40;
    var pfattoria = 10000
    var ufattoria = 21000
    /**/var vfabbrica = 90;
    var pfabbrica = 22500
    var ufabbrica = 45000
    /**/var vbidello = 200;
    var pbidello = 60000
    var ubidello = 100000
    /**/var vbiblioteca = 450;
    var pbiblioteca = 320000
    var ubiblioteca = 1000000
    /**/var vpiramide = 1000;
    var ppiramide = 900000
    var upiramide = 4000000
    /**/var vcaveau = 10000;
    var pcaveau = 10000000
    var ucaveau = 75000000
    /**/var vlab = 50000;
    var plab = 100000000
    var ulab = 750000000
    /**/var vnether = 250000;
    var pnether = 1000000000
    var unether = 5000000000
    /**/var vshrek = 1000000;
    var pshrek = 500000000000
    var ushrek = 1000000000000

    
    //main()    
    function main() {
        cookies += cps;
        $('#total').html('mandarini counter: ' + cookies);
        $('#cps').html('mandarini al secondo: ' + cps);
        setTimeout(function () {
            main()       
        }, 1000)
    }
    //hoverer(testo di text, p, e i mandarini al secondo)
    function hoverer(text, cost, boost, description) {
        $('#details').css('display', 'unset');
        $('#text').html(text);
        $('#cost').html(cost);
        $('#boost').html(boost);
        $('#description').html(description);
    }

    main()

    //se clicchi sul mandarinoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
    $('#cookie').click(function () { 
        $(this).attr('class', 'animate')
        cookies++;
        $('#total').html('mandarini counter: ' + cookies);
        setTimeout(function(){
            $('#cookie').removeAttr('class');
        }, 350);
    });

    //samiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
    $('#sami').click(function () { 
        if (cookies >= psami){
            cookies -= psami;
            psami = psami * 2;
            nsami++;
            cps += vsami
            $('#cost').html('Ti costerà ' + psami + ' mandarini');
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
            hoverer('Che fai? Compri un sami?', ('Ti costerà ' + psami + ' mandarini'), ('Il tuo sami produrrà ' + vsami + ' mandarini/s'), 'Pianta mandarini nel suo giardino')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    //fattoriaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    $('#fattoria').click(function () { 
        if (cookies >= pfattoria){
            cookies -= pfattoria;
            pfattoria = pfattoria * 2;
            nfattoria++;
            cps += vfattoria
            $('#cost').html('Ti costerà ' + pfattoria + ' mandarini');
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
            hoverer('Che fai? Compri una fattoria?', ('Ti costerà ' + pfattoria + ' mandarini'), ('La tua fattoria produrrà ' + vfattoria + ' mandarini/s'), 'Aumentano la tua produzione di mandarini con la forza dei maiali')
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    //fabbricaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    $('#fabbrica').click(function () { 
        if (cookies >= pfabbrica){
            cookies -= pfabbrica;
            pfabbrica = pfabbrica * 2;
            nfabbrica++;
            cps += vfabbrica;
            $('#cost').html('Ti costerà ' + pfabbrica + ' mandarini');
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
            hoverer('Che fai? Compri una fabbrica?', ('Ti costerà ' + pfabbrica + ' mandarini'), ('La tua fabbrica produrrà ' + vfabbrica + ' mandarini/s'), 'Producono mandarini grazie allo sfruttamento minorile')
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    //bidelloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
    $('#bidello').click(function () { 
        if (cookies >= pbidello){
            cookies -= pbidello;
            pbidello = pbidello * 2;
            nbidello++;
            cps += vbidello
            $('#cost').html('Ti costerà ' + pbidello + ' mandarini');
            $('#nbidello').html('n di bidelli: ' + nbidello);
            if (nbidello == 1){
                bidello();
            }
        }        
    });
    function bidello() {
        mbidello += nbidello * vbidello;
        $('#mbidello').html('mandarini fatti dai bidelli: ' + mbidello);        
        setTimeout(function(){
            bidello();    
        }, 1000);
    }
    $('#bidello').hover(function () {
            hoverer('Che fai? Compri un bidello?', ('Ti costerà ' + pbidello + ' mandarini'), ('Il tuo bidello produrrà ' + vbidello + ' mandarini/s'), 'Pulisce così bene che crescono mandarini')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    //bibliotecaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    $('#biblioteca').click(function () { 
        if (cookies >= pbiblioteca){
            cookies -= pbiblioteca;
            pbiblioteca = pbiblioteca * 2;
            nbiblioteca++;
            cps += vbiblioteca
            $('#cost').html('Ti costerà ' + pbiblioteca + ' mandarini');
            $('#nbiblioteca').html('n di biblioteche: ' + nbiblioteca);
            if (nbiblioteca == 1){
                biblioteca();
            }
        }        
    });
    function biblioteca() {
        mbiblioteca += nbiblioteca * vbiblioteca;
        $('#mbiblioteca').html('mandarini fatti dalle biblioteche: ' + mbiblioteca);        
        setTimeout(function(){
            biblioteca();    
        }, 1000);
    }
    $('#biblioteca').hover(function () {
            hoverer('Che fai? Compri un biblioteca?', ('Ti costerà ' + pbiblioteca + ' mandarini'), ('La tua biblioteca produrrà ' + vbiblioteca + ' mandarini/s'), 'Genera mandarini dalla conoscenza')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    //piramide egiziaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    $('#piramide').click(function () { 
        if (cookies >= ppiramide){
            cookies -= ppiramide;
            ppiramide = ppiramide * 2;
            npiramide++;
            cps += vpiramide
            $('#cost').html('Ti costerà ' + ppiramide + ' mandarini');
            $('#npiramide').html('n di piramidi: ' + npiramide);
            if (npiramide == 1){
                piramide();
            }
        }        
    });
    function piramide() {
        mpiramide += npiramide * vpiramide;
        $('#mpiramide').html('mandarini trovati nelle piramidi: ' + mpiramide);        
        setTimeout(function(){
            piramide();    
        }, 1000);
    }
    $('#piramide').hover(function () {
            hoverer('Che fai? Compri un piramide?', ('Ti costerà ' + ppiramide + ' mandarini'), ('La tua piramide produrrà ' + vpiramide + ' mandarini/s'), 'Contiene i mandarini dei faraoni egizi')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    //caveauuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
    $('#caveau').click(function () { 
        if (cookies >= pcaveau){
            cookies -= pcaveau;
            pcaveau = pcaveau * 2;
            ncaveau++;
            cps += vcaveau
            $('#cost').html('Ti costerà ' + pcaveau + ' mandarini');
            $('#ncaveau').html('n di caveau: ' + ncaveau);
            if (ncaveau == 1){
                caveau();
            }
        }        
    });
    function caveau() {
        mcaveau += ncaveau * vcaveau;
        $('#mcaveau').html('mandarini trovati nei caveau: ' + mcaveau);        
        setTimeout(function(){
            caveau();    
        }, 1000);
    }
    $('#caveau').hover(function () {
            hoverer('Che fai? Compri un caveau?', ('Ti costerà ' + pcaveau + ' mandarini'), ('Il tuo caveau produrrà ' + vcaveau + ' mandarini/s'), 'Contiene i mandarini nascosti dalla mafia')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    //laboratorio russo illegaleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    $('#lab').click(function () { 
        if (cookies >= plab){
            cookies -= plab;
            plab = plab * 2;
            nlab++;
            cps += vlab
            $('#cost').html('Ti costerà ' + plab + ' mandarini');
            $('#nlab').html('n di lab: ' + nlab);
            if (nlab == 1){
                lab();
            }
        }        
    });
    function lab() {
        mlab += nlab * vlab;
        $('#mlab').html('mandarini fatti dai Laboratori Russi Illegali: ' + mlab);        
        setTimeout(function(){
            lab();    
        }, 1000);
    }
    $('#lab').hover(function () {
            hoverer('Che fai? Compri un Laboratorio Russo Illegale?', ('Ti costerà ' + plab + ' mandarini'), ('Il tuo Laboratorio Russo Illegale produrrà ' + vlab + ' mandarini/s'), 'Produce illegalmente mandarini OGM nel freddo della Siberia')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    //portale del netherrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
    $('#nether').click(function () { 
        if (cookies >= pnether){
            cookies -= pnether;
            pnether = pnether * 2;
            nnether++;
            cps += vnether
            $('#cost').html('Ti costerà ' + pnether + ' mandarini');
            $('#nnether').html('n di portali del Nether: ' + nnether);
            if (nnether == 1){
                nether();
            }
        }        
    });
    function nether() {
        mnether += nnether * vnether;
        $('#mnether').html('mandarini fatti dai portali del Nether: ' + mnether);        
        setTimeout(function(){
            nether();    
        }, 1000);
    }
    $('#nether').hover(function () {
            hoverer('Che fai? Compri un portale del Nether?', ('Ti costerà ' + pnether + ' mandarini'), ('Il tuo portale del Nether produrrà ' + vnether + ' mandarini/s'), 'Il Nether è pieno di mandarini!')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    //Shrekkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
    $('#shrek').click(function () { 
        if (cookies >= pshrek){
            cookies -= pshrek;
            pshrek = pshrek * 2;
            nshrek++;
            cps += vshrek
            $('#cost').html('Ti costerà ' + pshrek + ' mandarini');
            $('#nshrek').html('n di Shrek: ' + nshrek);
            if (nshrek == 1){
                shrek();
            }
        }        
    });
    function shrek() {
        mshrek += nshrek * vshrek;
        $('#mshrek').html('mandarini fatti dagli Shrek: ' + mshrek);        
        setTimeout(function(){
            shrek();    
        }, 1000);
    }
    $('#shrek').hover(function () {
            hoverer('Che fai? Compri uno Shrek?', ('Ti costerà ' + pshrek + ' mandarini'), ('Il tuo Shrek produrrà ' + vshrek + ' mandarini/s'), 'Il dio dei mandarini')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    //mantieni il codice dei powerups sopra questo commento
    //cose che succedono quando clicchi per comprare gli upgradessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

    $('#upgradesami').click(function () { 
        if (cookies >= usami && nsami != 0) {
            cookies -= usami
            cps += vsami * nsami
            usami *= 2
            vsami *= 2
            $('#cost').html('Ti costerà ' + usami + ' mandarini');
        }        
    });
    $('#upgradesami').hover(function () {
            hoverer('Vuoi far evolvere sami, eh?', ('Ti costerà ' + usami + ' mandarini'), ('Sami produrrà il doppio dei mandarini/s'), ' il vero Drip King!')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    $('#upgradefattoria').click(function () { 
        if (cookies >= ufattoria && nfattoria != 0) {
            cookies -= ufattoria
            cps += vfattoria * nfattoria
            ufattoria *= 2
            vfattoria *= 2
            $('#cost').html('Ti costerà ' + ufattoria + ' mandarini');
        }        
    });
    $('#upgradefattoria').hover(function () {
            hoverer(('Vuoi far evolvere le fattori, eh?'), ('Ti costerà ' + ufattoria + ' mandarini'), ('Le fattorie produrranno il doppio dei mandarini/s'), 'Più maiali?')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    $('#upgradefabbrica').click(function () { 
        if (cookies >= ufabbrica && nfabbrica != 0) {
            cookies -= ufabbrica
            cps += vfabbrica * nfabbrica
            ufabbrica *= 2
            vfabbrica = vfabbrica * 2
            $('#cost').html('Ti costerà ' + ufabbrica + ' mandarini');
        }        
    });
    $('#upgradefabbrica').hover(function () {
            hoverer(('Vuoi far evolvere le fabbriche, eh?'), ('Ti costerà ' + ufabbrica + ' mandarini'), ('Le fabbriche produrranno il doppio dei mandarini/s'), 'Lo sfruttamento minorile non è mai stato così conveniente')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    $('#upgradebidello').click(function () { 
        if (cookies >= ubidello && nbidello != 0) {
            cookies -= ubidello
            cps += vbidello * nbidello
            ubidello *= 2
            vbidello = vbidello * 2
            $('#cost').html('Ti costerà ' + ubidello + ' mandarini');
        }        
    });
    $('#upgradebidello').hover(function () {
            hoverer(('Vuoi far evolvere i bidelli, eh?'), ('Ti costerà ' + ubidello + ' mandarini'), ('I bidelli produrranno il doppio dei mandarini/s'), 'Sono op')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    $('#upgradebiblioteca').click(function () { 
        if (cookies >= ubiblioteca && nbiblioteca != 0) {
            cookies -= ubiblioteca
            cps += vbiblioteca * nbiblioteca
            ubiblioteca *= 2
            vbiblioteca = vbiblioteca * 2
            $('#cost').html('Ti costerà ' + ubiblioteca + ' mandarini');
        }        
    });
    $('#upgradebiblioteca').hover(function () {
            hoverer(('Vuoi far evolvere le biblioteche, eh?'), ('Ti costerà ' + ubiblioteca + ' mandarini'), ('Le biblioteche produrranno il doppio dei mandarini/s'), 'Più conoscenza!')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    $('#upgradepiramide').click(function () { 
        if (cookies >= upiramide && npiramide != 0) {
            cookies -= upiramide
            cps += vpiramide * npiramide
            upiramide *= 2
            vpiramide = vpiramide * 2
            $('#cost').html('Ti costerà ' + upiramide + ' mandarini');
        }        
    });
    $('#upgradepiramide').hover(function () {
            hoverer(('Vuoi far evolvere le piramide egizie, eh?'), ('Ti costerà ' + upiramide + ' mandarini'), ('Le piramidi egizie produrranno il doppio dei mandarini/s'), '"Ci sono tantissimi mandarini qui giù!"')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    $('#upgradecaveau').click(function () { 
        if (cookies >= ucaveau && ncaveau != 0) {
            cookies -= ucaveau
            cps += vcaveau * ncaveau
            ucaveau *= 2
            vcaveau = vcaveau * 2
            $('#cost').html('Ti costerà ' + ucaveau + ' mandarini');
        }        
    });
    $('#upgradecaveau').hover(function () {
            hoverer(('Vuoi far evolvere i caveau, eh?'), ('Ti costerà ' + ucaveau + ' mandarini'), ('I caveau produrranno il doppio dei mandarini/s'), 'Speriamo di non offendere nessuno...')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    $('#upgradelab').click(function () { 
        if (cookies >= ulab && nlab != 0) {
            cookies -= ulab
            cps += vlab * nlab
            ulab *= 2
            vlab = vlab * 2
            $('#cost').html('Ti costerà ' + ulab + ' mandarini');
        }        
    });
    $('#upgradelab').hover(function () {
            hoverer(('Vuoi far evolvere i Laboratori Russi Illegali, eh?'), ('Ti costerà ' + ulab + ' mandarini'), ('I Laboratori Russi Illegali produrranno il doppio dei mandarini/s'), 'Grazie compagno!')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    $('#upgradenether').click(function () { 
        if (cookies >= unether && nnether != 0) {
            cookies -= unether
            cps += vnether * nnether
            unether *= 2
            vnether = vnether * 2
            $('#cost').html('Ti costerà ' + unether + ' mandarini');
        }        
    });
    $('#upgradenether').hover(function () {
            hoverer(('Vuoi far evolvere i portali del Nether, eh?'), ('Ti costerà ' + unether + ' mandarini'), ('I portali del Nether produrranno il doppio dei mandarini/s'), 'Meglio portare un arco, è pieno di Ghast')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );

    $('#upgradeshrek').click(function () { 
        if (cookies >= ushrek && nshrek != 0) {
            cookies -= ushrek           
            cps += vshrek * nshrek
            ushrek *= 2
            vshrek = vshrek * 2
            $('#cost').html('Ti costerà ' + ushrek + ' mandarini');
        }        
    });
    $('#upgradeshrek').hover(function () {
            hoverer(('Vuoi far evolvere gli Shrek, eh?'), ('Ti costerà ' + ushrek + ' mandarini'), ('Gli Shrek produrranno il doppio dei mandarini/s'), 'è veramente il dio dei mandarini')    
        }, function () {
            $('#details').css('display', 'none');
        }
    );
    // mantieni il codice degli upgrades sopra questo commento
});
