import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};

const slides = [
  {
    id: '1',
    image: require('../../Images/Shoppingonline.png'),
    title: 'Selamat Datang!',
    subtitle: 'Dengan Bayur berbelanja sayur menjadi lebih mudah',
  },
  {
    id: '2',
    image: require('../../Images/Gardening.png'),
    subtitle: 'Dapatkan sayur dengan kualitas terbaik',
  },
  {
    id: '3',
    image: require('../../Images/Savetime.png'),
    subtitle: 'Mudah dan praktis',
  },
];

const Slide = ({item}) => {
  return (
    <View style={{height: '75%', width,alignItems: 'center',justifyContent:'space-between',paddingTop:'25%'}}>
    <Text style={styles.title}>{item?.title}</Text>
      <Image
        source={item?.image}
        style={{ resizeMode: 'contain'}}
      />
      <View>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          paddingBottom:65,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: '#68BB45',
                  width: 26,
                  height:10,
                  borderRadius:5
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50,alignItems:'center'}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace('Login')}>
                <Text style={{fontWeight: '700', fontSize: 14,color:COLORS.white}}>
                  Mulai Sekarang
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row',justifyContent:'space-between',marginHorizontal:'10%'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 15,
                    color: COLORS.primary,
                  }}>
                  Lewati
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 15,
                    color:'#68BB45'
                  }}>
                  Lanjut
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.white} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.primary,
    fontSize: 20,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: COLORS.primary,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 3,
    borderRadius: 5,
  },
  btn: {
    flex:1,
    height:35,
    width:207,
    borderRadius: 12,
    backgroundColor: '#68BB45',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnboardingScreen;