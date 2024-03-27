import PropTypes from 'prop-types'
  function PokemonCard ({pokemon}) {
    
 
    return (
           <figure className="card">

        <img src={pokemon.imgSrc} ></img>
       
          
        <figcaption>{pokemon.name}</figcaption>
    </figure>
    );
}PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};


export default PokemonCard;