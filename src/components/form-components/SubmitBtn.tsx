import clsx from "clsx"

interface Props {
    state: "idle" | "loading" | "submitting",
}

export const SubmitBtn = ({ state }: Props) => {
    return (
        <button
            type="submit"
            className={clsx(
                "justify-self-end shadow-comic-button p-2 border-2 border-[#373A40] text-center text-lg font-bold font-sans tracking-widest text-[#373A40] mb-10",
                {
                    "opacity-55": state === 'submitting'
                }
            )}
            disabled={state === 'submitting'}
        >
            {state === 'submitting' ? ". . ." : "Submit"}
        </button>
    )
}
