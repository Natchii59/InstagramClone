import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Stories from './components/Stories';

export default function App() {
  return (
    <SafeAreaView>
      <Header />
      <Stories />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
