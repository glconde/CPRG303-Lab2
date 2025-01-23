// app/index.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';
import fruits from "../components/Fruit";

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fruits</Text>
      <View style={styles.buttonContainer}>
        {fruits.map((fruit, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => router.push(`/${fruit.toLowerCase()}`)}
            style={styles.button}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>{fruit}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    width: '80%',  // Ensures all buttons have the same width
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Index;
