import React, {useRef, useEffect} from 'react'
// import tableau from 'react-tableau'

const { tableau} = window

function EmbedTableau() {
    const ref = useRef(null)
    // const url = 'https://eu-west-1a.online.tableau.com/#/site/politicalviolence/views/Syriawithdiscretefilter/Syria?:iid=1'
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
    // useEffect(() => {
    //     const initViz = () => {
    //       if (ref.current) {
    //         new tableau.Viz(ref.current, url);
    //       }
    //     };
    
    //     initViz();
    //   }, []);
  return (
    <div>
        <h1>EmbedTableau</h1>
        <div ref={ref}></div>
        {/* <tableau-viz id="tableauViz"       
        src='https://eu-west-1a.online.tableau.com/#/site/politicalviolence/views/Syriawithdiscretefilter/Syria?:iid=1'>
        </tableau-viz> */}
    </div>
  )
}


export default EmbedTableau