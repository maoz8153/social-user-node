import { Router, Response } from 'express'
import fs from 'fs'
import { UserCard } from '../models/user-card';

export class MainController {

    public router: Router;
    public userList: UserCard[] = [];

    constructor(router: Router) {
        this.userList = [];
        this.router = router;
        this.createRoutes();
        this.readJsonData();
    }

    private createRoutes() {
        this.router.get('/user/list', this.sendListResponce.bind(this));
        this.router.post('/user/add', this.addUser.bind(this));
    }

    private addUser(req: Request, res: Response) {
        try {
            this.updateUserList(req.body)
            res.send({ sucsses: true });
        } catch (err) {
            console.log(err);
        }
    }

    private updateUserList(userCard: any) {
        this.userList.push(userCard);
    }

    private sendListResponce(req: Request, res: Response) {
        try {
            res.send(this.userList);
        } catch (err) {
            console.log(err);
        }
    }

    private async readJsonData() {
        fs.readFile('data.json', 'utf8', (err, data) => {
            if (err) throw err;
            const list = JSON.parse(data);
            for (let index = 0; index < list.length; index++) {
                const element = new UserCard(list[index].user, list[index].friends, list[index].numberOfLikes);
                this.userList.push(element);
            }
        });
    }
}