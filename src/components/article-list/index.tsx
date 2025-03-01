import {
  FlatList,
  FlatListProps,
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export interface ArticleListProps<T = any> extends FlatListProps<T> {}
export function ArticleList(props: ArticleListProps) {
  return <FlatList {...props} />;
}

export interface ArticleListItemProps {
  icon: ImageProps;
  title: string;
  subtitle: string;
}
export function ArticleListItem({icon, title, subtitle}: ArticleListItemProps) {
  return (
    <View style={styles.itemContainer}>
      <Image {...icon} style={[styles.itemImage, icon.style]} />
      <View style={styles.itemTitleContent}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemSubtitle}>{subtitle}</Text>
      </View>
      <TouchableOpacity style={styles.itemButton}>
        <Text style={styles.itemButtonText}>去学习</Text>
      </TouchableOpacity>
    </View>
  );
}

export interface ArticleListHeaderProps<T = {title: string}> {
  data: T[];
}
export function ArticleListHeader({data}: ArticleListHeaderProps) {
  return (
    <View style={styles.listHeaderContainer}>
      <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Item
  itemContainer: {
    backgroundColor: 'white',
  },
  itemImage: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },
  itemTitleContent: {},
  itemTitle: {},
  itemSubtitle: {},
  itemButton: {},
  itemButtonText: {},

  // Header
  listHeaderContainer: {},
});
