const dotenv = require("dotenv").config()

const PORT = process.env.PORT || 3001

const getDatabaseURI = () => `postgresql:/${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.PORT}/vaccine-hub`

module.exports = {PORT, getDatabaseURI}
