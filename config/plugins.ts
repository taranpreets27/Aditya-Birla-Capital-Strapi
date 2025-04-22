module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          s3Options: {
            credentials: {
              accessKeyId: env("AWS_ACCESS_KEY_ID"),
              secretAccessKey: env("AWS_ACCESS_SECRET"),
            },
            region: env("AWS_REGION"),
            params: {
              ACL: env("AWS_ACL", "public-read"),
              signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
              Bucket: env("AWS_BUCKET"),
            },
          },
        },
        sizeLimit: 5 * 1024 * 1024,
        actionOptions: {
          upload: {},
          delete: {},
          uploadStream: {},
        },
        },
    },

    graphql: {
        config: {
          defaultLimit: 50, // Set default limit (adjust as needed)
          maxLimit: 1000, // Set a maximum limit (optional)
          v4ComptabilityMode: true
        },
      },

    // ...
  });
  