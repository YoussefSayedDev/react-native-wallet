import { useCallback, useState } from "react";
import { Alert } from "react-native";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export function useTransactions(user_id: string | undefined) {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [summary, setSummary] = useState<any>({
    balance: 0,
    expense: 0,
    income: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchTransactions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/${user_id}`);
      const data = await response.json();
      setTransactions(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }, [user_id]);

  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch(
        `${API_URL}/transactions/summary/${user_id}`
      );
      const data = await response.json();
      setSummary(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  }, [user_id]);

  const fetchData = useCallback(async () => {
    if (!user_id) return;

    setIsLoading(true);
    try {
      await Promise.all([fetchTransactions(), fetchSummary()]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchTransactions, fetchSummary, user_id]);

  const deleteTransaction = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/transactions/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete transaction");
      }

      fetchData();
      Alert.alert("success", "Transaction deleted successfully");
    } catch (error) {
      console.error("Error deleting transaction:", error);
      Alert.alert("error", "Failed to delete transaction");
    }
  };

  return {
    transactions,
    summary,
    isLoading,
    fetchData,
    deleteTransaction,
  };
}
