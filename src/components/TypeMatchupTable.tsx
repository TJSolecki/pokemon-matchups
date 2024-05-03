import { useEffect, useState } from "react";
import TypeMatchupIcon from "./TypeMatchupIcon";
import { Pokedex } from "pokeapi-js-wrapper";
import { get_type_matchup_table_data } from "../utils";
export default function TypeMatchupTable({
    pokemon_name,
}: {
    pokemon_name?: string;
}) {
    const [type_table_data, set_type_table_data] = useState<TypeTableData>();

    function handler() {
        if (!pokemon_name) {
            return;
        }
        const api = new Pokedex();
        api.getPokemonByName(pokemon_name as string).then((pokemon_data) => {
            const types = pokemon_data.types.map((type) => type.type.name);
            const matchup_data_promises = types.map((type) =>
                api.getTypeByName(type),
            );
            Promise.all(matchup_data_promises).then((results) => {
                const matchup_data = results.map(
                    (data) => data.damage_relations,
                );
                set_type_table_data(get_type_matchup_table_data(matchup_data));
            });
        });
    }

    useEffect(handler, [pokemon_name]);

    if (pokemon_name === undefined) {
        return <></>;
    }

    if (type_table_data === undefined) {
        return <></>;
    }

    return (
        <table className="bg-green-400 rounded-md max-w-xl">
            <tbody className="flex flex-col gap-2 p-2">
                <tr className="bg-green-300 rounded-md p-2">
                    <th className="text-left">Super effective:</th>
                    <td className="flex p-1 gap-1 flex-wrap">
                        {type_table_data.super_effective.map((type_data) => (
                            <TypeMatchupIcon
                                key={type_data.type}
                                type={type_data.type}
                                multiplier={type_data.multiplier}
                            />
                        ))}
                    </td>
                </tr>
                <tr className="bg-green-300 rounded-md p-2">
                    <th>Not very effective:</th>
                    <td className="flex p-1 gap-1 flex-wrap">
                        {type_table_data.not_very_effective.map((type_data) => (
                            <TypeMatchupIcon
                                key={type_data.type}
                                type={type_data.type}
                                multiplier={type_data.multiplier}
                            />
                        ))}
                    </td>
                </tr>
                <tr className="bg-green-300 rounded-md p-2">
                    <th>Immune to:</th>
                    <td className="flex p-1 gap-1 flex-wrap">
                        {type_table_data.no_effect.map((type_data) => (
                            <TypeMatchupIcon
                                key={type_data.type}
                                type={type_data.type}
                                multiplier={type_data.multiplier}
                            />
                        ))}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
