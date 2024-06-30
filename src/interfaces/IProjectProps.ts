import { ReactElement } from "react"

export interface IProjectProps {
  id: string
  className: string
  dataAos?: string
  dataAosDelay?: string
  children?: ReactElement
}