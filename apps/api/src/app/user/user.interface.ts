import { Instrument } from "../instrument/instrument"
import { Orchestra } from "../orchestra/orchestra"

export interface IUser {
	name: string
	email: string
	orchestras: Orchestra[]
	instruments: Instrument[]
}
