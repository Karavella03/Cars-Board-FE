import { IUser } from "./IUser"

export interface ICarAd {
    id?: string,
    brand: string,
    model: string,
    color: string,
    productionDate: string,
    numberOfOwners: string,
    description: string,
    price: string
    imageSrc: string,
    user: IUser
}