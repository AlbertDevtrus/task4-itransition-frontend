import { useAuthStore } from "../../../store/authStore"
import { HeaderTable } from "./HeaderTable"
import { RowTable } from "./RowTable"

export const Table = () => {
    const allUsers = useAuthStore(state => state.allUsers);
    return (
        <section className="border-2 border-[#373A40] flex flex-col shadow-comic">
            <HeaderTable />
            {
                allUsers.map(user => (
                    <RowTable key={user.id} id={user.id} name={user.name} email={user.email} lastLog={user.lastLogin} status={user.status}  />
                ))
            }
        </section>
    )
}
