import { pokemon_names, format_pokemon_name } from "./utils";
import { useState } from "react";
import Alert from "./components/Alert";
import PokemonSearchSelect from "./components/PokemonSearchSelect";
import TypeMatchupTable from "./components/TypeMatchupTable";

export default function App() {
    const [is_invalid_name, set_is_invalid_name] = useState<boolean>(false);
    const [selected_pokemon, set_selected_pokemon] = useState<string>();
    async function handle_submit(e: React.SyntheticEvent) {
        e.preventDefault();
        const pokemon_name: string = (e.target as any)?.pokemon_name
            .value as string;
        if (pokemon_names.some((name) => name == pokemon_name)) {
            set_is_invalid_name(false);
            const formatted_name = format_pokemon_name(pokemon_name);
            set_selected_pokemon(formatted_name);
        } else {
            set_is_invalid_name(true);
        }
    }
    return (
        <main className="max-w-[1200px] mx-auto flex flex-col items-center gap-2">
            <Alert
                message="Please enter a valid Pokemon name"
                is_displayed={is_invalid_name}
            />
            <PokemonSearchSelect handle_submit={handle_submit} />
            <TypeMatchupTable pokemon_name={selected_pokemon} />
        </main>
    );
}
