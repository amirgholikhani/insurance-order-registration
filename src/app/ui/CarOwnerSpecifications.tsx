import CardTitle from "./CardTitle";

export default function CarOwnerSpecifications() {
  return (
    <div className="flex flex-col gap-6">
      <CardTitle title="مشخصات مالک خودرو" />
      <div className="flex flex-col self-center gap-6 w-[322px]">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[16px] font-[500] h-7">لطفا اطلاعات شخصی مالک خودرو را وارد کنید:</h3>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
              <input type="text" placeholder="کد ملی" className="input" />
              <p className="h-5"></p>
            </div>
            <div className="flex flex-col gap-1">
              <input type="text" placeholder="شماره تلفن همراه" className="input" />
              <p className="h-5"></p>
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
      </div>
    </div>
  )
}