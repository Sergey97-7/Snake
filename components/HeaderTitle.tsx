import {StyleSheet} from 'react-native';
import {Text} from './Themed';
import Colors from "../constants/Colors";

interface HeaderTitleProps {
  title: string
}

export default function HeaderTitle({title}: HeaderTitleProps) {
  return (
    <Text
      style={styles.getStartedText}
    >
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  getStartedText: {
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    color: Colors.common.header,
  },
});
