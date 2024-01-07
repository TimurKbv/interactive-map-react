export interface IBuilding {
    id: string,
    Name: string,
    Coordinates: {
        X: number,
        Y: number,
        Width: number,
        Length: number
    },
    image: string,
    occupied: number,
    empty: number,
    address: string
  } 


  export interface IPoi {
    id: string,
    Name: string,
    Coordinates: {
        X: number,
        Y: number
        },
    size: {
        width: number,
        height: number
    },
    image: string,
    description: string
}



  export enum BuildingArts {
    building = 'BUILDING',
    po = 'PO'
  }