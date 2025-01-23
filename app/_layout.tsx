import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="apple" />
      <Stack.Screen name="orange" />
      <Stack.Screen name="mango" />
    </Stack>
  );
}
