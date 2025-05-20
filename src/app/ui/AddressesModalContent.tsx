import React, { RefObject } from "react"
import AddressList, { Address } from "./AddressList"
import { baseUrl } from "@/lib/consts"
import Image from "next/image";
import CloseIcon from '@/assets/images/CloseIcon.svg'

interface AddressSelectionModalProps {
  ref: RefObject<HTMLDialogElement | null>
  handleSelectAddress: (Address: Address) => void
}

export default function AddressSelectionModal({ ref, handleSelectAddress }: AddressSelectionModalProps) {
  const [addresses, setAddresses] = React.useState<Address[]>([] as Address[])
  const [selectedAddress, setSelectedAddress] = React.useState<Address>({} as Address)
  const [removableAddress, setRemovableAddress] = React.useState<Address>({} as Address)

  const handleSelect = (address: Address) => {
    setSelectedAddress(address)
  }

  const clearRemovableAddress = () => {
    setRemovableAddress({} as Address)
  }

  const handleCloseModal = () => {
    clearRemovableAddress()
    ref.current?.close()
  }

  const handleDelete = (address: Address) => {
    setRemovableAddress(address)
  }

  const handleDeleteItem = () => {
    const filteredAddresses: Address[] = addresses.filter(address => address.id !== removableAddress.id)
    setAddresses(filteredAddresses)
    clearRemovableAddress()
  }

  const handleBack = () => {
    clearRemovableAddress()
  }

  React.useEffect(() => {
    const fetchAddreses = async () => {
      const response = await fetch(`${baseUrl}/my-addresses`)
      const addresses: Address[] = await response.json()
      setAddresses(addresses)
    }

    fetchAddreses()
  }, [])

  return (
    <dialog ref={ref} id="my_modal_5" className="modal modal-bottom max-w-[360px] justify-self-center">
      <div className="modal-box rounded-none p-0 flex flex-col gap-2">
        <div className="flex justify-between items-center px-3 py-4 border-b-1 border-[#E0E0E0]">
          <h3 className="text-[16px] font-[500]">انتخاب آدرس</h3>
          <div className="p-[5px] cursor-pointer" onClick={handleCloseModal}>
            <Image src={CloseIcon} alt="Close Icon" />
          </div>
        </div>
        {removableAddress.id ? (
          <>
            <div className="flex flex-col gap-4 px-3 py-2">
              <h3 className="text-[14px] font-[500]">آیا از حذف آدرس خود، مطمئن هستید؟</h3>
              <div className="flex flex-col gap-2 p-2 bg-[#F2F2F2]">
                <span className="text-[14px] font-[500]">{removableAddress.name}</span>
                <p className="text-[12px] font-[400] text-[#757575]">{removableAddress.details}</p>
              </div>
            </div>
            <div className="p-2.5 shadow-[0px_3px_15px_3px_#2222221A] flex gap-2.5">
              <button className="flex-1 btn btn-secondary" onClick={handleDeleteItem}>تایید</button>
              <button className="flex-1 btn btn-secondary btn-outline" onClick={handleBack}>بازگشت</button>
            </div>
          </>
        ) : (
          <>
            <AddressList addresses={addresses} handleSelect={handleSelect} handleDelete={handleDelete} />
            <div className="p-2.5 shadow-[0px_3px_15px_3px_#2222221A]">
              <button
                className="btn btn-secondary w-full"
                type="button" disabled={!selectedAddress.id}
                onClick={() => handleSelectAddress(selectedAddress)}
              >
                انتخاب
              </button>
            </div>
          </>
        )}
      </div>
    </dialog>
  )
}