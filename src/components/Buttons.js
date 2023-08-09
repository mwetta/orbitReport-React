import satData from "./satData";
import styles from "./styling.css"

const Buttons = (props) => {
  let {displaySats, filterByType, setSat} = props;

  const FirstButton = () => {
    return (
      <div>
        {displaySats.map((sat, id) => {
          return (
            <button onClick={() => filterByType(sat)} key={id}> 
              {sat} Orbit
            </button> 
          );
        })}
      </div>
    )
  };

  const SecondButton = () => {
    //needed to make setSat an anonymous function inside onClick!!!
    return (
      <button onClick={() => setSat(satData)}> 
        All Orbits
      </button>
    )
  };

  return (
    <div className={styles.flexcontainer}>
      <FirstButton />
      <SecondButton />
    </div>
  );
};



export default Buttons;