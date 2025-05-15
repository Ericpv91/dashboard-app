import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons"


export const metadata = {
    title: '251 Pokémons',
    description: 'Lista de 251 pokémons'
}

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json())

        const pokemons = data.results.map(pokemon => ({
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name
        }))

    return pokemons
}

export default async function POkemonsPage() {

    const pokemons = await getPokemons(251)

    return (
        <div className="flex flex-col">

            <span className="text-5xl"> Listado de Pokémon<small className="text-blue-500"> estático</small></span>
            
            <PokemonGrid pokemons={pokemons} />

        </div>
    );
}