// screens/ElectiAssist.js
import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ElectiAssist = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateDots = () => {
      Animated.loop(
        Animated.stagger(300, [
          Animated.sequence([
            Animated.timing(dot1, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(dot1, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }),
          ]),
          Animated.sequence([
            Animated.timing(dot2, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(dot2, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }),
          ]),
          Animated.sequence([
            Animated.timing(dot3, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(dot3, {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }),
          ]),
        ])
      ).start();
    };
    animateDots();
  }, [dot1, dot2, dot3]);

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <View style={styles.content}>
        <Image source={require('../assets/images/logoElectiAssist.png')} style={styles.Imagelogo} />
        <View style={styles.titleContainer}>
          <Text style={[styles.title, styles.electi]}>Electi</Text>
          <Text style={[styles.title, styles.assist]}> Assist</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.dotContainer}>
          <Animated.View style={[styles.dot, { opacity: dot1 }]} />
          <Animated.View style={[styles.dot, { opacity: dot2 }]} />
          <Animated.View style={[styles.dot, { opacity: dot3 }]} />
        </View>
        {/* Botón de Flecha Estilizada */}
        <TouchableOpacity style={styles.arrowButton} onPress={() => navigation.navigate('IniciarSesion')}>
          <Icon name="arrow-forward-ios" size={24} color="#435058" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#435058',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    marginTop: 64,
    alignItems: 'center',
  },
  logo: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 52,
    position: 'absolute',
    top: 200,
    left: -20,
  },
  electi: {
    color: '#42F59E',
    position: 'absolute',
    top: 200,
    left: -140,
  },
  assist: {
    color: '#FFFFFF',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
  },
  dotContainer: {
    flexDirection: 'row',
    marginRight: 16,
    display: 'absolute',
    top: 10,
    right: -25,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#42F59E',
  },
  Imagelogo: {
    width: 400,
    height: 400,
    display: 'relative',
    top: 0,
    left: 0,
  },
  arrowButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    display: 'absolute',
    top: -60,
    right: 40
  },
});

export default ElectiAssist;
