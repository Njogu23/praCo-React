import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from './firebase';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut, 
  createUserWithEmailAndPassword, 
  setPersistence, 
  browserLocalPersistence,
  sendEmailVerification
} from 'firebase/auth'; 
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const configureAuth = async () => {
      try {
        await setPersistence(auth, browserLocalPersistence);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            if (user.emailVerified) {
              setUser(user);
            } else {
              setUser(null);
              toast.info('Please verify your email address.');
            }
          }
          setLoading(false);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error('Error configuring auth persistence:', error.message);
        setLoading(false);
      }
    };

    configureAuth();
  }, []);

  const handleAction = async (actionType) => {
    try {
      if (actionType === 1) {
        // Sign in
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if (user.emailVerified) {
          toast.success('Signed in successfully!');
          window.location.href = "/"; // Redirect after successful sign-in
        } else {
          toast.error('Please verify your email address.');
          await sendEmailVerification(user); // Optionally resend verification email
        }
      } else if (actionType === 2) {
        // Sign up
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Send email verification
        await sendEmailVerification(user);
        toast.success('Signed up successfully! Please check your email for verification.');
        window.location.href = "/"; // Redirect after successful sign-up
      }
    } catch (error) {
      console.log('Auth action error:', error.message);
      toast.error("please check your email or password");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success('Signed out successfully!');
    } catch (error) {
      console.error('Error signing out:', error.message);
      toast.error('Failed to sign out. Please try again.');
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      firstName, setFirstName,
      lastName, setLastName,
      loading, 
      email, setEmail, 
      password, setPassword,
      confirmPassword, setConfirmPassword,
      handleAction, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
