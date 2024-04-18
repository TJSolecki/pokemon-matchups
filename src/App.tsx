import {
    pokemon_names,
    format_pokemon_name,
    get_type_matchup_table_data,
} from "./utils";
import { useState } from "react";
import Alert from "./components/Alert";
import PokemonSearchSelect from "./components/PokemonSearchSelect";
import { Pokedex } from "pokeapi-js-wrapper";
import TypeMatchupTable from "./components/TypeMatchupTable";

export default function App() {
    const [is_invalid_name, set_is_invalid_name] = useState<boolean>(false);
    const [type_table_data, set_type_table_data] = useState<
        TypeTableData | undefined
    >();
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
            const matchup_data_promises = types.map(
                async (type) =>
                    (await api.getTypeByName(type)).damage_relations,
            );
            const matchup_data = await Promise.all(matchup_data_promises);
            set_type_table_data(get_type_matchup_table_data(matchup_data));
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
            <TypeMatchupTable type_table_data={type_table_data} />
        </main>
    );
}
