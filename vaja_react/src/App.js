import Seznam from "./Seznam";
import React, {useRef, useState, useEffect} from "react";

const  LOCAL_STORAGE_KEY = "seznamkey";
function App() {

    /*
    desno zacetno stanje komponente
    destrukcija polja useState (object destructuring)
    setSeznam;  funkcija, ki nam dopušča, da updejtamo nas Seznam
    naloge vsebuje vse kaj je v useStatu na desni strani (vsaka naloga, ki bo v seznamu - desna stran)
    ----------------
    props: npr <Avtor novo={Ime} /> implementirano - GLEJ SPODAJ
    v komponenti imamo isto poimenovanje spremenljivke kot smo imeli zgoraj, torej ime const Avtor = ({novo}) => {}
    {id: 1, ime: "Naloga 1", koncana: false}, {id: 2, ime: "Naloga 2", koncana: false}
     */
    const [naloge, setSeznam] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);
    const oseba = {
        name: "Ime",
        surname:"Priimek",
        age: "Starost"
    }

    /*
    vsakic, ko se nekaj spremeni se poklice ta funkcija
    [] dependecy list, podamo vse odvisnosti pri kateri zelimo da se useEffect prozi
    vsakic ko se spremenijo naloge v seznamu želimo proziti useEffect
     */
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,  JSON.stringify(naloge));
    }, [naloge])

    /*
    useEffect za loadanje iz local storage
    če uporabimo prazen array (brez dependency) se ta ne bo spreminjal in se bo posledicno izvedel samo 1x
     */
    useEffect(() => {

    }, [])

    /*
    destrukcija objekta
     */
    const {name, age} = oseba;

   /*
   z useRef imamo direkten dostop do elementa; v nasem primeru inputa
   .value cetudi ga podcrta
    */
    const nalogaRef = useRef();
    const dodajNalogo = () => {
        const ime = nalogaRef.current.value
        if (ime === '') return;
        console.log(ime);
        setSeznam(prevSeznam => {
            return [...prevSeznam, {id: ime, ime: ime, koncana: false}]
        })
        nalogaRef.current.value = null;
    }

    return (
      <>
        <h1>Naslov</h1>
        <h2>Naslov 2</h2>
          <Seznam prop={naloge}/>
          <span>Dodaj seznam: </span>
          <input ref={nalogaRef} type="text" />
          <button onClick={dodajNalogo} >Dodaj nalogo</button>
          <button>Izbrisi nalogo</button>
          <div>
              0 nalog za opravit<br />
              {name}<br />
              {age}
          </div>
      </>

  );
}

export default App;
