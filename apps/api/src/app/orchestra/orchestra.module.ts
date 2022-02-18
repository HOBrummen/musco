import { Module } from '@nestjs/common'
import { OrchestraService } from './orchestra.service'
import { OrchestraResolver } from './orchestra.resolver'

@Module({
	providers: [OrchestraService, OrchestraResolver]
})
export class OrchestraModule {}
