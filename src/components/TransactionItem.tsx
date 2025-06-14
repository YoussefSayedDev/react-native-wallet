import { styles } from "@/assets/styles/home.styles";
import { COLORS } from "@/constants/colors";
import { formatDate } from "@/lib/utils";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

// Define valid categories type
export type CategoryType =
  | "Food & Drink"
  | "Shopping"
  | "Transportation"
  | "Entertainment"
  | "Bills"
  | "Icome"
  | "Other";

// Map categories to their respective icons
const categoryIcons: Record<CategoryType, keyof typeof Ionicons.glyphMap> = {
  "Food & Drink": "fast-food",
  Shopping: "cart",
  Transportation: "car",
  Entertainment: "film",
  Bills: "receipt",
  Icome: "cash",
  Other: "ellipsis-horizontal",
};

interface TransactionItemProps {
  item: {
    id: string;
    title: string;
    amount: string;
    category: CategoryType;
    created_at: string;
  };
  onDelete: (id: string) => void;
}

export function TransactionItem({ item, onDelete }: TransactionItemProps) {
  const isIncome = parseFloat(item.amount) > 0;
  const iconName = categoryIcons[item.category] || "ellipsis-horizontal";

  return (
    <View style={styles.transactionCard} key={item.id}>
      <TouchableOpacity style={styles.transactionContent}>
        <View style={styles.categoryIconContainer}>
          <Ionicons
            name={iconName}
            size={20}
            color={isIncome ? COLORS.income : COLORS.expense}
          />
        </View>
        <View style={styles.transactionLeft}>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={styles.transactionCategory}>{item.category}</Text>
        </View>
        <View style={styles.transactionRight}>
          <Text
            style={[
              styles.transactionAmount,
              { color: isIncome ? COLORS.income : COLORS.expense },
            ]}
          >
            {isIncome ? "+" : "-"}$
            {Math.abs(parseFloat(item.amount)).toFixed(2)}
          </Text>
          <Text style={styles.transactionDate}>
            {formatDate(item.created_at)}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
      >
        <Ionicons name="trash-outline" size={20} color={COLORS.expense} />
      </TouchableOpacity>
    </View>
  );
}
