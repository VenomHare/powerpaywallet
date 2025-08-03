
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Cloudinary_images
 * 
 */
export type Cloudinary_images = $Result.DefaultSelection<Prisma.$Cloudinary_imagesPayload>
/**
 * Model Balance
 * 
 */
export type Balance = $Result.DefaultSelection<Prisma.$BalancePayload>
/**
 * Model Transactions
 * 
 */
export type Transactions = $Result.DefaultSelection<Prisma.$TransactionsPayload>
/**
 * Model WalletTransfers
 * 
 */
export type WalletTransfers = $Result.DefaultSelection<Prisma.$WalletTransfersPayload>
/**
 * Model BankWithdrawals
 * 
 */
export type BankWithdrawals = $Result.DefaultSelection<Prisma.$BankWithdrawalsPayload>
/**
 * Model SavedBankAccounts
 * 
 */
export type SavedBankAccounts = $Result.DefaultSelection<Prisma.$SavedBankAccountsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  Success: 'Success',
  Failure: 'Failure',
  Processing: 'Processing'
};

export type Status = (typeof Status)[keyof typeof Status]


export const ActionStatus: {
  APPROVAL_PENDING: 'APPROVAL_PENDING',
  NOT_APPROVED: 'NOT_APPROVED',
  Processing: 'Processing',
  Failure: 'Failure',
  Success: 'Success'
};

export type ActionStatus = (typeof ActionStatus)[keyof typeof ActionStatus]


export const TransactionType: {
  Debit: 'Debit',
  Credit: 'Credit'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const WithdrawalOption: {
  bank_transfer: 'bank_transfer'
};

export type WithdrawalOption = (typeof WithdrawalOption)[keyof typeof WithdrawalOption]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type ActionStatus = $Enums.ActionStatus

export const ActionStatus: typeof $Enums.ActionStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type WithdrawalOption = $Enums.WithdrawalOption

export const WithdrawalOption: typeof $Enums.WithdrawalOption

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cloudinary_images`: Exposes CRUD operations for the **Cloudinary_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cloudinary_images
    * const cloudinary_images = await prisma.cloudinary_images.findMany()
    * ```
    */
  get cloudinary_images(): Prisma.Cloudinary_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balance`: Exposes CRUD operations for the **Balance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balance.findMany()
    * ```
    */
  get balance(): Prisma.BalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **Transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.TransactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.walletTransfers`: Exposes CRUD operations for the **WalletTransfers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletTransfers
    * const walletTransfers = await prisma.walletTransfers.findMany()
    * ```
    */
  get walletTransfers(): Prisma.WalletTransfersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankWithdrawals`: Exposes CRUD operations for the **BankWithdrawals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankWithdrawals
    * const bankWithdrawals = await prisma.bankWithdrawals.findMany()
    * ```
    */
  get bankWithdrawals(): Prisma.BankWithdrawalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedBankAccounts`: Exposes CRUD operations for the **SavedBankAccounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedBankAccounts
    * const savedBankAccounts = await prisma.savedBankAccounts.findMany()
    * ```
    */
  get savedBankAccounts(): Prisma.SavedBankAccountsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Cloudinary_images: 'Cloudinary_images',
    Balance: 'Balance',
    Transactions: 'Transactions',
    WalletTransfers: 'WalletTransfers',
    BankWithdrawals: 'BankWithdrawals',
    SavedBankAccounts: 'SavedBankAccounts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "cloudinary_images" | "balance" | "transactions" | "walletTransfers" | "bankWithdrawals" | "savedBankAccounts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Cloudinary_images: {
        payload: Prisma.$Cloudinary_imagesPayload<ExtArgs>
        fields: Prisma.Cloudinary_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Cloudinary_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cloudinary_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Cloudinary_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cloudinary_imagesPayload>
          }
          findFirst: {
            args: Prisma.Cloudinary_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cloudinary_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Cloudinary_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cloudinary_imagesPayload>
          }
          findMany: {
            args: Prisma.Cloudinary_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cloudinary_imagesPayload>[]
          }
          create: {
            args: Prisma.Cloudinary_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cloudinary_imagesPayload>
          }
          createMany: {
            args: Prisma.Cloudinary_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Cloudinary_imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cloudinary_imagesPayload>[]
          }
          delete: {
            args: Prisma.Cloudinary_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cloudinary_imagesPayload>
          }
          update: {
            args: Prisma.Cloudinary_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cloudinary_imagesPayload>
          }
          deleteMany: {
            args: Prisma.Cloudinary_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Cloudinary_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Cloudinary_imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cloudinary_imagesPayload>[]
          }
          upsert: {
            args: Prisma.Cloudinary_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Cloudinary_imagesPayload>
          }
          aggregate: {
            args: Prisma.Cloudinary_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCloudinary_images>
          }
          groupBy: {
            args: Prisma.Cloudinary_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cloudinary_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Cloudinary_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Cloudinary_imagesCountAggregateOutputType> | number
          }
        }
      }
      Balance: {
        payload: Prisma.$BalancePayload<ExtArgs>
        fields: Prisma.BalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findFirst: {
            args: Prisma.BalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findMany: {
            args: Prisma.BalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          create: {
            args: Prisma.BalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          createMany: {
            args: Prisma.BalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          delete: {
            args: Prisma.BalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          update: {
            args: Prisma.BalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          deleteMany: {
            args: Prisma.BalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          upsert: {
            args: Prisma.BalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          aggregate: {
            args: Prisma.BalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalance>
          }
          groupBy: {
            args: Prisma.BalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BalanceCountArgs<ExtArgs>
            result: $Utils.Optional<BalanceCountAggregateOutputType> | number
          }
        }
      }
      Transactions: {
        payload: Prisma.$TransactionsPayload<ExtArgs>
        fields: Prisma.TransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findFirst: {
            args: Prisma.TransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          findMany: {
            args: Prisma.TransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          create: {
            args: Prisma.TransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          createMany: {
            args: Prisma.TransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          delete: {
            args: Prisma.TransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          update: {
            args: Prisma.TransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          deleteMany: {
            args: Prisma.TransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>[]
          }
          upsert: {
            args: Prisma.TransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.TransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      WalletTransfers: {
        payload: Prisma.$WalletTransfersPayload<ExtArgs>
        fields: Prisma.WalletTransfersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletTransfersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransfersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletTransfersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransfersPayload>
          }
          findFirst: {
            args: Prisma.WalletTransfersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransfersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletTransfersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransfersPayload>
          }
          findMany: {
            args: Prisma.WalletTransfersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransfersPayload>[]
          }
          create: {
            args: Prisma.WalletTransfersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransfersPayload>
          }
          createMany: {
            args: Prisma.WalletTransfersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletTransfersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransfersPayload>[]
          }
          delete: {
            args: Prisma.WalletTransfersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransfersPayload>
          }
          update: {
            args: Prisma.WalletTransfersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransfersPayload>
          }
          deleteMany: {
            args: Prisma.WalletTransfersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletTransfersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletTransfersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransfersPayload>[]
          }
          upsert: {
            args: Prisma.WalletTransfersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransfersPayload>
          }
          aggregate: {
            args: Prisma.WalletTransfersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalletTransfers>
          }
          groupBy: {
            args: Prisma.WalletTransfersGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletTransfersGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletTransfersCountArgs<ExtArgs>
            result: $Utils.Optional<WalletTransfersCountAggregateOutputType> | number
          }
        }
      }
      BankWithdrawals: {
        payload: Prisma.$BankWithdrawalsPayload<ExtArgs>
        fields: Prisma.BankWithdrawalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankWithdrawalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankWithdrawalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankWithdrawalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankWithdrawalsPayload>
          }
          findFirst: {
            args: Prisma.BankWithdrawalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankWithdrawalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankWithdrawalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankWithdrawalsPayload>
          }
          findMany: {
            args: Prisma.BankWithdrawalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankWithdrawalsPayload>[]
          }
          create: {
            args: Prisma.BankWithdrawalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankWithdrawalsPayload>
          }
          createMany: {
            args: Prisma.BankWithdrawalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankWithdrawalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankWithdrawalsPayload>[]
          }
          delete: {
            args: Prisma.BankWithdrawalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankWithdrawalsPayload>
          }
          update: {
            args: Prisma.BankWithdrawalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankWithdrawalsPayload>
          }
          deleteMany: {
            args: Prisma.BankWithdrawalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankWithdrawalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankWithdrawalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankWithdrawalsPayload>[]
          }
          upsert: {
            args: Prisma.BankWithdrawalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankWithdrawalsPayload>
          }
          aggregate: {
            args: Prisma.BankWithdrawalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankWithdrawals>
          }
          groupBy: {
            args: Prisma.BankWithdrawalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankWithdrawalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankWithdrawalsCountArgs<ExtArgs>
            result: $Utils.Optional<BankWithdrawalsCountAggregateOutputType> | number
          }
        }
      }
      SavedBankAccounts: {
        payload: Prisma.$SavedBankAccountsPayload<ExtArgs>
        fields: Prisma.SavedBankAccountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedBankAccountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedBankAccountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedBankAccountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedBankAccountsPayload>
          }
          findFirst: {
            args: Prisma.SavedBankAccountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedBankAccountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedBankAccountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedBankAccountsPayload>
          }
          findMany: {
            args: Prisma.SavedBankAccountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedBankAccountsPayload>[]
          }
          create: {
            args: Prisma.SavedBankAccountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedBankAccountsPayload>
          }
          createMany: {
            args: Prisma.SavedBankAccountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedBankAccountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedBankAccountsPayload>[]
          }
          delete: {
            args: Prisma.SavedBankAccountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedBankAccountsPayload>
          }
          update: {
            args: Prisma.SavedBankAccountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedBankAccountsPayload>
          }
          deleteMany: {
            args: Prisma.SavedBankAccountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedBankAccountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedBankAccountsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedBankAccountsPayload>[]
          }
          upsert: {
            args: Prisma.SavedBankAccountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedBankAccountsPayload>
          }
          aggregate: {
            args: Prisma.SavedBankAccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedBankAccounts>
          }
          groupBy: {
            args: Prisma.SavedBankAccountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedBankAccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedBankAccountsCountArgs<ExtArgs>
            result: $Utils.Optional<SavedBankAccountsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    cloudinary_images?: Cloudinary_imagesOmit
    balance?: BalanceOmit
    transactions?: TransactionsOmit
    walletTransfers?: WalletTransfersOmit
    bankWithdrawals?: BankWithdrawalsOmit
    savedBankAccounts?: SavedBankAccountsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Balance: number
    Transactions: number
    IncomingTransaction: number
    OutgoingTransaction: number
    SavedBankAccounts: number
    BankWithdrawals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Balance?: boolean | UserCountOutputTypeCountBalanceArgs
    Transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    IncomingTransaction?: boolean | UserCountOutputTypeCountIncomingTransactionArgs
    OutgoingTransaction?: boolean | UserCountOutputTypeCountOutgoingTransactionArgs
    SavedBankAccounts?: boolean | UserCountOutputTypeCountSavedBankAccountsArgs
    BankWithdrawals?: boolean | UserCountOutputTypeCountBankWithdrawalsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncomingTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransfersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOutgoingTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransfersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedBankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedBankAccountsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBankWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankWithdrawalsWhereInput
  }


  /**
   * Count Type SavedBankAccountsCountOutputType
   */

  export type SavedBankAccountsCountOutputType = {
    Withdrawals: number
  }

  export type SavedBankAccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Withdrawals?: boolean | SavedBankAccountsCountOutputTypeCountWithdrawalsArgs
  }

  // Custom InputTypes
  /**
   * SavedBankAccountsCountOutputType without action
   */
  export type SavedBankAccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedBankAccountsCountOutputType
     */
    select?: SavedBankAccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SavedBankAccountsCountOutputType without action
   */
  export type SavedBankAccountsCountOutputTypeCountWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankWithdrawalsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    failedPinTries: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    failedPinTries: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    number: string | null
    password: string | null
    securityPin: string | null
    failedPinTries: number | null
    lastFailedPinTry: Date | null
    pfpPublicId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    number: string | null
    password: string | null
    securityPin: string | null
    failedPinTries: number | null
    lastFailedPinTry: Date | null
    pfpPublicId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    number: number
    password: number
    securityPin: number
    failedPinTries: number
    lastFailedPinTry: number
    pfpPublicId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    failedPinTries?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    failedPinTries?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
    securityPin?: true
    failedPinTries?: true
    lastFailedPinTry?: true
    pfpPublicId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
    securityPin?: true
    failedPinTries?: true
    lastFailedPinTry?: true
    pfpPublicId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    number?: true
    password?: true
    securityPin?: true
    failedPinTries?: true
    lastFailedPinTry?: true
    pfpPublicId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries: number
    lastFailedPinTry: Date | null
    pfpPublicId: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
    securityPin?: boolean
    failedPinTries?: boolean
    lastFailedPinTry?: boolean
    pfpPublicId?: boolean
    pfp?: boolean | User$pfpArgs<ExtArgs>
    Balance?: boolean | User$BalanceArgs<ExtArgs>
    Transactions?: boolean | User$TransactionsArgs<ExtArgs>
    IncomingTransaction?: boolean | User$IncomingTransactionArgs<ExtArgs>
    OutgoingTransaction?: boolean | User$OutgoingTransactionArgs<ExtArgs>
    SavedBankAccounts?: boolean | User$SavedBankAccountsArgs<ExtArgs>
    BankWithdrawals?: boolean | User$BankWithdrawalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
    securityPin?: boolean
    failedPinTries?: boolean
    lastFailedPinTry?: boolean
    pfpPublicId?: boolean
    pfp?: boolean | User$pfpArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
    securityPin?: boolean
    failedPinTries?: boolean
    lastFailedPinTry?: boolean
    pfpPublicId?: boolean
    pfp?: boolean | User$pfpArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    number?: boolean
    password?: boolean
    securityPin?: boolean
    failedPinTries?: boolean
    lastFailedPinTry?: boolean
    pfpPublicId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "number" | "password" | "securityPin" | "failedPinTries" | "lastFailedPinTry" | "pfpPublicId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pfp?: boolean | User$pfpArgs<ExtArgs>
    Balance?: boolean | User$BalanceArgs<ExtArgs>
    Transactions?: boolean | User$TransactionsArgs<ExtArgs>
    IncomingTransaction?: boolean | User$IncomingTransactionArgs<ExtArgs>
    OutgoingTransaction?: boolean | User$OutgoingTransactionArgs<ExtArgs>
    SavedBankAccounts?: boolean | User$SavedBankAccountsArgs<ExtArgs>
    BankWithdrawals?: boolean | User$BankWithdrawalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pfp?: boolean | User$pfpArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pfp?: boolean | User$pfpArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pfp: Prisma.$Cloudinary_imagesPayload<ExtArgs> | null
      Balance: Prisma.$BalancePayload<ExtArgs>[]
      Transactions: Prisma.$TransactionsPayload<ExtArgs>[]
      IncomingTransaction: Prisma.$WalletTransfersPayload<ExtArgs>[]
      OutgoingTransaction: Prisma.$WalletTransfersPayload<ExtArgs>[]
      SavedBankAccounts: Prisma.$SavedBankAccountsPayload<ExtArgs>[]
      BankWithdrawals: Prisma.$BankWithdrawalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      number: string
      password: string
      securityPin: string
      failedPinTries: number
      lastFailedPinTry: Date | null
      pfpPublicId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pfp<T extends User$pfpArgs<ExtArgs> = {}>(args?: Subset<T, User$pfpArgs<ExtArgs>>): Prisma__Cloudinary_imagesClient<$Result.GetResult<Prisma.$Cloudinary_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Balance<T extends User$BalanceArgs<ExtArgs> = {}>(args?: Subset<T, User$BalanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Transactions<T extends User$TransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$TransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    IncomingTransaction<T extends User$IncomingTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$IncomingTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransfersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OutgoingTransaction<T extends User$OutgoingTransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$OutgoingTransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransfersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SavedBankAccounts<T extends User$SavedBankAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$SavedBankAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedBankAccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    BankWithdrawals<T extends User$BankWithdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, User$BankWithdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankWithdrawalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly number: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly securityPin: FieldRef<"User", 'String'>
    readonly failedPinTries: FieldRef<"User", 'Int'>
    readonly lastFailedPinTry: FieldRef<"User", 'DateTime'>
    readonly pfpPublicId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pfp
   */
  export type User$pfpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloudinary_images
     */
    select?: Cloudinary_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloudinary_images
     */
    omit?: Cloudinary_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cloudinary_imagesInclude<ExtArgs> | null
    where?: Cloudinary_imagesWhereInput
  }

  /**
   * User.Balance
   */
  export type User$BalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    where?: BalanceWhereInput
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    cursor?: BalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * User.Transactions
   */
  export type User$TransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    cursor?: TransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * User.IncomingTransaction
   */
  export type User$IncomingTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransfers
     */
    select?: WalletTransfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransfers
     */
    omit?: WalletTransfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransfersInclude<ExtArgs> | null
    where?: WalletTransfersWhereInput
    orderBy?: WalletTransfersOrderByWithRelationInput | WalletTransfersOrderByWithRelationInput[]
    cursor?: WalletTransfersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletTransfersScalarFieldEnum | WalletTransfersScalarFieldEnum[]
  }

  /**
   * User.OutgoingTransaction
   */
  export type User$OutgoingTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransfers
     */
    select?: WalletTransfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransfers
     */
    omit?: WalletTransfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransfersInclude<ExtArgs> | null
    where?: WalletTransfersWhereInput
    orderBy?: WalletTransfersOrderByWithRelationInput | WalletTransfersOrderByWithRelationInput[]
    cursor?: WalletTransfersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletTransfersScalarFieldEnum | WalletTransfersScalarFieldEnum[]
  }

  /**
   * User.SavedBankAccounts
   */
  export type User$SavedBankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedBankAccounts
     */
    select?: SavedBankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedBankAccounts
     */
    omit?: SavedBankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedBankAccountsInclude<ExtArgs> | null
    where?: SavedBankAccountsWhereInput
    orderBy?: SavedBankAccountsOrderByWithRelationInput | SavedBankAccountsOrderByWithRelationInput[]
    cursor?: SavedBankAccountsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedBankAccountsScalarFieldEnum | SavedBankAccountsScalarFieldEnum[]
  }

  /**
   * User.BankWithdrawals
   */
  export type User$BankWithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankWithdrawals
     */
    select?: BankWithdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankWithdrawals
     */
    omit?: BankWithdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankWithdrawalsInclude<ExtArgs> | null
    where?: BankWithdrawalsWhereInput
    orderBy?: BankWithdrawalsOrderByWithRelationInput | BankWithdrawalsOrderByWithRelationInput[]
    cursor?: BankWithdrawalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankWithdrawalsScalarFieldEnum | BankWithdrawalsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Cloudinary_images
   */

  export type AggregateCloudinary_images = {
    _count: Cloudinary_imagesCountAggregateOutputType | null
    _min: Cloudinary_imagesMinAggregateOutputType | null
    _max: Cloudinary_imagesMaxAggregateOutputType | null
  }

  export type Cloudinary_imagesMinAggregateOutputType = {
    public_id: string | null
    url: string | null
  }

  export type Cloudinary_imagesMaxAggregateOutputType = {
    public_id: string | null
    url: string | null
  }

  export type Cloudinary_imagesCountAggregateOutputType = {
    public_id: number
    url: number
    _all: number
  }


  export type Cloudinary_imagesMinAggregateInputType = {
    public_id?: true
    url?: true
  }

  export type Cloudinary_imagesMaxAggregateInputType = {
    public_id?: true
    url?: true
  }

  export type Cloudinary_imagesCountAggregateInputType = {
    public_id?: true
    url?: true
    _all?: true
  }

  export type Cloudinary_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cloudinary_images to aggregate.
     */
    where?: Cloudinary_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cloudinary_images to fetch.
     */
    orderBy?: Cloudinary_imagesOrderByWithRelationInput | Cloudinary_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Cloudinary_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cloudinary_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cloudinary_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cloudinary_images
    **/
    _count?: true | Cloudinary_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cloudinary_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cloudinary_imagesMaxAggregateInputType
  }

  export type GetCloudinary_imagesAggregateType<T extends Cloudinary_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateCloudinary_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCloudinary_images[P]>
      : GetScalarType<T[P], AggregateCloudinary_images[P]>
  }




  export type Cloudinary_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Cloudinary_imagesWhereInput
    orderBy?: Cloudinary_imagesOrderByWithAggregationInput | Cloudinary_imagesOrderByWithAggregationInput[]
    by: Cloudinary_imagesScalarFieldEnum[] | Cloudinary_imagesScalarFieldEnum
    having?: Cloudinary_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cloudinary_imagesCountAggregateInputType | true
    _min?: Cloudinary_imagesMinAggregateInputType
    _max?: Cloudinary_imagesMaxAggregateInputType
  }

  export type Cloudinary_imagesGroupByOutputType = {
    public_id: string
    url: string
    _count: Cloudinary_imagesCountAggregateOutputType | null
    _min: Cloudinary_imagesMinAggregateOutputType | null
    _max: Cloudinary_imagesMaxAggregateOutputType | null
  }

  type GetCloudinary_imagesGroupByPayload<T extends Cloudinary_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cloudinary_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cloudinary_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cloudinary_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Cloudinary_imagesGroupByOutputType[P]>
        }
      >
    >


  export type Cloudinary_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    public_id?: boolean
    url?: boolean
    User?: boolean | Cloudinary_images$UserArgs<ExtArgs>
  }, ExtArgs["result"]["cloudinary_images"]>

  export type Cloudinary_imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    public_id?: boolean
    url?: boolean
  }, ExtArgs["result"]["cloudinary_images"]>

  export type Cloudinary_imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    public_id?: boolean
    url?: boolean
  }, ExtArgs["result"]["cloudinary_images"]>

  export type Cloudinary_imagesSelectScalar = {
    public_id?: boolean
    url?: boolean
  }

  export type Cloudinary_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"public_id" | "url", ExtArgs["result"]["cloudinary_images"]>
  export type Cloudinary_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Cloudinary_images$UserArgs<ExtArgs>
  }
  export type Cloudinary_imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Cloudinary_imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Cloudinary_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cloudinary_images"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      public_id: string
      url: string
    }, ExtArgs["result"]["cloudinary_images"]>
    composites: {}
  }

  type Cloudinary_imagesGetPayload<S extends boolean | null | undefined | Cloudinary_imagesDefaultArgs> = $Result.GetResult<Prisma.$Cloudinary_imagesPayload, S>

  type Cloudinary_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Cloudinary_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cloudinary_imagesCountAggregateInputType | true
    }

  export interface Cloudinary_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cloudinary_images'], meta: { name: 'Cloudinary_images' } }
    /**
     * Find zero or one Cloudinary_images that matches the filter.
     * @param {Cloudinary_imagesFindUniqueArgs} args - Arguments to find a Cloudinary_images
     * @example
     * // Get one Cloudinary_images
     * const cloudinary_images = await prisma.cloudinary_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Cloudinary_imagesFindUniqueArgs>(args: SelectSubset<T, Cloudinary_imagesFindUniqueArgs<ExtArgs>>): Prisma__Cloudinary_imagesClient<$Result.GetResult<Prisma.$Cloudinary_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cloudinary_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Cloudinary_imagesFindUniqueOrThrowArgs} args - Arguments to find a Cloudinary_images
     * @example
     * // Get one Cloudinary_images
     * const cloudinary_images = await prisma.cloudinary_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Cloudinary_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, Cloudinary_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Cloudinary_imagesClient<$Result.GetResult<Prisma.$Cloudinary_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cloudinary_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cloudinary_imagesFindFirstArgs} args - Arguments to find a Cloudinary_images
     * @example
     * // Get one Cloudinary_images
     * const cloudinary_images = await prisma.cloudinary_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Cloudinary_imagesFindFirstArgs>(args?: SelectSubset<T, Cloudinary_imagesFindFirstArgs<ExtArgs>>): Prisma__Cloudinary_imagesClient<$Result.GetResult<Prisma.$Cloudinary_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cloudinary_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cloudinary_imagesFindFirstOrThrowArgs} args - Arguments to find a Cloudinary_images
     * @example
     * // Get one Cloudinary_images
     * const cloudinary_images = await prisma.cloudinary_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Cloudinary_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, Cloudinary_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Cloudinary_imagesClient<$Result.GetResult<Prisma.$Cloudinary_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cloudinary_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cloudinary_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cloudinary_images
     * const cloudinary_images = await prisma.cloudinary_images.findMany()
     * 
     * // Get first 10 Cloudinary_images
     * const cloudinary_images = await prisma.cloudinary_images.findMany({ take: 10 })
     * 
     * // Only select the `public_id`
     * const cloudinary_imagesWithPublic_idOnly = await prisma.cloudinary_images.findMany({ select: { public_id: true } })
     * 
     */
    findMany<T extends Cloudinary_imagesFindManyArgs>(args?: SelectSubset<T, Cloudinary_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Cloudinary_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cloudinary_images.
     * @param {Cloudinary_imagesCreateArgs} args - Arguments to create a Cloudinary_images.
     * @example
     * // Create one Cloudinary_images
     * const Cloudinary_images = await prisma.cloudinary_images.create({
     *   data: {
     *     // ... data to create a Cloudinary_images
     *   }
     * })
     * 
     */
    create<T extends Cloudinary_imagesCreateArgs>(args: SelectSubset<T, Cloudinary_imagesCreateArgs<ExtArgs>>): Prisma__Cloudinary_imagesClient<$Result.GetResult<Prisma.$Cloudinary_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cloudinary_images.
     * @param {Cloudinary_imagesCreateManyArgs} args - Arguments to create many Cloudinary_images.
     * @example
     * // Create many Cloudinary_images
     * const cloudinary_images = await prisma.cloudinary_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Cloudinary_imagesCreateManyArgs>(args?: SelectSubset<T, Cloudinary_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cloudinary_images and returns the data saved in the database.
     * @param {Cloudinary_imagesCreateManyAndReturnArgs} args - Arguments to create many Cloudinary_images.
     * @example
     * // Create many Cloudinary_images
     * const cloudinary_images = await prisma.cloudinary_images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cloudinary_images and only return the `public_id`
     * const cloudinary_imagesWithPublic_idOnly = await prisma.cloudinary_images.createManyAndReturn({
     *   select: { public_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Cloudinary_imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, Cloudinary_imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Cloudinary_imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cloudinary_images.
     * @param {Cloudinary_imagesDeleteArgs} args - Arguments to delete one Cloudinary_images.
     * @example
     * // Delete one Cloudinary_images
     * const Cloudinary_images = await prisma.cloudinary_images.delete({
     *   where: {
     *     // ... filter to delete one Cloudinary_images
     *   }
     * })
     * 
     */
    delete<T extends Cloudinary_imagesDeleteArgs>(args: SelectSubset<T, Cloudinary_imagesDeleteArgs<ExtArgs>>): Prisma__Cloudinary_imagesClient<$Result.GetResult<Prisma.$Cloudinary_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cloudinary_images.
     * @param {Cloudinary_imagesUpdateArgs} args - Arguments to update one Cloudinary_images.
     * @example
     * // Update one Cloudinary_images
     * const cloudinary_images = await prisma.cloudinary_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Cloudinary_imagesUpdateArgs>(args: SelectSubset<T, Cloudinary_imagesUpdateArgs<ExtArgs>>): Prisma__Cloudinary_imagesClient<$Result.GetResult<Prisma.$Cloudinary_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cloudinary_images.
     * @param {Cloudinary_imagesDeleteManyArgs} args - Arguments to filter Cloudinary_images to delete.
     * @example
     * // Delete a few Cloudinary_images
     * const { count } = await prisma.cloudinary_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Cloudinary_imagesDeleteManyArgs>(args?: SelectSubset<T, Cloudinary_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cloudinary_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cloudinary_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cloudinary_images
     * const cloudinary_images = await prisma.cloudinary_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Cloudinary_imagesUpdateManyArgs>(args: SelectSubset<T, Cloudinary_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cloudinary_images and returns the data updated in the database.
     * @param {Cloudinary_imagesUpdateManyAndReturnArgs} args - Arguments to update many Cloudinary_images.
     * @example
     * // Update many Cloudinary_images
     * const cloudinary_images = await prisma.cloudinary_images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cloudinary_images and only return the `public_id`
     * const cloudinary_imagesWithPublic_idOnly = await prisma.cloudinary_images.updateManyAndReturn({
     *   select: { public_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Cloudinary_imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, Cloudinary_imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Cloudinary_imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cloudinary_images.
     * @param {Cloudinary_imagesUpsertArgs} args - Arguments to update or create a Cloudinary_images.
     * @example
     * // Update or create a Cloudinary_images
     * const cloudinary_images = await prisma.cloudinary_images.upsert({
     *   create: {
     *     // ... data to create a Cloudinary_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cloudinary_images we want to update
     *   }
     * })
     */
    upsert<T extends Cloudinary_imagesUpsertArgs>(args: SelectSubset<T, Cloudinary_imagesUpsertArgs<ExtArgs>>): Prisma__Cloudinary_imagesClient<$Result.GetResult<Prisma.$Cloudinary_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cloudinary_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cloudinary_imagesCountArgs} args - Arguments to filter Cloudinary_images to count.
     * @example
     * // Count the number of Cloudinary_images
     * const count = await prisma.cloudinary_images.count({
     *   where: {
     *     // ... the filter for the Cloudinary_images we want to count
     *   }
     * })
    **/
    count<T extends Cloudinary_imagesCountArgs>(
      args?: Subset<T, Cloudinary_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cloudinary_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cloudinary_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cloudinary_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cloudinary_imagesAggregateArgs>(args: Subset<T, Cloudinary_imagesAggregateArgs>): Prisma.PrismaPromise<GetCloudinary_imagesAggregateType<T>>

    /**
     * Group by Cloudinary_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cloudinary_imagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Cloudinary_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Cloudinary_imagesGroupByArgs['orderBy'] }
        : { orderBy?: Cloudinary_imagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Cloudinary_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCloudinary_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cloudinary_images model
   */
  readonly fields: Cloudinary_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cloudinary_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Cloudinary_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Cloudinary_images$UserArgs<ExtArgs> = {}>(args?: Subset<T, Cloudinary_images$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cloudinary_images model
   */
  interface Cloudinary_imagesFieldRefs {
    readonly public_id: FieldRef<"Cloudinary_images", 'String'>
    readonly url: FieldRef<"Cloudinary_images", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cloudinary_images findUnique
   */
  export type Cloudinary_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloudinary_images
     */
    select?: Cloudinary_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloudinary_images
     */
    omit?: Cloudinary_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cloudinary_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Cloudinary_images to fetch.
     */
    where: Cloudinary_imagesWhereUniqueInput
  }

  /**
   * Cloudinary_images findUniqueOrThrow
   */
  export type Cloudinary_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloudinary_images
     */
    select?: Cloudinary_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloudinary_images
     */
    omit?: Cloudinary_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cloudinary_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Cloudinary_images to fetch.
     */
    where: Cloudinary_imagesWhereUniqueInput
  }

  /**
   * Cloudinary_images findFirst
   */
  export type Cloudinary_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloudinary_images
     */
    select?: Cloudinary_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloudinary_images
     */
    omit?: Cloudinary_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cloudinary_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Cloudinary_images to fetch.
     */
    where?: Cloudinary_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cloudinary_images to fetch.
     */
    orderBy?: Cloudinary_imagesOrderByWithRelationInput | Cloudinary_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cloudinary_images.
     */
    cursor?: Cloudinary_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cloudinary_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cloudinary_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cloudinary_images.
     */
    distinct?: Cloudinary_imagesScalarFieldEnum | Cloudinary_imagesScalarFieldEnum[]
  }

  /**
   * Cloudinary_images findFirstOrThrow
   */
  export type Cloudinary_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloudinary_images
     */
    select?: Cloudinary_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloudinary_images
     */
    omit?: Cloudinary_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cloudinary_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Cloudinary_images to fetch.
     */
    where?: Cloudinary_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cloudinary_images to fetch.
     */
    orderBy?: Cloudinary_imagesOrderByWithRelationInput | Cloudinary_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cloudinary_images.
     */
    cursor?: Cloudinary_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cloudinary_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cloudinary_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cloudinary_images.
     */
    distinct?: Cloudinary_imagesScalarFieldEnum | Cloudinary_imagesScalarFieldEnum[]
  }

  /**
   * Cloudinary_images findMany
   */
  export type Cloudinary_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloudinary_images
     */
    select?: Cloudinary_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloudinary_images
     */
    omit?: Cloudinary_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cloudinary_imagesInclude<ExtArgs> | null
    /**
     * Filter, which Cloudinary_images to fetch.
     */
    where?: Cloudinary_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cloudinary_images to fetch.
     */
    orderBy?: Cloudinary_imagesOrderByWithRelationInput | Cloudinary_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cloudinary_images.
     */
    cursor?: Cloudinary_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cloudinary_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cloudinary_images.
     */
    skip?: number
    distinct?: Cloudinary_imagesScalarFieldEnum | Cloudinary_imagesScalarFieldEnum[]
  }

  /**
   * Cloudinary_images create
   */
  export type Cloudinary_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloudinary_images
     */
    select?: Cloudinary_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloudinary_images
     */
    omit?: Cloudinary_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cloudinary_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Cloudinary_images.
     */
    data: XOR<Cloudinary_imagesCreateInput, Cloudinary_imagesUncheckedCreateInput>
  }

  /**
   * Cloudinary_images createMany
   */
  export type Cloudinary_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cloudinary_images.
     */
    data: Cloudinary_imagesCreateManyInput | Cloudinary_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cloudinary_images createManyAndReturn
   */
  export type Cloudinary_imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloudinary_images
     */
    select?: Cloudinary_imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cloudinary_images
     */
    omit?: Cloudinary_imagesOmit<ExtArgs> | null
    /**
     * The data used to create many Cloudinary_images.
     */
    data: Cloudinary_imagesCreateManyInput | Cloudinary_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cloudinary_images update
   */
  export type Cloudinary_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloudinary_images
     */
    select?: Cloudinary_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloudinary_images
     */
    omit?: Cloudinary_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cloudinary_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Cloudinary_images.
     */
    data: XOR<Cloudinary_imagesUpdateInput, Cloudinary_imagesUncheckedUpdateInput>
    /**
     * Choose, which Cloudinary_images to update.
     */
    where: Cloudinary_imagesWhereUniqueInput
  }

  /**
   * Cloudinary_images updateMany
   */
  export type Cloudinary_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cloudinary_images.
     */
    data: XOR<Cloudinary_imagesUpdateManyMutationInput, Cloudinary_imagesUncheckedUpdateManyInput>
    /**
     * Filter which Cloudinary_images to update
     */
    where?: Cloudinary_imagesWhereInput
    /**
     * Limit how many Cloudinary_images to update.
     */
    limit?: number
  }

  /**
   * Cloudinary_images updateManyAndReturn
   */
  export type Cloudinary_imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloudinary_images
     */
    select?: Cloudinary_imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cloudinary_images
     */
    omit?: Cloudinary_imagesOmit<ExtArgs> | null
    /**
     * The data used to update Cloudinary_images.
     */
    data: XOR<Cloudinary_imagesUpdateManyMutationInput, Cloudinary_imagesUncheckedUpdateManyInput>
    /**
     * Filter which Cloudinary_images to update
     */
    where?: Cloudinary_imagesWhereInput
    /**
     * Limit how many Cloudinary_images to update.
     */
    limit?: number
  }

  /**
   * Cloudinary_images upsert
   */
  export type Cloudinary_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloudinary_images
     */
    select?: Cloudinary_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloudinary_images
     */
    omit?: Cloudinary_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cloudinary_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Cloudinary_images to update in case it exists.
     */
    where: Cloudinary_imagesWhereUniqueInput
    /**
     * In case the Cloudinary_images found by the `where` argument doesn't exist, create a new Cloudinary_images with this data.
     */
    create: XOR<Cloudinary_imagesCreateInput, Cloudinary_imagesUncheckedCreateInput>
    /**
     * In case the Cloudinary_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Cloudinary_imagesUpdateInput, Cloudinary_imagesUncheckedUpdateInput>
  }

  /**
   * Cloudinary_images delete
   */
  export type Cloudinary_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloudinary_images
     */
    select?: Cloudinary_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloudinary_images
     */
    omit?: Cloudinary_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cloudinary_imagesInclude<ExtArgs> | null
    /**
     * Filter which Cloudinary_images to delete.
     */
    where: Cloudinary_imagesWhereUniqueInput
  }

  /**
   * Cloudinary_images deleteMany
   */
  export type Cloudinary_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cloudinary_images to delete
     */
    where?: Cloudinary_imagesWhereInput
    /**
     * Limit how many Cloudinary_images to delete.
     */
    limit?: number
  }

  /**
   * Cloudinary_images.User
   */
  export type Cloudinary_images$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Cloudinary_images without action
   */
  export type Cloudinary_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cloudinary_images
     */
    select?: Cloudinary_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cloudinary_images
     */
    omit?: Cloudinary_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Cloudinary_imagesInclude<ExtArgs> | null
  }


  /**
   * Model Balance
   */

  export type AggregateBalance = {
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  export type BalanceAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type BalanceSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type BalanceMinAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type BalanceMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
    locked: number | null
  }

  export type BalanceCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    locked: number
    _all: number
  }


  export type BalanceAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type BalanceSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type BalanceMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type BalanceMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
  }

  export type BalanceCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    locked?: true
    _all?: true
  }

  export type BalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balance to aggregate.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Balances
    **/
    _count?: true | BalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceMaxAggregateInputType
  }

  export type GetBalanceAggregateType<T extends BalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalance[P]>
      : GetScalarType<T[P], AggregateBalance[P]>
  }




  export type BalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceWhereInput
    orderBy?: BalanceOrderByWithAggregationInput | BalanceOrderByWithAggregationInput[]
    by: BalanceScalarFieldEnum[] | BalanceScalarFieldEnum
    having?: BalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceCountAggregateInputType | true
    _avg?: BalanceAvgAggregateInputType
    _sum?: BalanceSumAggregateInputType
    _min?: BalanceMinAggregateInputType
    _max?: BalanceMaxAggregateInputType
  }

  export type BalanceGroupByOutputType = {
    id: number
    userId: number
    amount: number
    locked: number
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  type GetBalanceGroupByPayload<T extends BalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceGroupByOutputType[P]>
        }
      >
    >


  export type BalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    locked?: boolean
  }

  export type BalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "locked", ExtArgs["result"]["balance"]>
  export type BalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Balance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      amount: number
      locked: number
    }, ExtArgs["result"]["balance"]>
    composites: {}
  }

  type BalanceGetPayload<S extends boolean | null | undefined | BalanceDefaultArgs> = $Result.GetResult<Prisma.$BalancePayload, S>

  type BalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BalanceCountAggregateInputType | true
    }

  export interface BalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Balance'], meta: { name: 'Balance' } }
    /**
     * Find zero or one Balance that matches the filter.
     * @param {BalanceFindUniqueArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BalanceFindUniqueArgs>(args: SelectSubset<T, BalanceFindUniqueArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Balance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BalanceFindUniqueOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, BalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BalanceFindFirstArgs>(args?: SelectSubset<T, BalanceFindFirstArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, BalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balance.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceWithIdOnly = await prisma.balance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BalanceFindManyArgs>(args?: SelectSubset<T, BalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Balance.
     * @param {BalanceCreateArgs} args - Arguments to create a Balance.
     * @example
     * // Create one Balance
     * const Balance = await prisma.balance.create({
     *   data: {
     *     // ... data to create a Balance
     *   }
     * })
     * 
     */
    create<T extends BalanceCreateArgs>(args: SelectSubset<T, BalanceCreateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Balances.
     * @param {BalanceCreateManyArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BalanceCreateManyArgs>(args?: SelectSubset<T, BalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Balances and returns the data saved in the database.
     * @param {BalanceCreateManyAndReturnArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, BalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Balance.
     * @param {BalanceDeleteArgs} args - Arguments to delete one Balance.
     * @example
     * // Delete one Balance
     * const Balance = await prisma.balance.delete({
     *   where: {
     *     // ... filter to delete one Balance
     *   }
     * })
     * 
     */
    delete<T extends BalanceDeleteArgs>(args: SelectSubset<T, BalanceDeleteArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Balance.
     * @param {BalanceUpdateArgs} args - Arguments to update one Balance.
     * @example
     * // Update one Balance
     * const balance = await prisma.balance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BalanceUpdateArgs>(args: SelectSubset<T, BalanceUpdateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Balances.
     * @param {BalanceDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BalanceDeleteManyArgs>(args?: SelectSubset<T, BalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BalanceUpdateManyArgs>(args: SelectSubset<T, BalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances and returns the data updated in the database.
     * @param {BalanceUpdateManyAndReturnArgs} args - Arguments to update many Balances.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, BalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Balance.
     * @param {BalanceUpsertArgs} args - Arguments to update or create a Balance.
     * @example
     * // Update or create a Balance
     * const balance = await prisma.balance.upsert({
     *   create: {
     *     // ... data to create a Balance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balance we want to update
     *   }
     * })
     */
    upsert<T extends BalanceUpsertArgs>(args: SelectSubset<T, BalanceUpsertArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balance.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends BalanceCountArgs>(
      args?: Subset<T, BalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BalanceAggregateArgs>(args: Subset<T, BalanceAggregateArgs>): Prisma.PrismaPromise<GetBalanceAggregateType<T>>

    /**
     * Group by Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BalanceGroupByArgs['orderBy'] }
        : { orderBy?: BalanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Balance model
   */
  readonly fields: BalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Balance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Balance model
   */
  interface BalanceFieldRefs {
    readonly id: FieldRef<"Balance", 'Int'>
    readonly userId: FieldRef<"Balance", 'Int'>
    readonly amount: FieldRef<"Balance", 'Int'>
    readonly locked: FieldRef<"Balance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Balance findUnique
   */
  export type BalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findUniqueOrThrow
   */
  export type BalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findFirst
   */
  export type BalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance findFirstOrThrow
   */
  export type BalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance findMany
   */
  export type BalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balances to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance create
   */
  export type BalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Balance.
     */
    data: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
  }

  /**
   * Balance createMany
   */
  export type BalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Balance createManyAndReturn
   */
  export type BalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balance update
   */
  export type BalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Balance.
     */
    data: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
    /**
     * Choose, which Balance to update.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance updateMany
   */
  export type BalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
  }

  /**
   * Balance updateManyAndReturn
   */
  export type BalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balance upsert
   */
  export type BalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Balance to update in case it exists.
     */
    where: BalanceWhereUniqueInput
    /**
     * In case the Balance found by the `where` argument doesn't exist, create a new Balance with this data.
     */
    create: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
    /**
     * In case the Balance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
  }

  /**
   * Balance delete
   */
  export type BalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter which Balance to delete.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance deleteMany
   */
  export type BalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balances to delete
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to delete.
     */
    limit?: number
  }

  /**
   * Balance without action
   */
  export type BalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
  }


  /**
   * Model Transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: number | null
    status: $Enums.Status | null
    statement: string | null
    token: string | null
    provider: string | null
    amount: number | null
    transactionType: $Enums.TransactionType | null
    startTime: Date | null
    upatedAt: Date | null
    userId: number | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: number | null
    status: $Enums.Status | null
    statement: string | null
    token: string | null
    provider: string | null
    amount: number | null
    transactionType: $Enums.TransactionType | null
    startTime: Date | null
    upatedAt: Date | null
    userId: number | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    status: number
    statement: number
    token: number
    provider: number
    amount: number
    transactionType: number
    startTime: number
    upatedAt: number
    userId: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type TransactionsSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    status?: true
    statement?: true
    token?: true
    provider?: true
    amount?: true
    transactionType?: true
    startTime?: true
    upatedAt?: true
    userId?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    status?: true
    statement?: true
    token?: true
    provider?: true
    amount?: true
    transactionType?: true
    startTime?: true
    upatedAt?: true
    userId?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    status?: true
    statement?: true
    token?: true
    provider?: true
    amount?: true
    transactionType?: true
    startTime?: true
    upatedAt?: true
    userId?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to aggregate.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type TransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionsWhereInput
    orderBy?: TransactionsOrderByWithAggregationInput | TransactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: TransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: number
    status: $Enums.Status
    statement: string
    token: string
    provider: string
    amount: number
    transactionType: $Enums.TransactionType
    startTime: Date
    upatedAt: Date
    userId: number
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends TransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type TransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    statement?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    transactionType?: boolean
    startTime?: boolean
    upatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    statement?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    transactionType?: boolean
    startTime?: boolean
    upatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    statement?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    transactionType?: boolean
    startTime?: boolean
    upatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type TransactionsSelectScalar = {
    id?: boolean
    status?: boolean
    statement?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    transactionType?: boolean
    startTime?: boolean
    upatedAt?: boolean
    userId?: boolean
  }

  export type TransactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "statement" | "token" | "provider" | "amount" | "transactionType" | "startTime" | "upatedAt" | "userId", ExtArgs["result"]["transactions"]>
  export type TransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transactions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.Status
      statement: string
      token: string
      provider: string
      amount: number
      transactionType: $Enums.TransactionType
      startTime: Date
      upatedAt: Date
      userId: number
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type TransactionsGetPayload<S extends boolean | null | undefined | TransactionsDefaultArgs> = $Result.GetResult<Prisma.$TransactionsPayload, S>

  type TransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface TransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transactions'], meta: { name: 'Transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {TransactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionsFindUniqueArgs>(args: SelectSubset<T, TransactionsFindUniqueArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionsFindFirstArgs>(args?: SelectSubset<T, TransactionsFindFirstArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionsFindManyArgs>(args?: SelectSubset<T, TransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {TransactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends TransactionsCreateArgs>(args: SelectSubset<T, TransactionsCreateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionsCreateManyArgs>(args?: SelectSubset<T, TransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transactions.
     * @param {TransactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends TransactionsDeleteArgs>(args: SelectSubset<T, TransactionsDeleteArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {TransactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionsUpdateArgs>(args: SelectSubset<T, TransactionsUpdateArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionsDeleteManyArgs>(args?: SelectSubset<T, TransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionsUpdateManyArgs>(args: SelectSubset<T, TransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transactions.
     * @param {TransactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends TransactionsUpsertArgs>(args: SelectSubset<T, TransactionsUpsertArgs<ExtArgs>>): Prisma__TransactionsClient<$Result.GetResult<Prisma.$TransactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionsCountArgs>(
      args?: Subset<T, TransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionsGroupByArgs['orderBy'] }
        : { orderBy?: TransactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transactions model
   */
  readonly fields: TransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transactions model
   */
  interface TransactionsFieldRefs {
    readonly id: FieldRef<"Transactions", 'Int'>
    readonly status: FieldRef<"Transactions", 'Status'>
    readonly statement: FieldRef<"Transactions", 'String'>
    readonly token: FieldRef<"Transactions", 'String'>
    readonly provider: FieldRef<"Transactions", 'String'>
    readonly amount: FieldRef<"Transactions", 'Int'>
    readonly transactionType: FieldRef<"Transactions", 'TransactionType'>
    readonly startTime: FieldRef<"Transactions", 'DateTime'>
    readonly upatedAt: FieldRef<"Transactions", 'DateTime'>
    readonly userId: FieldRef<"Transactions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transactions findUnique
   */
  export type TransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findUniqueOrThrow
   */
  export type TransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions findFirst
   */
  export type TransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findFirstOrThrow
   */
  export type TransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions findMany
   */
  export type TransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionsOrderByWithRelationInput | TransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * Transactions create
   */
  export type TransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Transactions.
     */
    data: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
  }

  /**
   * Transactions createMany
   */
  export type TransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transactions createManyAndReturn
   */
  export type TransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionsCreateManyInput | TransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions update
   */
  export type TransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Transactions.
     */
    data: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
    /**
     * Choose, which Transactions to update.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions updateMany
   */
  export type TransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transactions updateManyAndReturn
   */
  export type TransactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transactions upsert
   */
  export type TransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Transactions to update in case it exists.
     */
    where: TransactionsWhereUniqueInput
    /**
     * In case the Transactions found by the `where` argument doesn't exist, create a new Transactions with this data.
     */
    create: XOR<TransactionsCreateInput, TransactionsUncheckedCreateInput>
    /**
     * In case the Transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionsUpdateInput, TransactionsUncheckedUpdateInput>
  }

  /**
   * Transactions delete
   */
  export type TransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
    /**
     * Filter which Transactions to delete.
     */
    where: TransactionsWhereUniqueInput
  }

  /**
   * Transactions deleteMany
   */
  export type TransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionsWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transactions without action
   */
  export type TransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transactions
     */
    select?: TransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transactions
     */
    omit?: TransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionsInclude<ExtArgs> | null
  }


  /**
   * Model WalletTransfers
   */

  export type AggregateWalletTransfers = {
    _count: WalletTransfersCountAggregateOutputType | null
    _avg: WalletTransfersAvgAggregateOutputType | null
    _sum: WalletTransfersSumAggregateOutputType | null
    _min: WalletTransfersMinAggregateOutputType | null
    _max: WalletTransfersMaxAggregateOutputType | null
  }

  export type WalletTransfersAvgAggregateOutputType = {
    id: number | null
    from: number | null
    to: number | null
    amount: number | null
  }

  export type WalletTransfersSumAggregateOutputType = {
    id: number | null
    from: number | null
    to: number | null
    amount: number | null
  }

  export type WalletTransfersMinAggregateOutputType = {
    id: number | null
    from: number | null
    to: number | null
    amount: number | null
    status: $Enums.Status | null
    startedAt: Date | null
    updatedAt: Date | null
  }

  export type WalletTransfersMaxAggregateOutputType = {
    id: number | null
    from: number | null
    to: number | null
    amount: number | null
    status: $Enums.Status | null
    startedAt: Date | null
    updatedAt: Date | null
  }

  export type WalletTransfersCountAggregateOutputType = {
    id: number
    from: number
    to: number
    amount: number
    status: number
    startedAt: number
    updatedAt: number
    _all: number
  }


  export type WalletTransfersAvgAggregateInputType = {
    id?: true
    from?: true
    to?: true
    amount?: true
  }

  export type WalletTransfersSumAggregateInputType = {
    id?: true
    from?: true
    to?: true
    amount?: true
  }

  export type WalletTransfersMinAggregateInputType = {
    id?: true
    from?: true
    to?: true
    amount?: true
    status?: true
    startedAt?: true
    updatedAt?: true
  }

  export type WalletTransfersMaxAggregateInputType = {
    id?: true
    from?: true
    to?: true
    amount?: true
    status?: true
    startedAt?: true
    updatedAt?: true
  }

  export type WalletTransfersCountAggregateInputType = {
    id?: true
    from?: true
    to?: true
    amount?: true
    status?: true
    startedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletTransfersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransfers to aggregate.
     */
    where?: WalletTransfersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransfers to fetch.
     */
    orderBy?: WalletTransfersOrderByWithRelationInput | WalletTransfersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletTransfersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletTransfers
    **/
    _count?: true | WalletTransfersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletTransfersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletTransfersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletTransfersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletTransfersMaxAggregateInputType
  }

  export type GetWalletTransfersAggregateType<T extends WalletTransfersAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletTransfers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletTransfers[P]>
      : GetScalarType<T[P], AggregateWalletTransfers[P]>
  }




  export type WalletTransfersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransfersWhereInput
    orderBy?: WalletTransfersOrderByWithAggregationInput | WalletTransfersOrderByWithAggregationInput[]
    by: WalletTransfersScalarFieldEnum[] | WalletTransfersScalarFieldEnum
    having?: WalletTransfersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletTransfersCountAggregateInputType | true
    _avg?: WalletTransfersAvgAggregateInputType
    _sum?: WalletTransfersSumAggregateInputType
    _min?: WalletTransfersMinAggregateInputType
    _max?: WalletTransfersMaxAggregateInputType
  }

  export type WalletTransfersGroupByOutputType = {
    id: number
    from: number
    to: number
    amount: number
    status: $Enums.Status
    startedAt: Date
    updatedAt: Date
    _count: WalletTransfersCountAggregateOutputType | null
    _avg: WalletTransfersAvgAggregateOutputType | null
    _sum: WalletTransfersSumAggregateOutputType | null
    _min: WalletTransfersMinAggregateOutputType | null
    _max: WalletTransfersMaxAggregateOutputType | null
  }

  type GetWalletTransfersGroupByPayload<T extends WalletTransfersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletTransfersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletTransfersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletTransfersGroupByOutputType[P]>
            : GetScalarType<T[P], WalletTransfersGroupByOutputType[P]>
        }
      >
    >


  export type WalletTransfersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from?: boolean
    to?: boolean
    amount?: boolean
    status?: boolean
    startedAt?: boolean
    updatedAt?: boolean
    FromUser?: boolean | UserDefaultArgs<ExtArgs>
    ToUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransfers"]>

  export type WalletTransfersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from?: boolean
    to?: boolean
    amount?: boolean
    status?: boolean
    startedAt?: boolean
    updatedAt?: boolean
    FromUser?: boolean | UserDefaultArgs<ExtArgs>
    ToUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransfers"]>

  export type WalletTransfersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from?: boolean
    to?: boolean
    amount?: boolean
    status?: boolean
    startedAt?: boolean
    updatedAt?: boolean
    FromUser?: boolean | UserDefaultArgs<ExtArgs>
    ToUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransfers"]>

  export type WalletTransfersSelectScalar = {
    id?: boolean
    from?: boolean
    to?: boolean
    amount?: boolean
    status?: boolean
    startedAt?: boolean
    updatedAt?: boolean
  }

  export type WalletTransfersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "from" | "to" | "amount" | "status" | "startedAt" | "updatedAt", ExtArgs["result"]["walletTransfers"]>
  export type WalletTransfersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FromUser?: boolean | UserDefaultArgs<ExtArgs>
    ToUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletTransfersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FromUser?: boolean | UserDefaultArgs<ExtArgs>
    ToUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletTransfersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FromUser?: boolean | UserDefaultArgs<ExtArgs>
    ToUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WalletTransfersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalletTransfers"
    objects: {
      FromUser: Prisma.$UserPayload<ExtArgs>
      ToUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      from: number
      to: number
      amount: number
      status: $Enums.Status
      startedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["walletTransfers"]>
    composites: {}
  }

  type WalletTransfersGetPayload<S extends boolean | null | undefined | WalletTransfersDefaultArgs> = $Result.GetResult<Prisma.$WalletTransfersPayload, S>

  type WalletTransfersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletTransfersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletTransfersCountAggregateInputType | true
    }

  export interface WalletTransfersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalletTransfers'], meta: { name: 'WalletTransfers' } }
    /**
     * Find zero or one WalletTransfers that matches the filter.
     * @param {WalletTransfersFindUniqueArgs} args - Arguments to find a WalletTransfers
     * @example
     * // Get one WalletTransfers
     * const walletTransfers = await prisma.walletTransfers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletTransfersFindUniqueArgs>(args: SelectSubset<T, WalletTransfersFindUniqueArgs<ExtArgs>>): Prisma__WalletTransfersClient<$Result.GetResult<Prisma.$WalletTransfersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WalletTransfers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletTransfersFindUniqueOrThrowArgs} args - Arguments to find a WalletTransfers
     * @example
     * // Get one WalletTransfers
     * const walletTransfers = await prisma.walletTransfers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletTransfersFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletTransfersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletTransfersClient<$Result.GetResult<Prisma.$WalletTransfersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransfersFindFirstArgs} args - Arguments to find a WalletTransfers
     * @example
     * // Get one WalletTransfers
     * const walletTransfers = await prisma.walletTransfers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletTransfersFindFirstArgs>(args?: SelectSubset<T, WalletTransfersFindFirstArgs<ExtArgs>>): Prisma__WalletTransfersClient<$Result.GetResult<Prisma.$WalletTransfersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WalletTransfers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransfersFindFirstOrThrowArgs} args - Arguments to find a WalletTransfers
     * @example
     * // Get one WalletTransfers
     * const walletTransfers = await prisma.walletTransfers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletTransfersFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletTransfersFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletTransfersClient<$Result.GetResult<Prisma.$WalletTransfersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WalletTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransfersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletTransfers
     * const walletTransfers = await prisma.walletTransfers.findMany()
     * 
     * // Get first 10 WalletTransfers
     * const walletTransfers = await prisma.walletTransfers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletTransfersWithIdOnly = await prisma.walletTransfers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletTransfersFindManyArgs>(args?: SelectSubset<T, WalletTransfersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransfersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WalletTransfers.
     * @param {WalletTransfersCreateArgs} args - Arguments to create a WalletTransfers.
     * @example
     * // Create one WalletTransfers
     * const WalletTransfers = await prisma.walletTransfers.create({
     *   data: {
     *     // ... data to create a WalletTransfers
     *   }
     * })
     * 
     */
    create<T extends WalletTransfersCreateArgs>(args: SelectSubset<T, WalletTransfersCreateArgs<ExtArgs>>): Prisma__WalletTransfersClient<$Result.GetResult<Prisma.$WalletTransfersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WalletTransfers.
     * @param {WalletTransfersCreateManyArgs} args - Arguments to create many WalletTransfers.
     * @example
     * // Create many WalletTransfers
     * const walletTransfers = await prisma.walletTransfers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletTransfersCreateManyArgs>(args?: SelectSubset<T, WalletTransfersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalletTransfers and returns the data saved in the database.
     * @param {WalletTransfersCreateManyAndReturnArgs} args - Arguments to create many WalletTransfers.
     * @example
     * // Create many WalletTransfers
     * const walletTransfers = await prisma.walletTransfers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalletTransfers and only return the `id`
     * const walletTransfersWithIdOnly = await prisma.walletTransfers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletTransfersCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletTransfersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransfersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WalletTransfers.
     * @param {WalletTransfersDeleteArgs} args - Arguments to delete one WalletTransfers.
     * @example
     * // Delete one WalletTransfers
     * const WalletTransfers = await prisma.walletTransfers.delete({
     *   where: {
     *     // ... filter to delete one WalletTransfers
     *   }
     * })
     * 
     */
    delete<T extends WalletTransfersDeleteArgs>(args: SelectSubset<T, WalletTransfersDeleteArgs<ExtArgs>>): Prisma__WalletTransfersClient<$Result.GetResult<Prisma.$WalletTransfersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WalletTransfers.
     * @param {WalletTransfersUpdateArgs} args - Arguments to update one WalletTransfers.
     * @example
     * // Update one WalletTransfers
     * const walletTransfers = await prisma.walletTransfers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletTransfersUpdateArgs>(args: SelectSubset<T, WalletTransfersUpdateArgs<ExtArgs>>): Prisma__WalletTransfersClient<$Result.GetResult<Prisma.$WalletTransfersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WalletTransfers.
     * @param {WalletTransfersDeleteManyArgs} args - Arguments to filter WalletTransfers to delete.
     * @example
     * // Delete a few WalletTransfers
     * const { count } = await prisma.walletTransfers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletTransfersDeleteManyArgs>(args?: SelectSubset<T, WalletTransfersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransfersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletTransfers
     * const walletTransfers = await prisma.walletTransfers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletTransfersUpdateManyArgs>(args: SelectSubset<T, WalletTransfersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletTransfers and returns the data updated in the database.
     * @param {WalletTransfersUpdateManyAndReturnArgs} args - Arguments to update many WalletTransfers.
     * @example
     * // Update many WalletTransfers
     * const walletTransfers = await prisma.walletTransfers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WalletTransfers and only return the `id`
     * const walletTransfersWithIdOnly = await prisma.walletTransfers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WalletTransfersUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletTransfersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransfersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WalletTransfers.
     * @param {WalletTransfersUpsertArgs} args - Arguments to update or create a WalletTransfers.
     * @example
     * // Update or create a WalletTransfers
     * const walletTransfers = await prisma.walletTransfers.upsert({
     *   create: {
     *     // ... data to create a WalletTransfers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletTransfers we want to update
     *   }
     * })
     */
    upsert<T extends WalletTransfersUpsertArgs>(args: SelectSubset<T, WalletTransfersUpsertArgs<ExtArgs>>): Prisma__WalletTransfersClient<$Result.GetResult<Prisma.$WalletTransfersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WalletTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransfersCountArgs} args - Arguments to filter WalletTransfers to count.
     * @example
     * // Count the number of WalletTransfers
     * const count = await prisma.walletTransfers.count({
     *   where: {
     *     // ... the filter for the WalletTransfers we want to count
     *   }
     * })
    **/
    count<T extends WalletTransfersCountArgs>(
      args?: Subset<T, WalletTransfersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletTransfersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransfersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletTransfersAggregateArgs>(args: Subset<T, WalletTransfersAggregateArgs>): Prisma.PrismaPromise<GetWalletTransfersAggregateType<T>>

    /**
     * Group by WalletTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransfersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletTransfersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletTransfersGroupByArgs['orderBy'] }
        : { orderBy?: WalletTransfersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletTransfersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletTransfersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalletTransfers model
   */
  readonly fields: WalletTransfersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletTransfers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletTransfersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    FromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ToUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WalletTransfers model
   */
  interface WalletTransfersFieldRefs {
    readonly id: FieldRef<"WalletTransfers", 'Int'>
    readonly from: FieldRef<"WalletTransfers", 'Int'>
    readonly to: FieldRef<"WalletTransfers", 'Int'>
    readonly amount: FieldRef<"WalletTransfers", 'Int'>
    readonly status: FieldRef<"WalletTransfers", 'Status'>
    readonly startedAt: FieldRef<"WalletTransfers", 'DateTime'>
    readonly updatedAt: FieldRef<"WalletTransfers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WalletTransfers findUnique
   */
  export type WalletTransfersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransfers
     */
    select?: WalletTransfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransfers
     */
    omit?: WalletTransfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransfersInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransfers to fetch.
     */
    where: WalletTransfersWhereUniqueInput
  }

  /**
   * WalletTransfers findUniqueOrThrow
   */
  export type WalletTransfersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransfers
     */
    select?: WalletTransfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransfers
     */
    omit?: WalletTransfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransfersInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransfers to fetch.
     */
    where: WalletTransfersWhereUniqueInput
  }

  /**
   * WalletTransfers findFirst
   */
  export type WalletTransfersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransfers
     */
    select?: WalletTransfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransfers
     */
    omit?: WalletTransfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransfersInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransfers to fetch.
     */
    where?: WalletTransfersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransfers to fetch.
     */
    orderBy?: WalletTransfersOrderByWithRelationInput | WalletTransfersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransfers.
     */
    cursor?: WalletTransfersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransfers.
     */
    distinct?: WalletTransfersScalarFieldEnum | WalletTransfersScalarFieldEnum[]
  }

  /**
   * WalletTransfers findFirstOrThrow
   */
  export type WalletTransfersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransfers
     */
    select?: WalletTransfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransfers
     */
    omit?: WalletTransfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransfersInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransfers to fetch.
     */
    where?: WalletTransfersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransfers to fetch.
     */
    orderBy?: WalletTransfersOrderByWithRelationInput | WalletTransfersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransfers.
     */
    cursor?: WalletTransfersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransfers.
     */
    distinct?: WalletTransfersScalarFieldEnum | WalletTransfersScalarFieldEnum[]
  }

  /**
   * WalletTransfers findMany
   */
  export type WalletTransfersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransfers
     */
    select?: WalletTransfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransfers
     */
    omit?: WalletTransfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransfersInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransfers to fetch.
     */
    where?: WalletTransfersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransfers to fetch.
     */
    orderBy?: WalletTransfersOrderByWithRelationInput | WalletTransfersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletTransfers.
     */
    cursor?: WalletTransfersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransfers.
     */
    skip?: number
    distinct?: WalletTransfersScalarFieldEnum | WalletTransfersScalarFieldEnum[]
  }

  /**
   * WalletTransfers create
   */
  export type WalletTransfersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransfers
     */
    select?: WalletTransfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransfers
     */
    omit?: WalletTransfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransfersInclude<ExtArgs> | null
    /**
     * The data needed to create a WalletTransfers.
     */
    data: XOR<WalletTransfersCreateInput, WalletTransfersUncheckedCreateInput>
  }

  /**
   * WalletTransfers createMany
   */
  export type WalletTransfersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalletTransfers.
     */
    data: WalletTransfersCreateManyInput | WalletTransfersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletTransfers createManyAndReturn
   */
  export type WalletTransfersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransfers
     */
    select?: WalletTransfersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransfers
     */
    omit?: WalletTransfersOmit<ExtArgs> | null
    /**
     * The data used to create many WalletTransfers.
     */
    data: WalletTransfersCreateManyInput | WalletTransfersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransfersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalletTransfers update
   */
  export type WalletTransfersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransfers
     */
    select?: WalletTransfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransfers
     */
    omit?: WalletTransfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransfersInclude<ExtArgs> | null
    /**
     * The data needed to update a WalletTransfers.
     */
    data: XOR<WalletTransfersUpdateInput, WalletTransfersUncheckedUpdateInput>
    /**
     * Choose, which WalletTransfers to update.
     */
    where: WalletTransfersWhereUniqueInput
  }

  /**
   * WalletTransfers updateMany
   */
  export type WalletTransfersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalletTransfers.
     */
    data: XOR<WalletTransfersUpdateManyMutationInput, WalletTransfersUncheckedUpdateManyInput>
    /**
     * Filter which WalletTransfers to update
     */
    where?: WalletTransfersWhereInput
    /**
     * Limit how many WalletTransfers to update.
     */
    limit?: number
  }

  /**
   * WalletTransfers updateManyAndReturn
   */
  export type WalletTransfersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransfers
     */
    select?: WalletTransfersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransfers
     */
    omit?: WalletTransfersOmit<ExtArgs> | null
    /**
     * The data used to update WalletTransfers.
     */
    data: XOR<WalletTransfersUpdateManyMutationInput, WalletTransfersUncheckedUpdateManyInput>
    /**
     * Filter which WalletTransfers to update
     */
    where?: WalletTransfersWhereInput
    /**
     * Limit how many WalletTransfers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransfersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalletTransfers upsert
   */
  export type WalletTransfersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransfers
     */
    select?: WalletTransfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransfers
     */
    omit?: WalletTransfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransfersInclude<ExtArgs> | null
    /**
     * The filter to search for the WalletTransfers to update in case it exists.
     */
    where: WalletTransfersWhereUniqueInput
    /**
     * In case the WalletTransfers found by the `where` argument doesn't exist, create a new WalletTransfers with this data.
     */
    create: XOR<WalletTransfersCreateInput, WalletTransfersUncheckedCreateInput>
    /**
     * In case the WalletTransfers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletTransfersUpdateInput, WalletTransfersUncheckedUpdateInput>
  }

  /**
   * WalletTransfers delete
   */
  export type WalletTransfersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransfers
     */
    select?: WalletTransfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransfers
     */
    omit?: WalletTransfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransfersInclude<ExtArgs> | null
    /**
     * Filter which WalletTransfers to delete.
     */
    where: WalletTransfersWhereUniqueInput
  }

  /**
   * WalletTransfers deleteMany
   */
  export type WalletTransfersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransfers to delete
     */
    where?: WalletTransfersWhereInput
    /**
     * Limit how many WalletTransfers to delete.
     */
    limit?: number
  }

  /**
   * WalletTransfers without action
   */
  export type WalletTransfersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransfers
     */
    select?: WalletTransfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransfers
     */
    omit?: WalletTransfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransfersInclude<ExtArgs> | null
  }


  /**
   * Model BankWithdrawals
   */

  export type AggregateBankWithdrawals = {
    _count: BankWithdrawalsCountAggregateOutputType | null
    _avg: BankWithdrawalsAvgAggregateOutputType | null
    _sum: BankWithdrawalsSumAggregateOutputType | null
    _min: BankWithdrawalsMinAggregateOutputType | null
    _max: BankWithdrawalsMaxAggregateOutputType | null
  }

  export type BankWithdrawalsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    accountId: number | null
    amount: number | null
    net_amount: number | null
    fee: number | null
  }

  export type BankWithdrawalsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    accountId: number | null
    amount: number | null
    net_amount: number | null
    fee: number | null
  }

  export type BankWithdrawalsMinAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
    accountId: number | null
    amount: number | null
    net_amount: number | null
    fee: number | null
    gateway: $Enums.WithdrawalOption | null
    status: $Enums.ActionStatus | null
    updatedAt: Date | null
    startedAt: Date | null
  }

  export type BankWithdrawalsMaxAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
    accountId: number | null
    amount: number | null
    net_amount: number | null
    fee: number | null
    gateway: $Enums.WithdrawalOption | null
    status: $Enums.ActionStatus | null
    updatedAt: Date | null
    startedAt: Date | null
  }

  export type BankWithdrawalsCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    accountId: number
    amount: number
    net_amount: number
    fee: number
    gateway: number
    status: number
    updatedAt: number
    startedAt: number
    _all: number
  }


  export type BankWithdrawalsAvgAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    amount?: true
    net_amount?: true
    fee?: true
  }

  export type BankWithdrawalsSumAggregateInputType = {
    id?: true
    userId?: true
    accountId?: true
    amount?: true
    net_amount?: true
    fee?: true
  }

  export type BankWithdrawalsMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    accountId?: true
    amount?: true
    net_amount?: true
    fee?: true
    gateway?: true
    status?: true
    updatedAt?: true
    startedAt?: true
  }

  export type BankWithdrawalsMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    accountId?: true
    amount?: true
    net_amount?: true
    fee?: true
    gateway?: true
    status?: true
    updatedAt?: true
    startedAt?: true
  }

  export type BankWithdrawalsCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    accountId?: true
    amount?: true
    net_amount?: true
    fee?: true
    gateway?: true
    status?: true
    updatedAt?: true
    startedAt?: true
    _all?: true
  }

  export type BankWithdrawalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankWithdrawals to aggregate.
     */
    where?: BankWithdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankWithdrawals to fetch.
     */
    orderBy?: BankWithdrawalsOrderByWithRelationInput | BankWithdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankWithdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankWithdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankWithdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankWithdrawals
    **/
    _count?: true | BankWithdrawalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankWithdrawalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankWithdrawalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankWithdrawalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankWithdrawalsMaxAggregateInputType
  }

  export type GetBankWithdrawalsAggregateType<T extends BankWithdrawalsAggregateArgs> = {
        [P in keyof T & keyof AggregateBankWithdrawals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankWithdrawals[P]>
      : GetScalarType<T[P], AggregateBankWithdrawals[P]>
  }




  export type BankWithdrawalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankWithdrawalsWhereInput
    orderBy?: BankWithdrawalsOrderByWithAggregationInput | BankWithdrawalsOrderByWithAggregationInput[]
    by: BankWithdrawalsScalarFieldEnum[] | BankWithdrawalsScalarFieldEnum
    having?: BankWithdrawalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankWithdrawalsCountAggregateInputType | true
    _avg?: BankWithdrawalsAvgAggregateInputType
    _sum?: BankWithdrawalsSumAggregateInputType
    _min?: BankWithdrawalsMinAggregateInputType
    _max?: BankWithdrawalsMaxAggregateInputType
  }

  export type BankWithdrawalsGroupByOutputType = {
    id: number
    token: string | null
    userId: number
    accountId: number
    amount: number
    net_amount: number
    fee: number
    gateway: $Enums.WithdrawalOption
    status: $Enums.ActionStatus
    updatedAt: Date
    startedAt: Date
    _count: BankWithdrawalsCountAggregateOutputType | null
    _avg: BankWithdrawalsAvgAggregateOutputType | null
    _sum: BankWithdrawalsSumAggregateOutputType | null
    _min: BankWithdrawalsMinAggregateOutputType | null
    _max: BankWithdrawalsMaxAggregateOutputType | null
  }

  type GetBankWithdrawalsGroupByPayload<T extends BankWithdrawalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankWithdrawalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankWithdrawalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankWithdrawalsGroupByOutputType[P]>
            : GetScalarType<T[P], BankWithdrawalsGroupByOutputType[P]>
        }
      >
    >


  export type BankWithdrawalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    accountId?: boolean
    amount?: boolean
    net_amount?: boolean
    fee?: boolean
    gateway?: boolean
    status?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    account?: boolean | SavedBankAccountsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankWithdrawals"]>

  export type BankWithdrawalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    accountId?: boolean
    amount?: boolean
    net_amount?: boolean
    fee?: boolean
    gateway?: boolean
    status?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    account?: boolean | SavedBankAccountsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankWithdrawals"]>

  export type BankWithdrawalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    accountId?: boolean
    amount?: boolean
    net_amount?: boolean
    fee?: boolean
    gateway?: boolean
    status?: boolean
    updatedAt?: boolean
    startedAt?: boolean
    account?: boolean | SavedBankAccountsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankWithdrawals"]>

  export type BankWithdrawalsSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    accountId?: boolean
    amount?: boolean
    net_amount?: boolean
    fee?: boolean
    gateway?: boolean
    status?: boolean
    updatedAt?: boolean
    startedAt?: boolean
  }

  export type BankWithdrawalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "accountId" | "amount" | "net_amount" | "fee" | "gateway" | "status" | "updatedAt" | "startedAt", ExtArgs["result"]["bankWithdrawals"]>
  export type BankWithdrawalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | SavedBankAccountsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BankWithdrawalsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | SavedBankAccountsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BankWithdrawalsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | SavedBankAccountsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BankWithdrawalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankWithdrawals"
    objects: {
      account: Prisma.$SavedBankAccountsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string | null
      userId: number
      accountId: number
      amount: number
      net_amount: number
      fee: number
      gateway: $Enums.WithdrawalOption
      status: $Enums.ActionStatus
      updatedAt: Date
      startedAt: Date
    }, ExtArgs["result"]["bankWithdrawals"]>
    composites: {}
  }

  type BankWithdrawalsGetPayload<S extends boolean | null | undefined | BankWithdrawalsDefaultArgs> = $Result.GetResult<Prisma.$BankWithdrawalsPayload, S>

  type BankWithdrawalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankWithdrawalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankWithdrawalsCountAggregateInputType | true
    }

  export interface BankWithdrawalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankWithdrawals'], meta: { name: 'BankWithdrawals' } }
    /**
     * Find zero or one BankWithdrawals that matches the filter.
     * @param {BankWithdrawalsFindUniqueArgs} args - Arguments to find a BankWithdrawals
     * @example
     * // Get one BankWithdrawals
     * const bankWithdrawals = await prisma.bankWithdrawals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankWithdrawalsFindUniqueArgs>(args: SelectSubset<T, BankWithdrawalsFindUniqueArgs<ExtArgs>>): Prisma__BankWithdrawalsClient<$Result.GetResult<Prisma.$BankWithdrawalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankWithdrawals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankWithdrawalsFindUniqueOrThrowArgs} args - Arguments to find a BankWithdrawals
     * @example
     * // Get one BankWithdrawals
     * const bankWithdrawals = await prisma.bankWithdrawals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankWithdrawalsFindUniqueOrThrowArgs>(args: SelectSubset<T, BankWithdrawalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankWithdrawalsClient<$Result.GetResult<Prisma.$BankWithdrawalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankWithdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankWithdrawalsFindFirstArgs} args - Arguments to find a BankWithdrawals
     * @example
     * // Get one BankWithdrawals
     * const bankWithdrawals = await prisma.bankWithdrawals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankWithdrawalsFindFirstArgs>(args?: SelectSubset<T, BankWithdrawalsFindFirstArgs<ExtArgs>>): Prisma__BankWithdrawalsClient<$Result.GetResult<Prisma.$BankWithdrawalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankWithdrawals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankWithdrawalsFindFirstOrThrowArgs} args - Arguments to find a BankWithdrawals
     * @example
     * // Get one BankWithdrawals
     * const bankWithdrawals = await prisma.bankWithdrawals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankWithdrawalsFindFirstOrThrowArgs>(args?: SelectSubset<T, BankWithdrawalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankWithdrawalsClient<$Result.GetResult<Prisma.$BankWithdrawalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankWithdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankWithdrawalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankWithdrawals
     * const bankWithdrawals = await prisma.bankWithdrawals.findMany()
     * 
     * // Get first 10 BankWithdrawals
     * const bankWithdrawals = await prisma.bankWithdrawals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankWithdrawalsWithIdOnly = await prisma.bankWithdrawals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankWithdrawalsFindManyArgs>(args?: SelectSubset<T, BankWithdrawalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankWithdrawalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankWithdrawals.
     * @param {BankWithdrawalsCreateArgs} args - Arguments to create a BankWithdrawals.
     * @example
     * // Create one BankWithdrawals
     * const BankWithdrawals = await prisma.bankWithdrawals.create({
     *   data: {
     *     // ... data to create a BankWithdrawals
     *   }
     * })
     * 
     */
    create<T extends BankWithdrawalsCreateArgs>(args: SelectSubset<T, BankWithdrawalsCreateArgs<ExtArgs>>): Prisma__BankWithdrawalsClient<$Result.GetResult<Prisma.$BankWithdrawalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankWithdrawals.
     * @param {BankWithdrawalsCreateManyArgs} args - Arguments to create many BankWithdrawals.
     * @example
     * // Create many BankWithdrawals
     * const bankWithdrawals = await prisma.bankWithdrawals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankWithdrawalsCreateManyArgs>(args?: SelectSubset<T, BankWithdrawalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankWithdrawals and returns the data saved in the database.
     * @param {BankWithdrawalsCreateManyAndReturnArgs} args - Arguments to create many BankWithdrawals.
     * @example
     * // Create many BankWithdrawals
     * const bankWithdrawals = await prisma.bankWithdrawals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankWithdrawals and only return the `id`
     * const bankWithdrawalsWithIdOnly = await prisma.bankWithdrawals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankWithdrawalsCreateManyAndReturnArgs>(args?: SelectSubset<T, BankWithdrawalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankWithdrawalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BankWithdrawals.
     * @param {BankWithdrawalsDeleteArgs} args - Arguments to delete one BankWithdrawals.
     * @example
     * // Delete one BankWithdrawals
     * const BankWithdrawals = await prisma.bankWithdrawals.delete({
     *   where: {
     *     // ... filter to delete one BankWithdrawals
     *   }
     * })
     * 
     */
    delete<T extends BankWithdrawalsDeleteArgs>(args: SelectSubset<T, BankWithdrawalsDeleteArgs<ExtArgs>>): Prisma__BankWithdrawalsClient<$Result.GetResult<Prisma.$BankWithdrawalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankWithdrawals.
     * @param {BankWithdrawalsUpdateArgs} args - Arguments to update one BankWithdrawals.
     * @example
     * // Update one BankWithdrawals
     * const bankWithdrawals = await prisma.bankWithdrawals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankWithdrawalsUpdateArgs>(args: SelectSubset<T, BankWithdrawalsUpdateArgs<ExtArgs>>): Prisma__BankWithdrawalsClient<$Result.GetResult<Prisma.$BankWithdrawalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankWithdrawals.
     * @param {BankWithdrawalsDeleteManyArgs} args - Arguments to filter BankWithdrawals to delete.
     * @example
     * // Delete a few BankWithdrawals
     * const { count } = await prisma.bankWithdrawals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankWithdrawalsDeleteManyArgs>(args?: SelectSubset<T, BankWithdrawalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankWithdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankWithdrawalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankWithdrawals
     * const bankWithdrawals = await prisma.bankWithdrawals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankWithdrawalsUpdateManyArgs>(args: SelectSubset<T, BankWithdrawalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankWithdrawals and returns the data updated in the database.
     * @param {BankWithdrawalsUpdateManyAndReturnArgs} args - Arguments to update many BankWithdrawals.
     * @example
     * // Update many BankWithdrawals
     * const bankWithdrawals = await prisma.bankWithdrawals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BankWithdrawals and only return the `id`
     * const bankWithdrawalsWithIdOnly = await prisma.bankWithdrawals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BankWithdrawalsUpdateManyAndReturnArgs>(args: SelectSubset<T, BankWithdrawalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankWithdrawalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BankWithdrawals.
     * @param {BankWithdrawalsUpsertArgs} args - Arguments to update or create a BankWithdrawals.
     * @example
     * // Update or create a BankWithdrawals
     * const bankWithdrawals = await prisma.bankWithdrawals.upsert({
     *   create: {
     *     // ... data to create a BankWithdrawals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankWithdrawals we want to update
     *   }
     * })
     */
    upsert<T extends BankWithdrawalsUpsertArgs>(args: SelectSubset<T, BankWithdrawalsUpsertArgs<ExtArgs>>): Prisma__BankWithdrawalsClient<$Result.GetResult<Prisma.$BankWithdrawalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankWithdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankWithdrawalsCountArgs} args - Arguments to filter BankWithdrawals to count.
     * @example
     * // Count the number of BankWithdrawals
     * const count = await prisma.bankWithdrawals.count({
     *   where: {
     *     // ... the filter for the BankWithdrawals we want to count
     *   }
     * })
    **/
    count<T extends BankWithdrawalsCountArgs>(
      args?: Subset<T, BankWithdrawalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankWithdrawalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankWithdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankWithdrawalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankWithdrawalsAggregateArgs>(args: Subset<T, BankWithdrawalsAggregateArgs>): Prisma.PrismaPromise<GetBankWithdrawalsAggregateType<T>>

    /**
     * Group by BankWithdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankWithdrawalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankWithdrawalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankWithdrawalsGroupByArgs['orderBy'] }
        : { orderBy?: BankWithdrawalsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankWithdrawalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankWithdrawalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankWithdrawals model
   */
  readonly fields: BankWithdrawalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankWithdrawals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankWithdrawalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends SavedBankAccountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SavedBankAccountsDefaultArgs<ExtArgs>>): Prisma__SavedBankAccountsClient<$Result.GetResult<Prisma.$SavedBankAccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BankWithdrawals model
   */
  interface BankWithdrawalsFieldRefs {
    readonly id: FieldRef<"BankWithdrawals", 'Int'>
    readonly token: FieldRef<"BankWithdrawals", 'String'>
    readonly userId: FieldRef<"BankWithdrawals", 'Int'>
    readonly accountId: FieldRef<"BankWithdrawals", 'Int'>
    readonly amount: FieldRef<"BankWithdrawals", 'Int'>
    readonly net_amount: FieldRef<"BankWithdrawals", 'Int'>
    readonly fee: FieldRef<"BankWithdrawals", 'Int'>
    readonly gateway: FieldRef<"BankWithdrawals", 'WithdrawalOption'>
    readonly status: FieldRef<"BankWithdrawals", 'ActionStatus'>
    readonly updatedAt: FieldRef<"BankWithdrawals", 'DateTime'>
    readonly startedAt: FieldRef<"BankWithdrawals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BankWithdrawals findUnique
   */
  export type BankWithdrawalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankWithdrawals
     */
    select?: BankWithdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankWithdrawals
     */
    omit?: BankWithdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankWithdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which BankWithdrawals to fetch.
     */
    where: BankWithdrawalsWhereUniqueInput
  }

  /**
   * BankWithdrawals findUniqueOrThrow
   */
  export type BankWithdrawalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankWithdrawals
     */
    select?: BankWithdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankWithdrawals
     */
    omit?: BankWithdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankWithdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which BankWithdrawals to fetch.
     */
    where: BankWithdrawalsWhereUniqueInput
  }

  /**
   * BankWithdrawals findFirst
   */
  export type BankWithdrawalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankWithdrawals
     */
    select?: BankWithdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankWithdrawals
     */
    omit?: BankWithdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankWithdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which BankWithdrawals to fetch.
     */
    where?: BankWithdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankWithdrawals to fetch.
     */
    orderBy?: BankWithdrawalsOrderByWithRelationInput | BankWithdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankWithdrawals.
     */
    cursor?: BankWithdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankWithdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankWithdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankWithdrawals.
     */
    distinct?: BankWithdrawalsScalarFieldEnum | BankWithdrawalsScalarFieldEnum[]
  }

  /**
   * BankWithdrawals findFirstOrThrow
   */
  export type BankWithdrawalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankWithdrawals
     */
    select?: BankWithdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankWithdrawals
     */
    omit?: BankWithdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankWithdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which BankWithdrawals to fetch.
     */
    where?: BankWithdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankWithdrawals to fetch.
     */
    orderBy?: BankWithdrawalsOrderByWithRelationInput | BankWithdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankWithdrawals.
     */
    cursor?: BankWithdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankWithdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankWithdrawals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankWithdrawals.
     */
    distinct?: BankWithdrawalsScalarFieldEnum | BankWithdrawalsScalarFieldEnum[]
  }

  /**
   * BankWithdrawals findMany
   */
  export type BankWithdrawalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankWithdrawals
     */
    select?: BankWithdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankWithdrawals
     */
    omit?: BankWithdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankWithdrawalsInclude<ExtArgs> | null
    /**
     * Filter, which BankWithdrawals to fetch.
     */
    where?: BankWithdrawalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankWithdrawals to fetch.
     */
    orderBy?: BankWithdrawalsOrderByWithRelationInput | BankWithdrawalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankWithdrawals.
     */
    cursor?: BankWithdrawalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankWithdrawals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankWithdrawals.
     */
    skip?: number
    distinct?: BankWithdrawalsScalarFieldEnum | BankWithdrawalsScalarFieldEnum[]
  }

  /**
   * BankWithdrawals create
   */
  export type BankWithdrawalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankWithdrawals
     */
    select?: BankWithdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankWithdrawals
     */
    omit?: BankWithdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankWithdrawalsInclude<ExtArgs> | null
    /**
     * The data needed to create a BankWithdrawals.
     */
    data: XOR<BankWithdrawalsCreateInput, BankWithdrawalsUncheckedCreateInput>
  }

  /**
   * BankWithdrawals createMany
   */
  export type BankWithdrawalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankWithdrawals.
     */
    data: BankWithdrawalsCreateManyInput | BankWithdrawalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankWithdrawals createManyAndReturn
   */
  export type BankWithdrawalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankWithdrawals
     */
    select?: BankWithdrawalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankWithdrawals
     */
    omit?: BankWithdrawalsOmit<ExtArgs> | null
    /**
     * The data used to create many BankWithdrawals.
     */
    data: BankWithdrawalsCreateManyInput | BankWithdrawalsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankWithdrawalsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankWithdrawals update
   */
  export type BankWithdrawalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankWithdrawals
     */
    select?: BankWithdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankWithdrawals
     */
    omit?: BankWithdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankWithdrawalsInclude<ExtArgs> | null
    /**
     * The data needed to update a BankWithdrawals.
     */
    data: XOR<BankWithdrawalsUpdateInput, BankWithdrawalsUncheckedUpdateInput>
    /**
     * Choose, which BankWithdrawals to update.
     */
    where: BankWithdrawalsWhereUniqueInput
  }

  /**
   * BankWithdrawals updateMany
   */
  export type BankWithdrawalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankWithdrawals.
     */
    data: XOR<BankWithdrawalsUpdateManyMutationInput, BankWithdrawalsUncheckedUpdateManyInput>
    /**
     * Filter which BankWithdrawals to update
     */
    where?: BankWithdrawalsWhereInput
    /**
     * Limit how many BankWithdrawals to update.
     */
    limit?: number
  }

  /**
   * BankWithdrawals updateManyAndReturn
   */
  export type BankWithdrawalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankWithdrawals
     */
    select?: BankWithdrawalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankWithdrawals
     */
    omit?: BankWithdrawalsOmit<ExtArgs> | null
    /**
     * The data used to update BankWithdrawals.
     */
    data: XOR<BankWithdrawalsUpdateManyMutationInput, BankWithdrawalsUncheckedUpdateManyInput>
    /**
     * Filter which BankWithdrawals to update
     */
    where?: BankWithdrawalsWhereInput
    /**
     * Limit how many BankWithdrawals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankWithdrawalsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankWithdrawals upsert
   */
  export type BankWithdrawalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankWithdrawals
     */
    select?: BankWithdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankWithdrawals
     */
    omit?: BankWithdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankWithdrawalsInclude<ExtArgs> | null
    /**
     * The filter to search for the BankWithdrawals to update in case it exists.
     */
    where: BankWithdrawalsWhereUniqueInput
    /**
     * In case the BankWithdrawals found by the `where` argument doesn't exist, create a new BankWithdrawals with this data.
     */
    create: XOR<BankWithdrawalsCreateInput, BankWithdrawalsUncheckedCreateInput>
    /**
     * In case the BankWithdrawals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankWithdrawalsUpdateInput, BankWithdrawalsUncheckedUpdateInput>
  }

  /**
   * BankWithdrawals delete
   */
  export type BankWithdrawalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankWithdrawals
     */
    select?: BankWithdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankWithdrawals
     */
    omit?: BankWithdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankWithdrawalsInclude<ExtArgs> | null
    /**
     * Filter which BankWithdrawals to delete.
     */
    where: BankWithdrawalsWhereUniqueInput
  }

  /**
   * BankWithdrawals deleteMany
   */
  export type BankWithdrawalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankWithdrawals to delete
     */
    where?: BankWithdrawalsWhereInput
    /**
     * Limit how many BankWithdrawals to delete.
     */
    limit?: number
  }

  /**
   * BankWithdrawals without action
   */
  export type BankWithdrawalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankWithdrawals
     */
    select?: BankWithdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankWithdrawals
     */
    omit?: BankWithdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankWithdrawalsInclude<ExtArgs> | null
  }


  /**
   * Model SavedBankAccounts
   */

  export type AggregateSavedBankAccounts = {
    _count: SavedBankAccountsCountAggregateOutputType | null
    _avg: SavedBankAccountsAvgAggregateOutputType | null
    _sum: SavedBankAccountsSumAggregateOutputType | null
    _min: SavedBankAccountsMinAggregateOutputType | null
    _max: SavedBankAccountsMaxAggregateOutputType | null
  }

  export type SavedBankAccountsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SavedBankAccountsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SavedBankAccountsMinAggregateOutputType = {
    id: number | null
    bankCode: string | null
    accountNumber: string | null
    holderName: string | null
    label: string | null
    userId: number | null
    isDeleted: boolean | null
  }

  export type SavedBankAccountsMaxAggregateOutputType = {
    id: number | null
    bankCode: string | null
    accountNumber: string | null
    holderName: string | null
    label: string | null
    userId: number | null
    isDeleted: boolean | null
  }

  export type SavedBankAccountsCountAggregateOutputType = {
    id: number
    bankCode: number
    accountNumber: number
    holderName: number
    label: number
    userId: number
    isDeleted: number
    _all: number
  }


  export type SavedBankAccountsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SavedBankAccountsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SavedBankAccountsMinAggregateInputType = {
    id?: true
    bankCode?: true
    accountNumber?: true
    holderName?: true
    label?: true
    userId?: true
    isDeleted?: true
  }

  export type SavedBankAccountsMaxAggregateInputType = {
    id?: true
    bankCode?: true
    accountNumber?: true
    holderName?: true
    label?: true
    userId?: true
    isDeleted?: true
  }

  export type SavedBankAccountsCountAggregateInputType = {
    id?: true
    bankCode?: true
    accountNumber?: true
    holderName?: true
    label?: true
    userId?: true
    isDeleted?: true
    _all?: true
  }

  export type SavedBankAccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedBankAccounts to aggregate.
     */
    where?: SavedBankAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedBankAccounts to fetch.
     */
    orderBy?: SavedBankAccountsOrderByWithRelationInput | SavedBankAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedBankAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedBankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedBankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedBankAccounts
    **/
    _count?: true | SavedBankAccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedBankAccountsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedBankAccountsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedBankAccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedBankAccountsMaxAggregateInputType
  }

  export type GetSavedBankAccountsAggregateType<T extends SavedBankAccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedBankAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedBankAccounts[P]>
      : GetScalarType<T[P], AggregateSavedBankAccounts[P]>
  }




  export type SavedBankAccountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedBankAccountsWhereInput
    orderBy?: SavedBankAccountsOrderByWithAggregationInput | SavedBankAccountsOrderByWithAggregationInput[]
    by: SavedBankAccountsScalarFieldEnum[] | SavedBankAccountsScalarFieldEnum
    having?: SavedBankAccountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedBankAccountsCountAggregateInputType | true
    _avg?: SavedBankAccountsAvgAggregateInputType
    _sum?: SavedBankAccountsSumAggregateInputType
    _min?: SavedBankAccountsMinAggregateInputType
    _max?: SavedBankAccountsMaxAggregateInputType
  }

  export type SavedBankAccountsGroupByOutputType = {
    id: number
    bankCode: string
    accountNumber: string
    holderName: string
    label: string
    userId: number
    isDeleted: boolean
    _count: SavedBankAccountsCountAggregateOutputType | null
    _avg: SavedBankAccountsAvgAggregateOutputType | null
    _sum: SavedBankAccountsSumAggregateOutputType | null
    _min: SavedBankAccountsMinAggregateOutputType | null
    _max: SavedBankAccountsMaxAggregateOutputType | null
  }

  type GetSavedBankAccountsGroupByPayload<T extends SavedBankAccountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedBankAccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedBankAccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedBankAccountsGroupByOutputType[P]>
            : GetScalarType<T[P], SavedBankAccountsGroupByOutputType[P]>
        }
      >
    >


  export type SavedBankAccountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankCode?: boolean
    accountNumber?: boolean
    holderName?: boolean
    label?: boolean
    userId?: boolean
    isDeleted?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Withdrawals?: boolean | SavedBankAccounts$WithdrawalsArgs<ExtArgs>
    _count?: boolean | SavedBankAccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedBankAccounts"]>

  export type SavedBankAccountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankCode?: boolean
    accountNumber?: boolean
    holderName?: boolean
    label?: boolean
    userId?: boolean
    isDeleted?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedBankAccounts"]>

  export type SavedBankAccountsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bankCode?: boolean
    accountNumber?: boolean
    holderName?: boolean
    label?: boolean
    userId?: boolean
    isDeleted?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedBankAccounts"]>

  export type SavedBankAccountsSelectScalar = {
    id?: boolean
    bankCode?: boolean
    accountNumber?: boolean
    holderName?: boolean
    label?: boolean
    userId?: boolean
    isDeleted?: boolean
  }

  export type SavedBankAccountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bankCode" | "accountNumber" | "holderName" | "label" | "userId" | "isDeleted", ExtArgs["result"]["savedBankAccounts"]>
  export type SavedBankAccountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Withdrawals?: boolean | SavedBankAccounts$WithdrawalsArgs<ExtArgs>
    _count?: boolean | SavedBankAccountsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SavedBankAccountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedBankAccountsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavedBankAccountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedBankAccounts"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Withdrawals: Prisma.$BankWithdrawalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bankCode: string
      accountNumber: string
      holderName: string
      label: string
      userId: number
      isDeleted: boolean
    }, ExtArgs["result"]["savedBankAccounts"]>
    composites: {}
  }

  type SavedBankAccountsGetPayload<S extends boolean | null | undefined | SavedBankAccountsDefaultArgs> = $Result.GetResult<Prisma.$SavedBankAccountsPayload, S>

  type SavedBankAccountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedBankAccountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedBankAccountsCountAggregateInputType | true
    }

  export interface SavedBankAccountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedBankAccounts'], meta: { name: 'SavedBankAccounts' } }
    /**
     * Find zero or one SavedBankAccounts that matches the filter.
     * @param {SavedBankAccountsFindUniqueArgs} args - Arguments to find a SavedBankAccounts
     * @example
     * // Get one SavedBankAccounts
     * const savedBankAccounts = await prisma.savedBankAccounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedBankAccountsFindUniqueArgs>(args: SelectSubset<T, SavedBankAccountsFindUniqueArgs<ExtArgs>>): Prisma__SavedBankAccountsClient<$Result.GetResult<Prisma.$SavedBankAccountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedBankAccounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedBankAccountsFindUniqueOrThrowArgs} args - Arguments to find a SavedBankAccounts
     * @example
     * // Get one SavedBankAccounts
     * const savedBankAccounts = await prisma.savedBankAccounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedBankAccountsFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedBankAccountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedBankAccountsClient<$Result.GetResult<Prisma.$SavedBankAccountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedBankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedBankAccountsFindFirstArgs} args - Arguments to find a SavedBankAccounts
     * @example
     * // Get one SavedBankAccounts
     * const savedBankAccounts = await prisma.savedBankAccounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedBankAccountsFindFirstArgs>(args?: SelectSubset<T, SavedBankAccountsFindFirstArgs<ExtArgs>>): Prisma__SavedBankAccountsClient<$Result.GetResult<Prisma.$SavedBankAccountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedBankAccounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedBankAccountsFindFirstOrThrowArgs} args - Arguments to find a SavedBankAccounts
     * @example
     * // Get one SavedBankAccounts
     * const savedBankAccounts = await prisma.savedBankAccounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedBankAccountsFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedBankAccountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedBankAccountsClient<$Result.GetResult<Prisma.$SavedBankAccountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedBankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedBankAccountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedBankAccounts
     * const savedBankAccounts = await prisma.savedBankAccounts.findMany()
     * 
     * // Get first 10 SavedBankAccounts
     * const savedBankAccounts = await prisma.savedBankAccounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedBankAccountsWithIdOnly = await prisma.savedBankAccounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedBankAccountsFindManyArgs>(args?: SelectSubset<T, SavedBankAccountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedBankAccountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedBankAccounts.
     * @param {SavedBankAccountsCreateArgs} args - Arguments to create a SavedBankAccounts.
     * @example
     * // Create one SavedBankAccounts
     * const SavedBankAccounts = await prisma.savedBankAccounts.create({
     *   data: {
     *     // ... data to create a SavedBankAccounts
     *   }
     * })
     * 
     */
    create<T extends SavedBankAccountsCreateArgs>(args: SelectSubset<T, SavedBankAccountsCreateArgs<ExtArgs>>): Prisma__SavedBankAccountsClient<$Result.GetResult<Prisma.$SavedBankAccountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedBankAccounts.
     * @param {SavedBankAccountsCreateManyArgs} args - Arguments to create many SavedBankAccounts.
     * @example
     * // Create many SavedBankAccounts
     * const savedBankAccounts = await prisma.savedBankAccounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedBankAccountsCreateManyArgs>(args?: SelectSubset<T, SavedBankAccountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedBankAccounts and returns the data saved in the database.
     * @param {SavedBankAccountsCreateManyAndReturnArgs} args - Arguments to create many SavedBankAccounts.
     * @example
     * // Create many SavedBankAccounts
     * const savedBankAccounts = await prisma.savedBankAccounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedBankAccounts and only return the `id`
     * const savedBankAccountsWithIdOnly = await prisma.savedBankAccounts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedBankAccountsCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedBankAccountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedBankAccountsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedBankAccounts.
     * @param {SavedBankAccountsDeleteArgs} args - Arguments to delete one SavedBankAccounts.
     * @example
     * // Delete one SavedBankAccounts
     * const SavedBankAccounts = await prisma.savedBankAccounts.delete({
     *   where: {
     *     // ... filter to delete one SavedBankAccounts
     *   }
     * })
     * 
     */
    delete<T extends SavedBankAccountsDeleteArgs>(args: SelectSubset<T, SavedBankAccountsDeleteArgs<ExtArgs>>): Prisma__SavedBankAccountsClient<$Result.GetResult<Prisma.$SavedBankAccountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedBankAccounts.
     * @param {SavedBankAccountsUpdateArgs} args - Arguments to update one SavedBankAccounts.
     * @example
     * // Update one SavedBankAccounts
     * const savedBankAccounts = await prisma.savedBankAccounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedBankAccountsUpdateArgs>(args: SelectSubset<T, SavedBankAccountsUpdateArgs<ExtArgs>>): Prisma__SavedBankAccountsClient<$Result.GetResult<Prisma.$SavedBankAccountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedBankAccounts.
     * @param {SavedBankAccountsDeleteManyArgs} args - Arguments to filter SavedBankAccounts to delete.
     * @example
     * // Delete a few SavedBankAccounts
     * const { count } = await prisma.savedBankAccounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedBankAccountsDeleteManyArgs>(args?: SelectSubset<T, SavedBankAccountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedBankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedBankAccountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedBankAccounts
     * const savedBankAccounts = await prisma.savedBankAccounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedBankAccountsUpdateManyArgs>(args: SelectSubset<T, SavedBankAccountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedBankAccounts and returns the data updated in the database.
     * @param {SavedBankAccountsUpdateManyAndReturnArgs} args - Arguments to update many SavedBankAccounts.
     * @example
     * // Update many SavedBankAccounts
     * const savedBankAccounts = await prisma.savedBankAccounts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedBankAccounts and only return the `id`
     * const savedBankAccountsWithIdOnly = await prisma.savedBankAccounts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedBankAccountsUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedBankAccountsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedBankAccountsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedBankAccounts.
     * @param {SavedBankAccountsUpsertArgs} args - Arguments to update or create a SavedBankAccounts.
     * @example
     * // Update or create a SavedBankAccounts
     * const savedBankAccounts = await prisma.savedBankAccounts.upsert({
     *   create: {
     *     // ... data to create a SavedBankAccounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedBankAccounts we want to update
     *   }
     * })
     */
    upsert<T extends SavedBankAccountsUpsertArgs>(args: SelectSubset<T, SavedBankAccountsUpsertArgs<ExtArgs>>): Prisma__SavedBankAccountsClient<$Result.GetResult<Prisma.$SavedBankAccountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedBankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedBankAccountsCountArgs} args - Arguments to filter SavedBankAccounts to count.
     * @example
     * // Count the number of SavedBankAccounts
     * const count = await prisma.savedBankAccounts.count({
     *   where: {
     *     // ... the filter for the SavedBankAccounts we want to count
     *   }
     * })
    **/
    count<T extends SavedBankAccountsCountArgs>(
      args?: Subset<T, SavedBankAccountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedBankAccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedBankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedBankAccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedBankAccountsAggregateArgs>(args: Subset<T, SavedBankAccountsAggregateArgs>): Prisma.PrismaPromise<GetSavedBankAccountsAggregateType<T>>

    /**
     * Group by SavedBankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedBankAccountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedBankAccountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedBankAccountsGroupByArgs['orderBy'] }
        : { orderBy?: SavedBankAccountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedBankAccountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedBankAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedBankAccounts model
   */
  readonly fields: SavedBankAccountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedBankAccounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedBankAccountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Withdrawals<T extends SavedBankAccounts$WithdrawalsArgs<ExtArgs> = {}>(args?: Subset<T, SavedBankAccounts$WithdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankWithdrawalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedBankAccounts model
   */
  interface SavedBankAccountsFieldRefs {
    readonly id: FieldRef<"SavedBankAccounts", 'Int'>
    readonly bankCode: FieldRef<"SavedBankAccounts", 'String'>
    readonly accountNumber: FieldRef<"SavedBankAccounts", 'String'>
    readonly holderName: FieldRef<"SavedBankAccounts", 'String'>
    readonly label: FieldRef<"SavedBankAccounts", 'String'>
    readonly userId: FieldRef<"SavedBankAccounts", 'Int'>
    readonly isDeleted: FieldRef<"SavedBankAccounts", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SavedBankAccounts findUnique
   */
  export type SavedBankAccountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedBankAccounts
     */
    select?: SavedBankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedBankAccounts
     */
    omit?: SavedBankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedBankAccountsInclude<ExtArgs> | null
    /**
     * Filter, which SavedBankAccounts to fetch.
     */
    where: SavedBankAccountsWhereUniqueInput
  }

  /**
   * SavedBankAccounts findUniqueOrThrow
   */
  export type SavedBankAccountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedBankAccounts
     */
    select?: SavedBankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedBankAccounts
     */
    omit?: SavedBankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedBankAccountsInclude<ExtArgs> | null
    /**
     * Filter, which SavedBankAccounts to fetch.
     */
    where: SavedBankAccountsWhereUniqueInput
  }

  /**
   * SavedBankAccounts findFirst
   */
  export type SavedBankAccountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedBankAccounts
     */
    select?: SavedBankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedBankAccounts
     */
    omit?: SavedBankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedBankAccountsInclude<ExtArgs> | null
    /**
     * Filter, which SavedBankAccounts to fetch.
     */
    where?: SavedBankAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedBankAccounts to fetch.
     */
    orderBy?: SavedBankAccountsOrderByWithRelationInput | SavedBankAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedBankAccounts.
     */
    cursor?: SavedBankAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedBankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedBankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedBankAccounts.
     */
    distinct?: SavedBankAccountsScalarFieldEnum | SavedBankAccountsScalarFieldEnum[]
  }

  /**
   * SavedBankAccounts findFirstOrThrow
   */
  export type SavedBankAccountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedBankAccounts
     */
    select?: SavedBankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedBankAccounts
     */
    omit?: SavedBankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedBankAccountsInclude<ExtArgs> | null
    /**
     * Filter, which SavedBankAccounts to fetch.
     */
    where?: SavedBankAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedBankAccounts to fetch.
     */
    orderBy?: SavedBankAccountsOrderByWithRelationInput | SavedBankAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedBankAccounts.
     */
    cursor?: SavedBankAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedBankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedBankAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedBankAccounts.
     */
    distinct?: SavedBankAccountsScalarFieldEnum | SavedBankAccountsScalarFieldEnum[]
  }

  /**
   * SavedBankAccounts findMany
   */
  export type SavedBankAccountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedBankAccounts
     */
    select?: SavedBankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedBankAccounts
     */
    omit?: SavedBankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedBankAccountsInclude<ExtArgs> | null
    /**
     * Filter, which SavedBankAccounts to fetch.
     */
    where?: SavedBankAccountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedBankAccounts to fetch.
     */
    orderBy?: SavedBankAccountsOrderByWithRelationInput | SavedBankAccountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedBankAccounts.
     */
    cursor?: SavedBankAccountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedBankAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedBankAccounts.
     */
    skip?: number
    distinct?: SavedBankAccountsScalarFieldEnum | SavedBankAccountsScalarFieldEnum[]
  }

  /**
   * SavedBankAccounts create
   */
  export type SavedBankAccountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedBankAccounts
     */
    select?: SavedBankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedBankAccounts
     */
    omit?: SavedBankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedBankAccountsInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedBankAccounts.
     */
    data: XOR<SavedBankAccountsCreateInput, SavedBankAccountsUncheckedCreateInput>
  }

  /**
   * SavedBankAccounts createMany
   */
  export type SavedBankAccountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedBankAccounts.
     */
    data: SavedBankAccountsCreateManyInput | SavedBankAccountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedBankAccounts createManyAndReturn
   */
  export type SavedBankAccountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedBankAccounts
     */
    select?: SavedBankAccountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedBankAccounts
     */
    omit?: SavedBankAccountsOmit<ExtArgs> | null
    /**
     * The data used to create many SavedBankAccounts.
     */
    data: SavedBankAccountsCreateManyInput | SavedBankAccountsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedBankAccountsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedBankAccounts update
   */
  export type SavedBankAccountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedBankAccounts
     */
    select?: SavedBankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedBankAccounts
     */
    omit?: SavedBankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedBankAccountsInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedBankAccounts.
     */
    data: XOR<SavedBankAccountsUpdateInput, SavedBankAccountsUncheckedUpdateInput>
    /**
     * Choose, which SavedBankAccounts to update.
     */
    where: SavedBankAccountsWhereUniqueInput
  }

  /**
   * SavedBankAccounts updateMany
   */
  export type SavedBankAccountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedBankAccounts.
     */
    data: XOR<SavedBankAccountsUpdateManyMutationInput, SavedBankAccountsUncheckedUpdateManyInput>
    /**
     * Filter which SavedBankAccounts to update
     */
    where?: SavedBankAccountsWhereInput
    /**
     * Limit how many SavedBankAccounts to update.
     */
    limit?: number
  }

  /**
   * SavedBankAccounts updateManyAndReturn
   */
  export type SavedBankAccountsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedBankAccounts
     */
    select?: SavedBankAccountsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedBankAccounts
     */
    omit?: SavedBankAccountsOmit<ExtArgs> | null
    /**
     * The data used to update SavedBankAccounts.
     */
    data: XOR<SavedBankAccountsUpdateManyMutationInput, SavedBankAccountsUncheckedUpdateManyInput>
    /**
     * Filter which SavedBankAccounts to update
     */
    where?: SavedBankAccountsWhereInput
    /**
     * Limit how many SavedBankAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedBankAccountsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedBankAccounts upsert
   */
  export type SavedBankAccountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedBankAccounts
     */
    select?: SavedBankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedBankAccounts
     */
    omit?: SavedBankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedBankAccountsInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedBankAccounts to update in case it exists.
     */
    where: SavedBankAccountsWhereUniqueInput
    /**
     * In case the SavedBankAccounts found by the `where` argument doesn't exist, create a new SavedBankAccounts with this data.
     */
    create: XOR<SavedBankAccountsCreateInput, SavedBankAccountsUncheckedCreateInput>
    /**
     * In case the SavedBankAccounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedBankAccountsUpdateInput, SavedBankAccountsUncheckedUpdateInput>
  }

  /**
   * SavedBankAccounts delete
   */
  export type SavedBankAccountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedBankAccounts
     */
    select?: SavedBankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedBankAccounts
     */
    omit?: SavedBankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedBankAccountsInclude<ExtArgs> | null
    /**
     * Filter which SavedBankAccounts to delete.
     */
    where: SavedBankAccountsWhereUniqueInput
  }

  /**
   * SavedBankAccounts deleteMany
   */
  export type SavedBankAccountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedBankAccounts to delete
     */
    where?: SavedBankAccountsWhereInput
    /**
     * Limit how many SavedBankAccounts to delete.
     */
    limit?: number
  }

  /**
   * SavedBankAccounts.Withdrawals
   */
  export type SavedBankAccounts$WithdrawalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankWithdrawals
     */
    select?: BankWithdrawalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankWithdrawals
     */
    omit?: BankWithdrawalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankWithdrawalsInclude<ExtArgs> | null
    where?: BankWithdrawalsWhereInput
    orderBy?: BankWithdrawalsOrderByWithRelationInput | BankWithdrawalsOrderByWithRelationInput[]
    cursor?: BankWithdrawalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankWithdrawalsScalarFieldEnum | BankWithdrawalsScalarFieldEnum[]
  }

  /**
   * SavedBankAccounts without action
   */
  export type SavedBankAccountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedBankAccounts
     */
    select?: SavedBankAccountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedBankAccounts
     */
    omit?: SavedBankAccountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedBankAccountsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    number: 'number',
    password: 'password',
    securityPin: 'securityPin',
    failedPinTries: 'failedPinTries',
    lastFailedPinTry: 'lastFailedPinTry',
    pfpPublicId: 'pfpPublicId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Cloudinary_imagesScalarFieldEnum: {
    public_id: 'public_id',
    url: 'url'
  };

  export type Cloudinary_imagesScalarFieldEnum = (typeof Cloudinary_imagesScalarFieldEnum)[keyof typeof Cloudinary_imagesScalarFieldEnum]


  export const BalanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    locked: 'locked'
  };

  export type BalanceScalarFieldEnum = (typeof BalanceScalarFieldEnum)[keyof typeof BalanceScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    status: 'status',
    statement: 'statement',
    token: 'token',
    provider: 'provider',
    amount: 'amount',
    transactionType: 'transactionType',
    startTime: 'startTime',
    upatedAt: 'upatedAt',
    userId: 'userId'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const WalletTransfersScalarFieldEnum: {
    id: 'id',
    from: 'from',
    to: 'to',
    amount: 'amount',
    status: 'status',
    startedAt: 'startedAt',
    updatedAt: 'updatedAt'
  };

  export type WalletTransfersScalarFieldEnum = (typeof WalletTransfersScalarFieldEnum)[keyof typeof WalletTransfersScalarFieldEnum]


  export const BankWithdrawalsScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    accountId: 'accountId',
    amount: 'amount',
    net_amount: 'net_amount',
    fee: 'fee',
    gateway: 'gateway',
    status: 'status',
    updatedAt: 'updatedAt',
    startedAt: 'startedAt'
  };

  export type BankWithdrawalsScalarFieldEnum = (typeof BankWithdrawalsScalarFieldEnum)[keyof typeof BankWithdrawalsScalarFieldEnum]


  export const SavedBankAccountsScalarFieldEnum: {
    id: 'id',
    bankCode: 'bankCode',
    accountNumber: 'accountNumber',
    holderName: 'holderName',
    label: 'label',
    userId: 'userId',
    isDeleted: 'isDeleted'
  };

  export type SavedBankAccountsScalarFieldEnum = (typeof SavedBankAccountsScalarFieldEnum)[keyof typeof SavedBankAccountsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'WithdrawalOption'
   */
  export type EnumWithdrawalOptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WithdrawalOption'>
    


  /**
   * Reference to a field of type 'WithdrawalOption[]'
   */
  export type ListEnumWithdrawalOptionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WithdrawalOption[]'>
    


  /**
   * Reference to a field of type 'ActionStatus'
   */
  export type EnumActionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActionStatus'>
    


  /**
   * Reference to a field of type 'ActionStatus[]'
   */
  export type ListEnumActionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActionStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    number?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    securityPin?: StringFilter<"User"> | string
    failedPinTries?: IntFilter<"User"> | number
    lastFailedPinTry?: DateTimeNullableFilter<"User"> | Date | string | null
    pfpPublicId?: StringNullableFilter<"User"> | string | null
    pfp?: XOR<Cloudinary_imagesNullableScalarRelationFilter, Cloudinary_imagesWhereInput> | null
    Balance?: BalanceListRelationFilter
    Transactions?: TransactionsListRelationFilter
    IncomingTransaction?: WalletTransfersListRelationFilter
    OutgoingTransaction?: WalletTransfersListRelationFilter
    SavedBankAccounts?: SavedBankAccountsListRelationFilter
    BankWithdrawals?: BankWithdrawalsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    securityPin?: SortOrder
    failedPinTries?: SortOrder
    lastFailedPinTry?: SortOrderInput | SortOrder
    pfpPublicId?: SortOrderInput | SortOrder
    pfp?: Cloudinary_imagesOrderByWithRelationInput
    Balance?: BalanceOrderByRelationAggregateInput
    Transactions?: TransactionsOrderByRelationAggregateInput
    IncomingTransaction?: WalletTransfersOrderByRelationAggregateInput
    OutgoingTransaction?: WalletTransfersOrderByRelationAggregateInput
    SavedBankAccounts?: SavedBankAccountsOrderByRelationAggregateInput
    BankWithdrawals?: BankWithdrawalsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    number?: string
    pfpPublicId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    securityPin?: StringFilter<"User"> | string
    failedPinTries?: IntFilter<"User"> | number
    lastFailedPinTry?: DateTimeNullableFilter<"User"> | Date | string | null
    pfp?: XOR<Cloudinary_imagesNullableScalarRelationFilter, Cloudinary_imagesWhereInput> | null
    Balance?: BalanceListRelationFilter
    Transactions?: TransactionsListRelationFilter
    IncomingTransaction?: WalletTransfersListRelationFilter
    OutgoingTransaction?: WalletTransfersListRelationFilter
    SavedBankAccounts?: SavedBankAccountsListRelationFilter
    BankWithdrawals?: BankWithdrawalsListRelationFilter
  }, "id" | "email" | "number" | "pfpPublicId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    securityPin?: SortOrder
    failedPinTries?: SortOrder
    lastFailedPinTry?: SortOrderInput | SortOrder
    pfpPublicId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    number?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    securityPin?: StringWithAggregatesFilter<"User"> | string
    failedPinTries?: IntWithAggregatesFilter<"User"> | number
    lastFailedPinTry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    pfpPublicId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type Cloudinary_imagesWhereInput = {
    AND?: Cloudinary_imagesWhereInput | Cloudinary_imagesWhereInput[]
    OR?: Cloudinary_imagesWhereInput[]
    NOT?: Cloudinary_imagesWhereInput | Cloudinary_imagesWhereInput[]
    public_id?: StringFilter<"Cloudinary_images"> | string
    url?: StringFilter<"Cloudinary_images"> | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type Cloudinary_imagesOrderByWithRelationInput = {
    public_id?: SortOrder
    url?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type Cloudinary_imagesWhereUniqueInput = Prisma.AtLeast<{
    public_id?: string
    AND?: Cloudinary_imagesWhereInput | Cloudinary_imagesWhereInput[]
    OR?: Cloudinary_imagesWhereInput[]
    NOT?: Cloudinary_imagesWhereInput | Cloudinary_imagesWhereInput[]
    url?: StringFilter<"Cloudinary_images"> | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "public_id">

  export type Cloudinary_imagesOrderByWithAggregationInput = {
    public_id?: SortOrder
    url?: SortOrder
    _count?: Cloudinary_imagesCountOrderByAggregateInput
    _max?: Cloudinary_imagesMaxOrderByAggregateInput
    _min?: Cloudinary_imagesMinOrderByAggregateInput
  }

  export type Cloudinary_imagesScalarWhereWithAggregatesInput = {
    AND?: Cloudinary_imagesScalarWhereWithAggregatesInput | Cloudinary_imagesScalarWhereWithAggregatesInput[]
    OR?: Cloudinary_imagesScalarWhereWithAggregatesInput[]
    NOT?: Cloudinary_imagesScalarWhereWithAggregatesInput | Cloudinary_imagesScalarWhereWithAggregatesInput[]
    public_id?: StringWithAggregatesFilter<"Cloudinary_images"> | string
    url?: StringWithAggregatesFilter<"Cloudinary_images"> | string
  }

  export type BalanceWhereInput = {
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    id?: IntFilter<"Balance"> | number
    userId?: IntFilter<"Balance"> | number
    amount?: IntFilter<"Balance"> | number
    locked?: IntFilter<"Balance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BalanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    amount?: IntFilter<"Balance"> | number
    locked?: IntFilter<"Balance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BalanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    _count?: BalanceCountOrderByAggregateInput
    _avg?: BalanceAvgOrderByAggregateInput
    _max?: BalanceMaxOrderByAggregateInput
    _min?: BalanceMinOrderByAggregateInput
    _sum?: BalanceSumOrderByAggregateInput
  }

  export type BalanceScalarWhereWithAggregatesInput = {
    AND?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    OR?: BalanceScalarWhereWithAggregatesInput[]
    NOT?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Balance"> | number
    userId?: IntWithAggregatesFilter<"Balance"> | number
    amount?: IntWithAggregatesFilter<"Balance"> | number
    locked?: IntWithAggregatesFilter<"Balance"> | number
  }

  export type TransactionsWhereInput = {
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    id?: IntFilter<"Transactions"> | number
    status?: EnumStatusFilter<"Transactions"> | $Enums.Status
    statement?: StringFilter<"Transactions"> | string
    token?: StringFilter<"Transactions"> | string
    provider?: StringFilter<"Transactions"> | string
    amount?: IntFilter<"Transactions"> | number
    transactionType?: EnumTransactionTypeFilter<"Transactions"> | $Enums.TransactionType
    startTime?: DateTimeFilter<"Transactions"> | Date | string
    upatedAt?: DateTimeFilter<"Transactions"> | Date | string
    userId?: IntFilter<"Transactions"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionsOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    statement?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    transactionType?: SortOrder
    startTime?: SortOrder
    upatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: TransactionsWhereInput | TransactionsWhereInput[]
    OR?: TransactionsWhereInput[]
    NOT?: TransactionsWhereInput | TransactionsWhereInput[]
    status?: EnumStatusFilter<"Transactions"> | $Enums.Status
    statement?: StringFilter<"Transactions"> | string
    provider?: StringFilter<"Transactions"> | string
    amount?: IntFilter<"Transactions"> | number
    transactionType?: EnumTransactionTypeFilter<"Transactions"> | $Enums.TransactionType
    startTime?: DateTimeFilter<"Transactions"> | Date | string
    upatedAt?: DateTimeFilter<"Transactions"> | Date | string
    userId?: IntFilter<"Transactions"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type TransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    statement?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    transactionType?: SortOrder
    startTime?: SortOrder
    upatedAt?: SortOrder
    userId?: SortOrder
    _count?: TransactionsCountOrderByAggregateInput
    _avg?: TransactionsAvgOrderByAggregateInput
    _max?: TransactionsMaxOrderByAggregateInput
    _min?: TransactionsMinOrderByAggregateInput
    _sum?: TransactionsSumOrderByAggregateInput
  }

  export type TransactionsScalarWhereWithAggregatesInput = {
    AND?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    OR?: TransactionsScalarWhereWithAggregatesInput[]
    NOT?: TransactionsScalarWhereWithAggregatesInput | TransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transactions"> | number
    status?: EnumStatusWithAggregatesFilter<"Transactions"> | $Enums.Status
    statement?: StringWithAggregatesFilter<"Transactions"> | string
    token?: StringWithAggregatesFilter<"Transactions"> | string
    provider?: StringWithAggregatesFilter<"Transactions"> | string
    amount?: IntWithAggregatesFilter<"Transactions"> | number
    transactionType?: EnumTransactionTypeWithAggregatesFilter<"Transactions"> | $Enums.TransactionType
    startTime?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
    upatedAt?: DateTimeWithAggregatesFilter<"Transactions"> | Date | string
    userId?: IntWithAggregatesFilter<"Transactions"> | number
  }

  export type WalletTransfersWhereInput = {
    AND?: WalletTransfersWhereInput | WalletTransfersWhereInput[]
    OR?: WalletTransfersWhereInput[]
    NOT?: WalletTransfersWhereInput | WalletTransfersWhereInput[]
    id?: IntFilter<"WalletTransfers"> | number
    from?: IntFilter<"WalletTransfers"> | number
    to?: IntFilter<"WalletTransfers"> | number
    amount?: IntFilter<"WalletTransfers"> | number
    status?: EnumStatusFilter<"WalletTransfers"> | $Enums.Status
    startedAt?: DateTimeFilter<"WalletTransfers"> | Date | string
    updatedAt?: DateTimeFilter<"WalletTransfers"> | Date | string
    FromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    ToUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WalletTransfersOrderByWithRelationInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
    FromUser?: UserOrderByWithRelationInput
    ToUser?: UserOrderByWithRelationInput
  }

  export type WalletTransfersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WalletTransfersWhereInput | WalletTransfersWhereInput[]
    OR?: WalletTransfersWhereInput[]
    NOT?: WalletTransfersWhereInput | WalletTransfersWhereInput[]
    from?: IntFilter<"WalletTransfers"> | number
    to?: IntFilter<"WalletTransfers"> | number
    amount?: IntFilter<"WalletTransfers"> | number
    status?: EnumStatusFilter<"WalletTransfers"> | $Enums.Status
    startedAt?: DateTimeFilter<"WalletTransfers"> | Date | string
    updatedAt?: DateTimeFilter<"WalletTransfers"> | Date | string
    FromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    ToUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WalletTransfersOrderByWithAggregationInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WalletTransfersCountOrderByAggregateInput
    _avg?: WalletTransfersAvgOrderByAggregateInput
    _max?: WalletTransfersMaxOrderByAggregateInput
    _min?: WalletTransfersMinOrderByAggregateInput
    _sum?: WalletTransfersSumOrderByAggregateInput
  }

  export type WalletTransfersScalarWhereWithAggregatesInput = {
    AND?: WalletTransfersScalarWhereWithAggregatesInput | WalletTransfersScalarWhereWithAggregatesInput[]
    OR?: WalletTransfersScalarWhereWithAggregatesInput[]
    NOT?: WalletTransfersScalarWhereWithAggregatesInput | WalletTransfersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WalletTransfers"> | number
    from?: IntWithAggregatesFilter<"WalletTransfers"> | number
    to?: IntWithAggregatesFilter<"WalletTransfers"> | number
    amount?: IntWithAggregatesFilter<"WalletTransfers"> | number
    status?: EnumStatusWithAggregatesFilter<"WalletTransfers"> | $Enums.Status
    startedAt?: DateTimeWithAggregatesFilter<"WalletTransfers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WalletTransfers"> | Date | string
  }

  export type BankWithdrawalsWhereInput = {
    AND?: BankWithdrawalsWhereInput | BankWithdrawalsWhereInput[]
    OR?: BankWithdrawalsWhereInput[]
    NOT?: BankWithdrawalsWhereInput | BankWithdrawalsWhereInput[]
    id?: IntFilter<"BankWithdrawals"> | number
    token?: StringNullableFilter<"BankWithdrawals"> | string | null
    userId?: IntFilter<"BankWithdrawals"> | number
    accountId?: IntFilter<"BankWithdrawals"> | number
    amount?: IntFilter<"BankWithdrawals"> | number
    net_amount?: IntFilter<"BankWithdrawals"> | number
    fee?: IntFilter<"BankWithdrawals"> | number
    gateway?: EnumWithdrawalOptionFilter<"BankWithdrawals"> | $Enums.WithdrawalOption
    status?: EnumActionStatusFilter<"BankWithdrawals"> | $Enums.ActionStatus
    updatedAt?: DateTimeFilter<"BankWithdrawals"> | Date | string
    startedAt?: DateTimeFilter<"BankWithdrawals"> | Date | string
    account?: XOR<SavedBankAccountsScalarRelationFilter, SavedBankAccountsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BankWithdrawalsOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrderInput | SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    net_amount?: SortOrder
    fee?: SortOrder
    gateway?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    account?: SavedBankAccountsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BankWithdrawalsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: BankWithdrawalsWhereInput | BankWithdrawalsWhereInput[]
    OR?: BankWithdrawalsWhereInput[]
    NOT?: BankWithdrawalsWhereInput | BankWithdrawalsWhereInput[]
    userId?: IntFilter<"BankWithdrawals"> | number
    accountId?: IntFilter<"BankWithdrawals"> | number
    amount?: IntFilter<"BankWithdrawals"> | number
    net_amount?: IntFilter<"BankWithdrawals"> | number
    fee?: IntFilter<"BankWithdrawals"> | number
    gateway?: EnumWithdrawalOptionFilter<"BankWithdrawals"> | $Enums.WithdrawalOption
    status?: EnumActionStatusFilter<"BankWithdrawals"> | $Enums.ActionStatus
    updatedAt?: DateTimeFilter<"BankWithdrawals"> | Date | string
    startedAt?: DateTimeFilter<"BankWithdrawals"> | Date | string
    account?: XOR<SavedBankAccountsScalarRelationFilter, SavedBankAccountsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type BankWithdrawalsOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrderInput | SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    net_amount?: SortOrder
    fee?: SortOrder
    gateway?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
    _count?: BankWithdrawalsCountOrderByAggregateInput
    _avg?: BankWithdrawalsAvgOrderByAggregateInput
    _max?: BankWithdrawalsMaxOrderByAggregateInput
    _min?: BankWithdrawalsMinOrderByAggregateInput
    _sum?: BankWithdrawalsSumOrderByAggregateInput
  }

  export type BankWithdrawalsScalarWhereWithAggregatesInput = {
    AND?: BankWithdrawalsScalarWhereWithAggregatesInput | BankWithdrawalsScalarWhereWithAggregatesInput[]
    OR?: BankWithdrawalsScalarWhereWithAggregatesInput[]
    NOT?: BankWithdrawalsScalarWhereWithAggregatesInput | BankWithdrawalsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BankWithdrawals"> | number
    token?: StringNullableWithAggregatesFilter<"BankWithdrawals"> | string | null
    userId?: IntWithAggregatesFilter<"BankWithdrawals"> | number
    accountId?: IntWithAggregatesFilter<"BankWithdrawals"> | number
    amount?: IntWithAggregatesFilter<"BankWithdrawals"> | number
    net_amount?: IntWithAggregatesFilter<"BankWithdrawals"> | number
    fee?: IntWithAggregatesFilter<"BankWithdrawals"> | number
    gateway?: EnumWithdrawalOptionWithAggregatesFilter<"BankWithdrawals"> | $Enums.WithdrawalOption
    status?: EnumActionStatusWithAggregatesFilter<"BankWithdrawals"> | $Enums.ActionStatus
    updatedAt?: DateTimeWithAggregatesFilter<"BankWithdrawals"> | Date | string
    startedAt?: DateTimeWithAggregatesFilter<"BankWithdrawals"> | Date | string
  }

  export type SavedBankAccountsWhereInput = {
    AND?: SavedBankAccountsWhereInput | SavedBankAccountsWhereInput[]
    OR?: SavedBankAccountsWhereInput[]
    NOT?: SavedBankAccountsWhereInput | SavedBankAccountsWhereInput[]
    id?: IntFilter<"SavedBankAccounts"> | number
    bankCode?: StringFilter<"SavedBankAccounts"> | string
    accountNumber?: StringFilter<"SavedBankAccounts"> | string
    holderName?: StringFilter<"SavedBankAccounts"> | string
    label?: StringFilter<"SavedBankAccounts"> | string
    userId?: IntFilter<"SavedBankAccounts"> | number
    isDeleted?: BoolFilter<"SavedBankAccounts"> | boolean
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Withdrawals?: BankWithdrawalsListRelationFilter
  }

  export type SavedBankAccountsOrderByWithRelationInput = {
    id?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    holderName?: SortOrder
    label?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    User?: UserOrderByWithRelationInput
    Withdrawals?: BankWithdrawalsOrderByRelationAggregateInput
  }

  export type SavedBankAccountsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SavedBankAccountsWhereInput | SavedBankAccountsWhereInput[]
    OR?: SavedBankAccountsWhereInput[]
    NOT?: SavedBankAccountsWhereInput | SavedBankAccountsWhereInput[]
    bankCode?: StringFilter<"SavedBankAccounts"> | string
    accountNumber?: StringFilter<"SavedBankAccounts"> | string
    holderName?: StringFilter<"SavedBankAccounts"> | string
    label?: StringFilter<"SavedBankAccounts"> | string
    userId?: IntFilter<"SavedBankAccounts"> | number
    isDeleted?: BoolFilter<"SavedBankAccounts"> | boolean
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Withdrawals?: BankWithdrawalsListRelationFilter
  }, "id">

  export type SavedBankAccountsOrderByWithAggregationInput = {
    id?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    holderName?: SortOrder
    label?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    _count?: SavedBankAccountsCountOrderByAggregateInput
    _avg?: SavedBankAccountsAvgOrderByAggregateInput
    _max?: SavedBankAccountsMaxOrderByAggregateInput
    _min?: SavedBankAccountsMinOrderByAggregateInput
    _sum?: SavedBankAccountsSumOrderByAggregateInput
  }

  export type SavedBankAccountsScalarWhereWithAggregatesInput = {
    AND?: SavedBankAccountsScalarWhereWithAggregatesInput | SavedBankAccountsScalarWhereWithAggregatesInput[]
    OR?: SavedBankAccountsScalarWhereWithAggregatesInput[]
    NOT?: SavedBankAccountsScalarWhereWithAggregatesInput | SavedBankAccountsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SavedBankAccounts"> | number
    bankCode?: StringWithAggregatesFilter<"SavedBankAccounts"> | string
    accountNumber?: StringWithAggregatesFilter<"SavedBankAccounts"> | string
    holderName?: StringWithAggregatesFilter<"SavedBankAccounts"> | string
    label?: StringWithAggregatesFilter<"SavedBankAccounts"> | string
    userId?: IntWithAggregatesFilter<"SavedBankAccounts"> | number
    isDeleted?: BoolWithAggregatesFilter<"SavedBankAccounts"> | boolean
  }

  export type UserCreateInput = {
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfp?: Cloudinary_imagesCreateNestedOneWithoutUserInput
    Balance?: BalanceCreateNestedManyWithoutUserInput
    Transactions?: TransactionsCreateNestedManyWithoutUserInput
    IncomingTransaction?: WalletTransfersCreateNestedManyWithoutToUserInput
    OutgoingTransaction?: WalletTransfersCreateNestedManyWithoutFromUserInput
    SavedBankAccounts?: SavedBankAccountsCreateNestedManyWithoutUserInput
    BankWithdrawals?: BankWithdrawalsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfpPublicId?: string | null
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    IncomingTransaction?: WalletTransfersUncheckedCreateNestedManyWithoutToUserInput
    OutgoingTransaction?: WalletTransfersUncheckedCreateNestedManyWithoutFromUserInput
    SavedBankAccounts?: SavedBankAccountsUncheckedCreateNestedManyWithoutUserInput
    BankWithdrawals?: BankWithdrawalsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfp?: Cloudinary_imagesUpdateOneWithoutUserNestedInput
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    Transactions?: TransactionsUpdateManyWithoutUserNestedInput
    IncomingTransaction?: WalletTransfersUpdateManyWithoutToUserNestedInput
    OutgoingTransaction?: WalletTransfersUpdateManyWithoutFromUserNestedInput
    SavedBankAccounts?: SavedBankAccountsUpdateManyWithoutUserNestedInput
    BankWithdrawals?: BankWithdrawalsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfpPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    IncomingTransaction?: WalletTransfersUncheckedUpdateManyWithoutToUserNestedInput
    OutgoingTransaction?: WalletTransfersUncheckedUpdateManyWithoutFromUserNestedInput
    SavedBankAccounts?: SavedBankAccountsUncheckedUpdateManyWithoutUserNestedInput
    BankWithdrawals?: BankWithdrawalsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfpPublicId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfpPublicId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Cloudinary_imagesCreateInput = {
    public_id: string
    url: string
    User?: UserCreateNestedOneWithoutPfpInput
  }

  export type Cloudinary_imagesUncheckedCreateInput = {
    public_id: string
    url: string
    User?: UserUncheckedCreateNestedOneWithoutPfpInput
  }

  export type Cloudinary_imagesUpdateInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutPfpNestedInput
  }

  export type Cloudinary_imagesUncheckedUpdateInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateOneWithoutPfpNestedInput
  }

  export type Cloudinary_imagesCreateManyInput = {
    public_id: string
    url: string
  }

  export type Cloudinary_imagesUpdateManyMutationInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Cloudinary_imagesUncheckedUpdateManyInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BalanceCreateInput = {
    amount?: number
    locked?: number
    user: UserCreateNestedOneWithoutBalanceInput
  }

  export type BalanceUncheckedCreateInput = {
    id?: number
    userId: number
    amount?: number
    locked?: number
  }

  export type BalanceUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBalanceNestedInput
  }

  export type BalanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceCreateManyInput = {
    id?: number
    userId: number
    amount?: number
    locked?: number
  }

  export type BalanceUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionsCreateInput = {
    status: $Enums.Status
    statement: string
    token: string
    provider: string
    amount: number
    transactionType: $Enums.TransactionType
    startTime?: Date | string
    upatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionsUncheckedCreateInput = {
    id?: number
    status: $Enums.Status
    statement: string
    token: string
    provider: string
    amount: number
    transactionType: $Enums.TransactionType
    startTime?: Date | string
    upatedAt?: Date | string
    userId: number
  }

  export type TransactionsUpdateInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    statement?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    upatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    statement?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    upatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionsCreateManyInput = {
    id?: number
    status: $Enums.Status
    statement: string
    token: string
    provider: string
    amount: number
    transactionType: $Enums.TransactionType
    startTime?: Date | string
    upatedAt?: Date | string
    userId: number
  }

  export type TransactionsUpdateManyMutationInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    statement?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    upatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    statement?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    upatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type WalletTransfersCreateInput = {
    amount: number
    status: $Enums.Status
    startedAt?: Date | string
    updatedAt?: Date | string
    FromUser: UserCreateNestedOneWithoutOutgoingTransactionInput
    ToUser: UserCreateNestedOneWithoutIncomingTransactionInput
  }

  export type WalletTransfersUncheckedCreateInput = {
    id?: number
    from: number
    to: number
    amount: number
    status: $Enums.Status
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletTransfersUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FromUser?: UserUpdateOneRequiredWithoutOutgoingTransactionNestedInput
    ToUser?: UserUpdateOneRequiredWithoutIncomingTransactionNestedInput
  }

  export type WalletTransfersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransfersCreateManyInput = {
    id?: number
    from: number
    to: number
    amount: number
    status: $Enums.Status
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletTransfersUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransfersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankWithdrawalsCreateInput = {
    token?: string | null
    amount: number
    net_amount: number
    fee: number
    gateway: $Enums.WithdrawalOption
    status?: $Enums.ActionStatus
    updatedAt?: Date | string
    startedAt?: Date | string
    account: SavedBankAccountsCreateNestedOneWithoutWithdrawalsInput
    user: UserCreateNestedOneWithoutBankWithdrawalsInput
  }

  export type BankWithdrawalsUncheckedCreateInput = {
    id?: number
    token?: string | null
    userId: number
    accountId: number
    amount: number
    net_amount: number
    fee: number
    gateway: $Enums.WithdrawalOption
    status?: $Enums.ActionStatus
    updatedAt?: Date | string
    startedAt?: Date | string
  }

  export type BankWithdrawalsUpdateInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    net_amount?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    gateway?: EnumWithdrawalOptionFieldUpdateOperationsInput | $Enums.WithdrawalOption
    status?: EnumActionStatusFieldUpdateOperationsInput | $Enums.ActionStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: SavedBankAccountsUpdateOneRequiredWithoutWithdrawalsNestedInput
    user?: UserUpdateOneRequiredWithoutBankWithdrawalsNestedInput
  }

  export type BankWithdrawalsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    net_amount?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    gateway?: EnumWithdrawalOptionFieldUpdateOperationsInput | $Enums.WithdrawalOption
    status?: EnumActionStatusFieldUpdateOperationsInput | $Enums.ActionStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankWithdrawalsCreateManyInput = {
    id?: number
    token?: string | null
    userId: number
    accountId: number
    amount: number
    net_amount: number
    fee: number
    gateway: $Enums.WithdrawalOption
    status?: $Enums.ActionStatus
    updatedAt?: Date | string
    startedAt?: Date | string
  }

  export type BankWithdrawalsUpdateManyMutationInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    net_amount?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    gateway?: EnumWithdrawalOptionFieldUpdateOperationsInput | $Enums.WithdrawalOption
    status?: EnumActionStatusFieldUpdateOperationsInput | $Enums.ActionStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankWithdrawalsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    net_amount?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    gateway?: EnumWithdrawalOptionFieldUpdateOperationsInput | $Enums.WithdrawalOption
    status?: EnumActionStatusFieldUpdateOperationsInput | $Enums.ActionStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedBankAccountsCreateInput = {
    bankCode: string
    accountNumber: string
    holderName: string
    label: string
    isDeleted?: boolean
    User: UserCreateNestedOneWithoutSavedBankAccountsInput
    Withdrawals?: BankWithdrawalsCreateNestedManyWithoutAccountInput
  }

  export type SavedBankAccountsUncheckedCreateInput = {
    id?: number
    bankCode: string
    accountNumber: string
    holderName: string
    label: string
    userId: number
    isDeleted?: boolean
    Withdrawals?: BankWithdrawalsUncheckedCreateNestedManyWithoutAccountInput
  }

  export type SavedBankAccountsUpdateInput = {
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutSavedBankAccountsNestedInput
    Withdrawals?: BankWithdrawalsUpdateManyWithoutAccountNestedInput
  }

  export type SavedBankAccountsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Withdrawals?: BankWithdrawalsUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type SavedBankAccountsCreateManyInput = {
    id?: number
    bankCode: string
    accountNumber: string
    holderName: string
    label: string
    userId: number
    isDeleted?: boolean
  }

  export type SavedBankAccountsUpdateManyMutationInput = {
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SavedBankAccountsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Cloudinary_imagesNullableScalarRelationFilter = {
    is?: Cloudinary_imagesWhereInput | null
    isNot?: Cloudinary_imagesWhereInput | null
  }

  export type BalanceListRelationFilter = {
    every?: BalanceWhereInput
    some?: BalanceWhereInput
    none?: BalanceWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: TransactionsWhereInput
    some?: TransactionsWhereInput
    none?: TransactionsWhereInput
  }

  export type WalletTransfersListRelationFilter = {
    every?: WalletTransfersWhereInput
    some?: WalletTransfersWhereInput
    none?: WalletTransfersWhereInput
  }

  export type SavedBankAccountsListRelationFilter = {
    every?: SavedBankAccountsWhereInput
    some?: SavedBankAccountsWhereInput
    none?: SavedBankAccountsWhereInput
  }

  export type BankWithdrawalsListRelationFilter = {
    every?: BankWithdrawalsWhereInput
    some?: BankWithdrawalsWhereInput
    none?: BankWithdrawalsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletTransfersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedBankAccountsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BankWithdrawalsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    securityPin?: SortOrder
    failedPinTries?: SortOrder
    lastFailedPinTry?: SortOrder
    pfpPublicId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    failedPinTries?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    securityPin?: SortOrder
    failedPinTries?: SortOrder
    lastFailedPinTry?: SortOrder
    pfpPublicId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    number?: SortOrder
    password?: SortOrder
    securityPin?: SortOrder
    failedPinTries?: SortOrder
    lastFailedPinTry?: SortOrder
    pfpPublicId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    failedPinTries?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type Cloudinary_imagesCountOrderByAggregateInput = {
    public_id?: SortOrder
    url?: SortOrder
  }

  export type Cloudinary_imagesMaxOrderByAggregateInput = {
    public_id?: SortOrder
    url?: SortOrder
  }

  export type Cloudinary_imagesMinOrderByAggregateInput = {
    public_id?: SortOrder
    url?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BalanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type BalanceAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type BalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type BalanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type BalanceSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    statement?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    transactionType?: SortOrder
    startTime?: SortOrder
    upatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type TransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    statement?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    transactionType?: SortOrder
    startTime?: SortOrder
    upatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    statement?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    transactionType?: SortOrder
    startTime?: SortOrder
    upatedAt?: SortOrder
    userId?: SortOrder
  }

  export type TransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WalletTransfersCountOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletTransfersAvgOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    amount?: SortOrder
  }

  export type WalletTransfersMaxOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletTransfersMinOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletTransfersSumOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    amount?: SortOrder
  }

  export type EnumWithdrawalOptionFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawalOption | EnumWithdrawalOptionFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawalOption[] | ListEnumWithdrawalOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawalOption[] | ListEnumWithdrawalOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawalOptionFilter<$PrismaModel> | $Enums.WithdrawalOption
  }

  export type EnumActionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionStatus | EnumActionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActionStatus[] | ListEnumActionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionStatus[] | ListEnumActionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumActionStatusFilter<$PrismaModel> | $Enums.ActionStatus
  }

  export type SavedBankAccountsScalarRelationFilter = {
    is?: SavedBankAccountsWhereInput
    isNot?: SavedBankAccountsWhereInput
  }

  export type BankWithdrawalsCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    net_amount?: SortOrder
    fee?: SortOrder
    gateway?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
  }

  export type BankWithdrawalsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    net_amount?: SortOrder
    fee?: SortOrder
  }

  export type BankWithdrawalsMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    net_amount?: SortOrder
    fee?: SortOrder
    gateway?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
  }

  export type BankWithdrawalsMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    net_amount?: SortOrder
    fee?: SortOrder
    gateway?: SortOrder
    status?: SortOrder
    updatedAt?: SortOrder
    startedAt?: SortOrder
  }

  export type BankWithdrawalsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
    net_amount?: SortOrder
    fee?: SortOrder
  }

  export type EnumWithdrawalOptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawalOption | EnumWithdrawalOptionFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawalOption[] | ListEnumWithdrawalOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawalOption[] | ListEnumWithdrawalOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawalOptionWithAggregatesFilter<$PrismaModel> | $Enums.WithdrawalOption
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWithdrawalOptionFilter<$PrismaModel>
    _max?: NestedEnumWithdrawalOptionFilter<$PrismaModel>
  }

  export type EnumActionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionStatus | EnumActionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActionStatus[] | ListEnumActionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionStatus[] | ListEnumActionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumActionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ActionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionStatusFilter<$PrismaModel>
    _max?: NestedEnumActionStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SavedBankAccountsCountOrderByAggregateInput = {
    id?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    holderName?: SortOrder
    label?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
  }

  export type SavedBankAccountsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SavedBankAccountsMaxOrderByAggregateInput = {
    id?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    holderName?: SortOrder
    label?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
  }

  export type SavedBankAccountsMinOrderByAggregateInput = {
    id?: SortOrder
    bankCode?: SortOrder
    accountNumber?: SortOrder
    holderName?: SortOrder
    label?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
  }

  export type SavedBankAccountsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Cloudinary_imagesCreateNestedOneWithoutUserInput = {
    create?: XOR<Cloudinary_imagesCreateWithoutUserInput, Cloudinary_imagesUncheckedCreateWithoutUserInput>
    connectOrCreate?: Cloudinary_imagesCreateOrConnectWithoutUserInput
    connect?: Cloudinary_imagesWhereUniqueInput
  }

  export type BalanceCreateNestedManyWithoutUserInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
  }

  export type TransactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type WalletTransfersCreateNestedManyWithoutToUserInput = {
    create?: XOR<WalletTransfersCreateWithoutToUserInput, WalletTransfersUncheckedCreateWithoutToUserInput> | WalletTransfersCreateWithoutToUserInput[] | WalletTransfersUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: WalletTransfersCreateOrConnectWithoutToUserInput | WalletTransfersCreateOrConnectWithoutToUserInput[]
    createMany?: WalletTransfersCreateManyToUserInputEnvelope
    connect?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
  }

  export type WalletTransfersCreateNestedManyWithoutFromUserInput = {
    create?: XOR<WalletTransfersCreateWithoutFromUserInput, WalletTransfersUncheckedCreateWithoutFromUserInput> | WalletTransfersCreateWithoutFromUserInput[] | WalletTransfersUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: WalletTransfersCreateOrConnectWithoutFromUserInput | WalletTransfersCreateOrConnectWithoutFromUserInput[]
    createMany?: WalletTransfersCreateManyFromUserInputEnvelope
    connect?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
  }

  export type SavedBankAccountsCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedBankAccountsCreateWithoutUserInput, SavedBankAccountsUncheckedCreateWithoutUserInput> | SavedBankAccountsCreateWithoutUserInput[] | SavedBankAccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedBankAccountsCreateOrConnectWithoutUserInput | SavedBankAccountsCreateOrConnectWithoutUserInput[]
    createMany?: SavedBankAccountsCreateManyUserInputEnvelope
    connect?: SavedBankAccountsWhereUniqueInput | SavedBankAccountsWhereUniqueInput[]
  }

  export type BankWithdrawalsCreateNestedManyWithoutUserInput = {
    create?: XOR<BankWithdrawalsCreateWithoutUserInput, BankWithdrawalsUncheckedCreateWithoutUserInput> | BankWithdrawalsCreateWithoutUserInput[] | BankWithdrawalsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankWithdrawalsCreateOrConnectWithoutUserInput | BankWithdrawalsCreateOrConnectWithoutUserInput[]
    createMany?: BankWithdrawalsCreateManyUserInputEnvelope
    connect?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
  }

  export type BalanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
  }

  export type TransactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
  }

  export type WalletTransfersUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<WalletTransfersCreateWithoutToUserInput, WalletTransfersUncheckedCreateWithoutToUserInput> | WalletTransfersCreateWithoutToUserInput[] | WalletTransfersUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: WalletTransfersCreateOrConnectWithoutToUserInput | WalletTransfersCreateOrConnectWithoutToUserInput[]
    createMany?: WalletTransfersCreateManyToUserInputEnvelope
    connect?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
  }

  export type WalletTransfersUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<WalletTransfersCreateWithoutFromUserInput, WalletTransfersUncheckedCreateWithoutFromUserInput> | WalletTransfersCreateWithoutFromUserInput[] | WalletTransfersUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: WalletTransfersCreateOrConnectWithoutFromUserInput | WalletTransfersCreateOrConnectWithoutFromUserInput[]
    createMany?: WalletTransfersCreateManyFromUserInputEnvelope
    connect?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
  }

  export type SavedBankAccountsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedBankAccountsCreateWithoutUserInput, SavedBankAccountsUncheckedCreateWithoutUserInput> | SavedBankAccountsCreateWithoutUserInput[] | SavedBankAccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedBankAccountsCreateOrConnectWithoutUserInput | SavedBankAccountsCreateOrConnectWithoutUserInput[]
    createMany?: SavedBankAccountsCreateManyUserInputEnvelope
    connect?: SavedBankAccountsWhereUniqueInput | SavedBankAccountsWhereUniqueInput[]
  }

  export type BankWithdrawalsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BankWithdrawalsCreateWithoutUserInput, BankWithdrawalsUncheckedCreateWithoutUserInput> | BankWithdrawalsCreateWithoutUserInput[] | BankWithdrawalsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankWithdrawalsCreateOrConnectWithoutUserInput | BankWithdrawalsCreateOrConnectWithoutUserInput[]
    createMany?: BankWithdrawalsCreateManyUserInputEnvelope
    connect?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Cloudinary_imagesUpdateOneWithoutUserNestedInput = {
    create?: XOR<Cloudinary_imagesCreateWithoutUserInput, Cloudinary_imagesUncheckedCreateWithoutUserInput>
    connectOrCreate?: Cloudinary_imagesCreateOrConnectWithoutUserInput
    upsert?: Cloudinary_imagesUpsertWithoutUserInput
    disconnect?: Cloudinary_imagesWhereInput | boolean
    delete?: Cloudinary_imagesWhereInput | boolean
    connect?: Cloudinary_imagesWhereUniqueInput
    update?: XOR<XOR<Cloudinary_imagesUpdateToOneWithWhereWithoutUserInput, Cloudinary_imagesUpdateWithoutUserInput>, Cloudinary_imagesUncheckedUpdateWithoutUserInput>
  }

  export type BalanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    upsert?: BalanceUpsertWithWhereUniqueWithoutUserInput | BalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    set?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    disconnect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    delete?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    update?: BalanceUpdateWithWhereUniqueWithoutUserInput | BalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BalanceUpdateManyWithWhereWithoutUserInput | BalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
  }

  export type TransactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type WalletTransfersUpdateManyWithoutToUserNestedInput = {
    create?: XOR<WalletTransfersCreateWithoutToUserInput, WalletTransfersUncheckedCreateWithoutToUserInput> | WalletTransfersCreateWithoutToUserInput[] | WalletTransfersUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: WalletTransfersCreateOrConnectWithoutToUserInput | WalletTransfersCreateOrConnectWithoutToUserInput[]
    upsert?: WalletTransfersUpsertWithWhereUniqueWithoutToUserInput | WalletTransfersUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: WalletTransfersCreateManyToUserInputEnvelope
    set?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    disconnect?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    delete?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    connect?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    update?: WalletTransfersUpdateWithWhereUniqueWithoutToUserInput | WalletTransfersUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: WalletTransfersUpdateManyWithWhereWithoutToUserInput | WalletTransfersUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: WalletTransfersScalarWhereInput | WalletTransfersScalarWhereInput[]
  }

  export type WalletTransfersUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<WalletTransfersCreateWithoutFromUserInput, WalletTransfersUncheckedCreateWithoutFromUserInput> | WalletTransfersCreateWithoutFromUserInput[] | WalletTransfersUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: WalletTransfersCreateOrConnectWithoutFromUserInput | WalletTransfersCreateOrConnectWithoutFromUserInput[]
    upsert?: WalletTransfersUpsertWithWhereUniqueWithoutFromUserInput | WalletTransfersUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: WalletTransfersCreateManyFromUserInputEnvelope
    set?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    disconnect?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    delete?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    connect?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    update?: WalletTransfersUpdateWithWhereUniqueWithoutFromUserInput | WalletTransfersUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: WalletTransfersUpdateManyWithWhereWithoutFromUserInput | WalletTransfersUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: WalletTransfersScalarWhereInput | WalletTransfersScalarWhereInput[]
  }

  export type SavedBankAccountsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedBankAccountsCreateWithoutUserInput, SavedBankAccountsUncheckedCreateWithoutUserInput> | SavedBankAccountsCreateWithoutUserInput[] | SavedBankAccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedBankAccountsCreateOrConnectWithoutUserInput | SavedBankAccountsCreateOrConnectWithoutUserInput[]
    upsert?: SavedBankAccountsUpsertWithWhereUniqueWithoutUserInput | SavedBankAccountsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedBankAccountsCreateManyUserInputEnvelope
    set?: SavedBankAccountsWhereUniqueInput | SavedBankAccountsWhereUniqueInput[]
    disconnect?: SavedBankAccountsWhereUniqueInput | SavedBankAccountsWhereUniqueInput[]
    delete?: SavedBankAccountsWhereUniqueInput | SavedBankAccountsWhereUniqueInput[]
    connect?: SavedBankAccountsWhereUniqueInput | SavedBankAccountsWhereUniqueInput[]
    update?: SavedBankAccountsUpdateWithWhereUniqueWithoutUserInput | SavedBankAccountsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedBankAccountsUpdateManyWithWhereWithoutUserInput | SavedBankAccountsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedBankAccountsScalarWhereInput | SavedBankAccountsScalarWhereInput[]
  }

  export type BankWithdrawalsUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankWithdrawalsCreateWithoutUserInput, BankWithdrawalsUncheckedCreateWithoutUserInput> | BankWithdrawalsCreateWithoutUserInput[] | BankWithdrawalsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankWithdrawalsCreateOrConnectWithoutUserInput | BankWithdrawalsCreateOrConnectWithoutUserInput[]
    upsert?: BankWithdrawalsUpsertWithWhereUniqueWithoutUserInput | BankWithdrawalsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankWithdrawalsCreateManyUserInputEnvelope
    set?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    disconnect?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    delete?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    connect?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    update?: BankWithdrawalsUpdateWithWhereUniqueWithoutUserInput | BankWithdrawalsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankWithdrawalsUpdateManyWithWhereWithoutUserInput | BankWithdrawalsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankWithdrawalsScalarWhereInput | BankWithdrawalsScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BalanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    upsert?: BalanceUpsertWithWhereUniqueWithoutUserInput | BalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    set?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    disconnect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    delete?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    update?: BalanceUpdateWithWhereUniqueWithoutUserInput | BalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BalanceUpdateManyWithWhereWithoutUserInput | BalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
  }

  export type TransactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput> | TransactionsCreateWithoutUserInput[] | TransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionsCreateOrConnectWithoutUserInput | TransactionsCreateOrConnectWithoutUserInput[]
    upsert?: TransactionsUpsertWithWhereUniqueWithoutUserInput | TransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionsCreateManyUserInputEnvelope
    set?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    disconnect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    delete?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    connect?: TransactionsWhereUniqueInput | TransactionsWhereUniqueInput[]
    update?: TransactionsUpdateWithWhereUniqueWithoutUserInput | TransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionsUpdateManyWithWhereWithoutUserInput | TransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
  }

  export type WalletTransfersUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<WalletTransfersCreateWithoutToUserInput, WalletTransfersUncheckedCreateWithoutToUserInput> | WalletTransfersCreateWithoutToUserInput[] | WalletTransfersUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: WalletTransfersCreateOrConnectWithoutToUserInput | WalletTransfersCreateOrConnectWithoutToUserInput[]
    upsert?: WalletTransfersUpsertWithWhereUniqueWithoutToUserInput | WalletTransfersUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: WalletTransfersCreateManyToUserInputEnvelope
    set?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    disconnect?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    delete?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    connect?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    update?: WalletTransfersUpdateWithWhereUniqueWithoutToUserInput | WalletTransfersUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: WalletTransfersUpdateManyWithWhereWithoutToUserInput | WalletTransfersUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: WalletTransfersScalarWhereInput | WalletTransfersScalarWhereInput[]
  }

  export type WalletTransfersUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<WalletTransfersCreateWithoutFromUserInput, WalletTransfersUncheckedCreateWithoutFromUserInput> | WalletTransfersCreateWithoutFromUserInput[] | WalletTransfersUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: WalletTransfersCreateOrConnectWithoutFromUserInput | WalletTransfersCreateOrConnectWithoutFromUserInput[]
    upsert?: WalletTransfersUpsertWithWhereUniqueWithoutFromUserInput | WalletTransfersUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: WalletTransfersCreateManyFromUserInputEnvelope
    set?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    disconnect?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    delete?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    connect?: WalletTransfersWhereUniqueInput | WalletTransfersWhereUniqueInput[]
    update?: WalletTransfersUpdateWithWhereUniqueWithoutFromUserInput | WalletTransfersUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: WalletTransfersUpdateManyWithWhereWithoutFromUserInput | WalletTransfersUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: WalletTransfersScalarWhereInput | WalletTransfersScalarWhereInput[]
  }

  export type SavedBankAccountsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedBankAccountsCreateWithoutUserInput, SavedBankAccountsUncheckedCreateWithoutUserInput> | SavedBankAccountsCreateWithoutUserInput[] | SavedBankAccountsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedBankAccountsCreateOrConnectWithoutUserInput | SavedBankAccountsCreateOrConnectWithoutUserInput[]
    upsert?: SavedBankAccountsUpsertWithWhereUniqueWithoutUserInput | SavedBankAccountsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedBankAccountsCreateManyUserInputEnvelope
    set?: SavedBankAccountsWhereUniqueInput | SavedBankAccountsWhereUniqueInput[]
    disconnect?: SavedBankAccountsWhereUniqueInput | SavedBankAccountsWhereUniqueInput[]
    delete?: SavedBankAccountsWhereUniqueInput | SavedBankAccountsWhereUniqueInput[]
    connect?: SavedBankAccountsWhereUniqueInput | SavedBankAccountsWhereUniqueInput[]
    update?: SavedBankAccountsUpdateWithWhereUniqueWithoutUserInput | SavedBankAccountsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedBankAccountsUpdateManyWithWhereWithoutUserInput | SavedBankAccountsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedBankAccountsScalarWhereInput | SavedBankAccountsScalarWhereInput[]
  }

  export type BankWithdrawalsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankWithdrawalsCreateWithoutUserInput, BankWithdrawalsUncheckedCreateWithoutUserInput> | BankWithdrawalsCreateWithoutUserInput[] | BankWithdrawalsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankWithdrawalsCreateOrConnectWithoutUserInput | BankWithdrawalsCreateOrConnectWithoutUserInput[]
    upsert?: BankWithdrawalsUpsertWithWhereUniqueWithoutUserInput | BankWithdrawalsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankWithdrawalsCreateManyUserInputEnvelope
    set?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    disconnect?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    delete?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    connect?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    update?: BankWithdrawalsUpdateWithWhereUniqueWithoutUserInput | BankWithdrawalsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankWithdrawalsUpdateManyWithWhereWithoutUserInput | BankWithdrawalsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankWithdrawalsScalarWhereInput | BankWithdrawalsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPfpInput = {
    create?: XOR<UserCreateWithoutPfpInput, UserUncheckedCreateWithoutPfpInput>
    connectOrCreate?: UserCreateOrConnectWithoutPfpInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutPfpInput = {
    create?: XOR<UserCreateWithoutPfpInput, UserUncheckedCreateWithoutPfpInput>
    connectOrCreate?: UserCreateOrConnectWithoutPfpInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutPfpNestedInput = {
    create?: XOR<UserCreateWithoutPfpInput, UserUncheckedCreateWithoutPfpInput>
    connectOrCreate?: UserCreateOrConnectWithoutPfpInput
    upsert?: UserUpsertWithoutPfpInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPfpInput, UserUpdateWithoutPfpInput>, UserUncheckedUpdateWithoutPfpInput>
  }

  export type UserUncheckedUpdateOneWithoutPfpNestedInput = {
    create?: XOR<UserCreateWithoutPfpInput, UserUncheckedCreateWithoutPfpInput>
    connectOrCreate?: UserCreateOrConnectWithoutPfpInput
    upsert?: UserUpsertWithoutPfpInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPfpInput, UserUpdateWithoutPfpInput>, UserUncheckedUpdateWithoutPfpInput>
  }

  export type UserCreateNestedOneWithoutBalanceInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBalanceNestedInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    upsert?: UserUpsertWithoutBalanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBalanceInput, UserUpdateWithoutBalanceInput>, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutOutgoingTransactionInput = {
    create?: XOR<UserCreateWithoutOutgoingTransactionInput, UserUncheckedCreateWithoutOutgoingTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutgoingTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutIncomingTransactionInput = {
    create?: XOR<UserCreateWithoutIncomingTransactionInput, UserUncheckedCreateWithoutIncomingTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncomingTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOutgoingTransactionNestedInput = {
    create?: XOR<UserCreateWithoutOutgoingTransactionInput, UserUncheckedCreateWithoutOutgoingTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutOutgoingTransactionInput
    upsert?: UserUpsertWithoutOutgoingTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOutgoingTransactionInput, UserUpdateWithoutOutgoingTransactionInput>, UserUncheckedUpdateWithoutOutgoingTransactionInput>
  }

  export type UserUpdateOneRequiredWithoutIncomingTransactionNestedInput = {
    create?: XOR<UserCreateWithoutIncomingTransactionInput, UserUncheckedCreateWithoutIncomingTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncomingTransactionInput
    upsert?: UserUpsertWithoutIncomingTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncomingTransactionInput, UserUpdateWithoutIncomingTransactionInput>, UserUncheckedUpdateWithoutIncomingTransactionInput>
  }

  export type SavedBankAccountsCreateNestedOneWithoutWithdrawalsInput = {
    create?: XOR<SavedBankAccountsCreateWithoutWithdrawalsInput, SavedBankAccountsUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: SavedBankAccountsCreateOrConnectWithoutWithdrawalsInput
    connect?: SavedBankAccountsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBankWithdrawalsInput = {
    create?: XOR<UserCreateWithoutBankWithdrawalsInput, UserUncheckedCreateWithoutBankWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankWithdrawalsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumWithdrawalOptionFieldUpdateOperationsInput = {
    set?: $Enums.WithdrawalOption
  }

  export type EnumActionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ActionStatus
  }

  export type SavedBankAccountsUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: XOR<SavedBankAccountsCreateWithoutWithdrawalsInput, SavedBankAccountsUncheckedCreateWithoutWithdrawalsInput>
    connectOrCreate?: SavedBankAccountsCreateOrConnectWithoutWithdrawalsInput
    upsert?: SavedBankAccountsUpsertWithoutWithdrawalsInput
    connect?: SavedBankAccountsWhereUniqueInput
    update?: XOR<XOR<SavedBankAccountsUpdateToOneWithWhereWithoutWithdrawalsInput, SavedBankAccountsUpdateWithoutWithdrawalsInput>, SavedBankAccountsUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type UserUpdateOneRequiredWithoutBankWithdrawalsNestedInput = {
    create?: XOR<UserCreateWithoutBankWithdrawalsInput, UserUncheckedCreateWithoutBankWithdrawalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankWithdrawalsInput
    upsert?: UserUpsertWithoutBankWithdrawalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBankWithdrawalsInput, UserUpdateWithoutBankWithdrawalsInput>, UserUncheckedUpdateWithoutBankWithdrawalsInput>
  }

  export type UserCreateNestedOneWithoutSavedBankAccountsInput = {
    create?: XOR<UserCreateWithoutSavedBankAccountsInput, UserUncheckedCreateWithoutSavedBankAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedBankAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type BankWithdrawalsCreateNestedManyWithoutAccountInput = {
    create?: XOR<BankWithdrawalsCreateWithoutAccountInput, BankWithdrawalsUncheckedCreateWithoutAccountInput> | BankWithdrawalsCreateWithoutAccountInput[] | BankWithdrawalsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: BankWithdrawalsCreateOrConnectWithoutAccountInput | BankWithdrawalsCreateOrConnectWithoutAccountInput[]
    createMany?: BankWithdrawalsCreateManyAccountInputEnvelope
    connect?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
  }

  export type BankWithdrawalsUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<BankWithdrawalsCreateWithoutAccountInput, BankWithdrawalsUncheckedCreateWithoutAccountInput> | BankWithdrawalsCreateWithoutAccountInput[] | BankWithdrawalsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: BankWithdrawalsCreateOrConnectWithoutAccountInput | BankWithdrawalsCreateOrConnectWithoutAccountInput[]
    createMany?: BankWithdrawalsCreateManyAccountInputEnvelope
    connect?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSavedBankAccountsNestedInput = {
    create?: XOR<UserCreateWithoutSavedBankAccountsInput, UserUncheckedCreateWithoutSavedBankAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedBankAccountsInput
    upsert?: UserUpsertWithoutSavedBankAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedBankAccountsInput, UserUpdateWithoutSavedBankAccountsInput>, UserUncheckedUpdateWithoutSavedBankAccountsInput>
  }

  export type BankWithdrawalsUpdateManyWithoutAccountNestedInput = {
    create?: XOR<BankWithdrawalsCreateWithoutAccountInput, BankWithdrawalsUncheckedCreateWithoutAccountInput> | BankWithdrawalsCreateWithoutAccountInput[] | BankWithdrawalsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: BankWithdrawalsCreateOrConnectWithoutAccountInput | BankWithdrawalsCreateOrConnectWithoutAccountInput[]
    upsert?: BankWithdrawalsUpsertWithWhereUniqueWithoutAccountInput | BankWithdrawalsUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: BankWithdrawalsCreateManyAccountInputEnvelope
    set?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    disconnect?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    delete?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    connect?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    update?: BankWithdrawalsUpdateWithWhereUniqueWithoutAccountInput | BankWithdrawalsUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: BankWithdrawalsUpdateManyWithWhereWithoutAccountInput | BankWithdrawalsUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: BankWithdrawalsScalarWhereInput | BankWithdrawalsScalarWhereInput[]
  }

  export type BankWithdrawalsUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<BankWithdrawalsCreateWithoutAccountInput, BankWithdrawalsUncheckedCreateWithoutAccountInput> | BankWithdrawalsCreateWithoutAccountInput[] | BankWithdrawalsUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: BankWithdrawalsCreateOrConnectWithoutAccountInput | BankWithdrawalsCreateOrConnectWithoutAccountInput[]
    upsert?: BankWithdrawalsUpsertWithWhereUniqueWithoutAccountInput | BankWithdrawalsUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: BankWithdrawalsCreateManyAccountInputEnvelope
    set?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    disconnect?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    delete?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    connect?: BankWithdrawalsWhereUniqueInput | BankWithdrawalsWhereUniqueInput[]
    update?: BankWithdrawalsUpdateWithWhereUniqueWithoutAccountInput | BankWithdrawalsUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: BankWithdrawalsUpdateManyWithWhereWithoutAccountInput | BankWithdrawalsUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: BankWithdrawalsScalarWhereInput | BankWithdrawalsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumWithdrawalOptionFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawalOption | EnumWithdrawalOptionFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawalOption[] | ListEnumWithdrawalOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawalOption[] | ListEnumWithdrawalOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawalOptionFilter<$PrismaModel> | $Enums.WithdrawalOption
  }

  export type NestedEnumActionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionStatus | EnumActionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActionStatus[] | ListEnumActionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionStatus[] | ListEnumActionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumActionStatusFilter<$PrismaModel> | $Enums.ActionStatus
  }

  export type NestedEnumWithdrawalOptionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WithdrawalOption | EnumWithdrawalOptionFieldRefInput<$PrismaModel>
    in?: $Enums.WithdrawalOption[] | ListEnumWithdrawalOptionFieldRefInput<$PrismaModel>
    notIn?: $Enums.WithdrawalOption[] | ListEnumWithdrawalOptionFieldRefInput<$PrismaModel>
    not?: NestedEnumWithdrawalOptionWithAggregatesFilter<$PrismaModel> | $Enums.WithdrawalOption
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWithdrawalOptionFilter<$PrismaModel>
    _max?: NestedEnumWithdrawalOptionFilter<$PrismaModel>
  }

  export type NestedEnumActionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionStatus | EnumActionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ActionStatus[] | ListEnumActionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionStatus[] | ListEnumActionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumActionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ActionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionStatusFilter<$PrismaModel>
    _max?: NestedEnumActionStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Cloudinary_imagesCreateWithoutUserInput = {
    public_id: string
    url: string
  }

  export type Cloudinary_imagesUncheckedCreateWithoutUserInput = {
    public_id: string
    url: string
  }

  export type Cloudinary_imagesCreateOrConnectWithoutUserInput = {
    where: Cloudinary_imagesWhereUniqueInput
    create: XOR<Cloudinary_imagesCreateWithoutUserInput, Cloudinary_imagesUncheckedCreateWithoutUserInput>
  }

  export type BalanceCreateWithoutUserInput = {
    amount?: number
    locked?: number
  }

  export type BalanceUncheckedCreateWithoutUserInput = {
    id?: number
    amount?: number
    locked?: number
  }

  export type BalanceCreateOrConnectWithoutUserInput = {
    where: BalanceWhereUniqueInput
    create: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
  }

  export type BalanceCreateManyUserInputEnvelope = {
    data: BalanceCreateManyUserInput | BalanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionsCreateWithoutUserInput = {
    status: $Enums.Status
    statement: string
    token: string
    provider: string
    amount: number
    transactionType: $Enums.TransactionType
    startTime?: Date | string
    upatedAt?: Date | string
  }

  export type TransactionsUncheckedCreateWithoutUserInput = {
    id?: number
    status: $Enums.Status
    statement: string
    token: string
    provider: string
    amount: number
    transactionType: $Enums.TransactionType
    startTime?: Date | string
    upatedAt?: Date | string
  }

  export type TransactionsCreateOrConnectWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsCreateManyUserInputEnvelope = {
    data: TransactionsCreateManyUserInput | TransactionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WalletTransfersCreateWithoutToUserInput = {
    amount: number
    status: $Enums.Status
    startedAt?: Date | string
    updatedAt?: Date | string
    FromUser: UserCreateNestedOneWithoutOutgoingTransactionInput
  }

  export type WalletTransfersUncheckedCreateWithoutToUserInput = {
    id?: number
    from: number
    amount: number
    status: $Enums.Status
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletTransfersCreateOrConnectWithoutToUserInput = {
    where: WalletTransfersWhereUniqueInput
    create: XOR<WalletTransfersCreateWithoutToUserInput, WalletTransfersUncheckedCreateWithoutToUserInput>
  }

  export type WalletTransfersCreateManyToUserInputEnvelope = {
    data: WalletTransfersCreateManyToUserInput | WalletTransfersCreateManyToUserInput[]
    skipDuplicates?: boolean
  }

  export type WalletTransfersCreateWithoutFromUserInput = {
    amount: number
    status: $Enums.Status
    startedAt?: Date | string
    updatedAt?: Date | string
    ToUser: UserCreateNestedOneWithoutIncomingTransactionInput
  }

  export type WalletTransfersUncheckedCreateWithoutFromUserInput = {
    id?: number
    to: number
    amount: number
    status: $Enums.Status
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletTransfersCreateOrConnectWithoutFromUserInput = {
    where: WalletTransfersWhereUniqueInput
    create: XOR<WalletTransfersCreateWithoutFromUserInput, WalletTransfersUncheckedCreateWithoutFromUserInput>
  }

  export type WalletTransfersCreateManyFromUserInputEnvelope = {
    data: WalletTransfersCreateManyFromUserInput | WalletTransfersCreateManyFromUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedBankAccountsCreateWithoutUserInput = {
    bankCode: string
    accountNumber: string
    holderName: string
    label: string
    isDeleted?: boolean
    Withdrawals?: BankWithdrawalsCreateNestedManyWithoutAccountInput
  }

  export type SavedBankAccountsUncheckedCreateWithoutUserInput = {
    id?: number
    bankCode: string
    accountNumber: string
    holderName: string
    label: string
    isDeleted?: boolean
    Withdrawals?: BankWithdrawalsUncheckedCreateNestedManyWithoutAccountInput
  }

  export type SavedBankAccountsCreateOrConnectWithoutUserInput = {
    where: SavedBankAccountsWhereUniqueInput
    create: XOR<SavedBankAccountsCreateWithoutUserInput, SavedBankAccountsUncheckedCreateWithoutUserInput>
  }

  export type SavedBankAccountsCreateManyUserInputEnvelope = {
    data: SavedBankAccountsCreateManyUserInput | SavedBankAccountsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BankWithdrawalsCreateWithoutUserInput = {
    token?: string | null
    amount: number
    net_amount: number
    fee: number
    gateway: $Enums.WithdrawalOption
    status?: $Enums.ActionStatus
    updatedAt?: Date | string
    startedAt?: Date | string
    account: SavedBankAccountsCreateNestedOneWithoutWithdrawalsInput
  }

  export type BankWithdrawalsUncheckedCreateWithoutUserInput = {
    id?: number
    token?: string | null
    accountId: number
    amount: number
    net_amount: number
    fee: number
    gateway: $Enums.WithdrawalOption
    status?: $Enums.ActionStatus
    updatedAt?: Date | string
    startedAt?: Date | string
  }

  export type BankWithdrawalsCreateOrConnectWithoutUserInput = {
    where: BankWithdrawalsWhereUniqueInput
    create: XOR<BankWithdrawalsCreateWithoutUserInput, BankWithdrawalsUncheckedCreateWithoutUserInput>
  }

  export type BankWithdrawalsCreateManyUserInputEnvelope = {
    data: BankWithdrawalsCreateManyUserInput | BankWithdrawalsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Cloudinary_imagesUpsertWithoutUserInput = {
    update: XOR<Cloudinary_imagesUpdateWithoutUserInput, Cloudinary_imagesUncheckedUpdateWithoutUserInput>
    create: XOR<Cloudinary_imagesCreateWithoutUserInput, Cloudinary_imagesUncheckedCreateWithoutUserInput>
    where?: Cloudinary_imagesWhereInput
  }

  export type Cloudinary_imagesUpdateToOneWithWhereWithoutUserInput = {
    where?: Cloudinary_imagesWhereInput
    data: XOR<Cloudinary_imagesUpdateWithoutUserInput, Cloudinary_imagesUncheckedUpdateWithoutUserInput>
  }

  export type Cloudinary_imagesUpdateWithoutUserInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type Cloudinary_imagesUncheckedUpdateWithoutUserInput = {
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type BalanceUpsertWithWhereUniqueWithoutUserInput = {
    where: BalanceWhereUniqueInput
    update: XOR<BalanceUpdateWithoutUserInput, BalanceUncheckedUpdateWithoutUserInput>
    create: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
  }

  export type BalanceUpdateWithWhereUniqueWithoutUserInput = {
    where: BalanceWhereUniqueInput
    data: XOR<BalanceUpdateWithoutUserInput, BalanceUncheckedUpdateWithoutUserInput>
  }

  export type BalanceUpdateManyWithWhereWithoutUserInput = {
    where: BalanceScalarWhereInput
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyWithoutUserInput>
  }

  export type BalanceScalarWhereInput = {
    AND?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
    OR?: BalanceScalarWhereInput[]
    NOT?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
    id?: IntFilter<"Balance"> | number
    userId?: IntFilter<"Balance"> | number
    amount?: IntFilter<"Balance"> | number
    locked?: IntFilter<"Balance"> | number
  }

  export type TransactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    update: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionsCreateWithoutUserInput, TransactionsUncheckedCreateWithoutUserInput>
  }

  export type TransactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionsWhereUniqueInput
    data: XOR<TransactionsUpdateWithoutUserInput, TransactionsUncheckedUpdateWithoutUserInput>
  }

  export type TransactionsUpdateManyWithWhereWithoutUserInput = {
    where: TransactionsScalarWhereInput
    data: XOR<TransactionsUpdateManyMutationInput, TransactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionsScalarWhereInput = {
    AND?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    OR?: TransactionsScalarWhereInput[]
    NOT?: TransactionsScalarWhereInput | TransactionsScalarWhereInput[]
    id?: IntFilter<"Transactions"> | number
    status?: EnumStatusFilter<"Transactions"> | $Enums.Status
    statement?: StringFilter<"Transactions"> | string
    token?: StringFilter<"Transactions"> | string
    provider?: StringFilter<"Transactions"> | string
    amount?: IntFilter<"Transactions"> | number
    transactionType?: EnumTransactionTypeFilter<"Transactions"> | $Enums.TransactionType
    startTime?: DateTimeFilter<"Transactions"> | Date | string
    upatedAt?: DateTimeFilter<"Transactions"> | Date | string
    userId?: IntFilter<"Transactions"> | number
  }

  export type WalletTransfersUpsertWithWhereUniqueWithoutToUserInput = {
    where: WalletTransfersWhereUniqueInput
    update: XOR<WalletTransfersUpdateWithoutToUserInput, WalletTransfersUncheckedUpdateWithoutToUserInput>
    create: XOR<WalletTransfersCreateWithoutToUserInput, WalletTransfersUncheckedCreateWithoutToUserInput>
  }

  export type WalletTransfersUpdateWithWhereUniqueWithoutToUserInput = {
    where: WalletTransfersWhereUniqueInput
    data: XOR<WalletTransfersUpdateWithoutToUserInput, WalletTransfersUncheckedUpdateWithoutToUserInput>
  }

  export type WalletTransfersUpdateManyWithWhereWithoutToUserInput = {
    where: WalletTransfersScalarWhereInput
    data: XOR<WalletTransfersUpdateManyMutationInput, WalletTransfersUncheckedUpdateManyWithoutToUserInput>
  }

  export type WalletTransfersScalarWhereInput = {
    AND?: WalletTransfersScalarWhereInput | WalletTransfersScalarWhereInput[]
    OR?: WalletTransfersScalarWhereInput[]
    NOT?: WalletTransfersScalarWhereInput | WalletTransfersScalarWhereInput[]
    id?: IntFilter<"WalletTransfers"> | number
    from?: IntFilter<"WalletTransfers"> | number
    to?: IntFilter<"WalletTransfers"> | number
    amount?: IntFilter<"WalletTransfers"> | number
    status?: EnumStatusFilter<"WalletTransfers"> | $Enums.Status
    startedAt?: DateTimeFilter<"WalletTransfers"> | Date | string
    updatedAt?: DateTimeFilter<"WalletTransfers"> | Date | string
  }

  export type WalletTransfersUpsertWithWhereUniqueWithoutFromUserInput = {
    where: WalletTransfersWhereUniqueInput
    update: XOR<WalletTransfersUpdateWithoutFromUserInput, WalletTransfersUncheckedUpdateWithoutFromUserInput>
    create: XOR<WalletTransfersCreateWithoutFromUserInput, WalletTransfersUncheckedCreateWithoutFromUserInput>
  }

  export type WalletTransfersUpdateWithWhereUniqueWithoutFromUserInput = {
    where: WalletTransfersWhereUniqueInput
    data: XOR<WalletTransfersUpdateWithoutFromUserInput, WalletTransfersUncheckedUpdateWithoutFromUserInput>
  }

  export type WalletTransfersUpdateManyWithWhereWithoutFromUserInput = {
    where: WalletTransfersScalarWhereInput
    data: XOR<WalletTransfersUpdateManyMutationInput, WalletTransfersUncheckedUpdateManyWithoutFromUserInput>
  }

  export type SavedBankAccountsUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedBankAccountsWhereUniqueInput
    update: XOR<SavedBankAccountsUpdateWithoutUserInput, SavedBankAccountsUncheckedUpdateWithoutUserInput>
    create: XOR<SavedBankAccountsCreateWithoutUserInput, SavedBankAccountsUncheckedCreateWithoutUserInput>
  }

  export type SavedBankAccountsUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedBankAccountsWhereUniqueInput
    data: XOR<SavedBankAccountsUpdateWithoutUserInput, SavedBankAccountsUncheckedUpdateWithoutUserInput>
  }

  export type SavedBankAccountsUpdateManyWithWhereWithoutUserInput = {
    where: SavedBankAccountsScalarWhereInput
    data: XOR<SavedBankAccountsUpdateManyMutationInput, SavedBankAccountsUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedBankAccountsScalarWhereInput = {
    AND?: SavedBankAccountsScalarWhereInput | SavedBankAccountsScalarWhereInput[]
    OR?: SavedBankAccountsScalarWhereInput[]
    NOT?: SavedBankAccountsScalarWhereInput | SavedBankAccountsScalarWhereInput[]
    id?: IntFilter<"SavedBankAccounts"> | number
    bankCode?: StringFilter<"SavedBankAccounts"> | string
    accountNumber?: StringFilter<"SavedBankAccounts"> | string
    holderName?: StringFilter<"SavedBankAccounts"> | string
    label?: StringFilter<"SavedBankAccounts"> | string
    userId?: IntFilter<"SavedBankAccounts"> | number
    isDeleted?: BoolFilter<"SavedBankAccounts"> | boolean
  }

  export type BankWithdrawalsUpsertWithWhereUniqueWithoutUserInput = {
    where: BankWithdrawalsWhereUniqueInput
    update: XOR<BankWithdrawalsUpdateWithoutUserInput, BankWithdrawalsUncheckedUpdateWithoutUserInput>
    create: XOR<BankWithdrawalsCreateWithoutUserInput, BankWithdrawalsUncheckedCreateWithoutUserInput>
  }

  export type BankWithdrawalsUpdateWithWhereUniqueWithoutUserInput = {
    where: BankWithdrawalsWhereUniqueInput
    data: XOR<BankWithdrawalsUpdateWithoutUserInput, BankWithdrawalsUncheckedUpdateWithoutUserInput>
  }

  export type BankWithdrawalsUpdateManyWithWhereWithoutUserInput = {
    where: BankWithdrawalsScalarWhereInput
    data: XOR<BankWithdrawalsUpdateManyMutationInput, BankWithdrawalsUncheckedUpdateManyWithoutUserInput>
  }

  export type BankWithdrawalsScalarWhereInput = {
    AND?: BankWithdrawalsScalarWhereInput | BankWithdrawalsScalarWhereInput[]
    OR?: BankWithdrawalsScalarWhereInput[]
    NOT?: BankWithdrawalsScalarWhereInput | BankWithdrawalsScalarWhereInput[]
    id?: IntFilter<"BankWithdrawals"> | number
    token?: StringNullableFilter<"BankWithdrawals"> | string | null
    userId?: IntFilter<"BankWithdrawals"> | number
    accountId?: IntFilter<"BankWithdrawals"> | number
    amount?: IntFilter<"BankWithdrawals"> | number
    net_amount?: IntFilter<"BankWithdrawals"> | number
    fee?: IntFilter<"BankWithdrawals"> | number
    gateway?: EnumWithdrawalOptionFilter<"BankWithdrawals"> | $Enums.WithdrawalOption
    status?: EnumActionStatusFilter<"BankWithdrawals"> | $Enums.ActionStatus
    updatedAt?: DateTimeFilter<"BankWithdrawals"> | Date | string
    startedAt?: DateTimeFilter<"BankWithdrawals"> | Date | string
  }

  export type UserCreateWithoutPfpInput = {
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    Balance?: BalanceCreateNestedManyWithoutUserInput
    Transactions?: TransactionsCreateNestedManyWithoutUserInput
    IncomingTransaction?: WalletTransfersCreateNestedManyWithoutToUserInput
    OutgoingTransaction?: WalletTransfersCreateNestedManyWithoutFromUserInput
    SavedBankAccounts?: SavedBankAccountsCreateNestedManyWithoutUserInput
    BankWithdrawals?: BankWithdrawalsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPfpInput = {
    id?: number
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    IncomingTransaction?: WalletTransfersUncheckedCreateNestedManyWithoutToUserInput
    OutgoingTransaction?: WalletTransfersUncheckedCreateNestedManyWithoutFromUserInput
    SavedBankAccounts?: SavedBankAccountsUncheckedCreateNestedManyWithoutUserInput
    BankWithdrawals?: BankWithdrawalsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPfpInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPfpInput, UserUncheckedCreateWithoutPfpInput>
  }

  export type UserUpsertWithoutPfpInput = {
    update: XOR<UserUpdateWithoutPfpInput, UserUncheckedUpdateWithoutPfpInput>
    create: XOR<UserCreateWithoutPfpInput, UserUncheckedCreateWithoutPfpInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPfpInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPfpInput, UserUncheckedUpdateWithoutPfpInput>
  }

  export type UserUpdateWithoutPfpInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    Transactions?: TransactionsUpdateManyWithoutUserNestedInput
    IncomingTransaction?: WalletTransfersUpdateManyWithoutToUserNestedInput
    OutgoingTransaction?: WalletTransfersUpdateManyWithoutFromUserNestedInput
    SavedBankAccounts?: SavedBankAccountsUpdateManyWithoutUserNestedInput
    BankWithdrawals?: BankWithdrawalsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPfpInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    IncomingTransaction?: WalletTransfersUncheckedUpdateManyWithoutToUserNestedInput
    OutgoingTransaction?: WalletTransfersUncheckedUpdateManyWithoutFromUserNestedInput
    SavedBankAccounts?: SavedBankAccountsUncheckedUpdateManyWithoutUserNestedInput
    BankWithdrawals?: BankWithdrawalsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBalanceInput = {
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfp?: Cloudinary_imagesCreateNestedOneWithoutUserInput
    Transactions?: TransactionsCreateNestedManyWithoutUserInput
    IncomingTransaction?: WalletTransfersCreateNestedManyWithoutToUserInput
    OutgoingTransaction?: WalletTransfersCreateNestedManyWithoutFromUserInput
    SavedBankAccounts?: SavedBankAccountsCreateNestedManyWithoutUserInput
    BankWithdrawals?: BankWithdrawalsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBalanceInput = {
    id?: number
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfpPublicId?: string | null
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    IncomingTransaction?: WalletTransfersUncheckedCreateNestedManyWithoutToUserInput
    OutgoingTransaction?: WalletTransfersUncheckedCreateNestedManyWithoutFromUserInput
    SavedBankAccounts?: SavedBankAccountsUncheckedCreateNestedManyWithoutUserInput
    BankWithdrawals?: BankWithdrawalsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBalanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
  }

  export type UserUpsertWithoutBalanceInput = {
    update: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBalanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserUpdateWithoutBalanceInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfp?: Cloudinary_imagesUpdateOneWithoutUserNestedInput
    Transactions?: TransactionsUpdateManyWithoutUserNestedInput
    IncomingTransaction?: WalletTransfersUpdateManyWithoutToUserNestedInput
    OutgoingTransaction?: WalletTransfersUpdateManyWithoutFromUserNestedInput
    SavedBankAccounts?: SavedBankAccountsUpdateManyWithoutUserNestedInput
    BankWithdrawals?: BankWithdrawalsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBalanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfpPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    Transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    IncomingTransaction?: WalletTransfersUncheckedUpdateManyWithoutToUserNestedInput
    OutgoingTransaction?: WalletTransfersUncheckedUpdateManyWithoutFromUserNestedInput
    SavedBankAccounts?: SavedBankAccountsUncheckedUpdateManyWithoutUserNestedInput
    BankWithdrawals?: BankWithdrawalsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfp?: Cloudinary_imagesCreateNestedOneWithoutUserInput
    Balance?: BalanceCreateNestedManyWithoutUserInput
    IncomingTransaction?: WalletTransfersCreateNestedManyWithoutToUserInput
    OutgoingTransaction?: WalletTransfersCreateNestedManyWithoutFromUserInput
    SavedBankAccounts?: SavedBankAccountsCreateNestedManyWithoutUserInput
    BankWithdrawals?: BankWithdrawalsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfpPublicId?: string | null
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    IncomingTransaction?: WalletTransfersUncheckedCreateNestedManyWithoutToUserInput
    OutgoingTransaction?: WalletTransfersUncheckedCreateNestedManyWithoutFromUserInput
    SavedBankAccounts?: SavedBankAccountsUncheckedCreateNestedManyWithoutUserInput
    BankWithdrawals?: BankWithdrawalsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfp?: Cloudinary_imagesUpdateOneWithoutUserNestedInput
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    IncomingTransaction?: WalletTransfersUpdateManyWithoutToUserNestedInput
    OutgoingTransaction?: WalletTransfersUpdateManyWithoutFromUserNestedInput
    SavedBankAccounts?: SavedBankAccountsUpdateManyWithoutUserNestedInput
    BankWithdrawals?: BankWithdrawalsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfpPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    IncomingTransaction?: WalletTransfersUncheckedUpdateManyWithoutToUserNestedInput
    OutgoingTransaction?: WalletTransfersUncheckedUpdateManyWithoutFromUserNestedInput
    SavedBankAccounts?: SavedBankAccountsUncheckedUpdateManyWithoutUserNestedInput
    BankWithdrawals?: BankWithdrawalsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOutgoingTransactionInput = {
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfp?: Cloudinary_imagesCreateNestedOneWithoutUserInput
    Balance?: BalanceCreateNestedManyWithoutUserInput
    Transactions?: TransactionsCreateNestedManyWithoutUserInput
    IncomingTransaction?: WalletTransfersCreateNestedManyWithoutToUserInput
    SavedBankAccounts?: SavedBankAccountsCreateNestedManyWithoutUserInput
    BankWithdrawals?: BankWithdrawalsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOutgoingTransactionInput = {
    id?: number
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfpPublicId?: string | null
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    IncomingTransaction?: WalletTransfersUncheckedCreateNestedManyWithoutToUserInput
    SavedBankAccounts?: SavedBankAccountsUncheckedCreateNestedManyWithoutUserInput
    BankWithdrawals?: BankWithdrawalsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOutgoingTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOutgoingTransactionInput, UserUncheckedCreateWithoutOutgoingTransactionInput>
  }

  export type UserCreateWithoutIncomingTransactionInput = {
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfp?: Cloudinary_imagesCreateNestedOneWithoutUserInput
    Balance?: BalanceCreateNestedManyWithoutUserInput
    Transactions?: TransactionsCreateNestedManyWithoutUserInput
    OutgoingTransaction?: WalletTransfersCreateNestedManyWithoutFromUserInput
    SavedBankAccounts?: SavedBankAccountsCreateNestedManyWithoutUserInput
    BankWithdrawals?: BankWithdrawalsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIncomingTransactionInput = {
    id?: number
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfpPublicId?: string | null
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    OutgoingTransaction?: WalletTransfersUncheckedCreateNestedManyWithoutFromUserInput
    SavedBankAccounts?: SavedBankAccountsUncheckedCreateNestedManyWithoutUserInput
    BankWithdrawals?: BankWithdrawalsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIncomingTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncomingTransactionInput, UserUncheckedCreateWithoutIncomingTransactionInput>
  }

  export type UserUpsertWithoutOutgoingTransactionInput = {
    update: XOR<UserUpdateWithoutOutgoingTransactionInput, UserUncheckedUpdateWithoutOutgoingTransactionInput>
    create: XOR<UserCreateWithoutOutgoingTransactionInput, UserUncheckedCreateWithoutOutgoingTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOutgoingTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOutgoingTransactionInput, UserUncheckedUpdateWithoutOutgoingTransactionInput>
  }

  export type UserUpdateWithoutOutgoingTransactionInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfp?: Cloudinary_imagesUpdateOneWithoutUserNestedInput
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    Transactions?: TransactionsUpdateManyWithoutUserNestedInput
    IncomingTransaction?: WalletTransfersUpdateManyWithoutToUserNestedInput
    SavedBankAccounts?: SavedBankAccountsUpdateManyWithoutUserNestedInput
    BankWithdrawals?: BankWithdrawalsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOutgoingTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfpPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    IncomingTransaction?: WalletTransfersUncheckedUpdateManyWithoutToUserNestedInput
    SavedBankAccounts?: SavedBankAccountsUncheckedUpdateManyWithoutUserNestedInput
    BankWithdrawals?: BankWithdrawalsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutIncomingTransactionInput = {
    update: XOR<UserUpdateWithoutIncomingTransactionInput, UserUncheckedUpdateWithoutIncomingTransactionInput>
    create: XOR<UserCreateWithoutIncomingTransactionInput, UserUncheckedCreateWithoutIncomingTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncomingTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncomingTransactionInput, UserUncheckedUpdateWithoutIncomingTransactionInput>
  }

  export type UserUpdateWithoutIncomingTransactionInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfp?: Cloudinary_imagesUpdateOneWithoutUserNestedInput
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    Transactions?: TransactionsUpdateManyWithoutUserNestedInput
    OutgoingTransaction?: WalletTransfersUpdateManyWithoutFromUserNestedInput
    SavedBankAccounts?: SavedBankAccountsUpdateManyWithoutUserNestedInput
    BankWithdrawals?: BankWithdrawalsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIncomingTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfpPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    OutgoingTransaction?: WalletTransfersUncheckedUpdateManyWithoutFromUserNestedInput
    SavedBankAccounts?: SavedBankAccountsUncheckedUpdateManyWithoutUserNestedInput
    BankWithdrawals?: BankWithdrawalsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SavedBankAccountsCreateWithoutWithdrawalsInput = {
    bankCode: string
    accountNumber: string
    holderName: string
    label: string
    isDeleted?: boolean
    User: UserCreateNestedOneWithoutSavedBankAccountsInput
  }

  export type SavedBankAccountsUncheckedCreateWithoutWithdrawalsInput = {
    id?: number
    bankCode: string
    accountNumber: string
    holderName: string
    label: string
    userId: number
    isDeleted?: boolean
  }

  export type SavedBankAccountsCreateOrConnectWithoutWithdrawalsInput = {
    where: SavedBankAccountsWhereUniqueInput
    create: XOR<SavedBankAccountsCreateWithoutWithdrawalsInput, SavedBankAccountsUncheckedCreateWithoutWithdrawalsInput>
  }

  export type UserCreateWithoutBankWithdrawalsInput = {
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfp?: Cloudinary_imagesCreateNestedOneWithoutUserInput
    Balance?: BalanceCreateNestedManyWithoutUserInput
    Transactions?: TransactionsCreateNestedManyWithoutUserInput
    IncomingTransaction?: WalletTransfersCreateNestedManyWithoutToUserInput
    OutgoingTransaction?: WalletTransfersCreateNestedManyWithoutFromUserInput
    SavedBankAccounts?: SavedBankAccountsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBankWithdrawalsInput = {
    id?: number
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfpPublicId?: string | null
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    IncomingTransaction?: WalletTransfersUncheckedCreateNestedManyWithoutToUserInput
    OutgoingTransaction?: WalletTransfersUncheckedCreateNestedManyWithoutFromUserInput
    SavedBankAccounts?: SavedBankAccountsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBankWithdrawalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBankWithdrawalsInput, UserUncheckedCreateWithoutBankWithdrawalsInput>
  }

  export type SavedBankAccountsUpsertWithoutWithdrawalsInput = {
    update: XOR<SavedBankAccountsUpdateWithoutWithdrawalsInput, SavedBankAccountsUncheckedUpdateWithoutWithdrawalsInput>
    create: XOR<SavedBankAccountsCreateWithoutWithdrawalsInput, SavedBankAccountsUncheckedCreateWithoutWithdrawalsInput>
    where?: SavedBankAccountsWhereInput
  }

  export type SavedBankAccountsUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: SavedBankAccountsWhereInput
    data: XOR<SavedBankAccountsUpdateWithoutWithdrawalsInput, SavedBankAccountsUncheckedUpdateWithoutWithdrawalsInput>
  }

  export type SavedBankAccountsUpdateWithoutWithdrawalsInput = {
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutSavedBankAccountsNestedInput
  }

  export type SavedBankAccountsUncheckedUpdateWithoutWithdrawalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutBankWithdrawalsInput = {
    update: XOR<UserUpdateWithoutBankWithdrawalsInput, UserUncheckedUpdateWithoutBankWithdrawalsInput>
    create: XOR<UserCreateWithoutBankWithdrawalsInput, UserUncheckedCreateWithoutBankWithdrawalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBankWithdrawalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBankWithdrawalsInput, UserUncheckedUpdateWithoutBankWithdrawalsInput>
  }

  export type UserUpdateWithoutBankWithdrawalsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfp?: Cloudinary_imagesUpdateOneWithoutUserNestedInput
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    Transactions?: TransactionsUpdateManyWithoutUserNestedInput
    IncomingTransaction?: WalletTransfersUpdateManyWithoutToUserNestedInput
    OutgoingTransaction?: WalletTransfersUpdateManyWithoutFromUserNestedInput
    SavedBankAccounts?: SavedBankAccountsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBankWithdrawalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfpPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    IncomingTransaction?: WalletTransfersUncheckedUpdateManyWithoutToUserNestedInput
    OutgoingTransaction?: WalletTransfersUncheckedUpdateManyWithoutFromUserNestedInput
    SavedBankAccounts?: SavedBankAccountsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSavedBankAccountsInput = {
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfp?: Cloudinary_imagesCreateNestedOneWithoutUserInput
    Balance?: BalanceCreateNestedManyWithoutUserInput
    Transactions?: TransactionsCreateNestedManyWithoutUserInput
    IncomingTransaction?: WalletTransfersCreateNestedManyWithoutToUserInput
    OutgoingTransaction?: WalletTransfersCreateNestedManyWithoutFromUserInput
    BankWithdrawals?: BankWithdrawalsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedBankAccountsInput = {
    id?: number
    email: string
    name: string
    number: string
    password: string
    securityPin: string
    failedPinTries?: number
    lastFailedPinTry?: Date | string | null
    pfpPublicId?: string | null
    Balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    Transactions?: TransactionsUncheckedCreateNestedManyWithoutUserInput
    IncomingTransaction?: WalletTransfersUncheckedCreateNestedManyWithoutToUserInput
    OutgoingTransaction?: WalletTransfersUncheckedCreateNestedManyWithoutFromUserInput
    BankWithdrawals?: BankWithdrawalsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedBankAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedBankAccountsInput, UserUncheckedCreateWithoutSavedBankAccountsInput>
  }

  export type BankWithdrawalsCreateWithoutAccountInput = {
    token?: string | null
    amount: number
    net_amount: number
    fee: number
    gateway: $Enums.WithdrawalOption
    status?: $Enums.ActionStatus
    updatedAt?: Date | string
    startedAt?: Date | string
    user: UserCreateNestedOneWithoutBankWithdrawalsInput
  }

  export type BankWithdrawalsUncheckedCreateWithoutAccountInput = {
    id?: number
    token?: string | null
    userId: number
    amount: number
    net_amount: number
    fee: number
    gateway: $Enums.WithdrawalOption
    status?: $Enums.ActionStatus
    updatedAt?: Date | string
    startedAt?: Date | string
  }

  export type BankWithdrawalsCreateOrConnectWithoutAccountInput = {
    where: BankWithdrawalsWhereUniqueInput
    create: XOR<BankWithdrawalsCreateWithoutAccountInput, BankWithdrawalsUncheckedCreateWithoutAccountInput>
  }

  export type BankWithdrawalsCreateManyAccountInputEnvelope = {
    data: BankWithdrawalsCreateManyAccountInput | BankWithdrawalsCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSavedBankAccountsInput = {
    update: XOR<UserUpdateWithoutSavedBankAccountsInput, UserUncheckedUpdateWithoutSavedBankAccountsInput>
    create: XOR<UserCreateWithoutSavedBankAccountsInput, UserUncheckedCreateWithoutSavedBankAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedBankAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedBankAccountsInput, UserUncheckedUpdateWithoutSavedBankAccountsInput>
  }

  export type UserUpdateWithoutSavedBankAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfp?: Cloudinary_imagesUpdateOneWithoutUserNestedInput
    Balance?: BalanceUpdateManyWithoutUserNestedInput
    Transactions?: TransactionsUpdateManyWithoutUserNestedInput
    IncomingTransaction?: WalletTransfersUpdateManyWithoutToUserNestedInput
    OutgoingTransaction?: WalletTransfersUpdateManyWithoutFromUserNestedInput
    BankWithdrawals?: BankWithdrawalsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedBankAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    securityPin?: StringFieldUpdateOperationsInput | string
    failedPinTries?: IntFieldUpdateOperationsInput | number
    lastFailedPinTry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pfpPublicId?: NullableStringFieldUpdateOperationsInput | string | null
    Balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    Transactions?: TransactionsUncheckedUpdateManyWithoutUserNestedInput
    IncomingTransaction?: WalletTransfersUncheckedUpdateManyWithoutToUserNestedInput
    OutgoingTransaction?: WalletTransfersUncheckedUpdateManyWithoutFromUserNestedInput
    BankWithdrawals?: BankWithdrawalsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BankWithdrawalsUpsertWithWhereUniqueWithoutAccountInput = {
    where: BankWithdrawalsWhereUniqueInput
    update: XOR<BankWithdrawalsUpdateWithoutAccountInput, BankWithdrawalsUncheckedUpdateWithoutAccountInput>
    create: XOR<BankWithdrawalsCreateWithoutAccountInput, BankWithdrawalsUncheckedCreateWithoutAccountInput>
  }

  export type BankWithdrawalsUpdateWithWhereUniqueWithoutAccountInput = {
    where: BankWithdrawalsWhereUniqueInput
    data: XOR<BankWithdrawalsUpdateWithoutAccountInput, BankWithdrawalsUncheckedUpdateWithoutAccountInput>
  }

  export type BankWithdrawalsUpdateManyWithWhereWithoutAccountInput = {
    where: BankWithdrawalsScalarWhereInput
    data: XOR<BankWithdrawalsUpdateManyMutationInput, BankWithdrawalsUncheckedUpdateManyWithoutAccountInput>
  }

  export type BalanceCreateManyUserInput = {
    id?: number
    amount?: number
    locked?: number
  }

  export type TransactionsCreateManyUserInput = {
    id?: number
    status: $Enums.Status
    statement: string
    token: string
    provider: string
    amount: number
    transactionType: $Enums.TransactionType
    startTime?: Date | string
    upatedAt?: Date | string
  }

  export type WalletTransfersCreateManyToUserInput = {
    id?: number
    from: number
    amount: number
    status: $Enums.Status
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletTransfersCreateManyFromUserInput = {
    id?: number
    to: number
    amount: number
    status: $Enums.Status
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type SavedBankAccountsCreateManyUserInput = {
    id?: number
    bankCode: string
    accountNumber: string
    holderName: string
    label: string
    isDeleted?: boolean
  }

  export type BankWithdrawalsCreateManyUserInput = {
    id?: number
    token?: string | null
    accountId: number
    amount: number
    net_amount: number
    fee: number
    gateway: $Enums.WithdrawalOption
    status?: $Enums.ActionStatus
    updatedAt?: Date | string
    startedAt?: Date | string
  }

  export type BalanceUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionsUpdateWithoutUserInput = {
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    statement?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    upatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    statement?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    upatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    statement?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    upatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransfersUpdateWithoutToUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FromUser?: UserUpdateOneRequiredWithoutOutgoingTransactionNestedInput
  }

  export type WalletTransfersUncheckedUpdateWithoutToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransfersUncheckedUpdateManyWithoutToUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    from?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransfersUpdateWithoutFromUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ToUser?: UserUpdateOneRequiredWithoutIncomingTransactionNestedInput
  }

  export type WalletTransfersUncheckedUpdateWithoutFromUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransfersUncheckedUpdateManyWithoutFromUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    to?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedBankAccountsUpdateWithoutUserInput = {
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Withdrawals?: BankWithdrawalsUpdateManyWithoutAccountNestedInput
  }

  export type SavedBankAccountsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    Withdrawals?: BankWithdrawalsUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type SavedBankAccountsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bankCode?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    holderName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BankWithdrawalsUpdateWithoutUserInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    net_amount?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    gateway?: EnumWithdrawalOptionFieldUpdateOperationsInput | $Enums.WithdrawalOption
    status?: EnumActionStatusFieldUpdateOperationsInput | $Enums.ActionStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: SavedBankAccountsUpdateOneRequiredWithoutWithdrawalsNestedInput
  }

  export type BankWithdrawalsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    net_amount?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    gateway?: EnumWithdrawalOptionFieldUpdateOperationsInput | $Enums.WithdrawalOption
    status?: EnumActionStatusFieldUpdateOperationsInput | $Enums.ActionStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankWithdrawalsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    net_amount?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    gateway?: EnumWithdrawalOptionFieldUpdateOperationsInput | $Enums.WithdrawalOption
    status?: EnumActionStatusFieldUpdateOperationsInput | $Enums.ActionStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankWithdrawalsCreateManyAccountInput = {
    id?: number
    token?: string | null
    userId: number
    amount: number
    net_amount: number
    fee: number
    gateway: $Enums.WithdrawalOption
    status?: $Enums.ActionStatus
    updatedAt?: Date | string
    startedAt?: Date | string
  }

  export type BankWithdrawalsUpdateWithoutAccountInput = {
    token?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    net_amount?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    gateway?: EnumWithdrawalOptionFieldUpdateOperationsInput | $Enums.WithdrawalOption
    status?: EnumActionStatusFieldUpdateOperationsInput | $Enums.ActionStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBankWithdrawalsNestedInput
  }

  export type BankWithdrawalsUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    net_amount?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    gateway?: EnumWithdrawalOptionFieldUpdateOperationsInput | $Enums.WithdrawalOption
    status?: EnumActionStatusFieldUpdateOperationsInput | $Enums.ActionStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankWithdrawalsUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    net_amount?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    gateway?: EnumWithdrawalOptionFieldUpdateOperationsInput | $Enums.WithdrawalOption
    status?: EnumActionStatusFieldUpdateOperationsInput | $Enums.ActionStatus
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}