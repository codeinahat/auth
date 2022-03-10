# CODEINAHAT AUTHENTICATION/AUTHORIZATION LIBRARY

A `NODEJS` library hosted in the npm registry. The purpose of these library is to speed up software development by handling
application security and proper sensitive information storing and processing.

`THINGS TO KEEP IN MIND !`
- These is a live document as we are in early stages of development. You will see it's content change often.
- There are not `alpha` or `beta` releases of these library yet, so we don't recomend to use inproduction unless you know what your doing.
- If you want to play around with it or some of our core features are useful.`GO AHEAD AND ENJOY`.

## Installation

[Node.js](https://nodejs.org) module available through the [npm registry](https://npmjs.com). 
Installation is done using the [`npm install` command:](https://docs.npmjs.com/downloading-and-installing-packages-locally)

``` sh
    $ npm install @codeinahat/auth
```


## CORE API

Calling core API features.
``` js
    const = require('@codeinahat/auth/core')
```

### Hashing password
Thesse feature takes in an user password and an option hashing algorithm. If not algorithm is provided it will default to SHA256.

``` js
    // DO NOT PASS SECOND ARGUMENT IF YOU WISH TO USE SHA256
    const result = core.hashPassword('PASSWORD GOES HERE', 'OPTIONAL ALGORITHM GOES HERE')

    console.log(result)
    /**
     * WILL LOG
     * {
     *      salt: 'HEX value of random bytes',
     *      hashed_passeword: 'HEX value of hashed password'
     * }
```


