'use client'
import { useForm } from "react-hook-form";
import CardTitle from "./CardTitle";
import React from "react";
import { Address } from "./AddressList";
import AddressSelectionModal from "./AddressesModalContent";
import { baseUrl } from "@/lib/consts";
import { useRouter } from "next/navigation";
import ServerErrorModal from "./ServerErrorModal";

interface CarOwnerData {
  phoneNumber: string
  nationalId: string
  addressId: string
}

export default function CarOwnerSpecifications() {
  const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm<CarOwnerData>()
  const dialogRef = React.useRef<HTMLDialogElement>(null)
  const serverErrorModalRef = React.useRef<HTMLDialogElement>(null)
  const [loading, setLoading] = React.useState(false)
  const [selectedAddress, setSelectedAddress] = React.useState<Address>({} as Address)
  const router = useRouter()

  const nationalCodeIsInvalid = errors?.nationalId?.type === 'validate'
  const phonNumberIsInvalid = errors?.phoneNumber?.type === 'validate'
  const addressIsInvalid = errors?.addressId?.type === 'required'
  const addressDescription = watch('addressId') ? selectedAddress.details : 'لطفا آدرسی را که میخواهید روی بیمه نامه درج شود، را وارد کنید.'

  function isValidIranianNationalId(input: string) {
    if (!/^\d{10}$/.test(input)) return false;
    if (/^(\d)\1{9}$/.test(input)) return false; // All digits the same
  
    const check = +input[9];
    const sum = [...input].slice(0, 9).reduce((acc, digit, i) => acc + (+digit * (10 - i)), 0);
    const remainder = sum % 11;
  
    return (remainder < 2 && check === remainder) || (remainder >= 2 && check === 11 - remainder);
  }
  
  const handleOpenModal = () => {
    dialogRef.current?.showModal()
  }

  const handleCloseModal = () => {
    dialogRef.current?.close()
  }

  const handleCloseErrorModal = () => {
    serverErrorModalRef.current?.close()
  }

  const onSubmit = (data: CarOwnerData) => {
    postData(data)
  }

  const submitDataAgain = () => {
    onSubmit(watch())
  }

  const postData = async (data: CarOwnerData) => {
    setLoading(true)
    try {
        const response = await fetch(`${baseUrl}/order/completion/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
        mode: 'cors',
      });

      await response.json()

      router.push('/receipt')
  
    } catch (error) {
      console.error("There was an error:", error);
      serverErrorModalRef.current?.showModal()
    } finally {
      setLoading(false)
    }
  };

  const handleSelectAddress = React.useCallback((address: Address) => {
    setSelectedAddress(address)
    setValue('addressId', String(address.id), { shouldValidate: true })
    handleCloseModal()
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <CardTitle title="مشخصات مالک خودرو" />
      <form className="flex flex-col self-center gap-6 w-[322px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[16px] font-[500] h-7">لطفا اطلاعات شخصی مالک خودرو را وارد کنید:</h3>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
              <input {...register('nationalId', {
                required: true,
                validate:  value => isValidIranianNationalId(value)
              })} type="number" placeholder="کد ملی" className={`input ${nationalCodeIsInvalid && 'input-error border-[#E61F10] text-[#E61F10]'}`} />
              <div className="h-5 flex items-center">
                {errors?.nationalId?.type === 'validate' && <p className="text-[#E61F10] text-[14px] font-[400]">کدملی وارد شده معتبر نیست.</p>}
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
          <input type="hidden" {...register('addressId', {
            required: true
          })}  />
          <h4 className={`text-[14px] font-[400] leading-7 ${addressIsInvalid && 'text-[#E61F10]'}`}>{addressDescription}</h4>
          {!watch('addressId') && <button className="btn btn-primary" type="button" onClick={handleOpenModal}>انتخاب از آدرس های من</button>}
        </div>
        <div className="flex justify-end">
          <button className="btn btn-secondary" type="submit" disabled={!watch('nationalId') || !watch('phoneNumber') || loading}>
            {loading && <span className="loading loading-spinner"></span>}
            تایید و ادامه
            </button>
        </div>
      </form>
      <AddressSelectionModal ref={dialogRef} handleSelectAddress={handleSelectAddress} />
      <ServerErrorModal ref={serverErrorModalRef} handleCloseModal={handleCloseErrorModal} handleSubmit={submitDataAgain} loading={loading} />
    </div>
  )
}