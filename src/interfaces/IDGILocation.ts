export default interface IDGILocation {
  id: string
  title: string
  address?: string
  floors?: {
    id: string
    title: string
    rooms?: {
      id: string
      title: string
    }[]
  }[]
  rooms?: {
    id: string
    title: string
  }[]
}


// interface IDGIBuilding extends IDGILocation {
//   address: string
// }

// interface IDGIFloor extends IDGILocation {
//   floors: {
//     id: string
//     title: string
//     rooms?: {
//       id: string
//       title: string
//     }[]
//   }
// }

// interface IDGIRoom extends IDGILocation {
//   rooms: {
//     id: string
//     title: string
//   }[]
// }

// export default ( IDGILocation, IDGIBuilding, IDGIFloor, IDGIRoom )
