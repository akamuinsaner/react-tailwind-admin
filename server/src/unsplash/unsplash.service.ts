import { Injectable } from '@nestjs/common';
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';

console.log(process.env.UNSPLASH_ACCESS_KEY);
@Injectable()
export class UnsplashService {
    host = 'https://api.unsplash.com/';

    unsplashApi = createApi({
        accessKey: process.env.UNSPLASH_ACCESS_KEY,
        fetch: nodeFetch,
    });
    listAll(params) {
        return this.unsplashApi.photos.list(params);
    }
}
