import { AxiosInstance } from "axios";
import { IUser } from "../interfaces/IUser";
import { api } from "../boot/axios";

export class LoginService {
    private api: AxiosInstance;

    constructor() {
        this.api = api
    }

    public async registryUser(user: IUser) {
        const newUser = await this.api.post(`/registrar`, {
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
        const login = await this.api.post(`/login`, {
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