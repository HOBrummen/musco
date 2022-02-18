import { Test, TestingModule } from '@nestjs/testing'
import { OrchestraResolver } from './orchestra.resolver'

describe('OrchestraResolver', () => {
	let resolver: OrchestraResolver

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [OrchestraResolver]
		}).compile()

		resolver = module.get<OrchestraResolver>(OrchestraResolver)
	})

	it('should be defined', () => {
		expect(resolver).toBeDefined()
	})
})
