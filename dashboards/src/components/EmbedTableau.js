import React, {useRef, useEffect} from 'react'

const { tableau} = window

function EmbedTableau() {
    const ref = useRef(null)
    const url = 'https://eu-west-1a.online.tableau.com/#/site/politicalviolence/views/Syriawithdiscretefilter/Syria?:iid=1'

    // function initViz() {
    //     new tableau.Viz(ref.current, url)
    // }

    // useEffect(() => {
    //     initViz()
    // }, [])
    useEffect(() => {
        const initViz = () => {
          if (ref.current) {
            new tableau.Viz(ref.current, url);
          }
        };
    
        initViz();
      }, []);
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