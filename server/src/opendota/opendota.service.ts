import { Injectable } from '@nestjs/common';

@Injectable()
export class OpendotaService {
    prefix = 'https://api.opendota.com/api';

    async heroStats() {
        const response = await fetch(`${this.prefix}/heroStats`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json;chartset=utf-8',
            },
        });
        const data = await response.json();
        return data;
    }

    async heroes() {
        const response = await fetch(`${this.prefix}/heroes`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json;chartset=utf-8',
            },
        });
        const data = await response.json();
        return data;
    }
}
