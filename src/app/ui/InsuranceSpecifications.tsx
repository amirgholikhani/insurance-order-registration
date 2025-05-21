import Image from "next/image";
import IranPlate from '@/assets/images/IranPlate.svg'
import ValidFormImage from '@/assets/images/ValidFormImage.svg'
import CardTitle from "./CardTitle";
import InsuranceItem from "./InsuranceItem";
import { carData } from "@/lib/consts";

export default function InsuranceSpecifications({ hasSuccessfulMessage = false }: { hasSuccessfulMessage?: boolean }) {
  const { brand, insurerCompany, model, plateNumber: { firstNumber, secondNumber, thirdNumber, word } } = carData

  return (
    <div className="flex flex-col gap-6">
      <CardTitle title="مشخصات بیمه نامه" />
      {hasSuccessfulMessage && (
        <div className="flex flex-col items-center gap-4 px-8">
          <Image src={ValidFormImage} alt="Valid Form Image" />
          <h2 className="text-[16px] font-[500]">ثبت اطلاعات شما، با <span className="text-green-700">موفقیت</span> انجام شد.</h2>
        </div>
      )}
      <div className="flex flex-row-reverse justify-center h-[50px]">
        <div>
          <Image src={IranPlate} alt="Iran Plate" />
        </div>
        <div className="flex items-center justify-center border-2 w-[180px] px-2.5 py-[13px]">
          <div className="flex flex-row-reverse items-center gap-2.5 h-7">
            <span className="w-[37px] font-[500] text-[18px]">{firstNumber}</span>
            <span className="w-[25px] font-[600] text-[18px]">{word}</span>
            <span className="w-[50px] font-[600] text-[18px]">{secondNumber}</span>
          </div>
        </div>
        <div className="flex w-[55px] items-center justify-center border-2 border-l-0 rounded-r-[5px] font-[500] text-[18px]">{thirdNumber}</div>
      </div>
      <div className="flex flex-col self-center gap-2 w-[280px]">
        <InsuranceItem title="شرکت بیمه گر" value={insurerCompany} />
        <InsuranceItem title="برند خودرو" value={brand} />
        <InsuranceItem title="مدل خودرو" value={model} />
      </div>
    </div>
  )
}