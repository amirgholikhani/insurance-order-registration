import { baseUrl } from "@/lib/consts"
import AddressCard from "./AddressCard"
import React from "react"

export const dynamic = 'force-dynamic'

export interface Address {
  id: number
  name: string
  details: string
}

interface AddressListProps {
  handleSelect: (id: number) => void
}

export default function AddressList({ handleSelect }: AddressListProps) {
  const [addresses, setAddresses] = React.useState<Address[]>([] as Address[])

  const handleDelete = (id: number) => {
    const filteredAddresses: Address[] = addresses.filter(address => address.id !== id)
  }

  React.useEffect(() => {
    const fetchAddreses = async () => {
      const response = await fetch(`${baseUrl}/my-addresses`)
      let addresses: Address[] = await response.json()
      setAddresses(addresses)
    }

    fetchAddreses()
  }, [])

  return (
    <div className="flex flex-col gap-4 py-2 px-3">
      {addresses.map(address => <AddressCard key={address.id} address={address} onSelect={handleSelect} onDelete={handleDelete} />)}
    </div>
  )
}