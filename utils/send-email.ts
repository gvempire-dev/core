import sgMail from '@sendgrid/mail';
import '../env';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

type EmailConfig = {
  to?: string;
  from?: string;
  subject?: string;
  text: any;
};

// eslint-disable-next-line no-undef
type SendEmail = (config: EmailConfig) => Promise<any>;

export const sendEmail: SendEmail = async ({
  to,
  from,
  subject,
  text,
}) =>
  sgMail
    .send({
      to: to || 'team@gvempire.dev',
      from: from || 'team@gvempire.dev',
      replyTo: from || 'team@gvempire.dev',
      subject: subject
        ? '[gvempire.dev]' + subject
        : `[gvempire.dev] | from the Empire`,
      text,
    })
    .then(() => console.log('Email sent successfully!'));

export default sendEmail;

// export default (config: EmailConfig) =>
//   console.log('Email sent successfully!' + JSON.stringify(config));
