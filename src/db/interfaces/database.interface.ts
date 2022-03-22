import { MongoClient } from 'mongodb';
import { ConnectionPool } from 'mssql'
import { algos } from '../../core/types/algos.type';

/**
 * Allowed client types
 */
type client = MongoClient | ConnectionPool;  

/**
 * Options for saveUsernamePassword
 */
export type options = {
    salt: any,
    algo: algos
}

/**
 * Database interface that abstracts handler for diferent types of databases
 */

export interface DatabaseInterface 
{
    client: client;
    connect(connectionString?: string): Promise<boolean> | Promise<string>;

    close(): void;
    saveUsernamePassword(username: string, password: string, options?: options): Promise<boolean>;
}