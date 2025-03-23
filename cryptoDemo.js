import crypto from 'crypto';

//creatrHash
const hash = crypto.createHash('sha256');
hash.update('password1234');
console.log(hash.digest('hex'));

crypto.randomBytes(16, (err, buf) => {
    if (err) throw err;
    console.log(buf.toString('hex'));
});

// creteCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encryted = cipher.update('Hello, this is a secret message', 'utf8', 'hex');
encryted += cipher.final('hex');
console.log(encryted);
