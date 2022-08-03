import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';
import Feed from './components/Feed';
import Footer from './components/Footer';
import Header from './components/Header';
import Stories from './components/Stories';

export default function App() {
  return (
    <SafeAreaView>
      <Header />

      <ScrollView>
        <Stories />
        <Feed />
      </ScrollView>

      <Footer />

      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
