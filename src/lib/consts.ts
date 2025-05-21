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

export const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const carData: Car = {
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