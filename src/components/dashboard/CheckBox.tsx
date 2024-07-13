import { useManageStore } from "../../store/manageStore";


export const CheckBox = ({id}: {id?: string}) => {

    const updateSelected = useManageStore(state => state.updateSelected)
    const selectedUsers = useManageStore(state => state.selectedUsers)
    const selectAll = useManageStore(state => state.selectAll)
    const unSelectAll = useManageStore(state => state.unSelectAll)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        if(target.id === 'allChecked') {
            if(target.checked) {
                selectAll();
            } else {
                unSelectAll();
            }
        } else {
            updateSelected(target.id);
        }
        console.log(selectedUsers);
    }

    const isChecked = id && selectedUsers.includes(id);

    return (
        <div className="inline-flex items-center">
            <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="check">
                <input type="checkbox"
                    className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-[3px] border-2 border-gray-700 transition-all checked:border-gray-700 checked:bg-gray-700"
                    id={id ?? 'allChecked'} onChange={onChange} checked={isChecked}/>
                <span
                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" strokeWidth="1">
                        <path fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"></path>
                    </svg>
                </span>
            </label>
        </div>
    )
}
