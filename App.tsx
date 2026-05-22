import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>H I M A</Text>
        <Text style={styles.logoSub}>Global Wellness Intelligence</Text>
        <View style={styles.liveBadge}>
          <Text style={styles.liveDot}>●</Text>
          <Text style={styles.liveText}>2.4M Users Live</Text>
        </View>
      </View>

      {/* Welcome */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeEye}>WEDNESDAY · 21 MAY 2026</Text>
        <Text style={styles.welcomeTitle}>Good morning, Amara ☀️</Text>
        <Text style={styles.welcomeSub}>Week 21 · Nairobi, Kenya · Hima Global</Text>
      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={[styles.statCard, { borderTopColor: '#22C55E' }]}>
          <Text style={styles.statIcon}>🔥</Text>
          <Text style={styles.statVal}>1,840</Text>
          <Text style={styles.statLbl}>Calories</Text>
          <Text style={[styles.statBadge, { color: '#22C55E' }]}>▲ On Track</Text>
        </View>
        <View style={[styles.statCard, { borderTopColor: '#F5C518' }]}>
          <Text style={styles.statIcon}>👟</Text>
          <Text style={styles.statVal}>6,240</Text>
          <Text style={styles.statLbl}>Steps</Text>
          <Text style={[styles.statBadge, { color: '#F5C518' }]}>62% Done</Text>
        </View>
        <View style={[styles.statCard, { borderTopColor: '#60A5FA' }]}>
          <Text style={styles.statIcon}>⚡</Text>
          <Text style={styles.statVal}>34</Text>
          <Text style={styles.statLbl}>Active Mins</Text>
          <Text style={[styles.statBadge, { color: '#60A5FA' }]}>▲ +8</Text>
        </View>
        <View style={[styles.statCard, { borderTopColor: '#EF4444' }]}>
          <Text style={styles.statIcon}>💧</Text>
          <Text style={styles.statVal}>1.4L</Text>
          <Text style={styles.statLbl}>Hydration</Text>
          <Text style={[styles.statBadge, { color: '#EF4444' }]}>Drink more</Text>
        </View>
      </View>

      {/* AI Risk Card */}
      <View style={styles.aiCard}>
        <View style={styles.aiChip}>
          <Text style={styles.aiChipText}>● HIMA AI · Predictive Health</Text>
        </View>
        <Text style={styles.aiTitle}>Your 30-Day Risk Forecast</Text>
        <Text style={styles.aiSub}>Based on nutrition, movement & biometric patterns</Text>

        <View style={styles.riskRow}>
          <View style={styles.riskItem}>
            <Text style={styles.riskEmoji}>❤️</Text>
            <Text style={styles.riskName}>Cardiovascular</Text>
            <Text style={[styles.riskVal, { color: '#22C55E' }]}>LOW</Text>
            <View style={styles.riskTrack}>
              <View style={[styles.riskFill, { width: '22%', backgroundColor: '#22C55E' }]} />
            </View>
          </View>
          <View style={styles.riskItem}>
            <Text style={styles.riskEmoji}>🩸</Text>
            <Text style={styles.riskName}>Blood Sugar</Text>
            <Text style={[styles.riskVal, { color: '#F5C518' }]}>MODERATE</Text>
            <View style={styles.riskTrack}>
              <View style={[styles.riskFill, { width: '55%', backgroundColor: '#F5C518' }]} />
            </View>
          </View>
          <View style={styles.riskItem}>
            <Text style={styles.riskEmoji}>🧠</Text>
            <Text style={styles.riskName}>Burnout</Text>
            <Text style={[styles.riskVal, { color: '#F5C518' }]}>MODERATE</Text>
            <View style={styles.riskTrack}>
              <View style={[styles.riskFill, { width: '48%', backgroundColor: '#F5C518' }]} />
            </View>
          </View>
        </View>
      </View>

      {/* Food Log */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Food Log</Text>
        {[
          { emoji: '🍳', name: 'Eggs & Githeri', time: 'Breakfast · 7:30am', kcal: '420' },
          { emoji: '🍖', name: 'Nyama Choma + Ugali', time: 'Lunch · 1:15pm', kcal: '860' },
          { emoji: '🥤', name: 'Mango Smoothie', time: 'Snack · 4:00pm', kcal: '280' },
          { emoji: '🌙', name: 'Dinner — not logged', time: 'AI suggests: light meal', kcal: '~280' },
        ].map((item, i) => (
          <View key={i} style={styles.foodItem}>
            <Text style={styles.foodEmoji}>{item.emoji}</Text>
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodTime}>{item.time}</Text>
            </View>
            <Text style={styles.foodKcal}>{item.kcal}</Text>
          </View>
        ))}
      </View>

      {/* AI Recommendations */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>AI Recommendations</Text>
        {[
          { emoji: '🩺', title: 'Blood Sugar Alert', text: 'High-starch lunch 3 days in a row. Add fibre today.' },
          { emoji: '😴', title: 'Burnout Signal', text: 'Late meals detected. Take a 20-min walk before 6pm.' },
          { emoji: '🏆', title: '5-Day Streak!', text: 'Claim your Kenchic coupon reward 🎫' },
          { emoji: '🌍', title: 'Global Challenge', text: 'Join the Africa 10K Steps Challenge — 48K members.' },
        ].map((item, i) => (
          <TouchableOpacity key={i} style={styles.recItem}>
            <Text style={styles.recEmoji}>{item.emoji}</Text>
            <View style={styles.recInfo}>
              <Text style={styles.recTitle}>{item.title}</Text>
              <Text style={styles.recText}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom padding */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D0F14' },
  header: { backgroundColor: '#13161E', padding: 20, paddingTop: 50, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.07)' },
  logo: { fontSize: 28, fontWeight: '900', color: '#F5C518', letterSpacing: 8 },
  logoSub: { fontSize: 11, color: 'rgba(240,237,232,0.45)', marginTop: 4, letterSpacing: 2 },
  liveBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(34,197,94,0.12)', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 4, marginTop: 10 },
  liveDot: { color: '#22C55E', fontSize: 8, marginRight: 6 },
  liveText: { color: '#22C55E', fontSize: 11, fontWeight: '700' },
  welcomeCard: { margin: 16, backgroundColor: '#13161E', borderRadius: 16, padding: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.07)' },
  welcomeEye: { fontSize: 10, color: '#F5C518', fontWeight: '700', letterSpacing: 2 },
  welcomeTitle: { fontSize: 22, fontWeight: '900', color: '#F0EDE8', marginTop: 4 },
  welcomeSub: { fontSize: 12, color: 'rgba(240,237,232,0.45)', marginTop: 4 },
  statsRow: { flexDirection: 'row', paddingHorizontal: 16, gap: 8, marginBottom: 16 },
  statCard: { flex: 1, backgroundColor: '#1A1E2A', borderRadius: 12, padding: 12, borderTopWidth: 2, alignItems: 'center' },
  statIcon: { fontSize: 18, marginBottom: 4 },
  statVal: { fontSize: 16, fontWeight: '900', color: '#F0EDE8' },
  statLbl: { fontSize: 9, color: 'rgba(240,237,232,0.45)', marginTop: 2, textAlign: 'center' },
  statBadge: { fontSize: 9, fontWeight: '700', marginTop: 4 },
  aiCard: { margin: 16, marginTop: 0, backgroundColor: '#0D1420', borderRadius: 20, padding: 20, borderWidth: 1, borderColor: 'rgba(245,197,24,0.18)' },
  aiChip: { backgroundColor: 'rgba(245,197,24,0.1)', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 5, alignSelf: 'flex-start', marginBottom: 10 },
  aiChipText: { color: '#F5C518', fontSize: 11, fontWeight: '700' },
  aiTitle: { fontSize: 18, fontWeight: '900', color: '#F0EDE8', marginBottom: 4 },
  aiSub: { fontSize: 11, color: 'rgba(240,237,232,0.45)', marginBottom: 16 },
  riskRow: { flexDirection: 'row', gap: 8 },
  riskItem: { flex: 1, backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: 10 },
  riskEmoji: { fontSize: 20, marginBottom: 6 },
  riskName: { fontSize: 9, color: 'rgba(240,237,232,0.45)', fontWeight: '700', marginBottom: 4 },
  riskVal: { fontSize: 12, fontWeight: '900', marginBottom: 6 },
  riskTrack: { height: 4, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' },
  riskFill: { height: 4, borderRadius: 4 },
  card: { margin: 16, marginTop: 0, backgroundColor: '#1A1E2A', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.07)', marginBottom: 16 },
  cardTitle: { fontSize: 15, fontWeight: '900', color: '#F0EDE8', marginBottom: 14 },
  foodItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)' },
  foodEmoji: { fontSize: 24, marginRight: 12 },
  foodInfo: { flex: 1 },
  foodName: { fontSize: 13, fontWeight: '700', color: '#F0EDE8' },
  foodTime: { fontSize: 11, color: 'rgba(240,237,232,0.45)', marginTop: 2 },
  foodKcal: { fontSize: 14, fontWeight: '900', color: '#F5C518' },
  recItem: { flexDirection: 'row', alignItems: 'flex-start', padding: 10, backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: 10, marginBottom: 8 },
  recEmoji: { fontSize: 22, marginRight: 12, marginTop: 2 },
  recInfo: { flex: 1 },
  recTitle: { fontSize: 13, fontWeight: '700', color: '#F0EDE8', marginBottom: 2 },
  recText: { fontSize: 11, color: 'rgba(240,237,232,0.45)', lineHeight: 16 },
});