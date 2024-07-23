import {View, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  useDynamicWidth,
  useOrientationChange,
} from 'react-native-core-responsive-screen';
import Login from './Login';

const App = () => {
  const orientation = useOrientationChange();
  const [landscape, setLandscape] = useState(false);
  useEffect(() => {
    if (orientation === 'landscape') {
      setLandscape(true);
    } else {
      setLandscape(false);
    }
  }, [orientation]);

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <View style={{alignItems: 'center', width: useDynamicWidth(100)}}>
        <Login landscape={landscape} />
      </View>
    </SafeAreaView>
  );
};

export default App;
