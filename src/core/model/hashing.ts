import { randomBytes, createHash } from 'crypto';
import { HashedPasswordResult } from '../interfaces/hased-password.interface';


/**
 * Creates a hash out of a password. Returns a HashingPasswordResult; Which
 * consists of the orginal password, a salt value and the hash password.
 * @param password - Password to be hashed 
 * @returns - HashedPasswordResult
 */
export function hashPassword (password: string):  HashedPasswordResult {
    
    // creates salt
    const salt = randomBytes(26).toString('hex');

    return  {
        salt,
        // creates hash
        hash_password: createHash('sha256').update(password + salt).digest('hex'),
    }
}


