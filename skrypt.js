    const wszystkie_odpowiedzi=["FF","B3","GE","BD","E9","SC"];
    for(var q=1; q<6; q++){
        for(var z=1; z<6; z++){
            document.getElementById("POLE"+q+"_"+z).innerText=wszystkie_odpowiedzi[Math.floor(Math.random()*6)];
        }
    }
    const poprawna_odpowiedz=["z","z","z","z"];
    const odpowiedzi_uzytkownika=[];
    const id_odpowiedzi_uzytkownika=[];
    for(var i=0; i<4; i++){
        poprawna_odpowiedz[i]=wszystkie_odpowiedzi[Math.floor(Math.random()*6)];
    }
    console.log(poprawna_odpowiedz);
    document.getElementById("odpowiedz_0").innerText=poprawna_odpowiedz[0];
    document.getElementById("odpowiedz_1").innerText=poprawna_odpowiedz[1];
    document.getElementById("odpowiedz_2").innerText=poprawna_odpowiedz[2];
    document.getElementById("odpowiedz_3").innerText=poprawna_odpowiedz[3];
    var rzad=1; //w ktorym jestes rzedzie
    var ktoreteraz=0; //rzad=0, pion=1
    var pion=1; //w ktorym jestes pionie
    var ktora_odpowiedz=0; //uzywane do wpisywania poprawnych odpowiezi do okienek(automnatka)
    var wylosowaneID; //uzywane do getelementbyid przy wpisywaniu odp do okienek(automatyka)
    var poprzednie_wybrane=1;
    var ilepoprawnychodpowiedzizrzedu=0;//to co sama nazwa mowi
    var wylosowana_liczba=(Math.floor(Math.random()*5)+1);
    var i=0;
    while(i<2)
    {
        wylosowaneID="POLE"+rzad+"_"+wylosowana_liczba;
        pion=wylosowana_liczba;
        document.getElementById(wylosowaneID).innerText=poprawna_odpowiedz[ktora_odpowiedz];
        ktora_odpowiedz++;
        while(wylosowana_liczba==rzad){
            wylosowana_liczba=(Math.floor(Math.random()*5)+1);
        }
        wylosowaneID="POLE"+wylosowana_liczba+"_"+pion;
        rzad=wylosowana_liczba;
        document.getElementById(wylosowaneID).innerText=poprawna_odpowiedz[ktora_odpowiedz];
        ktora_odpowiedz++;
        while(wylosowana_liczba==pion){
            wylosowana_liczba=(Math.floor(Math.random()*5)+1);
        }
        i++;
    }


    document.addEventListener("click", (event)=>{
        let zdobyteID= event.target.id;
        zmien(zdobyteID);
    });

    function zmien(id){
        if(id_odpowiedzi_uzytkownika.length==0 && id[4]==1){
            for(var lk=1; lk<6; lk++){
                document.getElementById("POLE1_"+lk).style.backgroundColor="lightgrey";
                lk++;
            }
        }
        var czy_juz_bylo=false;
        if(id[0]=='P')
        {
            var c=0;
            while(id_odpowiedzi_uzytkownika.length>c){
                if(id==id_odpowiedzi_uzytkownika[c]){
                    czy_juz_bylo=true;
                }
                c++;
            }
            if(czy_juz_bylo==false){
                if(ktoreteraz==0){
                    if(id[4]==poprzednie_wybrane){
                        var zmiananagrey=1;
                        while(zmiananagrey<6){                          
                            if(id_odpowiedzi_uzytkownika.includes("POLE"+poprzednie_wybrane+"_"+zmiananagrey)==false){
                                document.getElementById("POLE"+poprzednie_wybrane+"_"+zmiananagrey).style.backgroundColor="lightgrey";
                            }
                            zmiananagrey++;
                        }
                        document.getElementById(id).style.backgroundColor="indianred";
                        ktoreteraz=1;
                        poprzednie_wybrane=id[6];
                        odpowiedzi_uzytkownika.push(document.getElementById(id).textContent);
                        id_odpowiedzi_uzytkownika.push(id);
                        var d=1;
                        while(d<6){                          
                            if(id_odpowiedzi_uzytkownika.includes("POLE"+d+"_"+poprzednie_wybrane)==false){
                                document.getElementById("POLE"+d+"_"+poprzednie_wybrane).style.backgroundColor="lightgreen";
                            }
                            d++;
                        }

                    }
                }else if(ktoreteraz==1){
                    if(id[6]==poprzednie_wybrane){
                        var zmiananagrey=1;
                        while(zmiananagrey<6){                          
                            if(id_odpowiedzi_uzytkownika.includes("POLE"+zmiananagrey+"_"+poprzednie_wybrane)==false){
                                document.getElementById("POLE"+zmiananagrey+"_"+poprzednie_wybrane).style.backgroundColor="lightgrey";
                            }
                            zmiananagrey++;
                        }
                        document.getElementById(id).style.backgroundColor="indianred";
                        ktoreteraz=0;
                        poprzednie_wybrane=id[4];
                        odpowiedzi_uzytkownika.push(document.getElementById(id).textContent);
                        id_odpowiedzi_uzytkownika.push(id);
                        var d=1;
                        while(d<6){                          
                            if(id_odpowiedzi_uzytkownika.includes("POLE"+poprzednie_wybrane+"_"+d)==false){
                                document.getElementById("POLE"+poprzednie_wybrane+"_"+d).style.backgroundColor="lightgreen";
                            }
                            d++;
                        }
                    }
                }
                console.log(ktoreteraz, poprzednie_wybrane);
                czywygral(); 
                czypoprawnyprzycisk();
            }
        }
    }
    
    function czywygral(){
        console.log(odpowiedzi_uzytkownika);
        var g=0;
        while(odpowiedzi_uzytkownika.length>g)
        {
            if(odpowiedzi_uzytkownika[g]==poprawna_odpowiedz[0] && odpowiedzi_uzytkownika[g+1]==poprawna_odpowiedz[1] && odpowiedzi_uzytkownika[g+2]==poprawna_odpowiedz[2] && odpowiedzi_uzytkownika[g+3]==poprawna_odpowiedz[3] ){
                document.getElementById("zwyciestwo").innerText="Gratulacje, wygrales!";
            }
            g++;
        }
    }

function czypoprawnyprzycisk(){
        if(odpowiedzi_uzytkownika[odpowiedzi_uzytkownika.length-1]==poprawna_odpowiedz[ilepoprawnychodpowiedzizrzedu]){
            document.getElementById("odpowiedz_"+ilepoprawnychodpowiedzizrzedu).style.backgroundColor="lightgreen";
            ilepoprawnychodpowiedzizrzedu++;
        }
        else{
            ilepoprawnychodpowiedzizrzedu=0;
            for(var cd=0; cd<4; cd++){
                document.getElementsByClassName("kratki_odpowiedzi")[cd].style.backgroundColor="lightgrey";
            }
            
        }
}
