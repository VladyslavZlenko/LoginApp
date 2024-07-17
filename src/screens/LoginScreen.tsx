import React from 'react';
import {
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/Navigation.tsx';
import {loginSchema} from '../validation/loginSchema';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

type FormData = {
  email: string;
  password: string;
};

const LoginScreen: React.FC<Props> = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: FormData): void => {
    Alert.alert(
      'Your login data',
      `Email: ${data.email}\nPassword: ${data.password}`,
      [
        {
          text: 'Reset form',
          onPress: () => reset(),
          style: 'cancel',
        },
        {text: 'OK'},
      ],
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 32,
      backgroundColor: '#FFFFFF',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 24,
      textAlign: 'center',
    },
    input: {
      marginBottom: 16,
      backgroundColor: '#FFFFFF',
    },
    button: {
      paddingVertical: 5,
      marginTop: 10,
    },
    buttonLabel: {
      fontSize: 18,
    },
    errorText: {
      color: '#B3261E',
      position: 'absolute',
      bottom: 2,
      fontSize: 12,
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Email"
              mode="outlined"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
              error={!!errors.email}
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
      </View>
      <View>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Password"
              mode="outlined"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
              error={!!errors.password}
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
      </View>
      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
        labelStyle={styles.buttonLabel}>
        Login
      </Button>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
