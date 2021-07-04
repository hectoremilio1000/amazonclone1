import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Test() {
  return (
    <SafeAreaView>
      <Text>Hola</Text>
      <View>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
    </SafeAreaView>
  )
}
