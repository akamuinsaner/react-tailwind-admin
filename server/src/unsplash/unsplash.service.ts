import { Injectable } from '@nestjs/common';
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';

@Injectable()
export class UnsplashService {
    host = 'https://api.unsplash.com/';

    unsplashApi = createApi({
        accessKey: 'Z5_5kUnffjY_Q6aWSkmzeZUB2Otw4PjScAqjGG4NDpM',
        fetch: nodeFetch,
    });
    listAll(params) {
        return this.unsplashApi.photos.list(params);
    }
}
