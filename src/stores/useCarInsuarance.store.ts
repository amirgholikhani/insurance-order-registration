import { Address } from "@/app/ui/AddressList";
import { create } from "zustand";

interface CarInsuaranceStore {
  nationalId: string;
  phoneNumber: string;
  addressId: string;
  address: Address;
  setData: (nationalId: string, phoneNumber: string, addressId: string, address: Address) => void;
}

export const useCarInsuaranceStore = create<CarInsuaranceStore>((set) => ({
  nationalId: '',
  phoneNumber: '',
  addressId: '',
  address: {} as Address,
  setData: (nationalId: string, phoneNumber: string, addressId: string, address: Address) => set({ nationalId, phoneNumber, addressId, address }),
}));