import { StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import fetchApi from '../../utils/fetch';
import { useEffect, useState } from 'react';
import TodaysImages from '../../components/TodaysImages';
import { PostImage } from '../../types';
import { format, sub } from 'date-fns';
import LastFiveDyasImages from '../../components/LastFiveDyasImages';

const Home = () => {
  const [todaysImages, setTodaysImages] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await fetchApi();
        setTodaysImages(todayImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImages({});
      }
    };

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const todayDays = format(date, 'yyyy-MM-dd');
        const fiveDaysAgoDate = format( sub(date, {days: 5}),'yyyy-MM-dd');

        const lastFiveDaysImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todayDays}`);

        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error);
      }
    };

    loadTodayImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);

  return (
    <View style={styles.container} >
      <Header />
      <TodaysImages {...todaysImages} />
      <LastFiveDyasImages postImages={lastFiveDaysImages} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,93,255)',
  },
});

export default Home;
