import { Router, Response } from 'express'
import fs from 'fs'
import { UserCard } from '../models/user-card';

export class MainController {

    public userList: UserCard[] = [];

    constructor() {
        this.userList = [];
        this.readJsonData();
    }



    public addUser(req: Request, res: Response) {
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

    public sendListResponce(req: Request, res: Response) {
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