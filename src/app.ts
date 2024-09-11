import { MyDatabaseClassic } from "./creational/singleton/my-database-classic";

const myDatabaseClassic = MyDatabaseClassic.getInstance()
myDatabaseClassic.add({ name: 'João', age: 30 })

myDatabaseClassic.show()