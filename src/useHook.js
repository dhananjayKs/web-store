import { useState,useEffect } from "react"

export let useHook =(values)=>{
   let [data, changeData]=useState(values)
    let changeName=()=>{
        changeData(val=>({          //the function should return an object since our original state is an object inside ()
            ...val,                 //we use distructor because unlike in set state it dosent update the element but replaces it
            name:val.name+'a'
        }))
    }
    let changeAge=()=>{
        changeData(val=>({
            ...val,
            age:val.age+1
        }))
    }
    let changeCount=()=>{
        changeData(val=>({
            ...val,
            count:val.count+1
        }))
    }
   return [data,changeName, changeAge, changeCount ]
}

export let useEff=(data)=>{
    useEffect(()=>{
        console.log(data)
    },[data])
    
}