import { Test, TestingModule } from '@nestjs/testing'
import { InstrumentService } from './instrument.service'

describe('InstrumentService', () => {
	let service: InstrumentService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [InstrumentService]
		}).compile()

		service = module.get<InstrumentService>(InstrumentService)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})
