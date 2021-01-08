import { ExecSyncOptionsWithBufferEncoding } from "child_process"

export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}
export type OrderLocationData = {
    latitude: Number;
    longitude: Number;
    address: String;
}