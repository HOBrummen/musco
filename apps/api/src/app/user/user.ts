import { Field, ID, ObjectType } from "@nestjs/graphql"
import { randomUUID } from "crypto"
import { Instrument } from "../instrument/instrument"
import { Orchestra } from "../orchestra/orchestra"
import { IUser } from "./user.interface"

@ObjectType()
export class User implements IUser {
	@Field(type => ID)
	id: string

	@Field()
	name: string

	@Field()
	email: string

	@Field(type => [Orchestra])
	orchestras: Orchestra[] = []

	@Field(type => [Instrument])
	instruments: Instrument[] = []

	constructor(name: string, email: string) {
		this.id = randomUUID()
		this.name = name
		this.email = email
	}

	public set addOrchestra(orchestra: Orchestra) {
		this.orchestras = [...this.orchestras, orchestra]
	}

	public set removeOrchestra(orchestra: Orchestra) {
		this.orchestras = this.orchestras.filter(o => o.name !== orchestra.name)
	}

	public set addInstrument(instrument: Instrument) {
		this.instruments = [...this.instruments, instrument]
	}

	public set removeInstrument(instrument: Instrument) {
		this.instruments = this.instruments.filter(i => i.name !== instrument.name)
	}
}
