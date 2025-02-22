import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { VariableService } from '../variable.service';

@Injectable()
export class CheckTenVariableInterceptor implements NestInterceptor {
  constructor(private readonly service: VariableService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const { body } = context.switchToHttp().getRequest();
    const { chapterId } = body;
    const { total } = await this.service.countTotalVariableInChapter(chapterId);
    if (Number(total) === 10) {
      throw new BadRequestException('Phần này đã đủ 10 từ vựng!');
    }

    return next.handle().pipe();
  }
}
