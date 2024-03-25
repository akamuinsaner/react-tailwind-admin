import { Controller, Get, UseInterceptors, Query } from '@nestjs/common';
import { UnsplashInterceptor } from './unsplash.interceptor';
import { UnsplashService } from './unsplash.service';

@Controller('unsplash')
@UseInterceptors(UnsplashInterceptor)
export class UnsplashController {
    constructor(private unsplashService: UnsplashService) {}
    @Get('list')
    async list(@Query('page') page, @Query('perPage') perPage) {
        return this.unsplashService.listAll({
            page,
            perPage,
        });
    }
}
