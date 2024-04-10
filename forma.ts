import { error } from "console";

 export class RegistrationForm {
       private static email: string;
       private static password: string;
       private static age: number;
       private static termsAgrement: boolean = false;
       private static registered: boolean = false;
    
     static get isRegistered(): boolean{
        return this.registered;
    }

    static setEmail(email: string): void {
        if (email.includes("@") && email.includes(".")) {
            this.email = email;
        } else {
            throw new error("invalid email format");
        }
    }

    static setPassword(password: string): void {
        if (password.length>= 8 && /\d/.test(password)) {
            this.password = password;
        } else {
            throw new error("Password must be at least 8 chracters long and contain at last one digit");
        } 
    }

    
}