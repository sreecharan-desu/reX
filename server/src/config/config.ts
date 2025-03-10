import dotenv from 'dotenv';

dotenv.config();

const isDevelopment = process.env.NODE_ENV === 'development';

export const CONFIG = {
    // Server
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 5000,
    API_VERSION: process.env.API_VERSION || 'v1',
    
    // Database
    MONGODB_URI: process.env.MONGODB_URI,
    
    // Security
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
    
    // CORS
    CORS_ORIGIN: isDevelopment 
        ? [
            'http://localhost:5173',
            'http://localhost:5000',
            'http://127.0.0.1:5173',
            'http://127.0.0.1:5000'
          ]
        : [
            'https://rex-beige.vercel.app',
            'https://rex-api-two.vercel.app'
          ],
    
    // Rate Limiting
    RATE_LIMIT_ENABLED: process.env.RATE_LIMIT_ENABLED === 'true',
    RATE_LIMIT_WINDOW: parseInt(process.env.RATE_LIMIT_WINDOW || '900000'),
    RATE_LIMIT_MAX: parseInt(process.env.RATE_LIMIT_MAX || '5'),
    
    // Features
    ENABLE_SWAGGER: process.env.ENABLE_SWAGGER === 'true',
}; 