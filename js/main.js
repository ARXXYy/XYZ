const odabirAuta = document.getElementById('rentanjeauta');
const slikaAuta = document.getElementById('slika-auta');
const cijenaTekst = document.getElementById('cijenatext');

odabirAuta.addEventListener('change', () => {
    const odabranoAuto = odabirAuta.options[odabirAuta.selectedIndex].value;
    if (odabranoAuto === '12') {
        slikaAuta.src = 'assets/slike//Mercedes-Benz C-Klasa.jpeg';
        cijenaTekst.textContent = 'Cijena: 120$ na dan';

    }
    if(odabranoAuto === '13'){
        slikaAuta.src = 'assets/slike/Mercedes-Benz AMG GT.jpg';
        cijenaTekst.textContent = 'Cijena: 150$ na dan';

    }
    if(odabranoAuto === '14'){
        cijenaTekst.textContent = 'Cijena: 200$ na dan';

        slikaAuta.src = 'assets/slike/14_mercedes_eqc.jpg';
    }
    if(odabranoAuto === '20'){
        cijenaTekst.textContent = 'Cijena: 110$ na dan';

        slikaAuta.src = 'assets/slike/Audi A4.jpg';
    }
    if(odabranoAuto === '21'){
        cijenaTekst.textContent = 'Cijena: 130$ na dan';

        slikaAuta.src = 'assets/slike/Audi A6.jpg';
    }
    if(odabranoAuto === '22'){
        cijenaTekst.textContent = 'Cijena: 180$ na dan';

        slikaAuta.src = 'assets/slike/yes.jpg';
    }
    if(odabranoAuto === '30'){
        cijenaTekst.textContent = 'Cijena: 90$ na dan';

        slikaAuta.src = 'assets/slike/GOLF IV.jpg';
    }
    if(odabranoAuto === '31'){
        cijenaTekst.textContent = 'Cijena: 100$ na dan';

        slikaAuta.src = 'assets/slike/volkswagen-audi-recall-golf-r-a3-tt-over-fuel-line-connector-issue_2.jpg';
    }
    if(odabranoAuto === '32'){
        cijenaTekst.textContent = 'Cijena: 120$ na dan';

        slikaAuta.src = 'assets/slike/GOLF VIII.jpg';
    }


});
const datumPocetka= document.getElementById('datum-pocetka');
const datumKraja= document.getElementById('datum-kraja');
const cijena= document.getElementById('cijena');

datumPocetka.addEventListener('change', izracunajCijenu);
datumKraja.addEventListener('change', izracunajCijenu);

function izracunajCijenu(){
if(datumPocetka.value === '' || datumKraja.value === '' || odabirAuta.value === '0'){
    return;
}
const dolari= document.getElementById('dolari');
dolari.style.display = 'block';

 const pocetak = new Date(datumPocetka.value);
    const kraj = new Date(datumKraja.value);
    const razlika = kraj.getTime() - pocetak.getTime();
    const razlikaDana = razlika / (1000 * 3600 * 24);
    const odabranoAuto = odabirAuta.options[odabirAuta.selectedIndex].value;
    if(odabranoAuto === '12'){
        cijena.value = 120 * razlikaDana;
         cijena.textContent = cijena.value;
    }
    if(odabranoAuto === '13'){
        cijena.value = 150 * razlikaDana;
        cijena.textContent = cijena.value;


    }
    if(odabranoAuto === '14'){
        cijena.value = 200 * razlikaDana;
        cijena.textContent = cijena.value;


    }
    if(odabranoAuto === '20'){
        cijena.value = 110 * razlikaDana;
        cijena.textContent = cijena.value;
    }
    if(odabranoAuto === '21'){
        cijena.value = 130 * razlikaDana;
        cijena.textContent = cijena.value;
    }
    if(odabranoAuto === '22'){
        cijena.value = 180 * razlikaDana;
        cijena.textContent = cijena.value;
    }
    if(odabranoAuto === '30'){
        cijena.value = 90 * razlikaDana;
        cijena.textContent = cijena.value;

    }
    if(odabranoAuto === '31'){
        cijena.value = 100 * razlikaDana;
        cijena.textContent = cijena.value;
    }
    if(odabranoAuto === '32'){
        cijena.value = 120 * razlikaDana;
        cijena.textContent = cijena.value;
    }
    
}