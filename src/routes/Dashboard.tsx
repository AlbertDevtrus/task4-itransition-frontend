import { ActionButtons } from "../components/dashboard/ActionButtons"
import { Table } from "../components/dashboard/table/Table"
import { Navbar } from "../components/navbar/Navbar"

export const Dashboard = () => {

    return (
        <>
            <div className="bg-[#d9d9d9]">
                <Navbar />
            </div>
            <div className="px-60 pt-20 pb-10 flex gap-5 flex-col">
                <ActionButtons />
                <Table />
            </div>
        </>
    )
}
