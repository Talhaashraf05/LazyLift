import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import excerises from  "./assets/data/exercises.json";
import {ExerciseListItem} from "./src/ExerciseListItem";

export default function App() {

  return (
    <View style={styles.container}>
        <FlatList
            data={excerises}
            keyExtractor={item => item.name}
            renderItem={({item}) => <ExerciseListItem item={item} />}
            contentContainerStyle={{gap: 10}}
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding:10,
    paddingTop: 70,
  },
});
