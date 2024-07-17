import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/Navigation';
import {ProgressBar} from 'react-native-paper';
import {useProgress} from '../hooks/useProgress';

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;

type Props = {
  navigation: SplashScreenNavigationProp;
};

const SplashScreen: React.FC<Props> = ({navigation}) => {
  const progress = useProgress();

  if (progress >= 1) {
    setTimeout(() => navigation.replace('Login'), 0);
  }

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/splash.json')}
        autoPlay
        loop={false}
        style={styles.logo}
      />
      <ProgressBar progress={progress} style={styles.progressBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: '80%',
    height: '80%',
  },
  progressBar: {
    width: 200,
    marginTop: -100,
  },
});

export default SplashScreen;
