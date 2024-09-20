import {StyleSheet, Text, View} from "react-native";

export const ExerciseListItem = ({item}) => {
    return (
        <>
            <View style={styles.exerciseContainer}>
                <Text style={styles.exerciseName}>{item.name}</Text>
                <Text style={styles.exerciseSubtitle}>
                    {item.muscle?.toUpperCase()} | {item.equipment?.toUpperCase()}
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    exerciseContainer: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        gap: 5,
    },
    exerciseName: {
        fontSize: 20,
        fontWeight: 500,
    },
    exerciseSubtitle: {
        color: 'dimgray',
    },
});