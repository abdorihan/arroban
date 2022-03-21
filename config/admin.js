module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f1930153699c3648992dd7f45ed62568'),
  },
});
