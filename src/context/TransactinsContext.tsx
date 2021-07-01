import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

type TransactionsContextProps = {
  transactions: FormatTransactionProps[];
  createTransaction: (transaction: TransactionProps) => Promise<void>;
};

type TransationProviderProps = {
  children: ReactNode;
};

type TransactionProps = {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
};

type FormatTransactionProps = {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: string;
  createdAt: string;
};

//type TransactionFormData = Omit<TransactionProps, "id" | "createdAt">; //Omita os dados daquele tipo, assim vc nao repeti o codigo, e o Pick faz o inverso, vc coloca quais campos quer pegar

const TransactionsContext = createContext({} as TransactionsContextProps);

export const TransationsProvider = ({ children }: TransationProviderProps) => {
  const [transactions, setTransaction] = useState<FormatTransactionProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get("/transactions");

      const transactions: TransactionProps[] = data.transactions;

      const formatData: FormatTransactionProps[] = transactions.map((el) => {
        return {
          id: el.id,
          title: el.title,
          type: el.type,
          category: el.category,
          amount: new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(el.amount),
          createdAt: new Intl.DateTimeFormat("pt-BR").format(
            new Date(el.createdAt)
          ),
        };
      });

      setTransaction(formatData);
    };

    fetchData();
  }, []);

  const createTransaction = async (transactionInput: TransactionProps) => {
    const { data } = await api.post("/transactions", { ...transactionInput });
    const { transation } = data;
    setTransaction((prevState) => {
      return {
        ...prevState,
        transation,
      };
    });
    // OU
    // console.log(transation);

    // setTransaction([...transactions, transation]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransaction = () => useContext(TransactionsContext);
