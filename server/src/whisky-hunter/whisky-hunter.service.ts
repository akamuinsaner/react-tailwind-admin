import { Injectable } from '@nestjs/common';

@Injectable()
export class WhiskyHunterService {
    async list() {
        const response = await fetch(
            `https://whiskyhunter.net/api/distilleries_info/`,
        );
        const data = await response.json();
        return data;
    }
}
