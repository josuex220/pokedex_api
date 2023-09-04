import React, {useContext, useState} from 'react';
import Footer from '../components/Footer';
import CustomHead from '../components/CustomHead';
import Search from '@/components/Search';
import CardItem from '@/components/CardItem';
import { PokemonsContext } from '@/contexts/PokemonsContext';


const Home = () => {
    const [searchResults, setSearchResults] = useState([]);
    const { pokemonList, currentPage, searchPokemon } = useContext(PokemonsContext);

    const handleSearch = (searchTerm) => {
        const results = searchPokemon(searchTerm);
        setSearchResults(results);
      };
  return (
    <div>
        <CustomHead />
        <main>
            <Search handleSearch={handleSearch} />
            <div className='listPokemons'>
                {
                    (searchResults.length > 0 ? searchResults : pokemonList).length > 0 ? (searchResults.length > 0 ? searchResults : pokemonList).map((item) => (
                        <CardItem key={item.id} image={item.image} url={item.url} id={item.id} types={item.types} info={item} />
                    )) : (<div>Não trouxe nenhum pokemon</div>)
                }
            </div>
        </main>

        <Footer />
    </div>
  );
};

export default Home;
