import Image from "next/image";
import TrashIcon from '@/assets/images/TrashIcon.svg'
import { Address } from "./AddressList";

interface AddressCardProps {
  address: Address
  onDelete: (address: Address) => void
  onSelect: (address: Address) => void
}

export default function AddressCard({ address, onDelete, onSelect }: AddressCardProps) {
  const { details, id, name } = address

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-1.5 items-center">
          <input
            type="radio"
            name="address"
            className="radio radio-xs border-2 border-[#C2C2C2] checked:text-[#000000] checked:border-[#C2C2C2]"
            onClick={() => onSelect(address)}
          />
          <span className="text-[14px] fornt-[500]">{name}</span>
        </div>
        <span className="cursor-pointer" onClick={() => onDelete(address)}><Image src={TrashIcon} alt="Trash Icon" /></span>
      </div>
      <p className="text-[12px] fornt-[400] text-[#757575] px-6">{details}</p>
    </div>
  )
}