import Icon from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import intro from '../../services/intro.json';
import styles from './styles';

export default function Prevention() {
  const [ref,setRef] = useState(undefined);
  return (
    <SafeAreaView style={styles.container}>
      <AppIntroSlider
        ref={ref => setRef(ref)}
        keyExtractor={item => item.key}
        data={intro}
        showSkipButton={true}
        showPrevButton={true}
        onDone={() => ref.goToSlide(0)}
        renderItem={({ item }) => (
          <View style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
            <Text style={styles.title}>{item.title}</Text>
            {/* <Image style={styles.image} source={item.image} /> */}
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )}
        renderSkipButton={() => (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-code-working"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        )}
        renderPrevButton={() => (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-arrow-round-back"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        )}
        renderNextButton={() => (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-arrow-round-forward"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        )}
        renderDoneButton={() => (
          <View style={styles.buttonCircle}>
            <Icon
              name="md-code-working"
              color="rgba(255, 255, 255, .9)"
              size={24}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
