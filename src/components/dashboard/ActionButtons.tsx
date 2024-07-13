import { useManageStore } from "../../store/manageStore"
import { ActionButton } from "./ActionButton"
import { LockIcon } from "./icons/LockIcon"
import { TrashIcon } from "./icons/TrashIcon"
import { UnlockIcon } from "./icons/UnlockIcon"

export const ActionButtons = () => {
  const blockUsers = useManageStore(state => state.blockUsers);
  const unblockUsers = useManageStore(state => state.unblockUsers);
  const deleteUsers = useManageStore(state => state.deleteUsers);

  return (
    <div className="flex gap-8">
        <ActionButton action={blockUsers}>
            Block
            <LockIcon />
        </ActionButton>
        <ActionButton action={unblockUsers}>
            <UnlockIcon />
        </ActionButton>
        <ActionButton deleteBtn={true} action={deleteUsers}>
            <TrashIcon />
        </ActionButton>
    </div>
  )
}
