import TypeMatchupIcon from "./TypeMatchupIcon";
export default function TypeMatchupTable({
    type_table_data,
}: {
    type_table_data: TypeTableData | undefined;
}) {
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
