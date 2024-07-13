import { Navigate } from "react-router-dom";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import { Spinner } from "./components/Spinner";
import { Dashboard } from "./routes/Dashboard";

function Root() {
    const { getUsers, user, loading } = useAuthStore(state => ({
        user: state.user,
        getUsers: state.getUsers,
        loading: state.loading,
    }));

    useEffect(() => {
        (async () => {
            await getUsers();
        })()
    }, [getUsers])

    if(loading) {
        return (
        <div className="h-screen w-screen bg-[#d9d9d9] flex items-center justify-center">
            <Spinner />
        </div>
        )
    }
    
    return user ?
        <Dashboard />
        :
        <Navigate to="/login" replace />
}

export default Root
