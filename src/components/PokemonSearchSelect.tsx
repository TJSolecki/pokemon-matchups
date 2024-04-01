import { pokemon_names } from "../utils";
export default function PokemonSearchSelect({ handle_submit }) {
    return (
        <div className="max-w-lg">
            <form
                autoComplete="off"
                onSubmit={handle_submit}
                className="relative mt-1.5"
            >
                <input
                    type="text"
                    list="List"
                    id="Selection"
                    name="pokemon_name"
                    className="w-full border focus:outline-none p-0.5 rounded-lg border-gray-300 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
                    placeholder="Please select a Pokemon"
                />
                <button
                    className="absolute inset-y-0 right-0 m-0.5 p-1 text-gray-700 hover:bg-gray-200 rounded-md focus:outline-none"
                    type="submit"
                    title="Confirm"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="w-3 h-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </button>
            </form>

            <datalist id="List">
                {pokemon_names.map((name) => (
                    <option value={name} key={name}>
                        {name}
                    </option>
                ))}
            </datalist>
        </div>
    );
}
