import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    deleteBtn?: boolean;
    action: () => void; 
}

export const ActionButton = ({ children, deleteBtn = false, action }: Props) => {
  return (
    <button className={clsx(
        "flex gap-2 text-xl font-bold items-center shadow-comic-button border-2 border-[#373A40] py-1 px-2",
        {
            "bg-red-500 text-white": deleteBtn
        }
    )} onClick={action}>
        {children}
    </button>
  )
}
