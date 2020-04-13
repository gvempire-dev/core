import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import sendEmail from '../../utils/send-email';

type ContactBody = {
  name: string;
  email: string;
  phone: number | string;
  message: string;
};

const vaildateReq = ({
  name,
  email,
  phone,
  message,
}: ContactBody): string | null => {
  if (
    !name ||
    typeof name !== 'string' ||
    name.length <= 0 ||
    name.length > 24
  ) {
    return 'Name is not valid.';
  }

  if (
    !email ||
    typeof email !== 'string' ||
    email.length <= 0 ||
    !email.includes('@') ||
    !email.includes('.')
  ) {
    return 'Email is not valid.';
  }

  if (
    !phone ||
    typeof phone !== 'string' ||
    phone.length <= 0 ||
    phone.length > 20
  ) {
    return 'Phone is not valid.';
  }

  if (
    !message ||
    typeof message !== 'string' ||
    message.length <= 0 ||
    message.length > 248
  ) {
    return 'Message is not valid.';
  }

  return null;
};

const contactRequest: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const {
    body: { name, email, phone, message },
  } = req;

  const errors = vaildateReq({ name, email, phone, message });

  if (errors) {
    return res.status(500).send({ message: errors });
  }

  try {
    await sendEmail({
      subject: `[${name}] | Contact Form Submission`,
      text:
        `Someone has submitted a contact form request \n\n` +
        `Name: ${name} \n` +
        `Email: ${email} \n` +
        `Phone: ${phone} \n\n` +
        `\t "${message}" \n`,
    });

    return res.status(200).send({
      message: 'Your request has been successfully submitted',
    });
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .send({ message: 'There was an error submitting your request.' });
  }
};

export default contactRequest;
