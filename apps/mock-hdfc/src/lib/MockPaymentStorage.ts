import { MockPayment, MockPaymentStore } from "@powerpaywallet/schemas/webhook";

class MockPaymentStorage {
    private static instance: MockPaymentStorage;
    private static Storage: MockPaymentStore = [];
    
    private constructor() {
        // Private constructor to prevent direct construction calls with the `new` operator
    }

    public static getInstance(): MockPaymentStorage {
        if (!MockPaymentStorage.instance) {
            MockPaymentStorage.instance = new MockPaymentStorage();
        }
        return MockPaymentStorage.instance;
    }

    get(token: string) {
        return MockPaymentStorage.Storage.find(payment => payment.token === token);
    }

    getAll() {
        return MockPaymentStorage.Storage;
    }

    add(payment: MockPayment) {
        return MockPaymentStorage.Storage.push(payment);
    }

    set(payment: MockPayment) {
        const index = MockPaymentStorage.Storage.findIndex(p => p.token === payment.token);
        if (index !== -1) {
            MockPaymentStorage.Storage[index] = { ...MockPaymentStorage.Storage[index], ...payment };
        } else {
            this.add(payment);
        }
    }
}

// Export a single instance
export const mockPaymentStorage = MockPaymentStorage.getInstance();