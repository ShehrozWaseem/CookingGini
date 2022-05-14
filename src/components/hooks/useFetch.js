import { useState, useEffect } from "react"

export const useFetch = (url,method="GET") => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [options,setOptions] = useState(null)

  const submitData = (postData) =>{
    setOptions({
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(postData)
    })
  }

  useEffect(() => {

    const fetchData = async (options) => {
      setIsPending(true)
      
      try {
        const res = await fetch(url,options)
        if(!res.ok) {
          throw new Error()
        }
        const data = await res.json()

        setIsPending(false)
        setData(data)
        setError(null)
      } 
      catch (err) {
          setIsPending(false)
          setError('Could not fetch the data')  
      }
    }
    if(method==="GET"){
      fetchData()
    }
    if(method==="POST" && options){
      fetchData(options)
    }

    

//clean up function
// use controller to abort the fetch
    // return () => {
    //   controller.abort()
    // }

  }, [url,options])

  return { data, isPending, error,submitData }
}