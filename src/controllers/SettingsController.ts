import { Request, Response } from 'express';
import { SettingsService } from '../services/SettingsService';

class SettingsController {

    async create(req: Request, res: Response): Promise<Response>{
        const {chat, username} = req.body;
        try {
            const settingsService = new SettingsService();
            const settings = await settingsService.create({chat, username});

            return res.status(200).json(settings);
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
        
    }
}

export { SettingsController }