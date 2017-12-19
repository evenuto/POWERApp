
export class List {
    myArray: String[] = [];
}

export class User {
    id: number;
    name: string;
}

export class Session {
    users: User[] = [new User(), new User()];
}

export class Progress{
    progressArray: String[] = [];
}