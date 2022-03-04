import express from "express";
import cors from "cors";
import RequestInfo from "./midddlewares/request-info.middelware.js";
import humpsMiddleware from "./midddlewares/humps.middleware.js";

const AppMiddleware = express();

AppMiddleware.use(express.urlencoded({ extended: true }));
AppMiddleware.use(express.json());
AppMiddleware.use(cors());
AppMiddleware.use(RequestInfo())
AppMiddleware.use(humpsMiddleware())
// AppMiddleware.use((req, res, next) => {
//   console.log(`Timestamp : ${new Date()}`);
//   next();
// });


export default AppMiddleware;
