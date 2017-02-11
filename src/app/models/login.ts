export interface ILogin {
    userName: string;
    password: string;
    rememberMe: boolean;
}

export class Login implements ILogin{
    constructor (
        public userName: string,
        public password: string,
        public rememberMe: boolean
    ) {}
}

export interface IRegister{
    userName: string;
    password: string;
    confirmPassword: string;
}

export class Register implements IRegister{
    constructor (
        public userName: string,
        public password: string,
        public confirmPassword: string
    ) {}
}