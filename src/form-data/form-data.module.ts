import { Module } from '@nestjs/common';
import { FormDataService } from './form-data.service';
import { FormDataController } from './form-data.controller';

@Module({
  controllers: [FormDataController],
  providers: [FormDataService],
})
export class FormDataModule {}
