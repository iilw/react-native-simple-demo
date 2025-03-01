import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  ImageProps,
  StyleSheet,
  TextProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';

// Constants
const ANIMATION_CONFIG: WithTimingConfig = {
  duration: 300,
};

const LAYOUT = {
  BUTTON_WIDTH: 93,
  TAB_OFFSET: 16,
  CONTENT_HEIGHT: 49,
  ICON_SIZE: 18,
  BORDER_RADIUS: 16,
};

const COLORS = {
  ACTIVE_BG: '#333',
  ACTIVE_TEXT: '#fff',
  INACTIVE_TEXT: '#000',
  DEFAULT_ACTIVE_TINT: 'blue',
};

// Types
interface AnimationBarProps {
  activeIndex: number;
}

interface TabBarLabelProps extends TextProps {
  focused: boolean;
}

// Components
function TabBarAnimationActive({activeIndex}: AnimationBarProps) {
  const translateX = useAnimatedStyle(() => ({
    transform: [{
      translateX: withTiming(
        activeIndex * LAYOUT.BUTTON_WIDTH + LAYOUT.TAB_OFFSET,
        ANIMATION_CONFIG,
      ),
    }],
  }), [activeIndex]);

  return (
    <Animated.View
      style={[styles.animationBar, translateX]}
    />
  );
}

function TabBarLabel({
  focused,
  style,
  children,
  ...rest
}: TabBarLabelProps) {
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{
      translateX: withTiming(focused ? 12 : 0, ANIMATION_CONFIG),
    }],
    opacity: withTiming(focused ? 1 : 0, ANIMATION_CONFIG),
  }), [focused]);

  return (
    <Animated.Text
      style={[
        {color: focused ? COLORS.ACTIVE_TEXT : COLORS.INACTIVE_TEXT},
        animatedStyles,
        style,
      ]}
      {...rest}>
      {children}
    </Animated.Text>
  );
}

export function TabBarIcon({focused, color, size, ...image}: TabBarIconProps) {
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withTiming(focused ? 1 : 1.5, ANIMATION_CONFIG),
      },
      {
        translateX: withTiming(focused ? -size : 0, ANIMATION_CONFIG),
      },
    ],
  }), [focused, size]);

  return (
    <Animated.Image
      {...image}
      style={[
        styles.icon,
        {width: size, height: size},
        animatedStyles,
        image.style,
      ]}
    />
  );
}

export function TabBar({
  insets,
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) {
  return (
    <View
      style={[
        styles.container,
        {
          height: LAYOUT.CONTENT_HEIGHT + insets.bottom,
          paddingBottom: insets.bottom,
        },
      ]}>
      <TabBarAnimationActive activeIndex={state.index} />
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = typeof options.tabBarLabel === 'string'
            ? options.tabBarLabel
            : options.title ?? route.name;

          const focused = state.index === index;
          const iconColor = options.tabBarActiveTintColor ?? COLORS.DEFAULT_ACTIVE_TINT;

          const Icon = options.tabBarIcon?.({
            focused,
            color: iconColor,
            size: LAYOUT.ICON_SIZE,
          });

          const labelElement = (
            <TabBarLabel
              focused={focused}
              style={[
                options.tabBarLabelStyle,
                {color: focused ? COLORS.ACTIVE_TEXT : COLORS.INACTIVE_TEXT},
              ]}>
              {label}
            </TabBarLabel>
          );

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={styles.tabButton}>
              {Icon ? (
                <>
                  {Icon}
                  <View>{labelElement}</View>
                </>
              ) : (
                labelElement
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export interface TabBarIconProps extends ImageProps {
  focused: boolean;
  color: string;
  size: number;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingHorizontal: LAYOUT.TAB_OFFSET,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: LAYOUT.BORDER_RADIUS,
  },
  animationBar: {
    position: 'absolute',
    width: LAYOUT.BUTTON_WIDTH,
    height: 38,
    left: 0,
    top: 12,
    backgroundColor: COLORS.ACTIVE_BG,
    borderRadius: LAYOUT.BORDER_RADIUS,
  },
  icon: {
    position: 'absolute',
  },
});
