import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UserService } from 'src/user/user.service';

interface ISendEmail {
  to: string;
  subject: string;
  template: string;
  context: any;
}

@Injectable()
export class EmailService {
  constructor(
    private mailServer: MailerService,
    private userService: UserService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async sendEmailCheckRegisterNotUse() {
    const users = await this.userService.getTodayRegisteredUsers();

    for (const user of users) {
      const option = {
        to: user.email,
        subject: `Thông báo tài khoản mới`,
        template: './notification-not-use',
        context: {
          username: user.nickName,
        },
      };
      await this.sendEmail(option);
    }
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async sendEmailUsersNotUseGreater2Day() {
    const users = await this.userService.getUsersNotUseGreater2Day();

    for (const user of users) {
      const option = {
        to: user.email,
        subject: `Thông báo không hoạt động`,
        template: './notification-not-use-2day',
        context: {
          username: user.nickName,
        },
      };
      await this.sendEmail(option);
      user.timeSendEmail = new Date();
      await this.userService.update(user);
    }
  }

  sendEmail({ to, subject, template, context }: ISendEmail) {
    return this.mailServer.sendMail({
      to,
      subject,
      template,
      context,
    });
  }
}
