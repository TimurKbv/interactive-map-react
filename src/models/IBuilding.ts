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
  } 