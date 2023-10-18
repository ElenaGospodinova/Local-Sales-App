import React from 'react';
import { useFormikContext } from 'formik';
import AppButton from './AppButton';

export default function SubmitButton({ title, onPress }) {
  const { handleSubmit } = useFormikContext();

  const handlePress = () => {
    handleSubmit();
    if (onPress && typeof onPress === 'function') {
      onPress();
    }
  };

  return (
    <AppButton  
        title={title}
        onPress={handlePress}
    />
  );
}
