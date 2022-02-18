import { Field, ObjectType } from "@nestjs/graphql"
import { IOrchestra } from "./orchestra.interface"

@ObjectType()
export class Orchestra implements IOrchestra {
	@Field()
	name: string

	constructor(name: string) {
		this.name = name
	}
}
