export default interface IDGIAlert {
  id: string | number
  type: undefined | 'success' | 'info' | 'warning' | 'error'
  title: string
  text?: string
  icon?: boolean
  closable?: boolean
}
