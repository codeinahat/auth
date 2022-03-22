// dependencies
import { randomBytes, createHash } from 'crypto';

// interfaces
import { HashedPasswordResult } from './interfaces/hased-password.interface';

// types
import { algos } from './types/algos.type';



/**
 * Creates a hashed version of the password using the sha256 
 * algorithm unless a different one is provided, and a salt created from random bytes.
 * @param password - Password to be hashed
 * @param salt - Salt to use in hashing if any.
 * @param algo - You can specify hashing algorithm if desired. Defaults to SHA256 if not algorithm provided.

 * @returns {HashedPasswordResult} hashed_password and salt
 */
export function hashPassword (password: string, salt?: string, algo?: algos):  HashedPasswordResult {
    
    // creates salt
    const outSalt = salt || randomBytes(26).toString('hex');

    return  {
        salt: outSalt,
        // creates hash uses sha256 if not algoprithm provided
        hashed_password: createHash(algo || 'sha256').update(password + salt).digest('hex'),
    }
}