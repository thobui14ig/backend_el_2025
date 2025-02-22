import { Module } from '@nestjs/common';
import { VariableService } from './variable.service';
import { VariableController } from './variable.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VariableEntity } from './variable.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VariableEntity])],
  controllers: [VariableController],
  providers: [VariableService],
  exports: [VariableService],
})
export class VariableModule {}
