import { User } from 'src/users/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

// export const dataSourceOptions: DataSourceOptions = {
//   type: 'sqlite',
//   database: 'db.sqlite',
//   entities: ['dist/**/*.entity.js', User],
//   migrations: ['dist/db/migrations/*.js'],
// };

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '456456',
  database: 'db1',
  entities: ['dist/**/*.entity.js', User],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
