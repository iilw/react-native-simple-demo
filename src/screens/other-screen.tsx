import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';

const Screen = () => {
  const route = useRoute();
  return (
    <SafeAreaView>
      <Text>Hello {route.name}</Text>
    </SafeAreaView>
  );
};

export default Screen;
