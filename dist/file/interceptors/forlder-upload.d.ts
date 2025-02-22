import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
export declare class FolderUploadInterceptor implements NestInterceptor {
    private readonly destinationPath;
    constructor(destinationPath: string);
    intercept(context: ExecutionContext, next: CallHandler): Promise<any>;
}
