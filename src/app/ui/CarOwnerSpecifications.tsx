'use client'
import { useForm } from "react-hook-form";
import CardTitle from "./CardTitle";

interface CarOwnerData {
  phoneNumber: string
  internationalCode: string
}

export default function CarOwnerSpecifications() {
  const { register, handleSubmit, formState: { errors } } = useForm<CarOwnerData>()

  const nationalCodeIsInvalid = errors?.internationalCode?.type === 'validate'
  const phonNumberIsInvalid = errors?.phoneNumber?.type === 'validate'

  const onSubmit = (data: CarOwnerData) => {
    console.log('data', data)
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
              <div className="h-5">
                {errors?.internationalCode?.type === 'validate' && <p className="text-[#E61F10] text-[14px] font-[400]">کدملی وارد شده معتبر نیست.</p>}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <input {...register('phoneNumber', {
                required: true,
                validate:  value => !!value.match(/^0?9(0[0-5]|[1 3]\d|2[0-3]|9[0-9]|41)\d{7}$/g)
              })} type="number" placeholder="شماره تلفن همراه" className={`input ${phonNumberIsInvalid && 'input-error border-[#E61F10] text-[#E61F10]'}`} />
              <div className="h-5">
              {errors?.phoneNumber?.type === 'validate' && <p className="text-[#E61F10] text-[14px] font-[400]">شماره تلفن همراه معتبر نیست.</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[16px] font-[500] h-7">آدرس جهت درج روی بیمه نامه</h3>
          <h4 className="text-[14px] font-[400] leading-7">لطفا آدرسی را که میخواهید روی بیمه نامه درج شود، را وارد کنید.</h4>
          <button className="btn btn-primary">انتخاب از آدرس های من</button>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-secondary" type="submit">تایید و ادامه</button>
        </div>
      </form>
    </div>
  )
}