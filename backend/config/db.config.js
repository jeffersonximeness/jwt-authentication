module.exports = {
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: 'mysecretpassword',
    DB: 'authdb',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}