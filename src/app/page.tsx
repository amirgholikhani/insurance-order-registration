import InsuranceSpecifications from "@/app/ui/InsuranceSpecifications";
import CarOwnerSpecifications from "./ui/CarOwnerSpecifications";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <InsuranceSpecifications />
      <CarOwnerSpecifications />
    </div>
  );
}
