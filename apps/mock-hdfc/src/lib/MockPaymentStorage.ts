import { MockPayment, MockPaymentStore } from "@powerpaywallet/schemas/webhook";

/**
 * A singleton class that provides in-memory storage for mock payment data.
 * This class implements the Singleton pattern to ensure only one instance exists
 * throughout the application lifecycle.
 * 
 * @example
 * ```typescript
 * // Get the singleton instance
 * const storage = mockPaymentStorage;
 * 
 * // Add a new payment
 * storage.add({
 *   token: "pay_tok_123",
 *   user_identifier: 123,
 *   amount: 1000,
 *   status: "processing",
 *   redirect_uri: "https://example.com/callback"
 * });
 * ```
 */
class MockPaymentStorage {
    /** The singleton instance of MockPaymentStorage */
    private static instance: MockPaymentStorage;
    
    /** In-memory storage for mock payments */
    private static Storage: MockPaymentStore = [];
    
    /**
     * Private constructor to prevent direct instantiation.
     * Use {@link getInstance} to get the singleton instance.
     */
    private constructor() {
        // Private constructor to prevent direct construction calls with the `new` operator
    }

    /**
     * Gets the singleton instance of MockPaymentStorage.
     * Creates a new instance if one doesn't exist.
     * 
     * @returns The singleton instance of MockPaymentStorage
     */
    public static getInstance(): MockPaymentStorage {
        if (!MockPaymentStorage.instance) {
            MockPaymentStorage.instance = new MockPaymentStorage();
        }
        return MockPaymentStorage.instance;
    }

    /**
     * Retrieves a payment by its token.
     * 
     * @param token - The payment token to search for
     * @returns The payment object if found, undefined otherwise
     */
    get(token: string): MockPayment | undefined {
        return MockPaymentStorage.Storage.find(payment => payment.token === token);
    }

    /**
     * Retrieves all stored payments.
     * 
     * @returns An array of all stored payments
     */
    getAll(): MockPaymentStore {
        return MockPaymentStorage.Storage;
    }

    /**
     * Adds a new payment to the storage.
     * 
     * @param payment - The payment object to add
     * @returns The new length of the storage array
     */
    add(payment: MockPayment): number {
        return MockPaymentStorage.Storage.push(payment);
    }

    /**
     * Updates an existing payment or adds a new one if it doesn't exist.
     * If a payment with the same token exists, it will be updated with the new data.
     * If no payment exists with the given token, a new payment will be added.
     * 
     * @param payment - The payment object to update or add
     */
    set(payment: MockPayment): void {
        const index = MockPaymentStorage.Storage.findIndex(p => p.token === payment.token);
        if (index !== -1) {
            MockPaymentStorage.Storage[index] = { ...MockPaymentStorage.Storage[index], ...payment };
        } else {
            this.add(payment);
        }
    }
}

/**
 * The singleton instance of MockPaymentStorage.
 * Use this instance throughout the application to access the mock payment storage.
 */
export const mockPaymentStorage = MockPaymentStorage.getInstance();