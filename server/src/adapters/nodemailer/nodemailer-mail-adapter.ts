import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '1f2bcd96311083',
        pass: '9d3e8888cb04abTEST'
    }
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
     await transport.sendMail({
         from: 'Equipe Feedget <suporte@feedget.com>',
         to: 'Diego Fernandes <diego.schell.f@gmail.com>',
         subject,
         html: body
     })
    };
}