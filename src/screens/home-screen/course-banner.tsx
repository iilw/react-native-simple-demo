import {useEffect} from 'react';
import {Image, Text, View, StyleSheet, TextProps} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const images = {
  xing: require('../../../assets/images/11.五角星.png'),
  avatar: require('../../../assets/images/13.头像1.png'),
  avatar2: require('../../../assets/images/14.头像2.png'),
  avatar3: require('../../../assets/images/15.头像3.png'),
  cover: require('../../../assets/images/12.课程封面.png'),
};

export interface CourseBannerProps {}
export function CourseBanner({}: CourseBannerProps) {
  // const opacity = useSharedValue(0);
  //
  // // 在组件挂载时触发动画
  // useEffect(() => {
  //   // scale.value = withTiming(0, {
  //   //   duration: 500, // 动画时长
  //   //   easing: Easing.inOut(Easing.ease), // 缓动函数
  //   // });
  //   opacity.value = withTiming(1, {
  //     duration: 500,
  //     easing: Easing.inOut(Easing.ease),
  //   });
  // }, []); // 空依赖数组表示只在组件挂载时执行
  //
  // const animatedStyle = useAnimatedStyle(
  //   () => ({
  //     opacity: opacity.value,
  //   }),
  //   [],
  // );
  return (
    <Animated.View style={[styles.courseBannerContainer]}>
      <View style={styles.courseBanner}>
        <View style={styles.courseBannerHeader}>
          <Image source={images.xing} style={styles.courseBannerHeaderIcon} />
          <Text style={styles.courseBannerHeaderTitle}>新课预约</Text>
        </View>
        <View style={styles.courseBannerContent}>
          <Image
            source={images.cover}
            style={{
              width: 120,
              height: 90,
            }}
          />
          <View
            style={{
              paddingHorizontal: 16,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'semibold',
              }}>
              C端体验设计全能班
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
              <TagItem>体验设计</TagItem>
              <TagItem>交互设计</TagItem>
              <TagItem>视觉运营</TagItem>
            </View>
            <View>
              <Text>¥4680.0</Text>
              <View style={{flexDirection: 'row'}}>
                <AvatarGroup
                  data={[images.avatar, images.avatar2, images.avatar3]}
                  size={20}
                />
                <Text>87</Text>
                <Text>人在学</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Animated.View>
  );
}

function TagItem(props: TextProps) {
  return (
    <View
      style={{
        backgroundColor: '#eee',
        borderRadius: 4,
        padding: 4,
      }}>
      <Text
        {...props}
        style={[
          {
            fontSize: 12,
            color: '#333',
          },
          props.style,
        ]}
      />
    </View>
  );
}

function AvatarGroup({data, size}: {data: any[]; size: number}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        // 1 + 0.5 * (num - 3)
        marginRight: -(size + (size / 2) * (data.length - 3)),
      }}>
      {data.map((source, index) => (
        <Image
          style={[
            {width: size, height: size},
            {
              transform: [
                {
                  translateX: index * -(size / 2),
                },
              ],
            },
          ]}
          source={source}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  courseBannerContainer: {
    position: 'relative',
    paddingTop: 20,
  },
  courseBanner: {
    paddingVertical: 25,
    // @TODO linter
    backgroundColor: 'white',
    // minHeight: 150,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  courseBannerHeader: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 0,
    left: 16,
    width: '100%',
    // backgroundColor: 'red',
    transform: [{translateY: '-50%'}],
  },
  courseBannerHeaderIcon: {
    width: 40,
    height: 40,
    transform: [{rotate: '-15deg'}],
    // backgroundColor: 'blue',
  },
  courseBannerHeaderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    transform: [{rotate: '-7deg'}, {translateX: -10}],
  },
  courseBannerContent: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
  },
});
