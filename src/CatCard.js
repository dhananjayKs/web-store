import React from "react";

import './CSS/CatCard.css'
export function CatCard(props){
    // let [data, name, age, count]= useHook({'name':'Dhananjay', 'age':25, 'count':0})
    //  useEffect(() => {
    //     count()
    //      console.log(`name changed ${data.count} `)
    //      return () => {  // cleanup logic used when the component will unmount
    //          console.log('un')
    //      }
    //  }, [data.name]) /// shallow comparison in the dependency array, the fn is called whenever the dependencies change
    //  useEff(data.count)
    let sty
    if(props.category===props.selected){
        sty={
            'backgroundColor':'slateblue',
            'color':'aliceblue'
        }
    }
    return(
        <div className='catContainer'>
            <p className='catText' onClick={props.setCategory} style={sty}>{props.category}</p>
        </div>
    )
}