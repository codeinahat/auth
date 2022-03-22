import { DatabaseInterface, options }  from './interfaces/database.interface';
import { MongoClient, ObjectId } from 'mongodb';
import { hashPassword } from '../core';


export class IMongoDb implements DatabaseInterface{

    client: MongoClient;

    /**
     * Creates IMongoDb class instance
     * @param database - The database to interact with.
     * @param collection - The collection to interact with.
     */
    constructor(public database: string, public collection: string) {}

    /**
     * Connects to database server.
     * @param connectionString 
     * @returns {Promise<boolean>} connection succeded true/false
     */
    async connect(connectionString: string): Promise<boolean> {

        if(connectionString === undefined || connectionString === null) {
            console.log(`Connection string is required to connect to database`);

            return false;
        }

        this.client = new MongoClient(connectionString)

        try {
            await this.client.connect();

            return true;
        }
        catch(error) {
            console.log(error.message);

            return false
        }

    }

    /**
     * Closes connection to database server.
     */
    close(): void {
        this.client.close();   
    }

    async saveUsernamePassword(username: string, password: string, options?: options): Promise<boolean> {
        try {
            // links to collection
            const collection = this.client.db(this.database).collection(this.collection);

            // hashes password
            const hashedPassword = hashPassword(password, (options ? options.salt : undefined), (options ? options.algo : undefined))

            // inserts username as id, password(hashed) and salt
            const response = await collection.insertOne({
                _id: new ObjectId(username),
                password: hashedPassword.hashed_password,
                salt: hashedPassword.salt
            }) 

            // if succesfull return true
            if(response.acknowledged)
                return true;

            return false;
        }
        catch(error) {
            console.log(error)
        }
        finally {
            await this.client.close()
        }
    }
}