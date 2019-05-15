import { Router } from 'express'
import * as express from 'express';
import { MainController } from '../controllers/controller.main';


export class MainRoute {

    public router: Router;
    private mainController: MainController;

    constructor(app: express.Application) {
        this.router = Router();
        this.mainController = new MainController(this.router);
        app.use(this.router);
    }

}