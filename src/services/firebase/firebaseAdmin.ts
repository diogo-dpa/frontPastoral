import * as admin from 'firebase-admin';
import { getEnvironmentVariable } from '@utility/methods';

const adminCredentials = {
  privateKey: getEnvironmentVariable('FIREBASE_PRIVATE_KEY'),
  clientEmail: getEnvironmentVariable('FIREBASE_CLIENT_EMAIL'),
  projectId: getEnvironmentVariable('FIREBASE_PROJECT_ID')
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(adminCredentials),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  });
}

export default admin;
