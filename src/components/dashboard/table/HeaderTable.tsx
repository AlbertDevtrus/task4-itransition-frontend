import { CheckBox } from "../CheckBox"

export const HeaderTable = () => {
    return (
        <header className="grid grid-cols-5 border-b-2 border-[#373A40]">
            <span className="flex items-center justify-center">
                <CheckBox />
            </span>
            <span className="bg-gray-200 text-center py-2 text-lg font-medium">Name</span>
            <span className="text-center py-2 text-lg font-medium">e-Mail</span>
            <span className="bg-gray-200 text-center py-2 text-lg font-medium">Last login</span>
            <span className="text-center py-2 text-lg font-medium">Status</span>
        </header>
    )
}
