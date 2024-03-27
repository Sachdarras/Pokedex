
  function PokemonCard ({pokemon}) {
    
 
    return (
           <figure className="card">

        <img src={pokemon.imgSrc} ></img>
       
          
        <figcaption>{pokemon.name}</figcaption>
    </figure>
    );
}


export default PokemonCard;