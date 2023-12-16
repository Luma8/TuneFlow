import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

interface prop {
  children: ReactNode;
}

const Keyboard: React.FC<prop> = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default Keyboard;
