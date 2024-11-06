import { AxiosInstance } from "axios";
import { IUser } from "../interfaces/IUser";
import { api } from "../boot/axios";

export class LoginService {
    private route: string;
    private api: AxiosInstance;

    constructor(route: string) {
        this.route = route;
        this.api = api
    }

    public async registryUser(user: IUser) {
        const newUser = await this.api.post(`${this.route}/registrar`, {
            nome: user.nome,
            email: user.email,
            senha: user.senha
        });
        try {
            return newUser.data;
        } catch (error) {
            return error;
        }
    }

    public async loginUser(email: string, password: string) {
        const login = await this.api.post(`${this.route}/login`, {
            email: email,
            senha: password
        })
        try {
            return login.data;
        } catch (error) {
            return error;
        }
    }
}