// determine if in production state
const isProduction = process.env.NODE_ENV === 'production';

// use local .env if not in production
if (!isProduction) {
  require('dotenv').load();
}
