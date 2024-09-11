type User = {
    name: string,
    age: number
}

export class MyDatabaseClassic {
    private static _instance: MyDatabaseClassic | null = null;
    private users: User[] = [];

    private constructor() {}

    public static getInstance(): MyDatabaseClassic {
        if (MyDatabaseClassic._instance === null) {
            MyDatabaseClassic._instance = new MyDatabaseClassic();
        }

        return MyDatabaseClassic._instance;
    }


    add(user: User): void {
        this.users.push(user);
    }

    remove(index: number): void {
        this.users.splice(index, 1);
    }

    show(): void {
        for (const user of this.users) {
            console.log(user);
        }
    }

}