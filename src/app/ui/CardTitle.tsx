import Image from "next/image";
import CarIcon from '@/assets/images/CarIcon.svg'

export default function CardTitle({ title }: { title: string }) {
  return (
    <div className="flex gap-1.5 h-14 items-center px-2 shadow-[0_3px_7px_-1px_#2222221A]">
      <Image src={CarIcon} alt="Car Icon" />
      <h1 className="font-[500] text-[18px]">{title}</h1>
    </div>
  )
}