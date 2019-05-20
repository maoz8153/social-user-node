import { Router } from 'express'
import express from 'express';
import { MainController } from '../controllers/controller.main';


export class MainRoute {

    private mainController: MainController;

    constructor(router: Router) {
        this.mainController = new MainController(router);
    }

}