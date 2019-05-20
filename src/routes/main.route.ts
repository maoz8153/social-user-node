import { Router } from 'express'
import express from 'express';
import { MainController } from '../controllers/controller.main';


export class MainRoute {

    private mainController: MainController;

    constructor(router: Router) {
        this.mainController = new MainController();
        this.createRoutes(router);
    }

    private createRoutes(router: Router) {
        router.get('/user/list', this.mainController.sendListResponce.bind(this.mainController));
        router.post('/user/add', this.mainController.addUser.bind(this.mainController));
    }

}