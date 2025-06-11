import { styles } from "@/assets/styles/home.styles";
import { COLORS } from "@/constants/colors";
import { Text, View } from "react-native";

interface BalanceCardProps {
  summary: {
    balance: string;
    expense: string;
    income: string;
  };
}

export function BalanceCard({ summary }: BalanceCardProps) {
  console.log(summary);
  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceTitle}>Total Balance</Text>
      <Text style={styles.balanceAmount}>
        ${parseFloat(summary.balance).toFixed(2)}
      </Text>
      <View style={styles.balanceStats}>
        <View style={[styles.balanceStatItem, styles.statDivider]}>
          <Text style={styles.balanceStatLabel}>Income</Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.income }]}>
            +${parseFloat(summary.income).toFixed(2)}
          </Text>
        </View>
        <View style={[styles.balanceStatItem]}>
          <Text style={styles.balanceStatLabel}>Expense</Text>
          <Text style={[styles.balanceStatAmount, { color: COLORS.expense }]}>
            -${Math.abs(parseFloat(summary.expense)).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}
