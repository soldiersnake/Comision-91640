import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'
import ProfileCard from '../components/ProfileCard'

const ProfileScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Mi perfil</Text>

      <ProfileCard
        name='Ana Gome'
        role='Desarrollador mobile'
        image='https://i.pravatar.cc/150?img=47'      
      />
      <ProfileCard
        name='Juan Lopez'
        role='Desarrollador Typescript'
        image='https://i.pravatar.cc/150?img=12'      
        isActive={false}
      />
      <ProfileCard
        name='Felipe Sanchez'
        role='Desarrollador Go'
        image='https://i.pravatar.cc/150?img=32'      
      />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    paddingTop: 60,
  },
  title: { fontSize: 26, fontWeight: 'bold', color: COLORS.text, marginBottom: 20 },
});