export class User {
    constructor(public name: string, public title: string, public status: string,
         public pictures: string[], selectedPictureIndex : number = 0) { }
}