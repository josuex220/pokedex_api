import React, {useState} from 'react';
import Footer from '@/components/Footer';
import CustomHead from '@/components/CustomHead';
import '@/public/styles/globals.css';
import Search from '@/components/Search';
import CardItem from '@/components/CardItem';


const Home = () => {
    const [search, setSearch] = useState('');
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
                pokemons.map((item) => (
                    <CardItem image={item.image} url={'/pokemon/'} id={item.id} types={item.types} info={item} />
                ))
            }
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
