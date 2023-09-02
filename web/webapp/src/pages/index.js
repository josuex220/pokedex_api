import React, {useContext, useState} from 'react';
import Footer from '../components/Footer';
import CustomHead from '../components/CustomHead';
import '../public/styles/globals.css';
import Search from '@/components/Search';
import CardItem from '@/components/CardItem';
import { PokemonsContext } from '@/contexts/PokemonsContext';


const Home = () => {
    const [search, setSearch] = useState('');

    const { pokemonList, currentPage } = useContext(PokemonsContext);
    const pokemons = [
        {
            name: 'Bulbasaur',
            id: 1,
            image: 'https://images.gameinfo.io/pokemon/256/p1f87.png',
            types: ['terra', 'sol', 'raio']
        }
    ]
  return (
    <div>
        <CustomHead />
        <main>
            <Search search={search} setSearch={setSearch} />
            <div className='listPokemons'>
                {
                    pokemonList.length > 0 ? pokemonList.map((item) => (
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
