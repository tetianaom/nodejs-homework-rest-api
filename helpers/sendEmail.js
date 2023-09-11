const ElasticEmail = require("@elasticemail/elasticemail-client");

require("dotenv").config();

const { ELASTIC_API_KEY, EMAIL_FROM } = process.env;

const defaultClient = ElasticEmail.ApiClient.instance;

const { apikey } = defaultClient.authentications;
apikey.apiKey = ELASTIC_API_KEY;

const api = new ElasticEmail.EmailsApi();

const sendEmail = (config) => {
  return new Promise((resolve, reject) => {
    api.emailsPost(
      ElasticEmail.EmailMessageData.constructFromObject({
        Recipients: [new ElasticEmail.EmailRecipient(config.to)],
        Content: {
          Body: [
            ElasticEmail.BodyPart.constructFromObject({
              ContentType: "HTML",
              Content: config.html,
            }),
          ],
          Subject: config.subject,
          From: EMAIL_FROM,
        },
      }),
      (err, data, _response) => {
        if (err) {
          return reject(err);
        }

        resolve(data);
      }
    );
  });
};

module.exports = sendEmail;
