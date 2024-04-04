export default function TypeMatchupIcon({
    type,
    multiplier,
}: {
    type: PokemonType;
    multiplier: number;
}) {
    let color = "";
    switch (type) {
        case "normal":
            color = "bg-gray-300";
            break;
        case "fire":
            color = "bg-red-500";
            break;
        case "water":
            color = "bg-blue-500";
            break;
        case "grass":
            color = "bg-green-500";
            break;
        case "flying":
            color = "bg-blue-300";
            break;
        case "fighting":
            color = "bg-yellow-950";
            break;
        case "poison":
            color = "bg-purple-800";
            break;
        case "electric":
            color = "bg-yellow-400";
            break;
        case "ground":
            color = "bg-yellow-900";
            break;
        case "rock":
            color = "bg-yellow-800";
            break;
        case "psychic":
            color = "bg-pink-600";
            break;
        case "ice":
            color = "bg-cyan-400";
            break;
        case "bug":
            color = "bg-lime-700";
            break;
        case "ghost":
            color = "bg-indigo-900";
            break;
        case "steel":
            color = "bg-slate-500";
            break;
        case "dragon":
            color = "bg-violet-950";
            break;
        case "dark":
            color = "bg-stone-900";
            break;
        case "fairy":
            color = "bg-fuchsia-300";
            break;
    }

    return (
        <div
            className={`${color} w-24 text-xs flex items-center justify-between border border-black p-0.5 rounded-full`}
        >
            <p className="text-white text-stroke font-bold pr-1 w-full text-center">
                {type[0].toUpperCase() + type.slice(1)}
            </p>
            <p className="p-1 rounded-full bg-white text-black">
                {multiplier == 0.5
                    ? "½"
                    : multiplier == 0.25
                      ? "¼"
                      : multiplier}
                x
            </p>
        </div>
    );
}
