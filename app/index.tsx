import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../constants/colors'

const stats = [
  { label: 'SAVED', value: '128', highlight: false },
  { label: 'DUE TODAY', value: '14', highlight: true },
  { label: 'REVIEWED', value: '842', highlight: false },
]

export default function LibraryScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >

        {/* Top Bar */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingTop: 60,
          paddingBottom: 20,
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Ionicons name="book" size={22} color={colors.accent} />
            <Text style={{
              fontSize: 18,
              fontWeight: '700',
              color: colors.textPrimary,
            }}>
              ReadMind
            </Text>
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
            backgroundColor: colors.surface,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: colors.border,
          }}>
            <Text style={{ fontSize: 16 }}>🔥</Text>
            <Text style={{
              fontSize: 14,
              fontWeight: '600',
              color: colors.textPrimary,
            }}>
              12
            </Text>
          </View>
        </View>

        {/* Stats Row */}
        <View style={{
          flexDirection: 'row',
          gap: 12,
          paddingHorizontal: 20,
          marginBottom: 32,
        }}>
          {stats.map((stat) => (
            <View
              key={stat.label}
              style={{
                flex: 1,
                backgroundColor: colors.surface,
                borderRadius: 12,
                padding: 16,
                borderWidth: 1,
                borderColor: stat.highlight ? colors.accent : colors.border,
              }}
            >
              <Text style={{
                fontSize: 10,
                fontWeight: '600',
                color: colors.textMuted,
                letterSpacing: 0.8,
                marginBottom: 8,
              }}>
                {stat.label}
              </Text>
              <Text style={{
                fontSize: 28,
                fontWeight: '700',
                color: stat.highlight ? colors.accent : colors.textPrimary,
              }}>
                {stat.value}
              </Text>
            </View>
          ))}
        </View>

        {/* Library Header */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginBottom: 16,
        }}>
          <Text style={{
            fontSize: 22,
            fontWeight: '700',
            color: colors.textPrimary,
          }}>
            Library
          </Text>
          <Ionicons name="search-outline" size={22} color={colors.textSecondary} />
        </View>

      </ScrollView>

      {/* FAB */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 80,
          right: 20,
          width: 52,
          height: 52,
          borderRadius: 26,
          backgroundColor: colors.accent,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 4,
        }}
      >
        <Ionicons name="add" size={26} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}