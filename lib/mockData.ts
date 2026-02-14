import { User } from '@/types/userTypes';

// Mock Users with all related data nested
export const users: User[] = [
  {
    id: '0001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    username: 'sample',
    password: 'sample',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    transactionCode: '6363',
    transactionMsg: "The recipient's bank account could not be verified. Please double-check the account number and routing number, then try again.",
    createdAt: '2023-01-15',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '1234567890',
        balance: 8547.32,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Starbucks',
            category: 'Food & Drink',
            date: 'Dec 12, 2024',
            amount: 1500.0,
            status: 'success'
          },
          {
            merchant: 'Payroll Deposit',
            category: 'Income',
            date: 'Dec 5, 2024',
            amount: 3250.0,
            status: 'success'
          },
          {
            merchant: 'Chipotle',
            category: 'Food & Drink',
            date: 'Dec 4, 2024',
            amount: -14.32,
            status: 'success'
          },
          {
            merchant: 'Shell Gas Station',
            category: 'Transportation',
            date: 'Dec 3, 2024',
            amount: -52.18,
            status: 'success'
          },
          {
            merchant: 'Electric Company',
            category: 'Utilities',
            date: 'Dec 2, 2024',
            amount: -124.5,
            status: 'failed'
          },
          {
            merchant: 'Rent Payment',
            category: 'Housing',
            date: 'Dec 1, 2024',
            amount: -1850.0,
            status: 'success'
          },
          {
            merchant: 'Netflix',
            category: 'Entertainment',
            date: 'Nov 30, 2024',
            amount: -15.99,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: 'Transportation',
            date: 'Nov 28, 2024',
            amount: -23.45,
            status: 'success'
          },
          {
            merchant: 'Interest Payment',
            category: 'Income',
            date: 'Nov 30, 2024',
            amount: 24.5,
            status: 'success'
          },
          {
            merchant: 'Amazon',
            category: 'Shopping',
            date: 'Dec 4, 2024',
            amount: -89.99,
            status: 'processing'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 24892.5,
        isPrimary: false,
        transactions: [
          {
            merchant: 'Salary Bonus',
            category: 'Income',
            date: 'Dec 10, 2024',
            amount: 500.0,
            status: 'success'
          },
          {
            merchant: 'Monthly Savings Transfer',
            category: 'Transfer',
            date: 'Dec 1, 2024',
            amount: 1000.0,
            status: 'success'
          }
        ]
      }
    ],
    cards: [
      {
        id: 'card_001',
        cardNumber: '4111111111111111',
        cardHolder: 'SARAH JOHNSON',
        expiryDate: '12/26',
        cvv: '123',
        cardType: 'debit',
        cardName: 'Everyday Checking Card',
        balance: 8547.32,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2022-06-15'
      }
    ]
  },
  {
    id: '0002',
    firstName: 'David',
    lastName: 'Fox',
    email: 'd*@gmail.com',
    username: 'Dfox01',
    password: 'davidfox@',
    transactionCode: '7894',
    createdAt: '2026-2-14', // y-m-d
    transactionMsg: 'The account is on hold. Tom Ullrich & Cristina a fee attaches need to be paid as soon as possible 7500$',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '9876542457',
        balance: 18200000.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Transfer Payment Frm Eric~Edward Oilfield company',
            category: '****7642',
            date: 'Jul 04, 2006',
            amount: 15000000.0,
            status: 'success'
          },
          {
            merchant: 'Credit Card Payment officials',
            category: '****1938',
            date: 'Jun 10, 2006',
            amount: -15750.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Tee~Energy services',
            category: '****5821',
            date: 'Feb 05, 2006',
            amount: 27000.0,
            status: 'success'
          },
          {
            merchant: 'Credit Card Payment',
            category: '****4479',
            date: 'Oct 19, 2005',
            amount: -11500.0,
            status: 'success'
          },
          {
            merchant: 'Check Deposit',
            category: '****3306',
            date: 'May 13, 2005',
            amount: -30500.0,
            status: 'success'
          },
          {
            merchant: 'Transfer Payment frm Steven Porter',
            category: '****9184',
            date: 'Dec 24, 2004',
            amount: 21650.0,
            status: 'success'
          },
          {
            merchant: 'Credit Card Payment',
            category: '****2715',
            date: 'Apr 03, 2004',
            amount: -15000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Chad Estate management',
            category: '****6043',
            date: 'Jan 08, 2004',
            amount: 25000.0,
            status: 'success'
          },
          {
            merchant: 'Credit Card Payment',
            category: '****8897',
            date: 'Jul 20, 2003',
            amount: -40500.0,
            status: 'success'
          },
          {
            merchant: 'Check Deposit XXXXXX8324',
            category: '****1529',
            date: 'Mar 23, 2003',
            amount: 50000.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456783458',
        expiryDate: '08/19',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  }
];
