import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Feedback } from '../entities/feedback.entity'; 

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'feedback_db',
  entities: [Feedback],
  synchronize: true,
};
