import AddressCard from "./AddressCard"
import { memo } from "react"

export const dynamic = 'force-dynamic'

export interface Address {
  id: number
  name: string
  details: string
}

interface AddressListProps {
  addresses: Address[]
  handleSelect: (address: Address) => void
  handleDelete: (address: Address) => void
}

function AddressList({ addresses, handleSelect, handleDelete }: AddressListProps) {
  return (
    <div className="flex flex-col gap-4 py-2 px-3">
      {addresses.map(address => <AddressCard key={address.id} address={address} onSelect={handleSelect} onDelete={handleDelete} />)}
    </div>
  )
}

export default memo(AddressList)