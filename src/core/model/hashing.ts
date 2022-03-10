import { randomBytes, createHash } from 'crypto';
import { HashedPasswordResult } from '../interfaces/hased-password.interface';
import { algos } from '../types/algos.type';



/**
 * Creates a hashed version of the password using the sha256 
 * algorithm unless a different one is provided, and a salt created from random bytes.
 * @param password - Password to be hashed
 * @param algo - You can specify hashing algorithm if desired. Defaults to SHA256 is not algorithm provided.

 * @returns {HashedPasswordResult} hashed_password and salt
 */
export function hashPassword (password: string, algo?: algos):  HashedPasswordResult {
    
    // creates salt
    const salt = randomBytes(26).toString('hex');

    return  {
        salt,
        // creates hash
        hashed_password: createHash(algo || 'sha256').update(password + salt).digest('hex'),
    }
}


