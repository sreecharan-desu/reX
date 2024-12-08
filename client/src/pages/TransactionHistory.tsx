import { useState, useEffect } from 'react';
import { transactionApi } from '../services/api';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { format } from 'date-fns';

interface Transaction {
    _id: string;
    fromUser: { _id: string; name: string };
    toUser: { _id: string; name: string };
    reward: { _id: string; title: string; points: number };
    type: 'redemption';
    createdAt: string;
}

export const TransactionHistory = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await transactionApi.getHistory();
                setTransactions(response.data || []);
            } catch (err) {
                console.error('Failed to fetch transactions:', err);
                setError('Failed to load transactions');
            } finally {
                setIsLoading(false);
            }
        };

        fetchTransactions();
    }, []);

    if (isLoading) return <LoadingSpinner />;
    if (error) return <div className="text-red-500 text-center py-4">{error}</div>;

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Transaction History
            </h2>
            
            <div className="space-y-4">
                {transactions.length > 0 ? (
                    transactions.map((transaction) => (
                        <div 
                            key={transaction._id}
                            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium text-gray-900 dark:text-white">
                                        {transaction.reward.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        From {transaction.fromUser.name} to {transaction.toUser.name}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-cyan-600 dark:text-cyan-400">
                                        {transaction.reward.points} points
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {format(new Date(transaction.createdAt), 'MMM d, yyyy')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-500 dark:text-gray-400">
                            No transactions found
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}; 