/**
 * @ormconfig 
 * you need to create this file with this exact way so the forRoot() will connect to it
 */

module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'username',
    password: 'root',
    database: 'movies',
    entities: ["dist/**/*.entity{.ts,.js}",
        'src/**/**.entity{.ts,.js}'
    ],
    synchronize: true,
};