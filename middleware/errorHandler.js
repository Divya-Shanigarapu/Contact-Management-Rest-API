import { constants } from "../constants.js";
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "validation failed", message: err.message, stackTrace: err.stack });
            break;
        case constants.NOT_FOUND:
            res.json({ title: "Not found", message: err.message, stackTrace: err.stack });
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "unauthorized", message: err.message, stackTrace: err.stack });
            break;
        case constants.FORBIDDEN:
            res.json({ title: "forbidden", message: err.message, stackTrace: err.stack });
            break;
        case constants.SERVER_ERROR:
            res.json({ title: "server error", message: err.message, stackTrace: err.stack });
            break;

        default:
            console.log("No error!!");
            break;


    }
}
   
export { errorHandler}