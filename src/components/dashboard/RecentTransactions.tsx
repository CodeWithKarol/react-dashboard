interface Transaction {
  id: string;
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  amount: string;
  status: "Paid" | "Pending" | "Failed";
  date: string;
}

const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    user: {
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      avatar:
        "https://ui-avatars.com/api/?name=Lindsay+Walton&background=random",
    },
    amount: "$2,450.00",
    status: "Paid",
    date: "Jan 12, 2026",
  },
  {
    id: "2",
    user: {
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      avatar:
        "https://ui-avatars.com/api/?name=Courtney+Henry&background=random",
    },
    amount: "$1,950.00",
    status: "Pending",
    date: "Jan 11, 2026",
  },
  {
    id: "3",
    user: {
      name: "Tom Cook",
      email: "tom.cook@example.com",
      avatar: "https://ui-avatars.com/api/?name=Tom+Cook&background=random",
    },
    amount: "$850.00",
    status: "Paid",
    date: "Jan 10, 2026",
  },
];

export function RecentTransactions() {
  return (
    <div className="xl:col-span-2 rounded-xl bg-white dark:bg-slate-800 shadow-md ring-1 ring-slate-900/5 overflow-hidden">
      <div className="border-b border-slate-200 dark:border-slate-700 px-6 py-5 flex items-center justify-between">
        <h3 className="text-base font-semibold leading-6 text-slate-900 dark:text-white">
          Recent Transactions
        </h3>
        <div className="flex gap-2">
          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            Active
          </span>
          <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
            Pending
          </span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-slate-900 dark:text-slate-200"
              >
                User
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-200"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-200"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900 dark:text-slate-200"
              >
                Date
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800">
            {TRANSACTIONS.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm">
                  <div className="flex items-center">
                    <div className="h-9 w-9 flex-shrink-0">
                      <img
                        className="h-9 w-9 rounded-full bg-slate-100 placeholder"
                        src={transaction.user.avatar}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-slate-900 dark:text-white">
                        {transaction.user.name}
                      </div>
                      <div className="text-slate-500 dark:text-slate-400">
                        {transaction.user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-300">
                  {transaction.amount}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      transaction.status === "Paid"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : transaction.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                        : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-500 dark:text-slate-400">
                  {transaction.date}
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
