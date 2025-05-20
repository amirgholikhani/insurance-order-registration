'use client'

import { useRouter } from "next/navigation";
import InsuranceSpecifications from "../ui/InsuranceSpecifications";

export default function ReceiptPage() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="flex flex-col justify-between h-full">
      <InsuranceSpecifications hasSuccessfulMessage />
      <div className="flex justify-end pb-3 px-[18px]">
        <button className="btn btn-secondary w-[140px]" onClick={handleBack}>بازگشت</button>
      </div>
    </div>
  )
}