import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { OrchestraModule } from './orchestra/orchestra.module'
import { InstrumentModule } from './instrument/instrument.module'

@Module({
	imports: [
		GraphQLModule.forRoot({ autoSchemaFile: true }),
		UserModule,
		OrchestraModule,
		InstrumentModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule { }
