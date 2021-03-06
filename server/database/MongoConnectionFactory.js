/*
const sql = require('mssql')

const config = {

    server: 'df7436sr461',
    user: 's733001',
    password: '$733001*$%',
    database: 'DB7330_DEV',
    options: {
        trustedconnection: true,
        trustServerCertificate: true,
        enableArithAbort: true,
        encrypt: true,
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    }
}

const ConnectionFactory = {

    async getConnection() {

        return new Promise((resolve, reject) => {

            let cn = sql.connect(config)

            resolve(cn)

            sql.on('error', err => reject(err))             

        })
    }
}

module.exports = ConnectionFactory
*/

require('dotenv/config')

const mongoose = require('mongoose')

const uri = process.env.DB_MONGODB_URI      //não esqueça: 

const MongoConnectionFactory = {

    async getConnection() {

        try {

            await mongoose.connect(uri)
            console.log('MongoDB conectado.')

        } catch (error) {

            console.log(`MongoDB erro: ${error.message}`)
        }
    }
}

module.exports = MongoConnectionFactory
