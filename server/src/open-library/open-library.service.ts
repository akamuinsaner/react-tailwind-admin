import { Injectable } from '@nestjs/common';

@Injectable()
export class OpenLibraryService {
    async list(params) {
        console.log(
            `https://openlibrary.org/search.json?${Object.keys(params)
                .map(k => k + '=' + params[k])
                .join('&')}`,
        );
        const response = await fetch(
            `https://openlibrary.org/search.json?${Object.keys(params)
                .map(k => k + '=' + params[k])
                .join('&')}`,
        );
        const data = await response.json();
        return data;
    }
}
