import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import pages from './page.style';
import uidata from '../constants/uidata';
import HomeHeader from '../components/HomeHeader';
import CategoryList from '../components/CategoryList';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={pages.viewOne}>
        <View style={pages.viewTwo}>
          <HomeHeader />
          <ScrollView
            style={{ borderBottomEndRadius: 30, borderBottomStartRadius: 30 }}
            showsVerticalScrollIndicator={false}
          >
            <CategoryList />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
