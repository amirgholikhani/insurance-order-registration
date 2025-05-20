import AddressCard from "./AddressCard"
import React from "react"

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

export default function AddressList({ addresses, handleSelect, handleDelete }: AddressListProps) {
  return (
    <div className="flex flex-col gap-4 py-2 px-3">
      {addresses.map(address => <AddressCard key={address.id} address={address} onSelect={handleSelect} onDelete={handleDelete} />)}
    </div>
  )
}