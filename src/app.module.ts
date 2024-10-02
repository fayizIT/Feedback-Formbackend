import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackModule } from './feedback/feedback.module';
import { typeOrmConfig } from './feedback/config/typeorm.config'; 

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),  // This provides the DataSource
    FeedbackModule
  ],
})
export class AppModule {}
