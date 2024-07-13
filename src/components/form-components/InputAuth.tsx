interface Props {
    type: string;
    placeholder?: string;
    name: string;
}

export const InputAuth = ({ type, placeholder = '', name }: Props) => {
    return (
        <>
            <label htmlFor={name} className="text-lg font-bold text-[#686D76] mt-2 capitalize">
                {name}:
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="mt-2 mb-5 px-2 py-2 rounded-sm text-[#373A40]"
                name={name}
                id={name}
                required
            />
        </>
    );
};
