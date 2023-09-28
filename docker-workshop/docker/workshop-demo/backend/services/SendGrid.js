import sgMail from '@sendgrid/mail'
import client from '@sendgrid/client';

export default class SendGridService {
    static async sendMail(payload, formType, text, date, time) {
        try {
            sgMail.setApiKey(__vault("SENDGRID").apiKey);

            const messages = [
                {
                    to: payload.email,
                    from: __vault("SENDGRID").senderIdentity,
                    templateId: 'd-0e79b9056216408fbe94e039fbfa9ab5',
                    dynamicTemplateData: {
                        firstName: payload.firstName,
                    },
                },
                {
                    to: __vault("SENDGRID").adminEmail,
                    from: __vault("SENDGRID").senderIdentity,
                    templateId: 'd-b1f2deed07cc47feadfd83c794811126',
                    dynamicTemplateData: {
                        formType: formType.formType,
                        date: date,
                        time: time,
                        firstName: payload.firstName,
                        lastName: payload.lastName,
                        email: payload.email,
                        formDetails: text,
                    },
                }
            ];

            await sgMail.send(messages);

        } catch (error) {
            Felony.log.error(JSON.stringify(error));
            Felony.log.error(`Error sending email to ${payload.email}`);

            throw error;
        }
    }

    static async subscribe(email) {
        try {
            client.setApiKey(__vault("SENDGRID").apiKey);

            const data = {
                "contacts": [
                    {
                        email,
                    }
                ]
            };

            const req = {
                url: `/v3/marketing/contacts`,
                method: 'PUT',
                body: data
            };

            const resp = await client.request(req);
            return resp;
        } catch (error) {
            Felony.log.error(JSON.stringify(error));
            Felony.log.error(`Error sending email to ${email}`);

            throw error;
        }
    }
}