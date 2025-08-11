import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const hashPass = async (pass: string): Promise<string> =>{ 
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hashedPassword = bcrypt.hashSync(pass, salt);
    
    return hashedPassword;
}

const comparePassword = async (pass: string, hashedPass: string): Promise<boolean> => {
    return await bcrypt.compare(pass, hashedPass);
}


export  {hashPass, comparePassword};