'use client'
import { useForm } from "react-hook-form";
import CardTitle from "./CardTitle";
import React from "react";
import Image from "next/image";
import CloseIcon from '@/assets/images/CloseIcon.svg'
import AddressList from "./AddressList";

interface CarOwnerData {
  phoneNumber: string
  internationalCode: string
  address: string
}

export default function CarOwnerSpecifications() {
  const { register, handleSubmit, formState: { errors } } = useForm<CarOwnerData>()
  const dialogRef = React.useRef<HTMLDialogElement>(null)
  const [selectedAddress, setSelectedAddress] = React.useState(0)

  const nationalCodeIsInvalid = errors?.internationalCode?.type === 'validate'
  const phonNumberIsInvalid = errors?.phoneNumber?.type === 'validate'
  const addressIsInvalid = errors?.address?.type === 'required'

  const handleOpenModal = () => {
    dialogRef.current?.showModal()
  }

  const handleCloseModal = () => {
    dialogRef.current?.close()
  }

  const onSubmit = (data: CarOwnerData) => {
    console.log('data', data)
  }

  const handleSelect = (id: number) => {
    setSelectedAddress(id)
  }

  const handleSelectAddress = () => {
    
  }

  return (
    <div className="flex flex-col gap-6">
      <CardTitle title="مشخصات مالک خودرو" />
      <form className="flex flex-col self-center gap-6 w-[322px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[16px] font-[500] h-7">لطفا اطلاعات شخصی مالک خودرو را وارد کنید:</h3>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
              <input {...register('internationalCode', {
                required: true,
                validate:  value => !!value.match(/^[0-9]{10}$/g)
              })} type="number" placeholder="کد ملی" className={`input ${nationalCodeIsInvalid && 'input-error border-[#E61F10] text-[#E61F10]'}`} />
              <div className="h-5 flex items-center">
                {errors?.internationalCode?.type === 'validate' && <p className="text-[#E61F10] text-[14px] font-[400]">کدملی وارد شده معتبر نیست.</p>}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <input {...register('phoneNumber', {
                required: true,
                validate:  value => !!value.match(/^0?9(0[0-5]|[1 3]\d|2[0-3]|9[0-9]|41)\d{7}$/g)
              })} type="number" placeholder="شماره تلفن همراه" className={`input ${phonNumberIsInvalid && 'input-error border-[#E61F10] text-[#E61F10]'}`} />
              <div className="h-5 flex items-center">
              {errors?.phoneNumber?.type === 'validate' && <p className="text-[#E61F10] text-[14px] font-[400]">شماره تلفن همراه معتبر نیست.</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[16px] font-[500] h-7">آدرس جهت درج روی بیمه نامه</h3>
          <input type="hidden" {...register('address', {
            required: true
          })}  />
          <h4 className={`text-[14px] font-[400] leading-7 ${addressIsInvalid && 'text-[#E61F10]'}`}>لطفا آدرسی را که میخواهید روی بیمه نامه درج شود، را وارد کنید.</h4>
          <button className="btn btn-primary" type="button" onClick={handleOpenModal}>انتخاب از آدرس های من</button>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-secondary" type="submit">تایید و ادامه</button>
        </div>
      </form>
      <dialog ref={dialogRef} id="my_modal_5" className="modal modal-bottom max-w-[360px] justify-self-center">
        <div className="modal-box rounded-none p-0 flex flex-col gap-2">
          <div className="flex justify-between items-center px-3 py-4 border-b-1 border-[#E0E0E0]">
            <h3 className="text-[16px] font-[500]">انتخاب آدرس</h3>
            <div className="p-[5px] cursor-pointer" onClick={handleCloseModal}>
              <Image src={CloseIcon} alt="Close Icon" />
            </div>
          </div>
          <AddressList handleSelect={handleSelect} />
          <div className="p-2.5 shadow-[0px_3px_15px_3px_#2222221A]">
            <button className="btn btn-secondary w-full" type="button" onClick={handleSelectAddress}>انتخاب</button>
          </div>
        </div>
      </dialog>
    </div>
  )
}