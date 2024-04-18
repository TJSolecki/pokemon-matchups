type PokemonType =
    | "normal"
    | "fire"
    | "water"
    | "grass"
    | "flying"
    | "fighting"
    | "poison"
    | "electric"
    | "ground"
    | "rock"
    | "psychic"
    | "ice"
    | "bug"
    | "ghost"
    | "steel"
    | "dragon"
    | "dark"
    | "fairy";

interface TypeMatchup {
    multiplier: number;
    type: PokemonType;
}

interface TypeTableData {
    super_effective: TypeMatchup[];
    not_very_effective: TypeMatchup[];
    no_effect: TypeMatchup[];
}
