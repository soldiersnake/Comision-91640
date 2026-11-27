import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, RADIUS, SPACING } from '../constants/theme'

type Props = {
    name: string;
    role: string;
    image: string;
    isActive?: boolean;
};

const ProfileCard = ({name, role, image, isActive= true} : Props) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.avatar} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>


        <View style={[styles.badge, isActive ? styles.active : styles.inactive]}>
            <Text style={[styles.badgeText, isActive ? styles.active : styles.inactiveText]}>
                {isActive ? 'Activo' : 'Inactivo'}
            </Text>
        </View>

      </View>
    
    </View>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.border,
  },
  info: {
    marginLeft: SPACING.md,
    flex: 1,
  },
  name: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  role: { fontSize: 14, color: COLORS.textLight, marginTop: 2 },
  //estilos badged
  badge: {
    alignSelf: 'flex-start',
    marginTop: SPACING.sm,
    paddingHorizontal: 10,
    paddingVertical: SPACING.xs,
    borderRadius: RADIUS.pill,
  },
  badgeText: { fontSize: 12, fontWeight: '600' },
  active: { backgroundColor: COLORS.success },
  inactive: { backgroundColor: COLORS.danger },
  activeText: { color: COLORS.successText },
  inactiveText: { color: COLORS.dangerText },
});