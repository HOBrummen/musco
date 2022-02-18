import { Injectable } from '@nestjs/common'
import { User } from './user'

@Injectable()
export class UserService {
	async findAll(): Promise<User[]> {
		return [new User("Imre Boersma", "imre.boersma@gmail.com")]
	}
}
