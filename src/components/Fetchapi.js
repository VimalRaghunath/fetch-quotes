import React,{ useState,useEffect} from 'react';


function Fetchapi() {
     
    const[data,setData] = useState([]);
    const apiGet = async () => {
        const response = await fetch("https://dummyjson.com/quotes")
        .then((res)=>res.json())
        .then((dat)=>dat.quotes);
      const responsedata= response.filter((data)=>data.id<11)
      setData(responsedata);
    };
    useEffect(()=>{
        apiGet()
    },[]);

  return (
    <div>
      {data.map((obj)=>(
        <h1>{obj.id}.{obj.quote}</h1>
      ))}
    </div>
  );
}

export default Fetchapi;
