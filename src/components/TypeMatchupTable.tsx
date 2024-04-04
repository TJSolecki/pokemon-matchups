import TypeMatchupIcon from "./TypeMatchupIcon";
export default function TypeMatchupTable({
    type_table_data,
}: {
    type_table_data: TypeTableData;
}) {
    return (
        <table>
            <tr>
                <th>Super effective:</th>
                <td>
                    {type_table_data.super_effective.map((type_data) => (
                        <TypeMatchupIcon
                            type={type_data.type}
                            multiplier={type_data.multiplier}
                        />
                    ))}
                </td>
            </tr>
            <tr>
                <th>Weak to:</th>
                <td>
                    {type_table_data.weak_to.map((type_data) => (
                        <TypeMatchupIcon
                            type={type_data.type}
                            multiplier={type_data.multiplier}
                        />
                    ))}
                </td>
            </tr>
            <tr>
                <th>Not very effective:</th>
                <td>
                    {type_table_data.not_very_effective.map((type_data) => (
                        <TypeMatchupIcon
                            type={type_data.type}
                            multiplier={type_data.multiplier}
                        />
                    ))}
                </td>
            </tr>
            <tr>
                <th>Immune to:</th>
                <td>
                    {type_table_data.no_effect.map((type_data) => (
                        <TypeMatchupIcon
                            type={type_data.type}
                            multiplier={type_data.multiplier}
                        />
                    ))}
                </td>
            </tr>
        </table>
    );
}
