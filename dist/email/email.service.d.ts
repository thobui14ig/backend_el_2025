import { MailerService } from '@nestjs-modules/mailer';
import { UserService } from 'src/user/user.service';
interface ISendEmail {
    to: string;
    subject: string;
    template: string;
    context: any;
}
export declare class EmailService {
    private mailServer;
    private userService;
    constructor(mailServer: MailerService, userService: UserService);
    sendEmailCheckRegisterNotUse(): Promise<void>;
    sendEmailUsersNotUseGreater2Day(): Promise<void>;
    sendEmail({ to, subject, template, context }: ISendEmail): Promise<any>;
}
export {};
