import { Field, ObjectType } from "@nestjs/graphql"
import { IInstrument } from "./instrument.interface"

@ObjectType()
export class Instrument implements IInstrument {
	@Field()
	name: string

	@Field()
	section: string

	constructor(name: string, section: string) {
		this.name = name
		this.section = section
	}
}
