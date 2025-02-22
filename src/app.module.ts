import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { ChapterEntity } from './chapter/chapter.entity';
import { ChapterModule } from './chapter/chapter.module';
import { EmailModule } from './email/email.module';
import { ExcerciseEntity } from './excercise/excercise.entity';
import { ExcerciseModule } from './excercise/excercise.module';
import { ExcerciseVariableEntity } from './exercise-variable/exercise_variable.entity';
import { ExerciseVariableModule } from './exercise-variable/exercise_variable.module';
import { FileEntity } from './file/file.entity';
import { FileModule } from './file/file.module';
import { GatewayModules } from './gateway/gateway.modules';
import { TopicEntity } from './topic/topic.entity';
import { TopicModule } from './topic/topic.module';
import { UserChapterEntity } from './user-chapter/user-chapter.entity';
import { UserChapterModule } from './user-chapter/user-chapter.module';
import { UserTopic } from './user-topic/user_topic.entity';
import { UserTopicModule } from './user-topic/user_topic.module';
import { UserEntity } from './user/user.entity';
import { UserModule } from './user/user.module';
import { VariableEntity } from './variable/variable.entity';
import { VariableModule } from './variable/variable.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend'),
      exclude: ['/api*'], // Exclude API routes
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '111111',
      database: 'hoctienganh',
      entities: [
        TopicEntity,
        VariableEntity,
        ChapterEntity,
        ExcerciseVariableEntity,
        ExcerciseEntity,
        UserEntity,
        FileEntity,
        UserTopic,
        UserChapterEntity,
      ],
      synchronize: true,
      // logging: true,
    }),
    JwtModule.register({
      secret: 'reset',
    }),
    ScheduleModule.forRoot(),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        return {
          transport: {
            host: 'smtp.gmail.com',
            secure: false,
            auth: {
              user: 'buithanhtho14ig@gmail.com',
              pass: 'zgzlnkwgezezfmuh',
            },
          },
          defaults: {
            from: `"Hoctuvung.online" <buithanhtho14ig@gmail.com>`,
          },
          template: {
            dir: join(__dirname, 'src/templates/email'),
            adapter: new HandlebarsAdapter(),
            options: {
              strict: true,
            },
          },
        };
      },
      inject: [ConfigService],
    }),

    TopicModule,
    VariableModule,
    ExcerciseModule,
    ChapterModule,
    ExerciseVariableModule,
    AuthModule,
    UserModule,
    FileModule,
    UserTopicModule,
    UserChapterModule,
    EmailModule,
    GatewayModules,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
