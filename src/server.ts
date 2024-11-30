import express, {Express, Request, Response} from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import api from '../src/routes/api.ts';
const app: Express = express();

// Configurations for api limiter pkg
const apiLimiter = rateLimit({
	windowMs: 24* 60 * 60 * 1000, // 1 day in ms
	max: 10000, 
	standardHeaders: true, 
	legacyHeaders: false,
});

if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
}

app.use('/api/', apiLimiter);
app.use(helmet.contentSecurityPolicy({
    directives: {
      frameAncestors: ["'self' https://longph.com"],
    },
  }));
app.use(compression());
app.use(cors());
app.set('view engine', 'ejs');
app.set("views", (path.join(__dirname, "../public", "views")));
app.use(express.static(path.join(__dirname, "../public")));

app.use('/api', api);
app.use(express.json());

// Set generic headers for all routes
app.all('*', function (req : Request, res : Response, next) {
	res.set({
		"Connection": "Keep-Alive",
		"Keep-Alive": "timeout=5, max=1000",
		"Content-Type": "application/json; charset=utf-8",
		"Access-Control-Allow-Origin": "*",
   });
    next();
});

// Main route to render to landing page
app.get('/', async (req : Request, res : Response) => {
	res.setHeader("Content-Type", "text/html");
    res.sendFile(path.join(__dirname, "../public", "views", "home.html"));
});

const PORT = process.env.PORT ?? 5173;

app.listen(PORT, () => { console.info(`Server is running on http://localhost:${PORT}`); });

// Export app for testing purposes
export default app;