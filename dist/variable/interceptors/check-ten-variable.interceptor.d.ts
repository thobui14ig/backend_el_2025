import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { VariableService } from '../variable.service';
export declare class CheckTenVariableInterceptor implements NestInterceptor {
    private readonly service;
    constructor(service: VariableService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
