/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  ImageBackground,
  ImageProps,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CourseBanner} from './course-banner';
import LinearGradient from 'react-native-linear-gradient';

const imageBase = '../../../assets/images';

const images = {
  headerBg: require(imageBase + '/3.背景图.png'),
  headerLogo: require(imageBase + '/1.Logo.png'),
  searchIcon: require(imageBase + '/2.搜索图标.png'),
  banner: {
    left: require(imageBase + '/4.基础课程.png'),
    right: require(imageBase + '/5.知识库.png'),
  },
  quickActions: {
    1: require(imageBase + '/6.交互设计.png'),
    2: require(imageBase + '/7.UI设计.png'),
    3: require(imageBase + '/8.体验设计.png'),
    4: require(imageBase + '/9.产品经理.png'),
    5: require(imageBase + '/10.其他拓展.png'),
  },
  xing: require(imageBase + '/11.五角星.png'),
  zuixin: require(imageBase + '/16.最新知识库.png'),
  article: {
    1: require(imageBase + '/17.知识库1.png'),
    2: require(imageBase + '/18.知识库2.png'),
    3: require(imageBase + '/19.知识库3.png'),
  },
};

function App(): React.JSX.Element {
  const dimensions = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const safePadding = '5%';

  return (
    <View style={[{flex: 1}]}>
      <StatusBar
        barStyle="light-content"
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={{flex: 1}}>
        <ImageBackground source={images.headerBg}>
          <View
            style={{
              height: 144 + 16,
              paddingTop: insets.top,
              paddingHorizontal: safePadding,
              paddingBottom: 16,
            }}>
            <View style={styles.headerContent}>
              <Image
                source={images.headerLogo}
                style={styles.headerContentIcon}
              />
              <View style={styles.headerContentSearch}>
                <Image
                  source={images.searchIcon}
                  style={styles.headerContentSearchIcon}
                />
                <TextInput
                  placeholder="2025最新Figma课程"
                  style={styles.headerContentSearchInput}
                />
                <TouchableOpacity style={styles.headerContentSearchEnter}>
                  <Text style={styles.headerContentSearchEnterText}>
                    嗖一下
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            // height: 1000,
            // backgroundColor: 'blue',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            padding: safePadding,
            transform: [{translateY: -16}],
            gap: 24,
            paddingTop: 16 + 16,
          }}>
          <View style={styles.bannersContainer}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{y: 0, x: 1}}
              colors={['#9ACEF9', '#FFFFFF']}
              style={{flex: 1, borderRadius: 16}}>
              <View style={styles.bannerItem}>
                <Text style={styles.bannerItemTitle}>基础课程</Text>
                <Text style={styles.bannerItemSubtitle}>基础课程</Text>
                <Image
                  source={images.banner.left}
                  style={styles.bannerItemImage}
                />
              </View>
            </LinearGradient>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{y: 0, x: 1}}
              colors={['#9AE6F9', '#FFFFFF']}
              style={{flex: 1, borderRadius: 16}}>
              <View style={styles.bannerItem}>
                <Text style={styles.bannerItemTitle}>基础课程</Text>
                <Text style={styles.bannerItemSubtitle}>基础课程</Text>
                <Image
                  source={images.banner.right}
                  style={styles.bannerItemImage}
                />
              </View>
            </LinearGradient>
          </View>
          <View style={styles.quickActionContainer}>
            <QuickAction
              label="交互设计"
              iconProps={{source: images.quickActions['1']}}
            />
            <QuickAction
              label="UI设计"
              iconProps={{source: images.quickActions['2']}}
            />
            <QuickAction
              label="体验设计"
              iconProps={{source: images.quickActions['3']}}
            />
            <QuickAction
              label="产品经理"
              iconProps={{source: images.quickActions['4']}}
            />
            <QuickAction
              label="其他拓展"
              iconProps={{source: images.quickActions['5']}}
            />
          </View>
          <CourseBanner />
          <View style={styles.articleListContainer}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                知识库大全
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#999',
                  }}>
                  查看更多
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{backgroundColor: 'white', borderRadius: 16, padding: 16}}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{paddingVertical: 16, marginTop: -16}}>
              <ImageBackground
                source={images.zuixin}
                style={{
                  width: 45,
                  height: 34,
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                }}>
                {['最新', '知识库'].map((content, index) => (
                  <Text
                    key={index}
                    style={{
                      fontSize: 12,
                      color: 'white',
                      fontWeight: 'bold',
                      transform: [{translateX: -1}],
                    }}>
                    {content}
                  </Text>
                ))}
              </ImageBackground>
              <View
                style={{flexDirection: 'row', gap: 8, paddingHorizontal: 12}}>
                {['安装设计规范', 'IOS设计规范', '体验设计理念'].map(
                  (content, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{
                        paddingHorizontal: 16,
                        height: 34,
                        backgroundColor: 'white',
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4 10 0 rgba(0, 0, 0, 0.05)',
                      }}>
                      <Text style={{fontWeight: 'semibold'}}>{content}</Text>
                    </TouchableOpacity>
                  ),
                )}
              </View>
            </ScrollView>
            <View
              style={{
                borderWidth: StyleSheet.hairlineWidth,
                borderColor: '#999',
                borderStyle: 'dashed',
              }}
            />
            <View
              style={{
                gap: 16,
                paddingVertical: 16,
              }}>
              {[
                {
                  icon: {
                    source: images.article['1'],
                  },
                  title: '设计师的电脑硬件认识',
                  subtitle: '39篇系列·48个知识点',
                },
                {
                  icon: {
                    source: images.article['2'],
                  },
                  title: '从零开始学习AI插画',
                  subtitle: '18篇系列文·26个知识点',
                },
              ].map((item, index) => {
                return <ArticleItem key={index} {...item} />;
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function ArticleItem({
  icon,
  title,
  subtitle,
}: {
  icon: ImageProps;
  title: string;
  subtitle: string;
}) {
  return (
    <TouchableOpacity
      style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
      <Image
        {...icon}
        style={[
          {
            width: 45,
            height: 45,
            borderRadius: 8,
            backgroundColor: '#00',
          },
          icon.style,
        ]}
      />
      <View style={{flex: 1, flexDirection: 'column', gap: 8}}>
        <Text style={{fontWeight: 'semibold'}}>{title}</Text>
        <Text style={{fontSize: 12, color: '#999'}}>{subtitle}</Text>
      </View>
      <View
        style={{
          backgroundColor: '#333',
          paddingHorizontal: 8,
          paddingVertical: 6,
          borderRadius: 8,
        }}>
        <Text style={{color: 'white', fontSize: 12}}>去学习</Text>
      </View>
    </TouchableOpacity>
  );
}

function QuickAction({
  iconProps,
  label,
}: {
  label: string;
  iconProps: ImageProps;
}) {
  return (
    <TouchableOpacity style={styles.quickAction}>
      <Image {...iconProps} style={[styles.quickActionIcon, iconProps.style]} />
      <Text style={styles.quickActionLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const headerSearchHeight = 45;

const styles = StyleSheet.create({
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerContentIcon: {
    height: 45,
    width: 45,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#eee',
  },
  headerContentSearch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: headerSearchHeight,
    gap: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: headerSearchHeight / 2,
  },
  headerContentSearchIcon: {
    width: 16,
    height: 16,
    // backgroundColor: '#eee',
  },
  headerContentSearchInput: {
    flex: 1,
    // backgroundColor: 'red',
    height: '100%',
  },
  headerContentSearchEnter: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#000',
    borderRadius: headerSearchHeight / 2,
    paddingHorizontal: 12,
    minWidth: 70,
    marginRight: -12 + 4,
  },
  headerContentSearchEnterText: {
    color: 'white',
  },
  bannersContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  bannerItem: {
    flex: 1,
    borderRadius: 16,
    maxWidth: 200,
    // backgroundColor: 'white',
    paddingHorizontal: 16,
    justifyContent: 'center',
    overflow: 'hidden',
    minHeight: 80,
  },
  bannerItemTitle: {
    fontSize: 20,
    fontWeight: 'semibold',
  },
  bannerItemSubtitle: {
    fontSize: 12,
    marginTop: 4,
    color: '#999',
  },
  bannerItemImage: {
    position: 'absolute',
    top: 10,
    right: -132 * 0.3,
    width: 132,
    height: 132,
    transform: [{rotate: '-30deg'}],
  },

  quickActionContainer: {
    flexDirection: 'row',
    marginHorizontal: -16,
  },
  quickAction: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  quickActionIcon: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: 'white',
  },
  quickActionLabel: {
    fontSize: 12,
  },
  articleListContainer: {},
});

export default App;
