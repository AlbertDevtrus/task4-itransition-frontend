import { useAuthStore } from "../../store/authStore";

export const Navbar = () => {
    const { user, logout } = useAuthStore(state => ({
        user: state.user,
        logout: state.logout
    }));

    return (
        <div className="bg-[#d7d7d7] w-full h-16 flex items-center justify-end px-60">
            <nav className="flex gap-20">
                <span className="flex items-center text-xl font-normal">
                    Hello, <span className="ml-1 font-medium">{user?.name}</span>!
                </span>
                <button className="shadow-comic-button px-2 py-1 bg-[#F5F5F5] border-2 border-[#373A40] text-center text-lg font-medium font-sans tracking-wider" onClick={logout}>Logout</button>
            </nav>
        </div>
    )
}
