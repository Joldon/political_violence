import React, {useRef, useEffect} from 'react'
// import tableau from 'react-tableau'
// import {
//   TableauViz,
// } from 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';

const { tableau} = window

function EmbedTableau() {
    const ref = useRef(null)
    // below is the url link to the tableau server that is not currently available
    // const url = 'https://eu-west-1a.online.tableau.com/#/site/politicalviolence/views/Syriawithdiscretefilter/Syria?:iid=1'

    // this is working url connected to the tableau public server
    const url = 'https://public.tableau.com/views/Democracy_postcommunist_scores/Democracyinpostcommunistcountries2005-2022'

    function initViz() {
        new tableau.Viz(ref.current, url, {
            width: '100%',
            height: '90vh',
        })
    }
 
    useEffect(() => {
        initViz()
    }, [])
  return (
    <div>
        <h1>EmbedTableau</h1>
        <div ref={ref}></div>
        <tableau-viz id="tableauViz"       
        src={url}>
        </tableau-viz>
    </div>
  )
}


export default EmbedTableau