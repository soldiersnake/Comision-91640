import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS, RADIUS, SPACING } from '../constants/theme';
import { CATEGORIES, Category, Task } from '../constants/types';

// 📝 NOTA PROFE: un estado por campo (lo que pide la rúbrica: "estado local independiente").
// Para formularios grandes, un único objeto + spread escala mejor (lo vemos en el Ejercicio 2).
export function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Category>('Trabajo'); // 📝 <Category>: sin esto TS infiere string

  // "touched": mostramos errores recién cuando el usuario salió del campo o intentó guardar.
  const [touchedTitle, setTouchedTitle] = useState(false);
  const [touchedDescription, setTouchedDescription] = useState(false);

  // Campo con foco: para cambiar el color del borde mientras se escribe.
  const [focused, setFocused] = useState<'title' | 'description' | null>(null);

  // 📝 Estado DERIVADO: no es un useState, se recalcula en cada render.
  // Guardar "hasError" en otro useState sería estado duplicado (y se desincroniza).
  const titleError = touchedTitle && title.trim().length < 5;
  const descriptionError = touchedDescription && description.trim().length < 10;

  const handleAddTask = () => {
    // Al intentar guardar, marcamos todo como tocado para que aparezcan los errores.
    setTouchedTitle(true);
    setTouchedDescription(true);

    // 📝 Validamos con los valores actuales, NO con titleError: ese se recalcula en el próximo render.
    if (title.trim().length < 5 || description.trim().length < 10) {
      return; // corta la función: no se guarda nada
    }

    const task: Task = {
      title: title.trim(), // 📝 trim(): "     " no cuenta como título
      description: description.trim(),
      category,
      createdAt: new Date(),
    };

    console.log('Tarea creada:', task); // 📝 en la Clase 6 esto pasa a ser un dispatch de Redux
    Alert.alert('Éxito', 'Tarea capturada localmente');

    // 📝 Reset: volvemos al estado inicial. Sin esto, el texto queda en los inputs.
    setTitle('');
    setDescription('');
    setCategory('Trabajo');
    setTouchedTitle(false);
    setTouchedDescription(false);
  };

  return (
    // 📝 behavior="padding" en las dos plataformas: Expo es edge-to-edge en Android
    // y la ventana ya no se achica sola. Sin behavior, el KeyboardAvoidingView NO hace nada.
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={styles.heading}>Nueva tarea</Text>

      <Text style={styles.label}>Título</Text>
      <TextInput
        // 📝 Input CONTROLADO: value viene del estado y onChangeText lo actualiza.
        // Si sacás onChangeText, el teclado escribe pero el input no cambia.
        value={title}
        onChangeText={setTitle}
        onFocus={() => setFocused('title')}
        onBlur={() => {
          setFocused(null);
          setTouchedTitle(true);
        }}
        placeholder="Ej: Estudiar useState"
        autoCapitalize="sentences"
        returnKeyType="next"
        style={[
          styles.input,
          focused === 'title' && styles.inputFocused,
          titleError && styles.inputError, // 📝 el error va último: pisa al borde de foco
        ]}
      />
      {titleError && <Text style={styles.error}>El título debe tener al menos 5 caracteres.</Text>}

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        value={description}
        onChangeText={setDescription}
        onFocus={() => setFocused('description')}
        onBlur={() => {
          setFocused(null);
          setTouchedDescription(true);
        }}
        placeholder="¿Qué hay que hacer?"
        autoCapitalize="sentences"
        multiline // 📝 permite varias líneas (el Enter hace salto de línea)
        style={[
          styles.input,
          styles.multiline,
          focused === 'description' && styles.inputFocused,
          descriptionError && styles.inputError,
        ]}
      />
      {descriptionError && (
        <Text style={styles.error}>La descripción debe tener al menos 10 caracteres.</Text>
      )}

      <Text style={styles.label}>Categoría</Text>
      <View style={styles.categories}>
        {/* 📝 .map sobre un array para dibujar botones. key: identidad única de cada elemento */}
        {CATEGORIES.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setCategory(item)}
            style={[styles.category, category === item && styles.categorySelected]}
          >
            <Text style={[styles.categoryText, category === item && styles.categoryTextSelected]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddTask} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.lg - 4,
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  heading: { fontSize: 26, fontWeight: 'bold', color: COLORS.text, marginBottom: SPACING.md },
  label: { fontSize: 15, fontWeight: '600', color: COLORS.text, marginTop: SPACING.md, marginBottom: 6 },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: RADIUS.sm,
    padding: 12,
    fontSize: 16,
    color: COLORS.text,
  },
  multiline: { height: 100, textAlignVertical: 'top' }, // 📝 textAlignVertical: en Android el texto arranca arriba
  inputFocused: { borderColor: COLORS.primary },
  inputError: { borderColor: COLORS.dangerText },
  error: { color: COLORS.dangerText, fontSize: 13, marginTop: 4 },
  categories: { flexDirection: 'row', gap: SPACING.sm },
  category: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.card,
  },
  categorySelected: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  categoryText: { color: COLORS.text, fontWeight: '500' },
  categoryTextSelected: { color: '#FFFFFF', fontWeight: '700' },
  button: {
    marginTop: SPACING.lg,
    paddingVertical: 15,
    borderRadius: RADIUS.sm,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});
