import { useEffect, useState} from "react";



function useCurrencyInfo(currency){
  const [data, setData] = useState({})
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((response)=>{
        if(!response){
          return new Error("Nothing Found!");
        }
        return response.json();
      })
      .then((data)=> setData(data[currency]))
      console.log(data);
  },[currency])

  return data

}
export default useCurrencyInfo;