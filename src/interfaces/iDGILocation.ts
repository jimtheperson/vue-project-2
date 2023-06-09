export default interface IDGILocation {
  id: string,
  title: string,
  address?: string,
  floors?: {
    id: string,
    title: string,
    rooms?: {
      id: string,
      title: string
    }[]
  }[],
  rooms?: {
    id: string,
    title: string
  }[]
}
