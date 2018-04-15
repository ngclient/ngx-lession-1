export class User {
    ID: number;
    Username: string;
    Password: string;
    RoleID: number;
    constructor(data?: IUser) {
       this.ID = data.ID;
       this.Username = data.Username;
       this.Password = data.Password;
       this.RoleID = data.RoleID;
    }
}

export interface IUser {
    ID: number;
    Username: string;
    Password: string;
    RoleID: number;
}
