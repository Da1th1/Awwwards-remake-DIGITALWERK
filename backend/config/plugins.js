module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_S3_BUCKET'),
        },
        // Optional: custom endpoint for S3-compatible providers (e.g., Cloudflare R2, MinIO)
        endpoint: env('AWS_S3_ENDPOINT'),
        s3ForcePathStyle: env.bool('AWS_S3_FORCE_PATH_STYLE', false),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
      breakpoints: {
        large: 1000,
        medium: 750,
        small: 500,
        thumbnail: 245,
      },
    },
  },
});
