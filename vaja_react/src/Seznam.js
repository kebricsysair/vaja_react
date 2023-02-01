import React from "react";
import Naloga from "./Naloga";
/*
komponente zmeraj pisi z veliko zacetnico
react bo "komponente" z malo zacetnico obravnaval kot DOM tage npr <div> </div>
 */
const Seznam = ({prop, izbranaNal}) => {

    /*
    javascript pozna gnezdene funkcije; lahko jih pišemo kot arrow funkcije
    vrnemo lahko samo 1 parent element; za to uporabimo empty element: <></> - FRAGMENT
     */
    return(
        /*
        damo v zavite oklepaje, kadar želimo izpisat javascript kodo; drugace vzame kot navadno besedilo
         */
        <>
            <div>
                prvi div
            </div>
            <p>
                {prop.length} nalogi
            </p>
            {
                /*
                map = for each; za vsako nalogo bomo nekaj izpisali
                ponovno uporabimo prop, pazimo na poimenovanje
                zmeraj moramo imeti key - kakršnokoli unikatno vrednost
                 */
                prop.map(naloga => {
                    return <Naloga key={naloga.id} izbrana={naloga} izbranaNal={izbranaNal}/>;
                })
            }
        </>
    );
}
export default Seznam;