import { config } from 'dotenv';
config();
import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { NODE_ENV } from 'src/common/enums/node-env.enum';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const baseConfig = (configService: ConfigService) => {
    const config = {
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        synchronize: configService.get<string>('NODE_ENV') === NODE_ENV.DEVELOPMENT,
        logging: configService.get<string>('NODE_ENV') === NODE_ENV.DEVELOPMENT,
        autoLoadEntities: true,
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        subscribers: [__dirname + '/../**/*.subscriber{.ts,.js}'],
        migrations: [__dirname + '/../database/migrations/*.{js,ts}'],
        migrationsTableName: 'migration_table',
        migrationsRun: true,
        extra: {
            timezone: 'UTC', // Ensures the timezone is set to UTC
        },
    }

    // Add SSL configuration for production
    if (configService.get<string>("NODE_ENV") === NODE_ENV.PRODUCTION) {
        return {
            ...config,
            ssl: { rejectUnauthorized: false }, // Explicitly set SSL
        };
    }

    return config;
}

export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => {
    return {
        ...baseConfig(configService),
    } as TypeOrmModuleOptions;
};

export const dataSourceConfig = (configService: ConfigService): DataSourceOptions => {
    return {
        ...baseConfig(configService),
    } as DataSourceOptions;
};

const configService = new ConfigService();
const dataSource = new DataSource(dataSourceConfig(configService));
export default dataSource;