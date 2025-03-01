import {Image, Text, View, StyleSheet, TextProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const images = {
  xing: require('../../../assets/images/11.五角星.png'),
  avatar: require('../../../assets/images/13.头像1.png'),
  avatar2: require('../../../assets/images/14.头像2.png'),
  avatar3: require('../../../assets/images/15.头像3.png'),
  cover: require('../../../assets/images/12.课程封面.png'),
};

export function CourseBanner() {
  return (
    <View style={[styles.courseBannerContainer]}>
      <View style={styles.courseBannerHeader}>
        <Image source={images.xing} style={styles.courseBannerHeaderIcon} />
        <Text style={styles.courseBannerHeaderTitle}>新课预约</Text>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.8}}
        colors={['#F8D0D0', '#FFFFFF']}
        style={{
          borderRadius: 16,
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: 'white',
        }}>
        <View style={styles.courseBanner}>
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
                paddingVertical: 4,
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'semibold',
                }}>
                C端体验设计全能班
              </Text>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                <TagItem>体验设计</TagItem>
                <TagItem>交互设计</TagItem>
                <TagItem>视觉运营</TagItem>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 12,
                  justifyContent: 'space-between',
                }}>
                <MoenyLabel value={4680} />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <AvatarGroup
                    data={[images.avatar, images.avatar2, images.avatar3]}
                    size={20}
                  />
                  <Text style={{color: '#E6933B', fontSize: 12, marginLeft: 6}}>
                    87
                  </Text>
                  <Text style={{color: '#999', fontSize: 12}}>人在学</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

function MoenyLabel({value, size = 16}: {value: number; size?: number}) {
  const color = 'red';
  return (
    <View style={{flexDirection: 'row', alignItems: 'flex-end', gap: 2}}>
      <Text style={{color, fontSize: size * 0.85}}>¥</Text>
      <Text style={{color, fontSize: size}}>{value.toFixed(1)}</Text>
    </View>
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
  },
  courseBanner: {
    paddingTop: 25,
    paddingBottom: 16,
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
    zIndex: 10,
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
