
function NavBar({prevPokemon , nextPokemon}) {

  return (
<>
<button onClick={prevPokemon}>Précedent</button>
<button onClick={nextPokemon}>Suivant</button>

</>
  )   
};



export default NavBar;