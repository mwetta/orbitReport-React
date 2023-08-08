import satData from "./satData";

const Buttons = (props) => {
  const displaySats = props.displaySats;
  const filterByType = props.filterByType;
  const setSat = props.setSat;

  // const FirstButton = () => {
  //   return (
  //     <div>
  //       {displaySats.map((sat, id) => {
  //         return (
  //           <button onClick={() => filterByType(sat)} key={id}> 
  //             {sat} Orbit
  //           </button> 
  //         );
  //       })}
  //     </div>
  //   )
  // };

  // const SecondButton = () => {
  //   return (
  //     <button onClick={setSat(satData)}>
  //       All Orbits
  //     </button>
  //   )
  // };

  return (
    <div>
      <div>
        {displaySats.map((sat, id) => {
          return (
            <button onClick={() => filterByType(sat)} key={id}> 
              {sat} Orbit
            </button> 
          );
        })}
      </div>
      <button onClick={setSat(satData)}>
        All Orbits
      </button>
    </div>
  );
};


export default Buttons;