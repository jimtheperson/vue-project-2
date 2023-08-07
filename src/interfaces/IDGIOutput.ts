export default interface IDGIOutput {
  id: string
  locationID: string
  type: 'audio' | 'video' | 'audio-video'
  title: string
  source?: {
    id: string
    title: string
    items: {
      id: string
      title: string
      value: string | number
      icon?: string
    }[]
  }[]
  volume?: {
    id: string
    title: string
    value: number
  }[]
  control?: {
    id: string
    type: 'button' | 'toggle'
    title: string
    value: boolean
    icon?: string
  }[]
}
