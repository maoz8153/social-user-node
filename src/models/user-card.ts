import { User } from "./user";


export class UserCard {
    name: string;
    title: string;
    status: string;
    image: string;
    numberOfLikes: number;
    numberOfFriends: number;
    numberOfPhotos: number;
    constructor(user: User, friends: User[], numberOfLikes: number) {
        this.name = user.name;
        this.title = user.title;
        this.status = user.status;
        this.image = user.pictures[0];
        this.numberOfLikes = numberOfLikes || 0;
        this.numberOfFriends = friends.length;
        this.numberOfPhotos = user.pictures.length;
    }
}