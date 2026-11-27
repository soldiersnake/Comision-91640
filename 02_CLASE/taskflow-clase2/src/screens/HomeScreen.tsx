import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, RADIUS, SPACING } from '../constants/theme'
import PrimaryButton from '../components/PrimaryButton'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hola, Ann 😀</Text>
    <Text style={styles.subtitle}>Tenes 3 tareas pendientes</Text>

    <View style={styles.summary}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Pendientes</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Completadas</Text>
        </View>
    </View>

    <View style={styles.empty}>
        <Text style={styles.emptyText}>Acá va a aparecer tu lista de tareas</Text>
      </View>

      <View style={styles.actions}>
        <PrimaryButton title="Nueva tarea" onPress={() => console.log('Nueva tarea')} />
        <PrimaryButton title="Ver perfil" variant="secondary" onPress={() => console.log('Perfil')} />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 20, paddingTop: 60 },
  greeting: { fontSize: 26, fontWeight: 'bold', color: COLORS.text },
  subtitle: { fontSize: 15, color: COLORS.textLight, marginTop: SPACING.xs },
  summary: { flexDirection: 'row', gap: 12, marginTop: SPACING.lg },
  stat: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statNumber: { fontSize: 28, fontWeight: 'bold', color: COLORS.primary },
  statLabel: { fontSize: 13, color: COLORS.textLight },
  empty: {
    flex: 1,
    marginVertical: SPACING.lg,
    borderRadius: RADIUS.md,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: { color: COLORS.textLight },
  actions: { gap: 12, marginBottom: SPACING.md },
});