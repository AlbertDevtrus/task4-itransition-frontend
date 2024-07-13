import { formatDate } from '../../../helpers/formatDate';
import { CheckBox } from '../CheckBox'

interface Props {
    name: string;
    email: string;
    lastLog: string;
    status: boolean;
    id: string;
}

export const RowTable = ({ name, email, lastLog, status, id }: Props) => {
    return (
        <div className="grid grid-cols-5">
            <span className="flex items-center justify-center">
                <CheckBox id={id} />
            </span>
            <span className="bg-gray-200 text-center py-2 text-lg">{name}</span>
            <span className="text-center py-2 text-lg font-normal">{email}</span>
            <span className="bg-gray-200 text-center py-2 text-lg">{lastLog ? formatDate(lastLog) : "No log"}</span>
            <span className="text-center py-2 text-lg font-medium">{status ? "Active" : "Banned"}</span>
        </div>
    )
}
