import { Property } from "./property"

export interface Agent{
    agentId:number,
    agentName:string,
    description:string,
    locality:string,
    address:string,
    phone:string,
    email:string,
    agentRating:number
    properties:Property[]
}