import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormDataService } from './form-data.service';
import { CreateFormDatumDto } from './dto/create-form-datum.dto';
import { UpdateFormDatumDto } from './dto/update-form-datum.dto';

@Controller('form-data')
export class FormDataController {
  constructor(private readonly formDataService: FormDataService) {}

  @Post()
  create(@Body() createFormDatumDto: CreateFormDatumDto) {
    return this.formDataService.create(createFormDatumDto);
  }

  @Get()
  findAll() {
    return this.formDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormDatumDto: UpdateFormDatumDto) {
    return this.formDataService.update(+id, updateFormDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formDataService.remove(+id);
  }
}
