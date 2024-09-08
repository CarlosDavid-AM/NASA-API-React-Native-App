import { FC } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { PostImage as PostImageTypes } from '../../types';
import PostImage from '../PostImage';

const LastFiveDyasImages: FC<{ postImages?: PostImageTypes[] }> = ({ postImages }) => {

  return (
    <View style={styles.container} >
      <Text style={styles.title}> Last 5 Days </Text>
      <ScrollView style={styles.content} >
        {postImages?.map((postImage) => (
          <PostImage key={`post-image-${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title:{
    color: '#fff',
    fontSize: 16,
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 24,
  },
});

export default LastFiveDyasImages;
