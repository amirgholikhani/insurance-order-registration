interface InsuranceItemProps {
  title: string
  value: string
}

export default function InsuranceItem({ title, value }: InsuranceItemProps) {
  return (
    <div className="flex gap-1.5 items-center">
      <h3 className="font-[400] text-[14px] text-[#808080]">{title}</h3>
      <hr className="grow border border-dashed border-[#E0E0E0]" />
      <h3 className="font-[400] text-[14px]">{value}</h3>
    </div>
  )
}