import { TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import Errors from './Errors'

export default function AppFormField(name, ...otherProps) {
    const{setFieldTouched, handleChange, errors, touched} = useFormikContext();
 
    return (
    <>
        <TextInput
            style={styles.textInput}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
            maxLength={45}
            clearButtonMode='always'
            {...otherProps}
         />
              
        <Errors error={errors[name]} visible={touched[name]} />
    </>
  )
}
const styles = StyleSheet.create({
    textInput: {
        flex: 1, 
      },
})