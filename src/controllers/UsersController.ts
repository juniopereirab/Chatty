import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {

    async create(req: Request, res: Response): Promise<Response> {
        const {email} = req.body;

        try {
            const usersService = new UsersService();
            const user = await usersService.create(email);

            return res.status(200).json(user);
        } catch (error) {
            return res.status(400).json({error});
        }
    }
}

export { UsersController };