import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Feedback } from '../entities/feedback.entity'; 

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',       // Ensure this is set to 'postgres'
    host: 'localhost',      // Host where PostgreSQL is running
    port: 5432,             // Change port to 5432 for PostgreSQL
    username: 'postgres',   // Your PostgreSQL username
    password: '1234',       // Your PostgreSQL password
    database: 'feedback',    // Your feedback database
    entities: [__dirname + '/**/*.entity{.ts,.js}'], // Path to entities
    synchronize: true,      // Enable synchronization (use only in development)
};
