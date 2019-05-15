import { createServer, Server } from 'http';
import * as express from 'express';
import bodyParser = require('body-parser');
import * as cors from 'cors';
import { MainRoute } from './routes/main.route';

export class NodeServer {
    public static readonly PORT: number = 8080;
    private app: express.Application;
    private server: Server;
    private port: string | number;

    constructor() {
        this.createApp();
        this.initConfig();
        this.createServer();
        this.initExpressMiddleWare()
        this.initRoutes();
        this.listen();
    }

    private createApp(): void {
        this.app = express();
    }

    private initConfig(): void {
        this.port = process.env.PORT || NodeServer.PORT;
    }

    private initExpressMiddleWare(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Content-Type' ,'application/x-www-form-urlencoded');
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            next();
        });
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private initRoutes(): void {
        new MainRoute(this.app);
    }


    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });
    }

    public getApp(): express.Application {
        return this.app;
    }
}
