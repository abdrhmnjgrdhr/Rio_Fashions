import { useEffect, useState } from "react";
import MainNav from "./Components/MainNav";
import PreLoader from "./Components/PreLoader/PreLoader"
export default function App() {
  const [count,Setcount]=useState([{key:0,nam:undefined},{key:1,nam:undefined}])
  const [isLoading, setIsLoadin] = useState(true);
  var handleclick=()=>{
  var k=0
    console.log(count);
    Setcount(count.map((c)=>{

      if(c.key==k){
        c.nam="bava"
      }
    }))
  
  }

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoadin(false);
      }, 4000);
    };

    fakeDataFetch();
  }, []);

  return (

    <div className="">
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <MainNav />
        </>
      )}
    </div>
  );
}
