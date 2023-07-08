import React from "react";
import Net from "./Elements/Net";
import Rating from "./Elements/Rating";
import Result from "./Elements/Result";

function App() {
  const [site, setSite] = React.useState(true)
  const [rating, setRating] = React.useState(0);

  function changeRating(event) {
      setRating(event.target.value)
      console.log(event.target.value)
  }

  function changeSite() {
    rating && setSite(false)
  }

  return(
    <>
      <Net need=" " />
      <main>
        {site ?
        <Rating 
          changeSite={changeSite} 
          changeRating={changeRating}
        /> :
        <Result rating={rating} />
        }
        </main>
    </>
  )
}

export default App;