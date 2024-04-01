import { pokemon_names, format_pokemon_name } from "./utils";
import { useState } from "react";
import Alert from "./components/Alert";
import PokemonSearchSelect from "./components/PokemonSearchSelect";
import { Pokedex } from "pokeapi-js-wrapper";
export default function App() {
    const [is_invalid_name, set_is_invalid_name] = useState<boolean>(false);
    async function handle_submit(e: React.SyntheticEvent) {
        e.preventDefault();
        const pokemon_name: string = (e.target as any)?.pokemon_name
            .value as string;
        if (pokemon_names.some((name) => name == pokemon_name)) {
            set_is_invalid_name(false);
            const formatted_name = format_pokemon_name(pokemon_name);
            const api = new Pokedex();
            const pokemon_data = await api.getPokemonByName(formatted_name);
            const types = pokemon_data.types.map((type) => type.type.name);
            const type_data = await api.getTypeByName(types[0]);
            console.log(type_data.damage_relations);
        } else {
            set_is_invalid_name(true);
        }
    }
    return (
        <main className="max-w-[1200px] mx-auto flex flex-col items-center">
            <Alert
                message="Please enter a valid Pokemon name"
                is_displayed={is_invalid_name}
            />
            <PokemonSearchSelect handle_submit={handle_submit} />
        </main>
    );
}
