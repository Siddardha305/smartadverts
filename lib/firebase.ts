// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD6-GluoLULQH3BiAbuoe4F4za5j0gK6vg",
  authDomain: "smartadverts-7b157.firebaseapp.com",
  projectId: "smartadverts-7b157",
  storageBucket: "smartadverts-7b157.firebasestorage.app",
  messagingSenderId: "928919623768",
  appId: "1:928919623768:web:b847eb20f626b14018d22d",
  measurementId: "G-NE0HZLY33B"
};

// Initialize Firebase (Singleton pattern to prevent re-initialization in Next.js HMR)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Analytics carefully for SSR (Server Side Rendering)
export const analytics = (async () => {
    if (globalThis.window !== undefined) {
        const supported = await isSupported();
        if (supported) {
            return getAnalytics(app);
        }
    }
    return null;
})();

export { app };
