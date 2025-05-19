import Image from "next/image";
import CarIcon from '@/assets/images/CarIcon.svg'

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center w-full h-full">
      <div className='w-full max-w-[360px] bg-white h-full'>
        <div className="flex gap-1.5 h-14 items-center px-2 shadow-[0_3px_7px_-1px_#2222221A]">
          <Image src={CarIcon} alt="Car Icon" />
          <h1 className="text-[18px]">مشخصات بیمه نامه</h1>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}