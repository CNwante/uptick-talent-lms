import express from "express";
import cors , {CorsOptions} from "cors";
import { getters } from "./config";
import { loadServices } from "./loader";
// Routes
import router from "./routes/applicants.routes";
// Middleware
import errorHandlerMiddleWare from "./Middlware/ErrorHandlerMiddleware";


const app = express();

const getProductionOrigins = (): string => {
  return getters.getAllowedOrigins();
};

const devOrigins = ["http://localhost:3000", "http://localhost:3001"];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (process.env.NODE_ENV === "production") {
      const allowedOrigins = getProductionOrigins();
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, origin);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    } else {
      // Development: allow localhost:3000 and :3001
      if (!origin || devOrigins.includes(origin)) {
        callback(null, origin);
      } else {
        // Optional: allow tools like Postman (origin === undefined)
        callback(null, true);
      }
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
};

// const corsOptions = {
//   origin:
//     process.env.NODE_ENV === "production" ? getters.getAllowedOrigins() : "*",
//   methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//   credentials: true,
// };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/v1/applicants', router)    

// Register routes via loader
loadServices(app);

// 404 handler - must be after all routes
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});


// global error handler
app.use(errorHandlerMiddleWare);

export default app;
