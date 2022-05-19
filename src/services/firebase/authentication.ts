import admin from './firebaseAdmin';

export const isAuthenticated = async (token: string) => {
  try {
    const user = await admin.auth().verifyIdToken(token);
    if (user.uid) return { authenticated: true, user: user };
    return { authenticated: false, user: null };
  } catch (error) {
    return { authenticated: false, user: null };
  }
};
