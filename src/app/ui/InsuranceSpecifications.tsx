import Image from "next/image";
import CarIcon from '@/assets/images/CarIcon.svg'
import IranPlate from '@/assets/images/IranPlate.svg'

interface Plate {
  firstNumber: number,
  secondNumber: number,
  thirdNumber: number,
  word: string,
}

interface Car {
  plateNumber: Plate
  brand: string
  model: string
  insurerCompany: string
}

export default function InsuranceSpecifications() {
  const carData: Car = {
    plateNumber: {
      firstNumber: 64,
      secondNumber: 988,
      thirdNumber: 60,
      word: 'ک',
    },
    brand: 'پژو',
    model: '206 تیپ 6',
    insurerCompany: 'پارسیان'
  }

  const { brand, insurerCompany, model, plateNumber: { firstNumber, secondNumber, thirdNumber, word } } = carData

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-1.5 h-14 items-center px-2 shadow-[0_3px_7px_-1px_#2222221A]">
        <Image src={CarIcon} alt="Car Icon" />
        <h1 className="font-[500] text-[18px]">مشخصات بیمه نامه</h1>
      </div>
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
        <div className="flex justify-between items-center">
          <h3 className="font-[400] text-[14px] text-[#808080]">شرکت بیمه گر</h3>
          <h3 className="font-[400] text-[14px]">{insurerCompany}</h3>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-[400] text-[14px] text-[#808080]">برند خودرو</h3>
          <h3 className="font-[400] text-[14px]">{brand}</h3>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-[400] text-[14px] text-[#808080]">مدل خودرو</h3>
          <h3 className="font-[400] text-[14px]">{model}</h3>
        </div>
      </div>
    </div>
  )
}