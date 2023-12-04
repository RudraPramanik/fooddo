import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import pages from './page.style';
import uidata from '../constants/uidata';
import HomeHeader from '../components/HomeHeader';
import CategoryList from '../components/CategoryList';
import ChoiceList from '../components/ChoiceList';
import Headers from '../components/Headers';
import NearbyRestaurants from '../components/Shimmers/NearbyRestaurants';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);
  console.log(selectedChoice);

  return (
    <SafeAreaView>
      <View style={pages.viewOne}>
        <View style={pages.viewTwo}>
          <HomeHeader />
          <ScrollView
            style={{ borderBottomEndRadius: 30, borderBottomStartRadius: 30 }}
            showsVerticalScrollIndicator={false}
          >
            <CategoryList
              setSelectedCategory={setSelectedCategory}
              setSelectedSection={setSelectedSection}
              setSelectedValue={setSelectedValue}
            />
            <ChoiceList
              setSelectedChoice={setSelectedChoice}
              setSelectedSection={setSelectedSection}
            />
            <View>
              <Headers heading="nearby restaurants" />
              <NearbyRestaurants />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
