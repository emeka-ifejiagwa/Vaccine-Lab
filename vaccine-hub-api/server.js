const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const NotFound = require("./utils/errors");
const app = express();


const genericErrorHandler = (error, request, response, next) => {
    // Error handling middleware functionality
    console.error(error.message); // log the error
    const status = error.statusCode || 500; // 500 because if no status code, the server is likely down
    // send back an easily understandable error message to the caller
    response.status(status).send(error.message);
    next(error);
};

const notFoundtHandler = (req, res, next) => {
    return next(new NotFound())
}


const PORT = 3000;
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(genericErrorHandler)
app.use(notFoundtHandler)


app.listen(PORT, () => {
  console.log("🚀 Server is up...");
});
