
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
 * Model Folder
 * 
 */
export type Folder = $Result.DefaultSelection<Prisma.$FolderPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model NoteTag
 * 
 */
export type NoteTag = $Result.DefaultSelection<Prisma.$NoteTagPayload>
/**
 * Model NoteHistory
 * 
 */
export type NoteHistory = $Result.DefaultSelection<Prisma.$NoteHistoryPayload>
/**
 * Model NoteShare
 * 
 */
export type NoteShare = $Result.DefaultSelection<Prisma.$NoteSharePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model MediaAttachment
 * 
 */
export type MediaAttachment = $Result.DefaultSelection<Prisma.$MediaAttachmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Permission: {
  view: 'view',
  edit: 'edit'
};

export type Permission = (typeof Permission)[keyof typeof Permission]

}

export type Permission = $Enums.Permission

export const Permission: typeof $Enums.Permission

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
   * `prisma.folder`: Exposes CRUD operations for the **Folder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Folders
    * const folders = await prisma.folder.findMany()
    * ```
    */
  get folder(): Prisma.FolderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noteTag`: Exposes CRUD operations for the **NoteTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoteTags
    * const noteTags = await prisma.noteTag.findMany()
    * ```
    */
  get noteTag(): Prisma.NoteTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noteHistory`: Exposes CRUD operations for the **NoteHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoteHistories
    * const noteHistories = await prisma.noteHistory.findMany()
    * ```
    */
  get noteHistory(): Prisma.NoteHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.noteShare`: Exposes CRUD operations for the **NoteShare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NoteShares
    * const noteShares = await prisma.noteShare.findMany()
    * ```
    */
  get noteShare(): Prisma.NoteShareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mediaAttachment`: Exposes CRUD operations for the **MediaAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaAttachments
    * const mediaAttachments = await prisma.mediaAttachment.findMany()
    * ```
    */
  get mediaAttachment(): Prisma.MediaAttachmentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Folder: 'Folder',
    Note: 'Note',
    Tag: 'Tag',
    NoteTag: 'NoteTag',
    NoteHistory: 'NoteHistory',
    NoteShare: 'NoteShare',
    Comment: 'Comment',
    MediaAttachment: 'MediaAttachment'
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
      modelProps: "user" | "folder" | "note" | "tag" | "noteTag" | "noteHistory" | "noteShare" | "comment" | "mediaAttachment"
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
      Folder: {
        payload: Prisma.$FolderPayload<ExtArgs>
        fields: Prisma.FolderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FolderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FolderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          findFirst: {
            args: Prisma.FolderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FolderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          findMany: {
            args: Prisma.FolderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          create: {
            args: Prisma.FolderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          createMany: {
            args: Prisma.FolderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FolderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          delete: {
            args: Prisma.FolderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          update: {
            args: Prisma.FolderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          deleteMany: {
            args: Prisma.FolderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FolderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FolderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          upsert: {
            args: Prisma.FolderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          aggregate: {
            args: Prisma.FolderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFolder>
          }
          groupBy: {
            args: Prisma.FolderGroupByArgs<ExtArgs>
            result: $Utils.Optional<FolderGroupByOutputType>[]
          }
          count: {
            args: Prisma.FolderCountArgs<ExtArgs>
            result: $Utils.Optional<FolderCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      NoteTag: {
        payload: Prisma.$NoteTagPayload<ExtArgs>
        fields: Prisma.NoteTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          findFirst: {
            args: Prisma.NoteTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          findMany: {
            args: Prisma.NoteTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>[]
          }
          create: {
            args: Prisma.NoteTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          createMany: {
            args: Prisma.NoteTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>[]
          }
          delete: {
            args: Prisma.NoteTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          update: {
            args: Prisma.NoteTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          deleteMany: {
            args: Prisma.NoteTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>[]
          }
          upsert: {
            args: Prisma.NoteTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteTagPayload>
          }
          aggregate: {
            args: Prisma.NoteTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoteTag>
          }
          groupBy: {
            args: Prisma.NoteTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteTagCountArgs<ExtArgs>
            result: $Utils.Optional<NoteTagCountAggregateOutputType> | number
          }
        }
      }
      NoteHistory: {
        payload: Prisma.$NoteHistoryPayload<ExtArgs>
        fields: Prisma.NoteHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteHistoryPayload>
          }
          findFirst: {
            args: Prisma.NoteHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteHistoryPayload>
          }
          findMany: {
            args: Prisma.NoteHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteHistoryPayload>[]
          }
          create: {
            args: Prisma.NoteHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteHistoryPayload>
          }
          createMany: {
            args: Prisma.NoteHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteHistoryPayload>[]
          }
          delete: {
            args: Prisma.NoteHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteHistoryPayload>
          }
          update: {
            args: Prisma.NoteHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteHistoryPayload>
          }
          deleteMany: {
            args: Prisma.NoteHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteHistoryPayload>[]
          }
          upsert: {
            args: Prisma.NoteHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteHistoryPayload>
          }
          aggregate: {
            args: Prisma.NoteHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoteHistory>
          }
          groupBy: {
            args: Prisma.NoteHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<NoteHistoryCountAggregateOutputType> | number
          }
        }
      }
      NoteShare: {
        payload: Prisma.$NoteSharePayload<ExtArgs>
        fields: Prisma.NoteShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>
          }
          findFirst: {
            args: Prisma.NoteShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>
          }
          findMany: {
            args: Prisma.NoteShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>[]
          }
          create: {
            args: Prisma.NoteShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>
          }
          createMany: {
            args: Prisma.NoteShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteShareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>[]
          }
          delete: {
            args: Prisma.NoteShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>
          }
          update: {
            args: Prisma.NoteShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>
          }
          deleteMany: {
            args: Prisma.NoteShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteShareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>[]
          }
          upsert: {
            args: Prisma.NoteShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoteSharePayload>
          }
          aggregate: {
            args: Prisma.NoteShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNoteShare>
          }
          groupBy: {
            args: Prisma.NoteShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteShareCountArgs<ExtArgs>
            result: $Utils.Optional<NoteShareCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      MediaAttachment: {
        payload: Prisma.$MediaAttachmentPayload<ExtArgs>
        fields: Prisma.MediaAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAttachmentPayload>
          }
          findFirst: {
            args: Prisma.MediaAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAttachmentPayload>
          }
          findMany: {
            args: Prisma.MediaAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAttachmentPayload>[]
          }
          create: {
            args: Prisma.MediaAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAttachmentPayload>
          }
          createMany: {
            args: Prisma.MediaAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAttachmentPayload>[]
          }
          delete: {
            args: Prisma.MediaAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAttachmentPayload>
          }
          update: {
            args: Prisma.MediaAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.MediaAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaAttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAttachmentPayload>[]
          }
          upsert: {
            args: Prisma.MediaAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaAttachmentPayload>
          }
          aggregate: {
            args: Prisma.MediaAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaAttachment>
          }
          groupBy: {
            args: Prisma.MediaAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<MediaAttachmentCountAggregateOutputType> | number
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
    folder?: FolderOmit
    note?: NoteOmit
    tag?: TagOmit
    noteTag?: NoteTagOmit
    noteHistory?: NoteHistoryOmit
    noteShare?: NoteShareOmit
    comment?: CommentOmit
    mediaAttachment?: MediaAttachmentOmit
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
    folders: number
    notes: number
    comments: number
    noteHistories: number
    noteShares: number
    mediaAttachments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folders?: boolean | UserCountOutputTypeCountFoldersArgs
    notes?: boolean | UserCountOutputTypeCountNotesArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    noteHistories?: boolean | UserCountOutputTypeCountNoteHistoriesArgs
    noteShares?: boolean | UserCountOutputTypeCountNoteSharesArgs
    mediaAttachments?: boolean | UserCountOutputTypeCountMediaAttachmentsArgs
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
  export type UserCountOutputTypeCountFoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNoteHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNoteSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteShareWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMediaAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaAttachmentWhereInput
  }


  /**
   * Count Type FolderCountOutputType
   */

  export type FolderCountOutputType = {
    notes: number
  }

  export type FolderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | FolderCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolderCountOutputType
     */
    select?: FolderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }


  /**
   * Count Type NoteCountOutputType
   */

  export type NoteCountOutputType = {
    noteTags: number
    noteHistories: number
    noteShares: number
    comments: number
    mediaAttachments: number
  }

  export type NoteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    noteTags?: boolean | NoteCountOutputTypeCountNoteTagsArgs
    noteHistories?: boolean | NoteCountOutputTypeCountNoteHistoriesArgs
    noteShares?: boolean | NoteCountOutputTypeCountNoteSharesArgs
    comments?: boolean | NoteCountOutputTypeCountCommentsArgs
    mediaAttachments?: boolean | NoteCountOutputTypeCountMediaAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteCountOutputType
     */
    select?: NoteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountNoteTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteTagWhereInput
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountNoteHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteHistoryWhereInput
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountNoteSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteShareWhereInput
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * NoteCountOutputType without action
   */
  export type NoteCountOutputTypeCountMediaAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaAttachmentWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    noteTags: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    noteTags?: boolean | TagCountOutputTypeCountNoteTagsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountNoteTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteTagWhereInput
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
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
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
    name: string | null
    email: string
    password_hash: string
    created_at: Date
    updated_at: Date
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
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    folders?: boolean | User$foldersArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    noteHistories?: boolean | User$noteHistoriesArgs<ExtArgs>
    noteShares?: boolean | User$noteSharesArgs<ExtArgs>
    mediaAttachments?: boolean | User$mediaAttachmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folders?: boolean | User$foldersArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    noteHistories?: boolean | User$noteHistoriesArgs<ExtArgs>
    noteShares?: boolean | User$noteSharesArgs<ExtArgs>
    mediaAttachments?: boolean | User$mediaAttachmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      folders: Prisma.$FolderPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      noteHistories: Prisma.$NoteHistoryPayload<ExtArgs>[]
      noteShares: Prisma.$NoteSharePayload<ExtArgs>[]
      mediaAttachments: Prisma.$MediaAttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password_hash: string
      created_at: Date
      updated_at: Date
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
    folders<T extends User$foldersArgs<ExtArgs> = {}>(args?: Subset<T, User$foldersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends User$notesArgs<ExtArgs> = {}>(args?: Subset<T, User$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    noteHistories<T extends User$noteHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$noteHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    noteShares<T extends User$noteSharesArgs<ExtArgs> = {}>(args?: Subset<T, User$noteSharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mediaAttachments<T extends User$mediaAttachmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$mediaAttachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
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
   * User.folders
   */
  export type User$foldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    cursor?: FolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * User.notes
   */
  export type User$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.noteHistories
   */
  export type User$noteHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteHistory
     */
    select?: NoteHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteHistory
     */
    omit?: NoteHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteHistoryInclude<ExtArgs> | null
    where?: NoteHistoryWhereInput
    orderBy?: NoteHistoryOrderByWithRelationInput | NoteHistoryOrderByWithRelationInput[]
    cursor?: NoteHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteHistoryScalarFieldEnum | NoteHistoryScalarFieldEnum[]
  }

  /**
   * User.noteShares
   */
  export type User$noteSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    where?: NoteShareWhereInput
    orderBy?: NoteShareOrderByWithRelationInput | NoteShareOrderByWithRelationInput[]
    cursor?: NoteShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteShareScalarFieldEnum | NoteShareScalarFieldEnum[]
  }

  /**
   * User.mediaAttachments
   */
  export type User$mediaAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAttachment
     */
    select?: MediaAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAttachment
     */
    omit?: MediaAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAttachmentInclude<ExtArgs> | null
    where?: MediaAttachmentWhereInput
    orderBy?: MediaAttachmentOrderByWithRelationInput | MediaAttachmentOrderByWithRelationInput[]
    cursor?: MediaAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaAttachmentScalarFieldEnum | MediaAttachmentScalarFieldEnum[]
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
   * Model Folder
   */

  export type AggregateFolder = {
    _count: FolderCountAggregateOutputType | null
    _avg: FolderAvgAggregateOutputType | null
    _sum: FolderSumAggregateOutputType | null
    _min: FolderMinAggregateOutputType | null
    _max: FolderMaxAggregateOutputType | null
  }

  export type FolderAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type FolderSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type FolderMinAggregateOutputType = {
    id: number | null
    name: string | null
    domain: string | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FolderMaxAggregateOutputType = {
    id: number | null
    name: string | null
    domain: string | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FolderCountAggregateOutputType = {
    id: number
    name: number
    domain: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FolderAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type FolderSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type FolderMinAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type FolderMaxAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type FolderCountAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FolderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folder to aggregate.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Folders
    **/
    _count?: true | FolderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FolderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FolderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FolderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FolderMaxAggregateInputType
  }

  export type GetFolderAggregateType<T extends FolderAggregateArgs> = {
        [P in keyof T & keyof AggregateFolder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolder[P]>
      : GetScalarType<T[P], AggregateFolder[P]>
  }




  export type FolderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithAggregationInput | FolderOrderByWithAggregationInput[]
    by: FolderScalarFieldEnum[] | FolderScalarFieldEnum
    having?: FolderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FolderCountAggregateInputType | true
    _avg?: FolderAvgAggregateInputType
    _sum?: FolderSumAggregateInputType
    _min?: FolderMinAggregateInputType
    _max?: FolderMaxAggregateInputType
  }

  export type FolderGroupByOutputType = {
    id: number
    name: string
    domain: string | null
    user_id: number | null
    created_at: Date
    updated_at: Date
    _count: FolderCountAggregateOutputType | null
    _avg: FolderAvgAggregateOutputType | null
    _sum: FolderSumAggregateOutputType | null
    _min: FolderMinAggregateOutputType | null
    _max: FolderMaxAggregateOutputType | null
  }

  type GetFolderGroupByPayload<T extends FolderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FolderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FolderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FolderGroupByOutputType[P]>
            : GetScalarType<T[P], FolderGroupByOutputType[P]>
        }
      >
    >


  export type FolderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Folder$userArgs<ExtArgs>
    notes?: boolean | Folder$notesArgs<ExtArgs>
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Folder$userArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Folder$userArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>

  export type FolderSelectScalar = {
    id?: boolean
    name?: boolean
    domain?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FolderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "domain" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["folder"]>
  export type FolderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Folder$userArgs<ExtArgs>
    notes?: boolean | Folder$notesArgs<ExtArgs>
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FolderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Folder$userArgs<ExtArgs>
  }
  export type FolderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Folder$userArgs<ExtArgs>
  }

  export type $FolderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Folder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      notes: Prisma.$NotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      domain: string | null
      user_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["folder"]>
    composites: {}
  }

  type FolderGetPayload<S extends boolean | null | undefined | FolderDefaultArgs> = $Result.GetResult<Prisma.$FolderPayload, S>

  type FolderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FolderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FolderCountAggregateInputType | true
    }

  export interface FolderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Folder'], meta: { name: 'Folder' } }
    /**
     * Find zero or one Folder that matches the filter.
     * @param {FolderFindUniqueArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FolderFindUniqueArgs>(args: SelectSubset<T, FolderFindUniqueArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Folder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FolderFindUniqueOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FolderFindUniqueOrThrowArgs>(args: SelectSubset<T, FolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FolderFindFirstArgs>(args?: SelectSubset<T, FolderFindFirstArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FolderFindFirstOrThrowArgs>(args?: SelectSubset<T, FolderFindFirstOrThrowArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Folders
     * const folders = await prisma.folder.findMany()
     * 
     * // Get first 10 Folders
     * const folders = await prisma.folder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const folderWithIdOnly = await prisma.folder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FolderFindManyArgs>(args?: SelectSubset<T, FolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Folder.
     * @param {FolderCreateArgs} args - Arguments to create a Folder.
     * @example
     * // Create one Folder
     * const Folder = await prisma.folder.create({
     *   data: {
     *     // ... data to create a Folder
     *   }
     * })
     * 
     */
    create<T extends FolderCreateArgs>(args: SelectSubset<T, FolderCreateArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Folders.
     * @param {FolderCreateManyArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FolderCreateManyArgs>(args?: SelectSubset<T, FolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Folders and returns the data saved in the database.
     * @param {FolderCreateManyAndReturnArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FolderCreateManyAndReturnArgs>(args?: SelectSubset<T, FolderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Folder.
     * @param {FolderDeleteArgs} args - Arguments to delete one Folder.
     * @example
     * // Delete one Folder
     * const Folder = await prisma.folder.delete({
     *   where: {
     *     // ... filter to delete one Folder
     *   }
     * })
     * 
     */
    delete<T extends FolderDeleteArgs>(args: SelectSubset<T, FolderDeleteArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Folder.
     * @param {FolderUpdateArgs} args - Arguments to update one Folder.
     * @example
     * // Update one Folder
     * const folder = await prisma.folder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FolderUpdateArgs>(args: SelectSubset<T, FolderUpdateArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Folders.
     * @param {FolderDeleteManyArgs} args - Arguments to filter Folders to delete.
     * @example
     * // Delete a few Folders
     * const { count } = await prisma.folder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FolderDeleteManyArgs>(args?: SelectSubset<T, FolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FolderUpdateManyArgs>(args: SelectSubset<T, FolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders and returns the data updated in the database.
     * @param {FolderUpdateManyAndReturnArgs} args - Arguments to update many Folders.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Folders and only return the `id`
     * const folderWithIdOnly = await prisma.folder.updateManyAndReturn({
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
    updateManyAndReturn<T extends FolderUpdateManyAndReturnArgs>(args: SelectSubset<T, FolderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Folder.
     * @param {FolderUpsertArgs} args - Arguments to update or create a Folder.
     * @example
     * // Update or create a Folder
     * const folder = await prisma.folder.upsert({
     *   create: {
     *     // ... data to create a Folder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Folder we want to update
     *   }
     * })
     */
    upsert<T extends FolderUpsertArgs>(args: SelectSubset<T, FolderUpsertArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderCountArgs} args - Arguments to filter Folders to count.
     * @example
     * // Count the number of Folders
     * const count = await prisma.folder.count({
     *   where: {
     *     // ... the filter for the Folders we want to count
     *   }
     * })
    **/
    count<T extends FolderCountArgs>(
      args?: Subset<T, FolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FolderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FolderAggregateArgs>(args: Subset<T, FolderAggregateArgs>): Prisma.PrismaPromise<GetFolderAggregateType<T>>

    /**
     * Group by Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderGroupByArgs} args - Group by arguments.
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
      T extends FolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FolderGroupByArgs['orderBy'] }
        : { orderBy?: FolderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Folder model
   */
  readonly fields: FolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Folder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FolderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Folder$userArgs<ExtArgs> = {}>(args?: Subset<T, Folder$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notes<T extends Folder$notesArgs<ExtArgs> = {}>(args?: Subset<T, Folder$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Folder model
   */
  interface FolderFieldRefs {
    readonly id: FieldRef<"Folder", 'Int'>
    readonly name: FieldRef<"Folder", 'String'>
    readonly domain: FieldRef<"Folder", 'String'>
    readonly user_id: FieldRef<"Folder", 'Int'>
    readonly created_at: FieldRef<"Folder", 'DateTime'>
    readonly updated_at: FieldRef<"Folder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Folder findUnique
   */
  export type FolderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder findUniqueOrThrow
   */
  export type FolderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder findFirst
   */
  export type FolderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder findFirstOrThrow
   */
  export type FolderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder findMany
   */
  export type FolderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folders to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder create
   */
  export type FolderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The data needed to create a Folder.
     */
    data: XOR<FolderCreateInput, FolderUncheckedCreateInput>
  }

  /**
   * Folder createMany
   */
  export type FolderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Folder createManyAndReturn
   */
  export type FolderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Folder update
   */
  export type FolderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The data needed to update a Folder.
     */
    data: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>
    /**
     * Choose, which Folder to update.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder updateMany
   */
  export type FolderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to update.
     */
    limit?: number
  }

  /**
   * Folder updateManyAndReturn
   */
  export type FolderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Folder upsert
   */
  export type FolderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The filter to search for the Folder to update in case it exists.
     */
    where: FolderWhereUniqueInput
    /**
     * In case the Folder found by the `where` argument doesn't exist, create a new Folder with this data.
     */
    create: XOR<FolderCreateInput, FolderUncheckedCreateInput>
    /**
     * In case the Folder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>
  }

  /**
   * Folder delete
   */
  export type FolderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter which Folder to delete.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder deleteMany
   */
  export type FolderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folders to delete
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to delete.
     */
    limit?: number
  }

  /**
   * Folder.user
   */
  export type Folder$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Folder.notes
   */
  export type Folder$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Folder without action
   */
  export type FolderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    id: number | null
    folder_id: number | null
    user_id: number | null
  }

  export type NoteSumAggregateOutputType = {
    id: number | null
    folder_id: number | null
    user_id: number | null
  }

  export type NoteMinAggregateOutputType = {
    id: number | null
    title: string | null
    folder_id: number | null
    user_id: number | null
    is_pinned: boolean | null
    is_trashed: boolean | null
    is_shared: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: number | null
    title: string | null
    folder_id: number | null
    user_id: number | null
    is_pinned: boolean | null
    is_trashed: boolean | null
    is_shared: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    title: number
    content: number
    folder_id: number
    user_id: number
    is_pinned: number
    is_trashed: number
    is_shared: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    id?: true
    folder_id?: true
    user_id?: true
  }

  export type NoteSumAggregateInputType = {
    id?: true
    folder_id?: true
    user_id?: true
  }

  export type NoteMinAggregateInputType = {
    id?: true
    title?: true
    folder_id?: true
    user_id?: true
    is_pinned?: true
    is_trashed?: true
    is_shared?: true
    created_at?: true
    updated_at?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    title?: true
    folder_id?: true
    user_id?: true
    is_pinned?: true
    is_trashed?: true
    is_shared?: true
    created_at?: true
    updated_at?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    folder_id?: true
    user_id?: true
    is_pinned?: true
    is_trashed?: true
    is_shared?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: number
    title: string | null
    content: JsonValue | null
    folder_id: number | null
    user_id: number | null
    is_pinned: boolean
    is_trashed: boolean
    is_shared: boolean
    created_at: Date
    updated_at: Date
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    folder_id?: boolean
    user_id?: boolean
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: boolean
    updated_at?: boolean
    folder?: boolean | Note$folderArgs<ExtArgs>
    user?: boolean | Note$userArgs<ExtArgs>
    noteTags?: boolean | Note$noteTagsArgs<ExtArgs>
    noteHistories?: boolean | Note$noteHistoriesArgs<ExtArgs>
    noteShares?: boolean | Note$noteSharesArgs<ExtArgs>
    comments?: boolean | Note$commentsArgs<ExtArgs>
    mediaAttachments?: boolean | Note$mediaAttachmentsArgs<ExtArgs>
    _count?: boolean | NoteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    folder_id?: boolean
    user_id?: boolean
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: boolean
    updated_at?: boolean
    folder?: boolean | Note$folderArgs<ExtArgs>
    user?: boolean | Note$userArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    folder_id?: boolean
    user_id?: boolean
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: boolean
    updated_at?: boolean
    folder?: boolean | Note$folderArgs<ExtArgs>
    user?: boolean | Note$userArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    folder_id?: boolean
    user_id?: boolean
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "folder_id" | "user_id" | "is_pinned" | "is_trashed" | "is_shared" | "created_at" | "updated_at", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | Note$folderArgs<ExtArgs>
    user?: boolean | Note$userArgs<ExtArgs>
    noteTags?: boolean | Note$noteTagsArgs<ExtArgs>
    noteHistories?: boolean | Note$noteHistoriesArgs<ExtArgs>
    noteShares?: boolean | Note$noteSharesArgs<ExtArgs>
    comments?: boolean | Note$commentsArgs<ExtArgs>
    mediaAttachments?: boolean | Note$mediaAttachmentsArgs<ExtArgs>
    _count?: boolean | NoteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | Note$folderArgs<ExtArgs>
    user?: boolean | Note$userArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folder?: boolean | Note$folderArgs<ExtArgs>
    user?: boolean | Note$userArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      folder: Prisma.$FolderPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
      noteTags: Prisma.$NoteTagPayload<ExtArgs>[]
      noteHistories: Prisma.$NoteHistoryPayload<ExtArgs>[]
      noteShares: Prisma.$NoteSharePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      mediaAttachments: Prisma.$MediaAttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      content: Prisma.JsonValue | null
      folder_id: number | null
      user_id: number | null
      is_pinned: boolean
      is_trashed: boolean
      is_shared: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
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
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
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
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    folder<T extends Note$folderArgs<ExtArgs> = {}>(args?: Subset<T, Note$folderArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends Note$userArgs<ExtArgs> = {}>(args?: Subset<T, Note$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    noteTags<T extends Note$noteTagsArgs<ExtArgs> = {}>(args?: Subset<T, Note$noteTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    noteHistories<T extends Note$noteHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Note$noteHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    noteShares<T extends Note$noteSharesArgs<ExtArgs> = {}>(args?: Subset<T, Note$noteSharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Note$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Note$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mediaAttachments<T extends Note$mediaAttachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Note$mediaAttachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'Int'>
    readonly title: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'Json'>
    readonly folder_id: FieldRef<"Note", 'Int'>
    readonly user_id: FieldRef<"Note", 'Int'>
    readonly is_pinned: FieldRef<"Note", 'Boolean'>
    readonly is_trashed: FieldRef<"Note", 'Boolean'>
    readonly is_shared: FieldRef<"Note", 'Boolean'>
    readonly created_at: FieldRef<"Note", 'DateTime'>
    readonly updated_at: FieldRef<"Note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data?: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note.folder
   */
  export type Note$folderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
  }

  /**
   * Note.user
   */
  export type Note$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Note.noteTags
   */
  export type Note$noteTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    where?: NoteTagWhereInput
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    cursor?: NoteTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * Note.noteHistories
   */
  export type Note$noteHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteHistory
     */
    select?: NoteHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteHistory
     */
    omit?: NoteHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteHistoryInclude<ExtArgs> | null
    where?: NoteHistoryWhereInput
    orderBy?: NoteHistoryOrderByWithRelationInput | NoteHistoryOrderByWithRelationInput[]
    cursor?: NoteHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteHistoryScalarFieldEnum | NoteHistoryScalarFieldEnum[]
  }

  /**
   * Note.noteShares
   */
  export type Note$noteSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    where?: NoteShareWhereInput
    orderBy?: NoteShareOrderByWithRelationInput | NoteShareOrderByWithRelationInput[]
    cursor?: NoteShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteShareScalarFieldEnum | NoteShareScalarFieldEnum[]
  }

  /**
   * Note.comments
   */
  export type Note$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Note.mediaAttachments
   */
  export type Note$mediaAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAttachment
     */
    select?: MediaAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAttachment
     */
    omit?: MediaAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAttachmentInclude<ExtArgs> | null
    where?: MediaAttachmentWhereInput
    orderBy?: MediaAttachmentOrderByWithRelationInput | MediaAttachmentOrderByWithRelationInput[]
    cursor?: MediaAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaAttachmentScalarFieldEnum | MediaAttachmentScalarFieldEnum[]
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    noteTags?: boolean | Tag$noteTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    noteTags?: boolean | Tag$noteTagsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      noteTags: Prisma.$NoteTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    noteTags<T extends Tag$noteTagsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$noteTagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.noteTags
   */
  export type Tag$noteTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    where?: NoteTagWhereInput
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    cursor?: NoteTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model NoteTag
   */

  export type AggregateNoteTag = {
    _count: NoteTagCountAggregateOutputType | null
    _avg: NoteTagAvgAggregateOutputType | null
    _sum: NoteTagSumAggregateOutputType | null
    _min: NoteTagMinAggregateOutputType | null
    _max: NoteTagMaxAggregateOutputType | null
  }

  export type NoteTagAvgAggregateOutputType = {
    note_id: number | null
    tag_id: number | null
  }

  export type NoteTagSumAggregateOutputType = {
    note_id: number | null
    tag_id: number | null
  }

  export type NoteTagMinAggregateOutputType = {
    note_id: number | null
    tag_id: number | null
  }

  export type NoteTagMaxAggregateOutputType = {
    note_id: number | null
    tag_id: number | null
  }

  export type NoteTagCountAggregateOutputType = {
    note_id: number
    tag_id: number
    _all: number
  }


  export type NoteTagAvgAggregateInputType = {
    note_id?: true
    tag_id?: true
  }

  export type NoteTagSumAggregateInputType = {
    note_id?: true
    tag_id?: true
  }

  export type NoteTagMinAggregateInputType = {
    note_id?: true
    tag_id?: true
  }

  export type NoteTagMaxAggregateInputType = {
    note_id?: true
    tag_id?: true
  }

  export type NoteTagCountAggregateInputType = {
    note_id?: true
    tag_id?: true
    _all?: true
  }

  export type NoteTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteTag to aggregate.
     */
    where?: NoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteTags to fetch.
     */
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoteTags
    **/
    _count?: true | NoteTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteTagMaxAggregateInputType
  }

  export type GetNoteTagAggregateType<T extends NoteTagAggregateArgs> = {
        [P in keyof T & keyof AggregateNoteTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoteTag[P]>
      : GetScalarType<T[P], AggregateNoteTag[P]>
  }




  export type NoteTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteTagWhereInput
    orderBy?: NoteTagOrderByWithAggregationInput | NoteTagOrderByWithAggregationInput[]
    by: NoteTagScalarFieldEnum[] | NoteTagScalarFieldEnum
    having?: NoteTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteTagCountAggregateInputType | true
    _avg?: NoteTagAvgAggregateInputType
    _sum?: NoteTagSumAggregateInputType
    _min?: NoteTagMinAggregateInputType
    _max?: NoteTagMaxAggregateInputType
  }

  export type NoteTagGroupByOutputType = {
    note_id: number
    tag_id: number
    _count: NoteTagCountAggregateOutputType | null
    _avg: NoteTagAvgAggregateOutputType | null
    _sum: NoteTagSumAggregateOutputType | null
    _min: NoteTagMinAggregateOutputType | null
    _max: NoteTagMaxAggregateOutputType | null
  }

  type GetNoteTagGroupByPayload<T extends NoteTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteTagGroupByOutputType[P]>
            : GetScalarType<T[P], NoteTagGroupByOutputType[P]>
        }
      >
    >


  export type NoteTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    tag_id?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteTag"]>

  export type NoteTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    tag_id?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteTag"]>

  export type NoteTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    tag_id?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteTag"]>

  export type NoteTagSelectScalar = {
    note_id?: boolean
    tag_id?: boolean
  }

  export type NoteTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"note_id" | "tag_id", ExtArgs["result"]["noteTag"]>
  export type NoteTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type NoteTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type NoteTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $NoteTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoteTag"
    objects: {
      note: Prisma.$NotePayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      note_id: number
      tag_id: number
    }, ExtArgs["result"]["noteTag"]>
    composites: {}
  }

  type NoteTagGetPayload<S extends boolean | null | undefined | NoteTagDefaultArgs> = $Result.GetResult<Prisma.$NoteTagPayload, S>

  type NoteTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteTagCountAggregateInputType | true
    }

  export interface NoteTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoteTag'], meta: { name: 'NoteTag' } }
    /**
     * Find zero or one NoteTag that matches the filter.
     * @param {NoteTagFindUniqueArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteTagFindUniqueArgs>(args: SelectSubset<T, NoteTagFindUniqueArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NoteTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteTagFindUniqueOrThrowArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteTagFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagFindFirstArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteTagFindFirstArgs>(args?: SelectSubset<T, NoteTagFindFirstArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagFindFirstOrThrowArgs} args - Arguments to find a NoteTag
     * @example
     * // Get one NoteTag
     * const noteTag = await prisma.noteTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteTagFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NoteTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoteTags
     * const noteTags = await prisma.noteTag.findMany()
     * 
     * // Get first 10 NoteTags
     * const noteTags = await prisma.noteTag.findMany({ take: 10 })
     * 
     * // Only select the `note_id`
     * const noteTagWithNote_idOnly = await prisma.noteTag.findMany({ select: { note_id: true } })
     * 
     */
    findMany<T extends NoteTagFindManyArgs>(args?: SelectSubset<T, NoteTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NoteTag.
     * @param {NoteTagCreateArgs} args - Arguments to create a NoteTag.
     * @example
     * // Create one NoteTag
     * const NoteTag = await prisma.noteTag.create({
     *   data: {
     *     // ... data to create a NoteTag
     *   }
     * })
     * 
     */
    create<T extends NoteTagCreateArgs>(args: SelectSubset<T, NoteTagCreateArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NoteTags.
     * @param {NoteTagCreateManyArgs} args - Arguments to create many NoteTags.
     * @example
     * // Create many NoteTags
     * const noteTag = await prisma.noteTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteTagCreateManyArgs>(args?: SelectSubset<T, NoteTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NoteTags and returns the data saved in the database.
     * @param {NoteTagCreateManyAndReturnArgs} args - Arguments to create many NoteTags.
     * @example
     * // Create many NoteTags
     * const noteTag = await prisma.noteTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NoteTags and only return the `note_id`
     * const noteTagWithNote_idOnly = await prisma.noteTag.createManyAndReturn({
     *   select: { note_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteTagCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NoteTag.
     * @param {NoteTagDeleteArgs} args - Arguments to delete one NoteTag.
     * @example
     * // Delete one NoteTag
     * const NoteTag = await prisma.noteTag.delete({
     *   where: {
     *     // ... filter to delete one NoteTag
     *   }
     * })
     * 
     */
    delete<T extends NoteTagDeleteArgs>(args: SelectSubset<T, NoteTagDeleteArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NoteTag.
     * @param {NoteTagUpdateArgs} args - Arguments to update one NoteTag.
     * @example
     * // Update one NoteTag
     * const noteTag = await prisma.noteTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteTagUpdateArgs>(args: SelectSubset<T, NoteTagUpdateArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NoteTags.
     * @param {NoteTagDeleteManyArgs} args - Arguments to filter NoteTags to delete.
     * @example
     * // Delete a few NoteTags
     * const { count } = await prisma.noteTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteTagDeleteManyArgs>(args?: SelectSubset<T, NoteTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoteTags
     * const noteTag = await prisma.noteTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteTagUpdateManyArgs>(args: SelectSubset<T, NoteTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteTags and returns the data updated in the database.
     * @param {NoteTagUpdateManyAndReturnArgs} args - Arguments to update many NoteTags.
     * @example
     * // Update many NoteTags
     * const noteTag = await prisma.noteTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NoteTags and only return the `note_id`
     * const noteTagWithNote_idOnly = await prisma.noteTag.updateManyAndReturn({
     *   select: { note_id: true },
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
    updateManyAndReturn<T extends NoteTagUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NoteTag.
     * @param {NoteTagUpsertArgs} args - Arguments to update or create a NoteTag.
     * @example
     * // Update or create a NoteTag
     * const noteTag = await prisma.noteTag.upsert({
     *   create: {
     *     // ... data to create a NoteTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoteTag we want to update
     *   }
     * })
     */
    upsert<T extends NoteTagUpsertArgs>(args: SelectSubset<T, NoteTagUpsertArgs<ExtArgs>>): Prisma__NoteTagClient<$Result.GetResult<Prisma.$NoteTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NoteTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagCountArgs} args - Arguments to filter NoteTags to count.
     * @example
     * // Count the number of NoteTags
     * const count = await prisma.noteTag.count({
     *   where: {
     *     // ... the filter for the NoteTags we want to count
     *   }
     * })
    **/
    count<T extends NoteTagCountArgs>(
      args?: Subset<T, NoteTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoteTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteTagAggregateArgs>(args: Subset<T, NoteTagAggregateArgs>): Prisma.PrismaPromise<GetNoteTagAggregateType<T>>

    /**
     * Group by NoteTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteTagGroupByArgs} args - Group by arguments.
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
      T extends NoteTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteTagGroupByArgs['orderBy'] }
        : { orderBy?: NoteTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoteTag model
   */
  readonly fields: NoteTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoteTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NoteTag model
   */
  interface NoteTagFieldRefs {
    readonly note_id: FieldRef<"NoteTag", 'Int'>
    readonly tag_id: FieldRef<"NoteTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NoteTag findUnique
   */
  export type NoteTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTag to fetch.
     */
    where: NoteTagWhereUniqueInput
  }

  /**
   * NoteTag findUniqueOrThrow
   */
  export type NoteTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTag to fetch.
     */
    where: NoteTagWhereUniqueInput
  }

  /**
   * NoteTag findFirst
   */
  export type NoteTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTag to fetch.
     */
    where?: NoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteTags to fetch.
     */
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteTags.
     */
    cursor?: NoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteTags.
     */
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * NoteTag findFirstOrThrow
   */
  export type NoteTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTag to fetch.
     */
    where?: NoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteTags to fetch.
     */
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteTags.
     */
    cursor?: NoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteTags.
     */
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * NoteTag findMany
   */
  export type NoteTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter, which NoteTags to fetch.
     */
    where?: NoteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteTags to fetch.
     */
    orderBy?: NoteTagOrderByWithRelationInput | NoteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoteTags.
     */
    cursor?: NoteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteTags.
     */
    skip?: number
    distinct?: NoteTagScalarFieldEnum | NoteTagScalarFieldEnum[]
  }

  /**
   * NoteTag create
   */
  export type NoteTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * The data needed to create a NoteTag.
     */
    data: XOR<NoteTagCreateInput, NoteTagUncheckedCreateInput>
  }

  /**
   * NoteTag createMany
   */
  export type NoteTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoteTags.
     */
    data: NoteTagCreateManyInput | NoteTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoteTag createManyAndReturn
   */
  export type NoteTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * The data used to create many NoteTags.
     */
    data: NoteTagCreateManyInput | NoteTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteTag update
   */
  export type NoteTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * The data needed to update a NoteTag.
     */
    data: XOR<NoteTagUpdateInput, NoteTagUncheckedUpdateInput>
    /**
     * Choose, which NoteTag to update.
     */
    where: NoteTagWhereUniqueInput
  }

  /**
   * NoteTag updateMany
   */
  export type NoteTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoteTags.
     */
    data: XOR<NoteTagUpdateManyMutationInput, NoteTagUncheckedUpdateManyInput>
    /**
     * Filter which NoteTags to update
     */
    where?: NoteTagWhereInput
    /**
     * Limit how many NoteTags to update.
     */
    limit?: number
  }

  /**
   * NoteTag updateManyAndReturn
   */
  export type NoteTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * The data used to update NoteTags.
     */
    data: XOR<NoteTagUpdateManyMutationInput, NoteTagUncheckedUpdateManyInput>
    /**
     * Filter which NoteTags to update
     */
    where?: NoteTagWhereInput
    /**
     * Limit how many NoteTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteTag upsert
   */
  export type NoteTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * The filter to search for the NoteTag to update in case it exists.
     */
    where: NoteTagWhereUniqueInput
    /**
     * In case the NoteTag found by the `where` argument doesn't exist, create a new NoteTag with this data.
     */
    create: XOR<NoteTagCreateInput, NoteTagUncheckedCreateInput>
    /**
     * In case the NoteTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteTagUpdateInput, NoteTagUncheckedUpdateInput>
  }

  /**
   * NoteTag delete
   */
  export type NoteTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
    /**
     * Filter which NoteTag to delete.
     */
    where: NoteTagWhereUniqueInput
  }

  /**
   * NoteTag deleteMany
   */
  export type NoteTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteTags to delete
     */
    where?: NoteTagWhereInput
    /**
     * Limit how many NoteTags to delete.
     */
    limit?: number
  }

  /**
   * NoteTag without action
   */
  export type NoteTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteTag
     */
    select?: NoteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteTag
     */
    omit?: NoteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteTagInclude<ExtArgs> | null
  }


  /**
   * Model NoteHistory
   */

  export type AggregateNoteHistory = {
    _count: NoteHistoryCountAggregateOutputType | null
    _avg: NoteHistoryAvgAggregateOutputType | null
    _sum: NoteHistorySumAggregateOutputType | null
    _min: NoteHistoryMinAggregateOutputType | null
    _max: NoteHistoryMaxAggregateOutputType | null
  }

  export type NoteHistoryAvgAggregateOutputType = {
    id: number | null
    note_id: number | null
    updated_by: number | null
  }

  export type NoteHistorySumAggregateOutputType = {
    id: number | null
    note_id: number | null
    updated_by: number | null
  }

  export type NoteHistoryMinAggregateOutputType = {
    id: number | null
    note_id: number | null
    content: string | null
    updated_by: number | null
    updated_at: Date | null
  }

  export type NoteHistoryMaxAggregateOutputType = {
    id: number | null
    note_id: number | null
    content: string | null
    updated_by: number | null
    updated_at: Date | null
  }

  export type NoteHistoryCountAggregateOutputType = {
    id: number
    note_id: number
    content: number
    updated_by: number
    updated_at: number
    _all: number
  }


  export type NoteHistoryAvgAggregateInputType = {
    id?: true
    note_id?: true
    updated_by?: true
  }

  export type NoteHistorySumAggregateInputType = {
    id?: true
    note_id?: true
    updated_by?: true
  }

  export type NoteHistoryMinAggregateInputType = {
    id?: true
    note_id?: true
    content?: true
    updated_by?: true
    updated_at?: true
  }

  export type NoteHistoryMaxAggregateInputType = {
    id?: true
    note_id?: true
    content?: true
    updated_by?: true
    updated_at?: true
  }

  export type NoteHistoryCountAggregateInputType = {
    id?: true
    note_id?: true
    content?: true
    updated_by?: true
    updated_at?: true
    _all?: true
  }

  export type NoteHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteHistory to aggregate.
     */
    where?: NoteHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteHistories to fetch.
     */
    orderBy?: NoteHistoryOrderByWithRelationInput | NoteHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoteHistories
    **/
    _count?: true | NoteHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteHistoryMaxAggregateInputType
  }

  export type GetNoteHistoryAggregateType<T extends NoteHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateNoteHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoteHistory[P]>
      : GetScalarType<T[P], AggregateNoteHistory[P]>
  }




  export type NoteHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteHistoryWhereInput
    orderBy?: NoteHistoryOrderByWithAggregationInput | NoteHistoryOrderByWithAggregationInput[]
    by: NoteHistoryScalarFieldEnum[] | NoteHistoryScalarFieldEnum
    having?: NoteHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteHistoryCountAggregateInputType | true
    _avg?: NoteHistoryAvgAggregateInputType
    _sum?: NoteHistorySumAggregateInputType
    _min?: NoteHistoryMinAggregateInputType
    _max?: NoteHistoryMaxAggregateInputType
  }

  export type NoteHistoryGroupByOutputType = {
    id: number
    note_id: number
    content: string | null
    updated_by: number | null
    updated_at: Date
    _count: NoteHistoryCountAggregateOutputType | null
    _avg: NoteHistoryAvgAggregateOutputType | null
    _sum: NoteHistorySumAggregateOutputType | null
    _min: NoteHistoryMinAggregateOutputType | null
    _max: NoteHistoryMaxAggregateOutputType | null
  }

  type GetNoteHistoryGroupByPayload<T extends NoteHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], NoteHistoryGroupByOutputType[P]>
        }
      >
    >


  export type NoteHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note_id?: boolean
    content?: boolean
    updated_by?: boolean
    updated_at?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | NoteHistory$userArgs<ExtArgs>
  }, ExtArgs["result"]["noteHistory"]>

  export type NoteHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note_id?: boolean
    content?: boolean
    updated_by?: boolean
    updated_at?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | NoteHistory$userArgs<ExtArgs>
  }, ExtArgs["result"]["noteHistory"]>

  export type NoteHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note_id?: boolean
    content?: boolean
    updated_by?: boolean
    updated_at?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | NoteHistory$userArgs<ExtArgs>
  }, ExtArgs["result"]["noteHistory"]>

  export type NoteHistorySelectScalar = {
    id?: boolean
    note_id?: boolean
    content?: boolean
    updated_by?: boolean
    updated_at?: boolean
  }

  export type NoteHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "note_id" | "content" | "updated_by" | "updated_at", ExtArgs["result"]["noteHistory"]>
  export type NoteHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | NoteHistory$userArgs<ExtArgs>
  }
  export type NoteHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | NoteHistory$userArgs<ExtArgs>
  }
  export type NoteHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | NoteHistory$userArgs<ExtArgs>
  }

  export type $NoteHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoteHistory"
    objects: {
      note: Prisma.$NotePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      note_id: number
      content: string | null
      updated_by: number | null
      updated_at: Date
    }, ExtArgs["result"]["noteHistory"]>
    composites: {}
  }

  type NoteHistoryGetPayload<S extends boolean | null | undefined | NoteHistoryDefaultArgs> = $Result.GetResult<Prisma.$NoteHistoryPayload, S>

  type NoteHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteHistoryCountAggregateInputType | true
    }

  export interface NoteHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoteHistory'], meta: { name: 'NoteHistory' } }
    /**
     * Find zero or one NoteHistory that matches the filter.
     * @param {NoteHistoryFindUniqueArgs} args - Arguments to find a NoteHistory
     * @example
     * // Get one NoteHistory
     * const noteHistory = await prisma.noteHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteHistoryFindUniqueArgs>(args: SelectSubset<T, NoteHistoryFindUniqueArgs<ExtArgs>>): Prisma__NoteHistoryClient<$Result.GetResult<Prisma.$NoteHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NoteHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteHistoryFindUniqueOrThrowArgs} args - Arguments to find a NoteHistory
     * @example
     * // Get one NoteHistory
     * const noteHistory = await prisma.noteHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteHistoryClient<$Result.GetResult<Prisma.$NoteHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteHistoryFindFirstArgs} args - Arguments to find a NoteHistory
     * @example
     * // Get one NoteHistory
     * const noteHistory = await prisma.noteHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteHistoryFindFirstArgs>(args?: SelectSubset<T, NoteHistoryFindFirstArgs<ExtArgs>>): Prisma__NoteHistoryClient<$Result.GetResult<Prisma.$NoteHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteHistoryFindFirstOrThrowArgs} args - Arguments to find a NoteHistory
     * @example
     * // Get one NoteHistory
     * const noteHistory = await prisma.noteHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteHistoryClient<$Result.GetResult<Prisma.$NoteHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NoteHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoteHistories
     * const noteHistories = await prisma.noteHistory.findMany()
     * 
     * // Get first 10 NoteHistories
     * const noteHistories = await prisma.noteHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteHistoryWithIdOnly = await prisma.noteHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteHistoryFindManyArgs>(args?: SelectSubset<T, NoteHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NoteHistory.
     * @param {NoteHistoryCreateArgs} args - Arguments to create a NoteHistory.
     * @example
     * // Create one NoteHistory
     * const NoteHistory = await prisma.noteHistory.create({
     *   data: {
     *     // ... data to create a NoteHistory
     *   }
     * })
     * 
     */
    create<T extends NoteHistoryCreateArgs>(args: SelectSubset<T, NoteHistoryCreateArgs<ExtArgs>>): Prisma__NoteHistoryClient<$Result.GetResult<Prisma.$NoteHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NoteHistories.
     * @param {NoteHistoryCreateManyArgs} args - Arguments to create many NoteHistories.
     * @example
     * // Create many NoteHistories
     * const noteHistory = await prisma.noteHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteHistoryCreateManyArgs>(args?: SelectSubset<T, NoteHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NoteHistories and returns the data saved in the database.
     * @param {NoteHistoryCreateManyAndReturnArgs} args - Arguments to create many NoteHistories.
     * @example
     * // Create many NoteHistories
     * const noteHistory = await prisma.noteHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NoteHistories and only return the `id`
     * const noteHistoryWithIdOnly = await prisma.noteHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NoteHistory.
     * @param {NoteHistoryDeleteArgs} args - Arguments to delete one NoteHistory.
     * @example
     * // Delete one NoteHistory
     * const NoteHistory = await prisma.noteHistory.delete({
     *   where: {
     *     // ... filter to delete one NoteHistory
     *   }
     * })
     * 
     */
    delete<T extends NoteHistoryDeleteArgs>(args: SelectSubset<T, NoteHistoryDeleteArgs<ExtArgs>>): Prisma__NoteHistoryClient<$Result.GetResult<Prisma.$NoteHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NoteHistory.
     * @param {NoteHistoryUpdateArgs} args - Arguments to update one NoteHistory.
     * @example
     * // Update one NoteHistory
     * const noteHistory = await prisma.noteHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteHistoryUpdateArgs>(args: SelectSubset<T, NoteHistoryUpdateArgs<ExtArgs>>): Prisma__NoteHistoryClient<$Result.GetResult<Prisma.$NoteHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NoteHistories.
     * @param {NoteHistoryDeleteManyArgs} args - Arguments to filter NoteHistories to delete.
     * @example
     * // Delete a few NoteHistories
     * const { count } = await prisma.noteHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteHistoryDeleteManyArgs>(args?: SelectSubset<T, NoteHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoteHistories
     * const noteHistory = await prisma.noteHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteHistoryUpdateManyArgs>(args: SelectSubset<T, NoteHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteHistories and returns the data updated in the database.
     * @param {NoteHistoryUpdateManyAndReturnArgs} args - Arguments to update many NoteHistories.
     * @example
     * // Update many NoteHistories
     * const noteHistory = await prisma.noteHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NoteHistories and only return the `id`
     * const noteHistoryWithIdOnly = await prisma.noteHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends NoteHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NoteHistory.
     * @param {NoteHistoryUpsertArgs} args - Arguments to update or create a NoteHistory.
     * @example
     * // Update or create a NoteHistory
     * const noteHistory = await prisma.noteHistory.upsert({
     *   create: {
     *     // ... data to create a NoteHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoteHistory we want to update
     *   }
     * })
     */
    upsert<T extends NoteHistoryUpsertArgs>(args: SelectSubset<T, NoteHistoryUpsertArgs<ExtArgs>>): Prisma__NoteHistoryClient<$Result.GetResult<Prisma.$NoteHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NoteHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteHistoryCountArgs} args - Arguments to filter NoteHistories to count.
     * @example
     * // Count the number of NoteHistories
     * const count = await prisma.noteHistory.count({
     *   where: {
     *     // ... the filter for the NoteHistories we want to count
     *   }
     * })
    **/
    count<T extends NoteHistoryCountArgs>(
      args?: Subset<T, NoteHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoteHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteHistoryAggregateArgs>(args: Subset<T, NoteHistoryAggregateArgs>): Prisma.PrismaPromise<GetNoteHistoryAggregateType<T>>

    /**
     * Group by NoteHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteHistoryGroupByArgs} args - Group by arguments.
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
      T extends NoteHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteHistoryGroupByArgs['orderBy'] }
        : { orderBy?: NoteHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoteHistory model
   */
  readonly fields: NoteHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoteHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends NoteHistory$userArgs<ExtArgs> = {}>(args?: Subset<T, NoteHistory$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NoteHistory model
   */
  interface NoteHistoryFieldRefs {
    readonly id: FieldRef<"NoteHistory", 'Int'>
    readonly note_id: FieldRef<"NoteHistory", 'Int'>
    readonly content: FieldRef<"NoteHistory", 'String'>
    readonly updated_by: FieldRef<"NoteHistory", 'Int'>
    readonly updated_at: FieldRef<"NoteHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NoteHistory findUnique
   */
  export type NoteHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteHistory
     */
    select?: NoteHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteHistory
     */
    omit?: NoteHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NoteHistory to fetch.
     */
    where: NoteHistoryWhereUniqueInput
  }

  /**
   * NoteHistory findUniqueOrThrow
   */
  export type NoteHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteHistory
     */
    select?: NoteHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteHistory
     */
    omit?: NoteHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NoteHistory to fetch.
     */
    where: NoteHistoryWhereUniqueInput
  }

  /**
   * NoteHistory findFirst
   */
  export type NoteHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteHistory
     */
    select?: NoteHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteHistory
     */
    omit?: NoteHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NoteHistory to fetch.
     */
    where?: NoteHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteHistories to fetch.
     */
    orderBy?: NoteHistoryOrderByWithRelationInput | NoteHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteHistories.
     */
    cursor?: NoteHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteHistories.
     */
    distinct?: NoteHistoryScalarFieldEnum | NoteHistoryScalarFieldEnum[]
  }

  /**
   * NoteHistory findFirstOrThrow
   */
  export type NoteHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteHistory
     */
    select?: NoteHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteHistory
     */
    omit?: NoteHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NoteHistory to fetch.
     */
    where?: NoteHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteHistories to fetch.
     */
    orderBy?: NoteHistoryOrderByWithRelationInput | NoteHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteHistories.
     */
    cursor?: NoteHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteHistories.
     */
    distinct?: NoteHistoryScalarFieldEnum | NoteHistoryScalarFieldEnum[]
  }

  /**
   * NoteHistory findMany
   */
  export type NoteHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteHistory
     */
    select?: NoteHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteHistory
     */
    omit?: NoteHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NoteHistories to fetch.
     */
    where?: NoteHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteHistories to fetch.
     */
    orderBy?: NoteHistoryOrderByWithRelationInput | NoteHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoteHistories.
     */
    cursor?: NoteHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteHistories.
     */
    skip?: number
    distinct?: NoteHistoryScalarFieldEnum | NoteHistoryScalarFieldEnum[]
  }

  /**
   * NoteHistory create
   */
  export type NoteHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteHistory
     */
    select?: NoteHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteHistory
     */
    omit?: NoteHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a NoteHistory.
     */
    data: XOR<NoteHistoryCreateInput, NoteHistoryUncheckedCreateInput>
  }

  /**
   * NoteHistory createMany
   */
  export type NoteHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoteHistories.
     */
    data: NoteHistoryCreateManyInput | NoteHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoteHistory createManyAndReturn
   */
  export type NoteHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteHistory
     */
    select?: NoteHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteHistory
     */
    omit?: NoteHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many NoteHistories.
     */
    data: NoteHistoryCreateManyInput | NoteHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteHistory update
   */
  export type NoteHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteHistory
     */
    select?: NoteHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteHistory
     */
    omit?: NoteHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a NoteHistory.
     */
    data: XOR<NoteHistoryUpdateInput, NoteHistoryUncheckedUpdateInput>
    /**
     * Choose, which NoteHistory to update.
     */
    where: NoteHistoryWhereUniqueInput
  }

  /**
   * NoteHistory updateMany
   */
  export type NoteHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoteHistories.
     */
    data: XOR<NoteHistoryUpdateManyMutationInput, NoteHistoryUncheckedUpdateManyInput>
    /**
     * Filter which NoteHistories to update
     */
    where?: NoteHistoryWhereInput
    /**
     * Limit how many NoteHistories to update.
     */
    limit?: number
  }

  /**
   * NoteHistory updateManyAndReturn
   */
  export type NoteHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteHistory
     */
    select?: NoteHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteHistory
     */
    omit?: NoteHistoryOmit<ExtArgs> | null
    /**
     * The data used to update NoteHistories.
     */
    data: XOR<NoteHistoryUpdateManyMutationInput, NoteHistoryUncheckedUpdateManyInput>
    /**
     * Filter which NoteHistories to update
     */
    where?: NoteHistoryWhereInput
    /**
     * Limit how many NoteHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteHistory upsert
   */
  export type NoteHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteHistory
     */
    select?: NoteHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteHistory
     */
    omit?: NoteHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the NoteHistory to update in case it exists.
     */
    where: NoteHistoryWhereUniqueInput
    /**
     * In case the NoteHistory found by the `where` argument doesn't exist, create a new NoteHistory with this data.
     */
    create: XOR<NoteHistoryCreateInput, NoteHistoryUncheckedCreateInput>
    /**
     * In case the NoteHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteHistoryUpdateInput, NoteHistoryUncheckedUpdateInput>
  }

  /**
   * NoteHistory delete
   */
  export type NoteHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteHistory
     */
    select?: NoteHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteHistory
     */
    omit?: NoteHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteHistoryInclude<ExtArgs> | null
    /**
     * Filter which NoteHistory to delete.
     */
    where: NoteHistoryWhereUniqueInput
  }

  /**
   * NoteHistory deleteMany
   */
  export type NoteHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteHistories to delete
     */
    where?: NoteHistoryWhereInput
    /**
     * Limit how many NoteHistories to delete.
     */
    limit?: number
  }

  /**
   * NoteHistory.user
   */
  export type NoteHistory$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NoteHistory without action
   */
  export type NoteHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteHistory
     */
    select?: NoteHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteHistory
     */
    omit?: NoteHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteHistoryInclude<ExtArgs> | null
  }


  /**
   * Model NoteShare
   */

  export type AggregateNoteShare = {
    _count: NoteShareCountAggregateOutputType | null
    _avg: NoteShareAvgAggregateOutputType | null
    _sum: NoteShareSumAggregateOutputType | null
    _min: NoteShareMinAggregateOutputType | null
    _max: NoteShareMaxAggregateOutputType | null
  }

  export type NoteShareAvgAggregateOutputType = {
    note_id: number | null
    user_id: number | null
  }

  export type NoteShareSumAggregateOutputType = {
    note_id: number | null
    user_id: number | null
  }

  export type NoteShareMinAggregateOutputType = {
    note_id: number | null
    user_id: number | null
    permission: $Enums.Permission | null
  }

  export type NoteShareMaxAggregateOutputType = {
    note_id: number | null
    user_id: number | null
    permission: $Enums.Permission | null
  }

  export type NoteShareCountAggregateOutputType = {
    note_id: number
    user_id: number
    permission: number
    _all: number
  }


  export type NoteShareAvgAggregateInputType = {
    note_id?: true
    user_id?: true
  }

  export type NoteShareSumAggregateInputType = {
    note_id?: true
    user_id?: true
  }

  export type NoteShareMinAggregateInputType = {
    note_id?: true
    user_id?: true
    permission?: true
  }

  export type NoteShareMaxAggregateInputType = {
    note_id?: true
    user_id?: true
    permission?: true
  }

  export type NoteShareCountAggregateInputType = {
    note_id?: true
    user_id?: true
    permission?: true
    _all?: true
  }

  export type NoteShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteShare to aggregate.
     */
    where?: NoteShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteShares to fetch.
     */
    orderBy?: NoteShareOrderByWithRelationInput | NoteShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NoteShares
    **/
    _count?: true | NoteShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteShareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteShareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteShareMaxAggregateInputType
  }

  export type GetNoteShareAggregateType<T extends NoteShareAggregateArgs> = {
        [P in keyof T & keyof AggregateNoteShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNoteShare[P]>
      : GetScalarType<T[P], AggregateNoteShare[P]>
  }




  export type NoteShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteShareWhereInput
    orderBy?: NoteShareOrderByWithAggregationInput | NoteShareOrderByWithAggregationInput[]
    by: NoteShareScalarFieldEnum[] | NoteShareScalarFieldEnum
    having?: NoteShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteShareCountAggregateInputType | true
    _avg?: NoteShareAvgAggregateInputType
    _sum?: NoteShareSumAggregateInputType
    _min?: NoteShareMinAggregateInputType
    _max?: NoteShareMaxAggregateInputType
  }

  export type NoteShareGroupByOutputType = {
    note_id: number
    user_id: number
    permission: $Enums.Permission
    _count: NoteShareCountAggregateOutputType | null
    _avg: NoteShareAvgAggregateOutputType | null
    _sum: NoteShareSumAggregateOutputType | null
    _min: NoteShareMinAggregateOutputType | null
    _max: NoteShareMaxAggregateOutputType | null
  }

  type GetNoteShareGroupByPayload<T extends NoteShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteShareGroupByOutputType[P]>
            : GetScalarType<T[P], NoteShareGroupByOutputType[P]>
        }
      >
    >


  export type NoteShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    user_id?: boolean
    permission?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteShare"]>

  export type NoteShareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    user_id?: boolean
    permission?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteShare"]>

  export type NoteShareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    user_id?: boolean
    permission?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["noteShare"]>

  export type NoteShareSelectScalar = {
    note_id?: boolean
    user_id?: boolean
    permission?: boolean
  }

  export type NoteShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"note_id" | "user_id" | "permission", ExtArgs["result"]["noteShare"]>
  export type NoteShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoteShareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoteShareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NoteSharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NoteShare"
    objects: {
      note: Prisma.$NotePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      note_id: number
      user_id: number
      permission: $Enums.Permission
    }, ExtArgs["result"]["noteShare"]>
    composites: {}
  }

  type NoteShareGetPayload<S extends boolean | null | undefined | NoteShareDefaultArgs> = $Result.GetResult<Prisma.$NoteSharePayload, S>

  type NoteShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteShareCountAggregateInputType | true
    }

  export interface NoteShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NoteShare'], meta: { name: 'NoteShare' } }
    /**
     * Find zero or one NoteShare that matches the filter.
     * @param {NoteShareFindUniqueArgs} args - Arguments to find a NoteShare
     * @example
     * // Get one NoteShare
     * const noteShare = await prisma.noteShare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteShareFindUniqueArgs>(args: SelectSubset<T, NoteShareFindUniqueArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NoteShare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteShareFindUniqueOrThrowArgs} args - Arguments to find a NoteShare
     * @example
     * // Get one NoteShare
     * const noteShare = await prisma.noteShare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteShareFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteShare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteShareFindFirstArgs} args - Arguments to find a NoteShare
     * @example
     * // Get one NoteShare
     * const noteShare = await prisma.noteShare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteShareFindFirstArgs>(args?: SelectSubset<T, NoteShareFindFirstArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NoteShare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteShareFindFirstOrThrowArgs} args - Arguments to find a NoteShare
     * @example
     * // Get one NoteShare
     * const noteShare = await prisma.noteShare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteShareFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NoteShares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NoteShares
     * const noteShares = await prisma.noteShare.findMany()
     * 
     * // Get first 10 NoteShares
     * const noteShares = await prisma.noteShare.findMany({ take: 10 })
     * 
     * // Only select the `note_id`
     * const noteShareWithNote_idOnly = await prisma.noteShare.findMany({ select: { note_id: true } })
     * 
     */
    findMany<T extends NoteShareFindManyArgs>(args?: SelectSubset<T, NoteShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NoteShare.
     * @param {NoteShareCreateArgs} args - Arguments to create a NoteShare.
     * @example
     * // Create one NoteShare
     * const NoteShare = await prisma.noteShare.create({
     *   data: {
     *     // ... data to create a NoteShare
     *   }
     * })
     * 
     */
    create<T extends NoteShareCreateArgs>(args: SelectSubset<T, NoteShareCreateArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NoteShares.
     * @param {NoteShareCreateManyArgs} args - Arguments to create many NoteShares.
     * @example
     * // Create many NoteShares
     * const noteShare = await prisma.noteShare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteShareCreateManyArgs>(args?: SelectSubset<T, NoteShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NoteShares and returns the data saved in the database.
     * @param {NoteShareCreateManyAndReturnArgs} args - Arguments to create many NoteShares.
     * @example
     * // Create many NoteShares
     * const noteShare = await prisma.noteShare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NoteShares and only return the `note_id`
     * const noteShareWithNote_idOnly = await prisma.noteShare.createManyAndReturn({
     *   select: { note_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteShareCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteShareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NoteShare.
     * @param {NoteShareDeleteArgs} args - Arguments to delete one NoteShare.
     * @example
     * // Delete one NoteShare
     * const NoteShare = await prisma.noteShare.delete({
     *   where: {
     *     // ... filter to delete one NoteShare
     *   }
     * })
     * 
     */
    delete<T extends NoteShareDeleteArgs>(args: SelectSubset<T, NoteShareDeleteArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NoteShare.
     * @param {NoteShareUpdateArgs} args - Arguments to update one NoteShare.
     * @example
     * // Update one NoteShare
     * const noteShare = await prisma.noteShare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteShareUpdateArgs>(args: SelectSubset<T, NoteShareUpdateArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NoteShares.
     * @param {NoteShareDeleteManyArgs} args - Arguments to filter NoteShares to delete.
     * @example
     * // Delete a few NoteShares
     * const { count } = await prisma.noteShare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteShareDeleteManyArgs>(args?: SelectSubset<T, NoteShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NoteShares
     * const noteShare = await prisma.noteShare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteShareUpdateManyArgs>(args: SelectSubset<T, NoteShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NoteShares and returns the data updated in the database.
     * @param {NoteShareUpdateManyAndReturnArgs} args - Arguments to update many NoteShares.
     * @example
     * // Update many NoteShares
     * const noteShare = await prisma.noteShare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NoteShares and only return the `note_id`
     * const noteShareWithNote_idOnly = await prisma.noteShare.updateManyAndReturn({
     *   select: { note_id: true },
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
    updateManyAndReturn<T extends NoteShareUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteShareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NoteShare.
     * @param {NoteShareUpsertArgs} args - Arguments to update or create a NoteShare.
     * @example
     * // Update or create a NoteShare
     * const noteShare = await prisma.noteShare.upsert({
     *   create: {
     *     // ... data to create a NoteShare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NoteShare we want to update
     *   }
     * })
     */
    upsert<T extends NoteShareUpsertArgs>(args: SelectSubset<T, NoteShareUpsertArgs<ExtArgs>>): Prisma__NoteShareClient<$Result.GetResult<Prisma.$NoteSharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NoteShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteShareCountArgs} args - Arguments to filter NoteShares to count.
     * @example
     * // Count the number of NoteShares
     * const count = await prisma.noteShare.count({
     *   where: {
     *     // ... the filter for the NoteShares we want to count
     *   }
     * })
    **/
    count<T extends NoteShareCountArgs>(
      args?: Subset<T, NoteShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NoteShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteShareAggregateArgs>(args: Subset<T, NoteShareAggregateArgs>): Prisma.PrismaPromise<GetNoteShareAggregateType<T>>

    /**
     * Group by NoteShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteShareGroupByArgs} args - Group by arguments.
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
      T extends NoteShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteShareGroupByArgs['orderBy'] }
        : { orderBy?: NoteShareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NoteShare model
   */
  readonly fields: NoteShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NoteShare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NoteShare model
   */
  interface NoteShareFieldRefs {
    readonly note_id: FieldRef<"NoteShare", 'Int'>
    readonly user_id: FieldRef<"NoteShare", 'Int'>
    readonly permission: FieldRef<"NoteShare", 'Permission'>
  }
    

  // Custom InputTypes
  /**
   * NoteShare findUnique
   */
  export type NoteShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * Filter, which NoteShare to fetch.
     */
    where: NoteShareWhereUniqueInput
  }

  /**
   * NoteShare findUniqueOrThrow
   */
  export type NoteShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * Filter, which NoteShare to fetch.
     */
    where: NoteShareWhereUniqueInput
  }

  /**
   * NoteShare findFirst
   */
  export type NoteShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * Filter, which NoteShare to fetch.
     */
    where?: NoteShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteShares to fetch.
     */
    orderBy?: NoteShareOrderByWithRelationInput | NoteShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteShares.
     */
    cursor?: NoteShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteShares.
     */
    distinct?: NoteShareScalarFieldEnum | NoteShareScalarFieldEnum[]
  }

  /**
   * NoteShare findFirstOrThrow
   */
  export type NoteShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * Filter, which NoteShare to fetch.
     */
    where?: NoteShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteShares to fetch.
     */
    orderBy?: NoteShareOrderByWithRelationInput | NoteShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NoteShares.
     */
    cursor?: NoteShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NoteShares.
     */
    distinct?: NoteShareScalarFieldEnum | NoteShareScalarFieldEnum[]
  }

  /**
   * NoteShare findMany
   */
  export type NoteShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * Filter, which NoteShares to fetch.
     */
    where?: NoteShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NoteShares to fetch.
     */
    orderBy?: NoteShareOrderByWithRelationInput | NoteShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NoteShares.
     */
    cursor?: NoteShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NoteShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NoteShares.
     */
    skip?: number
    distinct?: NoteShareScalarFieldEnum | NoteShareScalarFieldEnum[]
  }

  /**
   * NoteShare create
   */
  export type NoteShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * The data needed to create a NoteShare.
     */
    data: XOR<NoteShareCreateInput, NoteShareUncheckedCreateInput>
  }

  /**
   * NoteShare createMany
   */
  export type NoteShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NoteShares.
     */
    data: NoteShareCreateManyInput | NoteShareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NoteShare createManyAndReturn
   */
  export type NoteShareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * The data used to create many NoteShares.
     */
    data: NoteShareCreateManyInput | NoteShareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteShare update
   */
  export type NoteShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * The data needed to update a NoteShare.
     */
    data: XOR<NoteShareUpdateInput, NoteShareUncheckedUpdateInput>
    /**
     * Choose, which NoteShare to update.
     */
    where: NoteShareWhereUniqueInput
  }

  /**
   * NoteShare updateMany
   */
  export type NoteShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NoteShares.
     */
    data: XOR<NoteShareUpdateManyMutationInput, NoteShareUncheckedUpdateManyInput>
    /**
     * Filter which NoteShares to update
     */
    where?: NoteShareWhereInput
    /**
     * Limit how many NoteShares to update.
     */
    limit?: number
  }

  /**
   * NoteShare updateManyAndReturn
   */
  export type NoteShareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * The data used to update NoteShares.
     */
    data: XOR<NoteShareUpdateManyMutationInput, NoteShareUncheckedUpdateManyInput>
    /**
     * Filter which NoteShares to update
     */
    where?: NoteShareWhereInput
    /**
     * Limit how many NoteShares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NoteShare upsert
   */
  export type NoteShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * The filter to search for the NoteShare to update in case it exists.
     */
    where: NoteShareWhereUniqueInput
    /**
     * In case the NoteShare found by the `where` argument doesn't exist, create a new NoteShare with this data.
     */
    create: XOR<NoteShareCreateInput, NoteShareUncheckedCreateInput>
    /**
     * In case the NoteShare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteShareUpdateInput, NoteShareUncheckedUpdateInput>
  }

  /**
   * NoteShare delete
   */
  export type NoteShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
    /**
     * Filter which NoteShare to delete.
     */
    where: NoteShareWhereUniqueInput
  }

  /**
   * NoteShare deleteMany
   */
  export type NoteShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NoteShares to delete
     */
    where?: NoteShareWhereInput
    /**
     * Limit how many NoteShares to delete.
     */
    limit?: number
  }

  /**
   * NoteShare without action
   */
  export type NoteShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoteShare
     */
    select?: NoteShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NoteShare
     */
    omit?: NoteShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteShareInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    note_id: number | null
    author_id: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    note_id: number | null
    author_id: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    note_id: number | null
    author_id: number | null
    content: string | null
    created_at: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    note_id: number | null
    author_id: number | null
    content: string | null
    created_at: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    note_id: number
    author_id: number
    content: number
    created_at: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    note_id?: true
    author_id?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    note_id?: true
    author_id?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    note_id?: true
    author_id?: true
    content?: true
    created_at?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    note_id?: true
    author_id?: true
    content?: true
    created_at?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    note_id?: true
    author_id?: true
    content?: true
    created_at?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    note_id: number
    author_id: number
    content: string | null
    created_at: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note_id?: boolean
    author_id?: boolean
    content?: boolean
    created_at?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note_id?: boolean
    author_id?: boolean
    content?: boolean
    created_at?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note_id?: boolean
    author_id?: boolean
    content?: boolean
    created_at?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    note_id?: boolean
    author_id?: boolean
    content?: boolean
    created_at?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "note_id" | "author_id" | "content" | "created_at", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      note: Prisma.$NotePayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      note_id: number
      author_id: number
      content: string | null
      created_at: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly note_id: FieldRef<"Comment", 'Int'>
    readonly author_id: FieldRef<"Comment", 'Int'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly created_at: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model MediaAttachment
   */

  export type AggregateMediaAttachment = {
    _count: MediaAttachmentCountAggregateOutputType | null
    _avg: MediaAttachmentAvgAggregateOutputType | null
    _sum: MediaAttachmentSumAggregateOutputType | null
    _min: MediaAttachmentMinAggregateOutputType | null
    _max: MediaAttachmentMaxAggregateOutputType | null
  }

  export type MediaAttachmentAvgAggregateOutputType = {
    id: number | null
    note_id: number | null
    user_id: number | null
  }

  export type MediaAttachmentSumAggregateOutputType = {
    id: number | null
    note_id: number | null
    user_id: number | null
  }

  export type MediaAttachmentMinAggregateOutputType = {
    id: number | null
    note_id: number | null
    user_id: number | null
    file_url: string | null
    file_type: string | null
    uploaded_at: Date | null
  }

  export type MediaAttachmentMaxAggregateOutputType = {
    id: number | null
    note_id: number | null
    user_id: number | null
    file_url: string | null
    file_type: string | null
    uploaded_at: Date | null
  }

  export type MediaAttachmentCountAggregateOutputType = {
    id: number
    note_id: number
    user_id: number
    file_url: number
    file_type: number
    uploaded_at: number
    _all: number
  }


  export type MediaAttachmentAvgAggregateInputType = {
    id?: true
    note_id?: true
    user_id?: true
  }

  export type MediaAttachmentSumAggregateInputType = {
    id?: true
    note_id?: true
    user_id?: true
  }

  export type MediaAttachmentMinAggregateInputType = {
    id?: true
    note_id?: true
    user_id?: true
    file_url?: true
    file_type?: true
    uploaded_at?: true
  }

  export type MediaAttachmentMaxAggregateInputType = {
    id?: true
    note_id?: true
    user_id?: true
    file_url?: true
    file_type?: true
    uploaded_at?: true
  }

  export type MediaAttachmentCountAggregateInputType = {
    id?: true
    note_id?: true
    user_id?: true
    file_url?: true
    file_type?: true
    uploaded_at?: true
    _all?: true
  }

  export type MediaAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaAttachment to aggregate.
     */
    where?: MediaAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAttachments to fetch.
     */
    orderBy?: MediaAttachmentOrderByWithRelationInput | MediaAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaAttachments
    **/
    _count?: true | MediaAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaAttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaAttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaAttachmentMaxAggregateInputType
  }

  export type GetMediaAttachmentAggregateType<T extends MediaAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaAttachment[P]>
      : GetScalarType<T[P], AggregateMediaAttachment[P]>
  }




  export type MediaAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaAttachmentWhereInput
    orderBy?: MediaAttachmentOrderByWithAggregationInput | MediaAttachmentOrderByWithAggregationInput[]
    by: MediaAttachmentScalarFieldEnum[] | MediaAttachmentScalarFieldEnum
    having?: MediaAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaAttachmentCountAggregateInputType | true
    _avg?: MediaAttachmentAvgAggregateInputType
    _sum?: MediaAttachmentSumAggregateInputType
    _min?: MediaAttachmentMinAggregateInputType
    _max?: MediaAttachmentMaxAggregateInputType
  }

  export type MediaAttachmentGroupByOutputType = {
    id: number
    note_id: number
    user_id: number | null
    file_url: string | null
    file_type: string | null
    uploaded_at: Date
    _count: MediaAttachmentCountAggregateOutputType | null
    _avg: MediaAttachmentAvgAggregateOutputType | null
    _sum: MediaAttachmentSumAggregateOutputType | null
    _min: MediaAttachmentMinAggregateOutputType | null
    _max: MediaAttachmentMaxAggregateOutputType | null
  }

  type GetMediaAttachmentGroupByPayload<T extends MediaAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], MediaAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type MediaAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note_id?: boolean
    user_id?: boolean
    file_url?: boolean
    file_type?: boolean
    uploaded_at?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | MediaAttachment$userArgs<ExtArgs>
  }, ExtArgs["result"]["mediaAttachment"]>

  export type MediaAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note_id?: boolean
    user_id?: boolean
    file_url?: boolean
    file_type?: boolean
    uploaded_at?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | MediaAttachment$userArgs<ExtArgs>
  }, ExtArgs["result"]["mediaAttachment"]>

  export type MediaAttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    note_id?: boolean
    user_id?: boolean
    file_url?: boolean
    file_type?: boolean
    uploaded_at?: boolean
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | MediaAttachment$userArgs<ExtArgs>
  }, ExtArgs["result"]["mediaAttachment"]>

  export type MediaAttachmentSelectScalar = {
    id?: boolean
    note_id?: boolean
    user_id?: boolean
    file_url?: boolean
    file_type?: boolean
    uploaded_at?: boolean
  }

  export type MediaAttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "note_id" | "user_id" | "file_url" | "file_type" | "uploaded_at", ExtArgs["result"]["mediaAttachment"]>
  export type MediaAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | MediaAttachment$userArgs<ExtArgs>
  }
  export type MediaAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | MediaAttachment$userArgs<ExtArgs>
  }
  export type MediaAttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    note?: boolean | NoteDefaultArgs<ExtArgs>
    user?: boolean | MediaAttachment$userArgs<ExtArgs>
  }

  export type $MediaAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaAttachment"
    objects: {
      note: Prisma.$NotePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      note_id: number
      user_id: number | null
      file_url: string | null
      file_type: string | null
      uploaded_at: Date
    }, ExtArgs["result"]["mediaAttachment"]>
    composites: {}
  }

  type MediaAttachmentGetPayload<S extends boolean | null | undefined | MediaAttachmentDefaultArgs> = $Result.GetResult<Prisma.$MediaAttachmentPayload, S>

  type MediaAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaAttachmentCountAggregateInputType | true
    }

  export interface MediaAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaAttachment'], meta: { name: 'MediaAttachment' } }
    /**
     * Find zero or one MediaAttachment that matches the filter.
     * @param {MediaAttachmentFindUniqueArgs} args - Arguments to find a MediaAttachment
     * @example
     * // Get one MediaAttachment
     * const mediaAttachment = await prisma.mediaAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaAttachmentFindUniqueArgs>(args: SelectSubset<T, MediaAttachmentFindUniqueArgs<ExtArgs>>): Prisma__MediaAttachmentClient<$Result.GetResult<Prisma.$MediaAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MediaAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaAttachmentFindUniqueOrThrowArgs} args - Arguments to find a MediaAttachment
     * @example
     * // Get one MediaAttachment
     * const mediaAttachment = await prisma.mediaAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaAttachmentClient<$Result.GetResult<Prisma.$MediaAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAttachmentFindFirstArgs} args - Arguments to find a MediaAttachment
     * @example
     * // Get one MediaAttachment
     * const mediaAttachment = await prisma.mediaAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaAttachmentFindFirstArgs>(args?: SelectSubset<T, MediaAttachmentFindFirstArgs<ExtArgs>>): Prisma__MediaAttachmentClient<$Result.GetResult<Prisma.$MediaAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MediaAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAttachmentFindFirstOrThrowArgs} args - Arguments to find a MediaAttachment
     * @example
     * // Get one MediaAttachment
     * const mediaAttachment = await prisma.mediaAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaAttachmentClient<$Result.GetResult<Prisma.$MediaAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MediaAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaAttachments
     * const mediaAttachments = await prisma.mediaAttachment.findMany()
     * 
     * // Get first 10 MediaAttachments
     * const mediaAttachments = await prisma.mediaAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaAttachmentWithIdOnly = await prisma.mediaAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaAttachmentFindManyArgs>(args?: SelectSubset<T, MediaAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MediaAttachment.
     * @param {MediaAttachmentCreateArgs} args - Arguments to create a MediaAttachment.
     * @example
     * // Create one MediaAttachment
     * const MediaAttachment = await prisma.mediaAttachment.create({
     *   data: {
     *     // ... data to create a MediaAttachment
     *   }
     * })
     * 
     */
    create<T extends MediaAttachmentCreateArgs>(args: SelectSubset<T, MediaAttachmentCreateArgs<ExtArgs>>): Prisma__MediaAttachmentClient<$Result.GetResult<Prisma.$MediaAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MediaAttachments.
     * @param {MediaAttachmentCreateManyArgs} args - Arguments to create many MediaAttachments.
     * @example
     * // Create many MediaAttachments
     * const mediaAttachment = await prisma.mediaAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaAttachmentCreateManyArgs>(args?: SelectSubset<T, MediaAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaAttachments and returns the data saved in the database.
     * @param {MediaAttachmentCreateManyAndReturnArgs} args - Arguments to create many MediaAttachments.
     * @example
     * // Create many MediaAttachments
     * const mediaAttachment = await prisma.mediaAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaAttachments and only return the `id`
     * const mediaAttachmentWithIdOnly = await prisma.mediaAttachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MediaAttachment.
     * @param {MediaAttachmentDeleteArgs} args - Arguments to delete one MediaAttachment.
     * @example
     * // Delete one MediaAttachment
     * const MediaAttachment = await prisma.mediaAttachment.delete({
     *   where: {
     *     // ... filter to delete one MediaAttachment
     *   }
     * })
     * 
     */
    delete<T extends MediaAttachmentDeleteArgs>(args: SelectSubset<T, MediaAttachmentDeleteArgs<ExtArgs>>): Prisma__MediaAttachmentClient<$Result.GetResult<Prisma.$MediaAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MediaAttachment.
     * @param {MediaAttachmentUpdateArgs} args - Arguments to update one MediaAttachment.
     * @example
     * // Update one MediaAttachment
     * const mediaAttachment = await prisma.mediaAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaAttachmentUpdateArgs>(args: SelectSubset<T, MediaAttachmentUpdateArgs<ExtArgs>>): Prisma__MediaAttachmentClient<$Result.GetResult<Prisma.$MediaAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MediaAttachments.
     * @param {MediaAttachmentDeleteManyArgs} args - Arguments to filter MediaAttachments to delete.
     * @example
     * // Delete a few MediaAttachments
     * const { count } = await prisma.mediaAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaAttachmentDeleteManyArgs>(args?: SelectSubset<T, MediaAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaAttachments
     * const mediaAttachment = await prisma.mediaAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaAttachmentUpdateManyArgs>(args: SelectSubset<T, MediaAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaAttachments and returns the data updated in the database.
     * @param {MediaAttachmentUpdateManyAndReturnArgs} args - Arguments to update many MediaAttachments.
     * @example
     * // Update many MediaAttachments
     * const mediaAttachment = await prisma.mediaAttachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaAttachments and only return the `id`
     * const mediaAttachmentWithIdOnly = await prisma.mediaAttachment.updateManyAndReturn({
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
    updateManyAndReturn<T extends MediaAttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MediaAttachment.
     * @param {MediaAttachmentUpsertArgs} args - Arguments to update or create a MediaAttachment.
     * @example
     * // Update or create a MediaAttachment
     * const mediaAttachment = await prisma.mediaAttachment.upsert({
     *   create: {
     *     // ... data to create a MediaAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaAttachment we want to update
     *   }
     * })
     */
    upsert<T extends MediaAttachmentUpsertArgs>(args: SelectSubset<T, MediaAttachmentUpsertArgs<ExtArgs>>): Prisma__MediaAttachmentClient<$Result.GetResult<Prisma.$MediaAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MediaAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAttachmentCountArgs} args - Arguments to filter MediaAttachments to count.
     * @example
     * // Count the number of MediaAttachments
     * const count = await prisma.mediaAttachment.count({
     *   where: {
     *     // ... the filter for the MediaAttachments we want to count
     *   }
     * })
    **/
    count<T extends MediaAttachmentCountArgs>(
      args?: Subset<T, MediaAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaAttachmentAggregateArgs>(args: Subset<T, MediaAttachmentAggregateArgs>): Prisma.PrismaPromise<GetMediaAttachmentAggregateType<T>>

    /**
     * Group by MediaAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAttachmentGroupByArgs} args - Group by arguments.
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
      T extends MediaAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: MediaAttachmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaAttachment model
   */
  readonly fields: MediaAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    note<T extends NoteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NoteDefaultArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends MediaAttachment$userArgs<ExtArgs> = {}>(args?: Subset<T, MediaAttachment$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MediaAttachment model
   */
  interface MediaAttachmentFieldRefs {
    readonly id: FieldRef<"MediaAttachment", 'Int'>
    readonly note_id: FieldRef<"MediaAttachment", 'Int'>
    readonly user_id: FieldRef<"MediaAttachment", 'Int'>
    readonly file_url: FieldRef<"MediaAttachment", 'String'>
    readonly file_type: FieldRef<"MediaAttachment", 'String'>
    readonly uploaded_at: FieldRef<"MediaAttachment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediaAttachment findUnique
   */
  export type MediaAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAttachment
     */
    select?: MediaAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAttachment
     */
    omit?: MediaAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MediaAttachment to fetch.
     */
    where: MediaAttachmentWhereUniqueInput
  }

  /**
   * MediaAttachment findUniqueOrThrow
   */
  export type MediaAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAttachment
     */
    select?: MediaAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAttachment
     */
    omit?: MediaAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MediaAttachment to fetch.
     */
    where: MediaAttachmentWhereUniqueInput
  }

  /**
   * MediaAttachment findFirst
   */
  export type MediaAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAttachment
     */
    select?: MediaAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAttachment
     */
    omit?: MediaAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MediaAttachment to fetch.
     */
    where?: MediaAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAttachments to fetch.
     */
    orderBy?: MediaAttachmentOrderByWithRelationInput | MediaAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaAttachments.
     */
    cursor?: MediaAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaAttachments.
     */
    distinct?: MediaAttachmentScalarFieldEnum | MediaAttachmentScalarFieldEnum[]
  }

  /**
   * MediaAttachment findFirstOrThrow
   */
  export type MediaAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAttachment
     */
    select?: MediaAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAttachment
     */
    omit?: MediaAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MediaAttachment to fetch.
     */
    where?: MediaAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAttachments to fetch.
     */
    orderBy?: MediaAttachmentOrderByWithRelationInput | MediaAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaAttachments.
     */
    cursor?: MediaAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaAttachments.
     */
    distinct?: MediaAttachmentScalarFieldEnum | MediaAttachmentScalarFieldEnum[]
  }

  /**
   * MediaAttachment findMany
   */
  export type MediaAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAttachment
     */
    select?: MediaAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAttachment
     */
    omit?: MediaAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MediaAttachments to fetch.
     */
    where?: MediaAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaAttachments to fetch.
     */
    orderBy?: MediaAttachmentOrderByWithRelationInput | MediaAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaAttachments.
     */
    cursor?: MediaAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaAttachments.
     */
    skip?: number
    distinct?: MediaAttachmentScalarFieldEnum | MediaAttachmentScalarFieldEnum[]
  }

  /**
   * MediaAttachment create
   */
  export type MediaAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAttachment
     */
    select?: MediaAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAttachment
     */
    omit?: MediaAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaAttachment.
     */
    data: XOR<MediaAttachmentCreateInput, MediaAttachmentUncheckedCreateInput>
  }

  /**
   * MediaAttachment createMany
   */
  export type MediaAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaAttachments.
     */
    data: MediaAttachmentCreateManyInput | MediaAttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaAttachment createManyAndReturn
   */
  export type MediaAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAttachment
     */
    select?: MediaAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAttachment
     */
    omit?: MediaAttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many MediaAttachments.
     */
    data: MediaAttachmentCreateManyInput | MediaAttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaAttachment update
   */
  export type MediaAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAttachment
     */
    select?: MediaAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAttachment
     */
    omit?: MediaAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaAttachment.
     */
    data: XOR<MediaAttachmentUpdateInput, MediaAttachmentUncheckedUpdateInput>
    /**
     * Choose, which MediaAttachment to update.
     */
    where: MediaAttachmentWhereUniqueInput
  }

  /**
   * MediaAttachment updateMany
   */
  export type MediaAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaAttachments.
     */
    data: XOR<MediaAttachmentUpdateManyMutationInput, MediaAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which MediaAttachments to update
     */
    where?: MediaAttachmentWhereInput
    /**
     * Limit how many MediaAttachments to update.
     */
    limit?: number
  }

  /**
   * MediaAttachment updateManyAndReturn
   */
  export type MediaAttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAttachment
     */
    select?: MediaAttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAttachment
     */
    omit?: MediaAttachmentOmit<ExtArgs> | null
    /**
     * The data used to update MediaAttachments.
     */
    data: XOR<MediaAttachmentUpdateManyMutationInput, MediaAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which MediaAttachments to update
     */
    where?: MediaAttachmentWhereInput
    /**
     * Limit how many MediaAttachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaAttachment upsert
   */
  export type MediaAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAttachment
     */
    select?: MediaAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAttachment
     */
    omit?: MediaAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaAttachment to update in case it exists.
     */
    where: MediaAttachmentWhereUniqueInput
    /**
     * In case the MediaAttachment found by the `where` argument doesn't exist, create a new MediaAttachment with this data.
     */
    create: XOR<MediaAttachmentCreateInput, MediaAttachmentUncheckedCreateInput>
    /**
     * In case the MediaAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaAttachmentUpdateInput, MediaAttachmentUncheckedUpdateInput>
  }

  /**
   * MediaAttachment delete
   */
  export type MediaAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAttachment
     */
    select?: MediaAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAttachment
     */
    omit?: MediaAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAttachmentInclude<ExtArgs> | null
    /**
     * Filter which MediaAttachment to delete.
     */
    where: MediaAttachmentWhereUniqueInput
  }

  /**
   * MediaAttachment deleteMany
   */
  export type MediaAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaAttachments to delete
     */
    where?: MediaAttachmentWhereInput
    /**
     * Limit how many MediaAttachments to delete.
     */
    limit?: number
  }

  /**
   * MediaAttachment.user
   */
  export type MediaAttachment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * MediaAttachment without action
   */
  export type MediaAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaAttachment
     */
    select?: MediaAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaAttachment
     */
    omit?: MediaAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaAttachmentInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FolderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    domain: 'domain',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FolderScalarFieldEnum = (typeof FolderScalarFieldEnum)[keyof typeof FolderScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    folder_id: 'folder_id',
    user_id: 'user_id',
    is_pinned: 'is_pinned',
    is_trashed: 'is_trashed',
    is_shared: 'is_shared',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const NoteTagScalarFieldEnum: {
    note_id: 'note_id',
    tag_id: 'tag_id'
  };

  export type NoteTagScalarFieldEnum = (typeof NoteTagScalarFieldEnum)[keyof typeof NoteTagScalarFieldEnum]


  export const NoteHistoryScalarFieldEnum: {
    id: 'id',
    note_id: 'note_id',
    content: 'content',
    updated_by: 'updated_by',
    updated_at: 'updated_at'
  };

  export type NoteHistoryScalarFieldEnum = (typeof NoteHistoryScalarFieldEnum)[keyof typeof NoteHistoryScalarFieldEnum]


  export const NoteShareScalarFieldEnum: {
    note_id: 'note_id',
    user_id: 'user_id',
    permission: 'permission'
  };

  export type NoteShareScalarFieldEnum = (typeof NoteShareScalarFieldEnum)[keyof typeof NoteShareScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    note_id: 'note_id',
    author_id: 'author_id',
    content: 'content',
    created_at: 'created_at'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const MediaAttachmentScalarFieldEnum: {
    id: 'id',
    note_id: 'note_id',
    user_id: 'user_id',
    file_url: 'file_url',
    file_type: 'file_type',
    uploaded_at: 'uploaded_at'
  };

  export type MediaAttachmentScalarFieldEnum = (typeof MediaAttachmentScalarFieldEnum)[keyof typeof MediaAttachmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Permission'
   */
  export type EnumPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permission'>
    


  /**
   * Reference to a field of type 'Permission[]'
   */
  export type ListEnumPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permission[]'>
    


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
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    folders?: FolderListRelationFilter
    notes?: NoteListRelationFilter
    comments?: CommentListRelationFilter
    noteHistories?: NoteHistoryListRelationFilter
    noteShares?: NoteShareListRelationFilter
    mediaAttachments?: MediaAttachmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    folders?: FolderOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    noteHistories?: NoteHistoryOrderByRelationAggregateInput
    noteShares?: NoteShareOrderByRelationAggregateInput
    mediaAttachments?: MediaAttachmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password_hash?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    folders?: FolderListRelationFilter
    notes?: NoteListRelationFilter
    comments?: CommentListRelationFilter
    noteHistories?: NoteHistoryListRelationFilter
    noteShares?: NoteShareListRelationFilter
    mediaAttachments?: MediaAttachmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FolderWhereInput = {
    AND?: FolderWhereInput | FolderWhereInput[]
    OR?: FolderWhereInput[]
    NOT?: FolderWhereInput | FolderWhereInput[]
    id?: IntFilter<"Folder"> | number
    name?: StringFilter<"Folder"> | string
    domain?: StringNullableFilter<"Folder"> | string | null
    user_id?: IntNullableFilter<"Folder"> | number | null
    created_at?: DateTimeFilter<"Folder"> | Date | string
    updated_at?: DateTimeFilter<"Folder"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    notes?: NoteListRelationFilter
  }

  export type FolderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type FolderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FolderWhereInput | FolderWhereInput[]
    OR?: FolderWhereInput[]
    NOT?: FolderWhereInput | FolderWhereInput[]
    name?: StringFilter<"Folder"> | string
    domain?: StringNullableFilter<"Folder"> | string | null
    user_id?: IntNullableFilter<"Folder"> | number | null
    created_at?: DateTimeFilter<"Folder"> | Date | string
    updated_at?: DateTimeFilter<"Folder"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    notes?: NoteListRelationFilter
  }, "id">

  export type FolderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FolderCountOrderByAggregateInput
    _avg?: FolderAvgOrderByAggregateInput
    _max?: FolderMaxOrderByAggregateInput
    _min?: FolderMinOrderByAggregateInput
    _sum?: FolderSumOrderByAggregateInput
  }

  export type FolderScalarWhereWithAggregatesInput = {
    AND?: FolderScalarWhereWithAggregatesInput | FolderScalarWhereWithAggregatesInput[]
    OR?: FolderScalarWhereWithAggregatesInput[]
    NOT?: FolderScalarWhereWithAggregatesInput | FolderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Folder"> | number
    name?: StringWithAggregatesFilter<"Folder"> | string
    domain?: StringNullableWithAggregatesFilter<"Folder"> | string | null
    user_id?: IntNullableWithAggregatesFilter<"Folder"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Folder"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Folder"> | Date | string
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: IntFilter<"Note"> | number
    title?: StringNullableFilter<"Note"> | string | null
    content?: JsonNullableFilter<"Note">
    folder_id?: IntNullableFilter<"Note"> | number | null
    user_id?: IntNullableFilter<"Note"> | number | null
    is_pinned?: BoolFilter<"Note"> | boolean
    is_trashed?: BoolFilter<"Note"> | boolean
    is_shared?: BoolFilter<"Note"> | boolean
    created_at?: DateTimeFilter<"Note"> | Date | string
    updated_at?: DateTimeFilter<"Note"> | Date | string
    folder?: XOR<FolderNullableScalarRelationFilter, FolderWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    noteTags?: NoteTagListRelationFilter
    noteHistories?: NoteHistoryListRelationFilter
    noteShares?: NoteShareListRelationFilter
    comments?: CommentListRelationFilter
    mediaAttachments?: MediaAttachmentListRelationFilter
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    folder_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    is_pinned?: SortOrder
    is_trashed?: SortOrder
    is_shared?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    folder?: FolderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    noteTags?: NoteTagOrderByRelationAggregateInput
    noteHistories?: NoteHistoryOrderByRelationAggregateInput
    noteShares?: NoteShareOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    mediaAttachments?: MediaAttachmentOrderByRelationAggregateInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    title?: StringNullableFilter<"Note"> | string | null
    content?: JsonNullableFilter<"Note">
    folder_id?: IntNullableFilter<"Note"> | number | null
    user_id?: IntNullableFilter<"Note"> | number | null
    is_pinned?: BoolFilter<"Note"> | boolean
    is_trashed?: BoolFilter<"Note"> | boolean
    is_shared?: BoolFilter<"Note"> | boolean
    created_at?: DateTimeFilter<"Note"> | Date | string
    updated_at?: DateTimeFilter<"Note"> | Date | string
    folder?: XOR<FolderNullableScalarRelationFilter, FolderWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    noteTags?: NoteTagListRelationFilter
    noteHistories?: NoteHistoryListRelationFilter
    noteShares?: NoteShareListRelationFilter
    comments?: CommentListRelationFilter
    mediaAttachments?: MediaAttachmentListRelationFilter
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    folder_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    is_pinned?: SortOrder
    is_trashed?: SortOrder
    is_shared?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Note"> | number
    title?: StringNullableWithAggregatesFilter<"Note"> | string | null
    content?: JsonNullableWithAggregatesFilter<"Note">
    folder_id?: IntNullableWithAggregatesFilter<"Note"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"Note"> | number | null
    is_pinned?: BoolWithAggregatesFilter<"Note"> | boolean
    is_trashed?: BoolWithAggregatesFilter<"Note"> | boolean
    is_shared?: BoolWithAggregatesFilter<"Note"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    noteTags?: NoteTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    noteTags?: NoteTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    noteTags?: NoteTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type NoteTagWhereInput = {
    AND?: NoteTagWhereInput | NoteTagWhereInput[]
    OR?: NoteTagWhereInput[]
    NOT?: NoteTagWhereInput | NoteTagWhereInput[]
    note_id?: IntFilter<"NoteTag"> | number
    tag_id?: IntFilter<"NoteTag"> | number
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type NoteTagOrderByWithRelationInput = {
    note_id?: SortOrder
    tag_id?: SortOrder
    note?: NoteOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type NoteTagWhereUniqueInput = Prisma.AtLeast<{
    note_id_tag_id?: NoteTagNote_idTag_idCompoundUniqueInput
    AND?: NoteTagWhereInput | NoteTagWhereInput[]
    OR?: NoteTagWhereInput[]
    NOT?: NoteTagWhereInput | NoteTagWhereInput[]
    note_id?: IntFilter<"NoteTag"> | number
    tag_id?: IntFilter<"NoteTag"> | number
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "note_id_tag_id">

  export type NoteTagOrderByWithAggregationInput = {
    note_id?: SortOrder
    tag_id?: SortOrder
    _count?: NoteTagCountOrderByAggregateInput
    _avg?: NoteTagAvgOrderByAggregateInput
    _max?: NoteTagMaxOrderByAggregateInput
    _min?: NoteTagMinOrderByAggregateInput
    _sum?: NoteTagSumOrderByAggregateInput
  }

  export type NoteTagScalarWhereWithAggregatesInput = {
    AND?: NoteTagScalarWhereWithAggregatesInput | NoteTagScalarWhereWithAggregatesInput[]
    OR?: NoteTagScalarWhereWithAggregatesInput[]
    NOT?: NoteTagScalarWhereWithAggregatesInput | NoteTagScalarWhereWithAggregatesInput[]
    note_id?: IntWithAggregatesFilter<"NoteTag"> | number
    tag_id?: IntWithAggregatesFilter<"NoteTag"> | number
  }

  export type NoteHistoryWhereInput = {
    AND?: NoteHistoryWhereInput | NoteHistoryWhereInput[]
    OR?: NoteHistoryWhereInput[]
    NOT?: NoteHistoryWhereInput | NoteHistoryWhereInput[]
    id?: IntFilter<"NoteHistory"> | number
    note_id?: IntFilter<"NoteHistory"> | number
    content?: StringNullableFilter<"NoteHistory"> | string | null
    updated_by?: IntNullableFilter<"NoteHistory"> | number | null
    updated_at?: DateTimeFilter<"NoteHistory"> | Date | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type NoteHistoryOrderByWithRelationInput = {
    id?: SortOrder
    note_id?: SortOrder
    content?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    note?: NoteOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type NoteHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoteHistoryWhereInput | NoteHistoryWhereInput[]
    OR?: NoteHistoryWhereInput[]
    NOT?: NoteHistoryWhereInput | NoteHistoryWhereInput[]
    note_id?: IntFilter<"NoteHistory"> | number
    content?: StringNullableFilter<"NoteHistory"> | string | null
    updated_by?: IntNullableFilter<"NoteHistory"> | number | null
    updated_at?: DateTimeFilter<"NoteHistory"> | Date | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type NoteHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    note_id?: SortOrder
    content?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: NoteHistoryCountOrderByAggregateInput
    _avg?: NoteHistoryAvgOrderByAggregateInput
    _max?: NoteHistoryMaxOrderByAggregateInput
    _min?: NoteHistoryMinOrderByAggregateInput
    _sum?: NoteHistorySumOrderByAggregateInput
  }

  export type NoteHistoryScalarWhereWithAggregatesInput = {
    AND?: NoteHistoryScalarWhereWithAggregatesInput | NoteHistoryScalarWhereWithAggregatesInput[]
    OR?: NoteHistoryScalarWhereWithAggregatesInput[]
    NOT?: NoteHistoryScalarWhereWithAggregatesInput | NoteHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NoteHistory"> | number
    note_id?: IntWithAggregatesFilter<"NoteHistory"> | number
    content?: StringNullableWithAggregatesFilter<"NoteHistory"> | string | null
    updated_by?: IntNullableWithAggregatesFilter<"NoteHistory"> | number | null
    updated_at?: DateTimeWithAggregatesFilter<"NoteHistory"> | Date | string
  }

  export type NoteShareWhereInput = {
    AND?: NoteShareWhereInput | NoteShareWhereInput[]
    OR?: NoteShareWhereInput[]
    NOT?: NoteShareWhereInput | NoteShareWhereInput[]
    note_id?: IntFilter<"NoteShare"> | number
    user_id?: IntFilter<"NoteShare"> | number
    permission?: EnumPermissionFilter<"NoteShare"> | $Enums.Permission
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NoteShareOrderByWithRelationInput = {
    note_id?: SortOrder
    user_id?: SortOrder
    permission?: SortOrder
    note?: NoteOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type NoteShareWhereUniqueInput = Prisma.AtLeast<{
    note_id_user_id?: NoteShareNote_idUser_idCompoundUniqueInput
    AND?: NoteShareWhereInput | NoteShareWhereInput[]
    OR?: NoteShareWhereInput[]
    NOT?: NoteShareWhereInput | NoteShareWhereInput[]
    note_id?: IntFilter<"NoteShare"> | number
    user_id?: IntFilter<"NoteShare"> | number
    permission?: EnumPermissionFilter<"NoteShare"> | $Enums.Permission
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "note_id_user_id">

  export type NoteShareOrderByWithAggregationInput = {
    note_id?: SortOrder
    user_id?: SortOrder
    permission?: SortOrder
    _count?: NoteShareCountOrderByAggregateInput
    _avg?: NoteShareAvgOrderByAggregateInput
    _max?: NoteShareMaxOrderByAggregateInput
    _min?: NoteShareMinOrderByAggregateInput
    _sum?: NoteShareSumOrderByAggregateInput
  }

  export type NoteShareScalarWhereWithAggregatesInput = {
    AND?: NoteShareScalarWhereWithAggregatesInput | NoteShareScalarWhereWithAggregatesInput[]
    OR?: NoteShareScalarWhereWithAggregatesInput[]
    NOT?: NoteShareScalarWhereWithAggregatesInput | NoteShareScalarWhereWithAggregatesInput[]
    note_id?: IntWithAggregatesFilter<"NoteShare"> | number
    user_id?: IntWithAggregatesFilter<"NoteShare"> | number
    permission?: EnumPermissionWithAggregatesFilter<"NoteShare"> | $Enums.Permission
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    note_id?: IntFilter<"Comment"> | number
    author_id?: IntFilter<"Comment"> | number
    content?: StringNullableFilter<"Comment"> | string | null
    created_at?: DateTimeFilter<"Comment"> | Date | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    note_id?: SortOrder
    author_id?: SortOrder
    content?: SortOrderInput | SortOrder
    created_at?: SortOrder
    note?: NoteOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    note_id?: IntFilter<"Comment"> | number
    author_id?: IntFilter<"Comment"> | number
    content?: StringNullableFilter<"Comment"> | string | null
    created_at?: DateTimeFilter<"Comment"> | Date | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    note_id?: SortOrder
    author_id?: SortOrder
    content?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    note_id?: IntWithAggregatesFilter<"Comment"> | number
    author_id?: IntWithAggregatesFilter<"Comment"> | number
    content?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type MediaAttachmentWhereInput = {
    AND?: MediaAttachmentWhereInput | MediaAttachmentWhereInput[]
    OR?: MediaAttachmentWhereInput[]
    NOT?: MediaAttachmentWhereInput | MediaAttachmentWhereInput[]
    id?: IntFilter<"MediaAttachment"> | number
    note_id?: IntFilter<"MediaAttachment"> | number
    user_id?: IntNullableFilter<"MediaAttachment"> | number | null
    file_url?: StringNullableFilter<"MediaAttachment"> | string | null
    file_type?: StringNullableFilter<"MediaAttachment"> | string | null
    uploaded_at?: DateTimeFilter<"MediaAttachment"> | Date | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MediaAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    note_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    file_url?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    uploaded_at?: SortOrder
    note?: NoteOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MediaAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MediaAttachmentWhereInput | MediaAttachmentWhereInput[]
    OR?: MediaAttachmentWhereInput[]
    NOT?: MediaAttachmentWhereInput | MediaAttachmentWhereInput[]
    note_id?: IntFilter<"MediaAttachment"> | number
    user_id?: IntNullableFilter<"MediaAttachment"> | number | null
    file_url?: StringNullableFilter<"MediaAttachment"> | string | null
    file_type?: StringNullableFilter<"MediaAttachment"> | string | null
    uploaded_at?: DateTimeFilter<"MediaAttachment"> | Date | string
    note?: XOR<NoteScalarRelationFilter, NoteWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type MediaAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    note_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    file_url?: SortOrderInput | SortOrder
    file_type?: SortOrderInput | SortOrder
    uploaded_at?: SortOrder
    _count?: MediaAttachmentCountOrderByAggregateInput
    _avg?: MediaAttachmentAvgOrderByAggregateInput
    _max?: MediaAttachmentMaxOrderByAggregateInput
    _min?: MediaAttachmentMinOrderByAggregateInput
    _sum?: MediaAttachmentSumOrderByAggregateInput
  }

  export type MediaAttachmentScalarWhereWithAggregatesInput = {
    AND?: MediaAttachmentScalarWhereWithAggregatesInput | MediaAttachmentScalarWhereWithAggregatesInput[]
    OR?: MediaAttachmentScalarWhereWithAggregatesInput[]
    NOT?: MediaAttachmentScalarWhereWithAggregatesInput | MediaAttachmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MediaAttachment"> | number
    note_id?: IntWithAggregatesFilter<"MediaAttachment"> | number
    user_id?: IntNullableWithAggregatesFilter<"MediaAttachment"> | number | null
    file_url?: StringNullableWithAggregatesFilter<"MediaAttachment"> | string | null
    file_type?: StringNullableWithAggregatesFilter<"MediaAttachment"> | string | null
    uploaded_at?: DateTimeWithAggregatesFilter<"MediaAttachment"> | Date | string
  }

  export type UserCreateInput = {
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    noteHistories?: NoteHistoryCreateNestedManyWithoutUserInput
    noteShares?: NoteShareCreateNestedManyWithoutUserInput
    mediaAttachments?: MediaAttachmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    noteHistories?: NoteHistoryUncheckedCreateNestedManyWithoutUserInput
    noteShares?: NoteShareUncheckedCreateNestedManyWithoutUserInput
    mediaAttachments?: MediaAttachmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    noteHistories?: NoteHistoryUpdateManyWithoutUserNestedInput
    noteShares?: NoteShareUpdateManyWithoutUserNestedInput
    mediaAttachments?: MediaAttachmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    noteHistories?: NoteHistoryUncheckedUpdateManyWithoutUserNestedInput
    noteShares?: NoteShareUncheckedUpdateManyWithoutUserNestedInput
    mediaAttachments?: MediaAttachmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolderCreateInput = {
    name: string
    domain?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutFoldersInput
    notes?: NoteCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateInput = {
    id?: number
    name: string
    domain?: string | null
    user_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutFoldersNestedInput
    notes?: NoteUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderCreateManyInput = {
    id?: number
    name: string
    domain?: string | null
    user_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FolderUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateInput = {
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    folder?: FolderCreateNestedOneWithoutNotesInput
    user?: UserCreateNestedOneWithoutNotesInput
    noteTags?: NoteTagCreateNestedManyWithoutNoteInput
    noteHistories?: NoteHistoryCreateNestedManyWithoutNoteInput
    noteShares?: NoteShareCreateNestedManyWithoutNoteInput
    comments?: CommentCreateNestedManyWithoutNoteInput
    mediaAttachments?: MediaAttachmentCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateInput = {
    id?: number
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: number | null
    user_id?: number | null
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    noteTags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
    noteHistories?: NoteHistoryUncheckedCreateNestedManyWithoutNoteInput
    noteShares?: NoteShareUncheckedCreateNestedManyWithoutNoteInput
    comments?: CommentUncheckedCreateNestedManyWithoutNoteInput
    mediaAttachments?: MediaAttachmentUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: FolderUpdateOneWithoutNotesNestedInput
    user?: UserUpdateOneWithoutNotesNestedInput
    noteTags?: NoteTagUpdateManyWithoutNoteNestedInput
    noteHistories?: NoteHistoryUpdateManyWithoutNoteNestedInput
    noteShares?: NoteShareUpdateManyWithoutNoteNestedInput
    comments?: CommentUpdateManyWithoutNoteNestedInput
    mediaAttachments?: MediaAttachmentUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    noteTags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
    noteHistories?: NoteHistoryUncheckedUpdateManyWithoutNoteNestedInput
    noteShares?: NoteShareUncheckedUpdateManyWithoutNoteNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNoteNestedInput
    mediaAttachments?: MediaAttachmentUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteCreateManyInput = {
    id?: number
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: number | null
    user_id?: number | null
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NoteUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    name: string
    noteTags?: NoteTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    noteTags?: NoteTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    noteTags?: NoteTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    noteTags?: NoteTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NoteTagCreateInput = {
    note: NoteCreateNestedOneWithoutNoteTagsInput
    tag: TagCreateNestedOneWithoutNoteTagsInput
  }

  export type NoteTagUncheckedCreateInput = {
    note_id: number
    tag_id: number
  }

  export type NoteTagUpdateInput = {
    note?: NoteUpdateOneRequiredWithoutNoteTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutNoteTagsNestedInput
  }

  export type NoteTagUncheckedUpdateInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type NoteTagCreateManyInput = {
    note_id: number
    tag_id: number
  }

  export type NoteTagUpdateManyMutationInput = {

  }

  export type NoteTagUncheckedUpdateManyInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type NoteHistoryCreateInput = {
    content?: string | null
    updated_at?: Date | string
    note: NoteCreateNestedOneWithoutNoteHistoriesInput
    user?: UserCreateNestedOneWithoutNoteHistoriesInput
  }

  export type NoteHistoryUncheckedCreateInput = {
    id?: number
    note_id: number
    content?: string | null
    updated_by?: number | null
    updated_at?: Date | string
  }

  export type NoteHistoryUpdateInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NoteUpdateOneRequiredWithoutNoteHistoriesNestedInput
    user?: UserUpdateOneWithoutNoteHistoriesNestedInput
  }

  export type NoteHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    note_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteHistoryCreateManyInput = {
    id?: number
    note_id: number
    content?: string | null
    updated_by?: number | null
    updated_at?: Date | string
  }

  export type NoteHistoryUpdateManyMutationInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    note_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteShareCreateInput = {
    permission: $Enums.Permission
    note: NoteCreateNestedOneWithoutNoteSharesInput
    user: UserCreateNestedOneWithoutNoteSharesInput
  }

  export type NoteShareUncheckedCreateInput = {
    note_id: number
    user_id: number
    permission: $Enums.Permission
  }

  export type NoteShareUpdateInput = {
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    note?: NoteUpdateOneRequiredWithoutNoteSharesNestedInput
    user?: UserUpdateOneRequiredWithoutNoteSharesNestedInput
  }

  export type NoteShareUncheckedUpdateInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
  }

  export type NoteShareCreateManyInput = {
    note_id: number
    user_id: number
    permission: $Enums.Permission
  }

  export type NoteShareUpdateManyMutationInput = {
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
  }

  export type NoteShareUncheckedUpdateManyInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
  }

  export type CommentCreateInput = {
    content?: string | null
    created_at?: Date | string
    note: NoteCreateNestedOneWithoutCommentsInput
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    note_id: number
    author_id: number
    content?: string | null
    created_at?: Date | string
  }

  export type CommentUpdateInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NoteUpdateOneRequiredWithoutCommentsNestedInput
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    note_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    note_id: number
    author_id: number
    content?: string | null
    created_at?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    note_id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAttachmentCreateInput = {
    file_url?: string | null
    file_type?: string | null
    uploaded_at?: Date | string
    note: NoteCreateNestedOneWithoutMediaAttachmentsInput
    user?: UserCreateNestedOneWithoutMediaAttachmentsInput
  }

  export type MediaAttachmentUncheckedCreateInput = {
    id?: number
    note_id: number
    user_id?: number | null
    file_url?: string | null
    file_type?: string | null
    uploaded_at?: Date | string
  }

  export type MediaAttachmentUpdateInput = {
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NoteUpdateOneRequiredWithoutMediaAttachmentsNestedInput
    user?: UserUpdateOneWithoutMediaAttachmentsNestedInput
  }

  export type MediaAttachmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    note_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAttachmentCreateManyInput = {
    id?: number
    note_id: number
    user_id?: number | null
    file_url?: string | null
    file_type?: string | null
    uploaded_at?: Date | string
  }

  export type MediaAttachmentUpdateManyMutationInput = {
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAttachmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    note_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FolderListRelationFilter = {
    every?: FolderWhereInput
    some?: FolderWhereInput
    none?: FolderWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type NoteHistoryListRelationFilter = {
    every?: NoteHistoryWhereInput
    some?: NoteHistoryWhereInput
    none?: NoteHistoryWhereInput
  }

  export type NoteShareListRelationFilter = {
    every?: NoteShareWhereInput
    some?: NoteShareWhereInput
    none?: NoteShareWhereInput
  }

  export type MediaAttachmentListRelationFilter = {
    every?: MediaAttachmentWhereInput
    some?: MediaAttachmentWhereInput
    none?: MediaAttachmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FolderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteShareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type FolderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FolderAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type FolderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FolderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FolderSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FolderNullableScalarRelationFilter = {
    is?: FolderWhereInput | null
    isNot?: FolderWhereInput | null
  }

  export type NoteTagListRelationFilter = {
    every?: NoteTagWhereInput
    some?: NoteTagWhereInput
    none?: NoteTagWhereInput
  }

  export type NoteTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    folder_id?: SortOrder
    user_id?: SortOrder
    is_pinned?: SortOrder
    is_trashed?: SortOrder
    is_shared?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    id?: SortOrder
    folder_id?: SortOrder
    user_id?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    folder_id?: SortOrder
    user_id?: SortOrder
    is_pinned?: SortOrder
    is_trashed?: SortOrder
    is_shared?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    folder_id?: SortOrder
    user_id?: SortOrder
    is_pinned?: SortOrder
    is_trashed?: SortOrder
    is_shared?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    id?: SortOrder
    folder_id?: SortOrder
    user_id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NoteScalarRelationFilter = {
    is?: NoteWhereInput
    isNot?: NoteWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type NoteTagNote_idTag_idCompoundUniqueInput = {
    note_id: number
    tag_id: number
  }

  export type NoteTagCountOrderByAggregateInput = {
    note_id?: SortOrder
    tag_id?: SortOrder
  }

  export type NoteTagAvgOrderByAggregateInput = {
    note_id?: SortOrder
    tag_id?: SortOrder
  }

  export type NoteTagMaxOrderByAggregateInput = {
    note_id?: SortOrder
    tag_id?: SortOrder
  }

  export type NoteTagMinOrderByAggregateInput = {
    note_id?: SortOrder
    tag_id?: SortOrder
  }

  export type NoteTagSumOrderByAggregateInput = {
    note_id?: SortOrder
    tag_id?: SortOrder
  }

  export type NoteHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    content?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type NoteHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    updated_by?: SortOrder
  }

  export type NoteHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    content?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type NoteHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    content?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type NoteHistorySumOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    updated_by?: SortOrder
  }

  export type EnumPermissionFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission | EnumPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionFilter<$PrismaModel> | $Enums.Permission
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NoteShareNote_idUser_idCompoundUniqueInput = {
    note_id: number
    user_id: number
  }

  export type NoteShareCountOrderByAggregateInput = {
    note_id?: SortOrder
    user_id?: SortOrder
    permission?: SortOrder
  }

  export type NoteShareAvgOrderByAggregateInput = {
    note_id?: SortOrder
    user_id?: SortOrder
  }

  export type NoteShareMaxOrderByAggregateInput = {
    note_id?: SortOrder
    user_id?: SortOrder
    permission?: SortOrder
  }

  export type NoteShareMinOrderByAggregateInput = {
    note_id?: SortOrder
    user_id?: SortOrder
    permission?: SortOrder
  }

  export type NoteShareSumOrderByAggregateInput = {
    note_id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumPermissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission | EnumPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionWithAggregatesFilter<$PrismaModel> | $Enums.Permission
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionFilter<$PrismaModel>
    _max?: NestedEnumPermissionFilter<$PrismaModel>
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    author_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    author_id?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    author_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    author_id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    author_id?: SortOrder
  }

  export type MediaAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    user_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    uploaded_at?: SortOrder
  }

  export type MediaAttachmentAvgOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    user_id?: SortOrder
  }

  export type MediaAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    user_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    uploaded_at?: SortOrder
  }

  export type MediaAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    user_id?: SortOrder
    file_url?: SortOrder
    file_type?: SortOrder
    uploaded_at?: SortOrder
  }

  export type MediaAttachmentSumOrderByAggregateInput = {
    id?: SortOrder
    note_id?: SortOrder
    user_id?: SortOrder
  }

  export type FolderCreateNestedManyWithoutUserInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NoteHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteHistoryCreateWithoutUserInput, NoteHistoryUncheckedCreateWithoutUserInput> | NoteHistoryCreateWithoutUserInput[] | NoteHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteHistoryCreateOrConnectWithoutUserInput | NoteHistoryCreateOrConnectWithoutUserInput[]
    createMany?: NoteHistoryCreateManyUserInputEnvelope
    connect?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
  }

  export type NoteShareCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteShareCreateWithoutUserInput, NoteShareUncheckedCreateWithoutUserInput> | NoteShareCreateWithoutUserInput[] | NoteShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutUserInput | NoteShareCreateOrConnectWithoutUserInput[]
    createMany?: NoteShareCreateManyUserInputEnvelope
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
  }

  export type MediaAttachmentCreateNestedManyWithoutUserInput = {
    create?: XOR<MediaAttachmentCreateWithoutUserInput, MediaAttachmentUncheckedCreateWithoutUserInput> | MediaAttachmentCreateWithoutUserInput[] | MediaAttachmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MediaAttachmentCreateOrConnectWithoutUserInput | MediaAttachmentCreateOrConnectWithoutUserInput[]
    createMany?: MediaAttachmentCreateManyUserInputEnvelope
    connect?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
  }

  export type FolderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NoteHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteHistoryCreateWithoutUserInput, NoteHistoryUncheckedCreateWithoutUserInput> | NoteHistoryCreateWithoutUserInput[] | NoteHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteHistoryCreateOrConnectWithoutUserInput | NoteHistoryCreateOrConnectWithoutUserInput[]
    createMany?: NoteHistoryCreateManyUserInputEnvelope
    connect?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
  }

  export type NoteShareUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteShareCreateWithoutUserInput, NoteShareUncheckedCreateWithoutUserInput> | NoteShareCreateWithoutUserInput[] | NoteShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutUserInput | NoteShareCreateOrConnectWithoutUserInput[]
    createMany?: NoteShareCreateManyUserInputEnvelope
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
  }

  export type MediaAttachmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MediaAttachmentCreateWithoutUserInput, MediaAttachmentUncheckedCreateWithoutUserInput> | MediaAttachmentCreateWithoutUserInput[] | MediaAttachmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MediaAttachmentCreateOrConnectWithoutUserInput | MediaAttachmentCreateOrConnectWithoutUserInput[]
    createMany?: MediaAttachmentCreateManyUserInputEnvelope
    connect?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FolderUpdateManyWithoutUserNestedInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutUserInput | FolderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutUserInput | FolderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutUserInput | FolderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NoteHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteHistoryCreateWithoutUserInput, NoteHistoryUncheckedCreateWithoutUserInput> | NoteHistoryCreateWithoutUserInput[] | NoteHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteHistoryCreateOrConnectWithoutUserInput | NoteHistoryCreateOrConnectWithoutUserInput[]
    upsert?: NoteHistoryUpsertWithWhereUniqueWithoutUserInput | NoteHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteHistoryCreateManyUserInputEnvelope
    set?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    disconnect?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    delete?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    connect?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    update?: NoteHistoryUpdateWithWhereUniqueWithoutUserInput | NoteHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteHistoryUpdateManyWithWhereWithoutUserInput | NoteHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteHistoryScalarWhereInput | NoteHistoryScalarWhereInput[]
  }

  export type NoteShareUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteShareCreateWithoutUserInput, NoteShareUncheckedCreateWithoutUserInput> | NoteShareCreateWithoutUserInput[] | NoteShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutUserInput | NoteShareCreateOrConnectWithoutUserInput[]
    upsert?: NoteShareUpsertWithWhereUniqueWithoutUserInput | NoteShareUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteShareCreateManyUserInputEnvelope
    set?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    disconnect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    delete?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    update?: NoteShareUpdateWithWhereUniqueWithoutUserInput | NoteShareUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteShareUpdateManyWithWhereWithoutUserInput | NoteShareUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteShareScalarWhereInput | NoteShareScalarWhereInput[]
  }

  export type MediaAttachmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<MediaAttachmentCreateWithoutUserInput, MediaAttachmentUncheckedCreateWithoutUserInput> | MediaAttachmentCreateWithoutUserInput[] | MediaAttachmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MediaAttachmentCreateOrConnectWithoutUserInput | MediaAttachmentCreateOrConnectWithoutUserInput[]
    upsert?: MediaAttachmentUpsertWithWhereUniqueWithoutUserInput | MediaAttachmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MediaAttachmentCreateManyUserInputEnvelope
    set?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    disconnect?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    delete?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    connect?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    update?: MediaAttachmentUpdateWithWhereUniqueWithoutUserInput | MediaAttachmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MediaAttachmentUpdateManyWithWhereWithoutUserInput | MediaAttachmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MediaAttachmentScalarWhereInput | MediaAttachmentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FolderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutUserInput | FolderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutUserInput | FolderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutUserInput | FolderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NoteHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteHistoryCreateWithoutUserInput, NoteHistoryUncheckedCreateWithoutUserInput> | NoteHistoryCreateWithoutUserInput[] | NoteHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteHistoryCreateOrConnectWithoutUserInput | NoteHistoryCreateOrConnectWithoutUserInput[]
    upsert?: NoteHistoryUpsertWithWhereUniqueWithoutUserInput | NoteHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteHistoryCreateManyUserInputEnvelope
    set?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    disconnect?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    delete?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    connect?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    update?: NoteHistoryUpdateWithWhereUniqueWithoutUserInput | NoteHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteHistoryUpdateManyWithWhereWithoutUserInput | NoteHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteHistoryScalarWhereInput | NoteHistoryScalarWhereInput[]
  }

  export type NoteShareUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteShareCreateWithoutUserInput, NoteShareUncheckedCreateWithoutUserInput> | NoteShareCreateWithoutUserInput[] | NoteShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutUserInput | NoteShareCreateOrConnectWithoutUserInput[]
    upsert?: NoteShareUpsertWithWhereUniqueWithoutUserInput | NoteShareUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteShareCreateManyUserInputEnvelope
    set?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    disconnect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    delete?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    update?: NoteShareUpdateWithWhereUniqueWithoutUserInput | NoteShareUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteShareUpdateManyWithWhereWithoutUserInput | NoteShareUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteShareScalarWhereInput | NoteShareScalarWhereInput[]
  }

  export type MediaAttachmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MediaAttachmentCreateWithoutUserInput, MediaAttachmentUncheckedCreateWithoutUserInput> | MediaAttachmentCreateWithoutUserInput[] | MediaAttachmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MediaAttachmentCreateOrConnectWithoutUserInput | MediaAttachmentCreateOrConnectWithoutUserInput[]
    upsert?: MediaAttachmentUpsertWithWhereUniqueWithoutUserInput | MediaAttachmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MediaAttachmentCreateManyUserInputEnvelope
    set?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    disconnect?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    delete?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    connect?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    update?: MediaAttachmentUpdateWithWhereUniqueWithoutUserInput | MediaAttachmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MediaAttachmentUpdateManyWithWhereWithoutUserInput | MediaAttachmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MediaAttachmentScalarWhereInput | MediaAttachmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFoldersInput = {
    create?: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoldersInput
    connect?: UserWhereUniqueInput
  }

  export type NoteCreateNestedManyWithoutFolderInput = {
    create?: XOR<NoteCreateWithoutFolderInput, NoteUncheckedCreateWithoutFolderInput> | NoteCreateWithoutFolderInput[] | NoteUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutFolderInput | NoteCreateOrConnectWithoutFolderInput[]
    createMany?: NoteCreateManyFolderInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutFolderInput = {
    create?: XOR<NoteCreateWithoutFolderInput, NoteUncheckedCreateWithoutFolderInput> | NoteCreateWithoutFolderInput[] | NoteUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutFolderInput | NoteCreateOrConnectWithoutFolderInput[]
    createMany?: NoteCreateManyFolderInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutFoldersNestedInput = {
    create?: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoldersInput
    upsert?: UserUpsertWithoutFoldersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFoldersInput, UserUpdateWithoutFoldersInput>, UserUncheckedUpdateWithoutFoldersInput>
  }

  export type NoteUpdateManyWithoutFolderNestedInput = {
    create?: XOR<NoteCreateWithoutFolderInput, NoteUncheckedCreateWithoutFolderInput> | NoteCreateWithoutFolderInput[] | NoteUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutFolderInput | NoteCreateOrConnectWithoutFolderInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutFolderInput | NoteUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: NoteCreateManyFolderInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutFolderInput | NoteUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutFolderInput | NoteUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NoteUncheckedUpdateManyWithoutFolderNestedInput = {
    create?: XOR<NoteCreateWithoutFolderInput, NoteUncheckedCreateWithoutFolderInput> | NoteCreateWithoutFolderInput[] | NoteUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutFolderInput | NoteCreateOrConnectWithoutFolderInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutFolderInput | NoteUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: NoteCreateManyFolderInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutFolderInput | NoteUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutFolderInput | NoteUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type FolderCreateNestedOneWithoutNotesInput = {
    create?: XOR<FolderCreateWithoutNotesInput, FolderUncheckedCreateWithoutNotesInput>
    connectOrCreate?: FolderCreateOrConnectWithoutNotesInput
    connect?: FolderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type NoteTagCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput> | NoteTagCreateWithoutNoteInput[] | NoteTagUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutNoteInput | NoteTagCreateOrConnectWithoutNoteInput[]
    createMany?: NoteTagCreateManyNoteInputEnvelope
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
  }

  export type NoteHistoryCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteHistoryCreateWithoutNoteInput, NoteHistoryUncheckedCreateWithoutNoteInput> | NoteHistoryCreateWithoutNoteInput[] | NoteHistoryUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteHistoryCreateOrConnectWithoutNoteInput | NoteHistoryCreateOrConnectWithoutNoteInput[]
    createMany?: NoteHistoryCreateManyNoteInputEnvelope
    connect?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
  }

  export type NoteShareCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteShareCreateWithoutNoteInput, NoteShareUncheckedCreateWithoutNoteInput> | NoteShareCreateWithoutNoteInput[] | NoteShareUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutNoteInput | NoteShareCreateOrConnectWithoutNoteInput[]
    createMany?: NoteShareCreateManyNoteInputEnvelope
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutNoteInput = {
    create?: XOR<CommentCreateWithoutNoteInput, CommentUncheckedCreateWithoutNoteInput> | CommentCreateWithoutNoteInput[] | CommentUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNoteInput | CommentCreateOrConnectWithoutNoteInput[]
    createMany?: CommentCreateManyNoteInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type MediaAttachmentCreateNestedManyWithoutNoteInput = {
    create?: XOR<MediaAttachmentCreateWithoutNoteInput, MediaAttachmentUncheckedCreateWithoutNoteInput> | MediaAttachmentCreateWithoutNoteInput[] | MediaAttachmentUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: MediaAttachmentCreateOrConnectWithoutNoteInput | MediaAttachmentCreateOrConnectWithoutNoteInput[]
    createMany?: MediaAttachmentCreateManyNoteInputEnvelope
    connect?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
  }

  export type NoteTagUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput> | NoteTagCreateWithoutNoteInput[] | NoteTagUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutNoteInput | NoteTagCreateOrConnectWithoutNoteInput[]
    createMany?: NoteTagCreateManyNoteInputEnvelope
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
  }

  export type NoteHistoryUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteHistoryCreateWithoutNoteInput, NoteHistoryUncheckedCreateWithoutNoteInput> | NoteHistoryCreateWithoutNoteInput[] | NoteHistoryUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteHistoryCreateOrConnectWithoutNoteInput | NoteHistoryCreateOrConnectWithoutNoteInput[]
    createMany?: NoteHistoryCreateManyNoteInputEnvelope
    connect?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
  }

  export type NoteShareUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<NoteShareCreateWithoutNoteInput, NoteShareUncheckedCreateWithoutNoteInput> | NoteShareCreateWithoutNoteInput[] | NoteShareUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutNoteInput | NoteShareCreateOrConnectWithoutNoteInput[]
    createMany?: NoteShareCreateManyNoteInputEnvelope
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<CommentCreateWithoutNoteInput, CommentUncheckedCreateWithoutNoteInput> | CommentCreateWithoutNoteInput[] | CommentUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNoteInput | CommentCreateOrConnectWithoutNoteInput[]
    createMany?: CommentCreateManyNoteInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type MediaAttachmentUncheckedCreateNestedManyWithoutNoteInput = {
    create?: XOR<MediaAttachmentCreateWithoutNoteInput, MediaAttachmentUncheckedCreateWithoutNoteInput> | MediaAttachmentCreateWithoutNoteInput[] | MediaAttachmentUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: MediaAttachmentCreateOrConnectWithoutNoteInput | MediaAttachmentCreateOrConnectWithoutNoteInput[]
    createMany?: MediaAttachmentCreateManyNoteInputEnvelope
    connect?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FolderUpdateOneWithoutNotesNestedInput = {
    create?: XOR<FolderCreateWithoutNotesInput, FolderUncheckedCreateWithoutNotesInput>
    connectOrCreate?: FolderCreateOrConnectWithoutNotesInput
    upsert?: FolderUpsertWithoutNotesInput
    disconnect?: FolderWhereInput | boolean
    delete?: FolderWhereInput | boolean
    connect?: FolderWhereUniqueInput
    update?: XOR<XOR<FolderUpdateToOneWithWhereWithoutNotesInput, FolderUpdateWithoutNotesInput>, FolderUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateOneWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotesInput, UserUpdateWithoutNotesInput>, UserUncheckedUpdateWithoutNotesInput>
  }

  export type NoteTagUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput> | NoteTagCreateWithoutNoteInput[] | NoteTagUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutNoteInput | NoteTagCreateOrConnectWithoutNoteInput[]
    upsert?: NoteTagUpsertWithWhereUniqueWithoutNoteInput | NoteTagUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteTagCreateManyNoteInputEnvelope
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    update?: NoteTagUpdateWithWhereUniqueWithoutNoteInput | NoteTagUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteTagUpdateManyWithWhereWithoutNoteInput | NoteTagUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
  }

  export type NoteHistoryUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteHistoryCreateWithoutNoteInput, NoteHistoryUncheckedCreateWithoutNoteInput> | NoteHistoryCreateWithoutNoteInput[] | NoteHistoryUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteHistoryCreateOrConnectWithoutNoteInput | NoteHistoryCreateOrConnectWithoutNoteInput[]
    upsert?: NoteHistoryUpsertWithWhereUniqueWithoutNoteInput | NoteHistoryUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteHistoryCreateManyNoteInputEnvelope
    set?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    disconnect?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    delete?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    connect?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    update?: NoteHistoryUpdateWithWhereUniqueWithoutNoteInput | NoteHistoryUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteHistoryUpdateManyWithWhereWithoutNoteInput | NoteHistoryUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteHistoryScalarWhereInput | NoteHistoryScalarWhereInput[]
  }

  export type NoteShareUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteShareCreateWithoutNoteInput, NoteShareUncheckedCreateWithoutNoteInput> | NoteShareCreateWithoutNoteInput[] | NoteShareUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutNoteInput | NoteShareCreateOrConnectWithoutNoteInput[]
    upsert?: NoteShareUpsertWithWhereUniqueWithoutNoteInput | NoteShareUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteShareCreateManyNoteInputEnvelope
    set?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    disconnect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    delete?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    update?: NoteShareUpdateWithWhereUniqueWithoutNoteInput | NoteShareUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteShareUpdateManyWithWhereWithoutNoteInput | NoteShareUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteShareScalarWhereInput | NoteShareScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutNoteNestedInput = {
    create?: XOR<CommentCreateWithoutNoteInput, CommentUncheckedCreateWithoutNoteInput> | CommentCreateWithoutNoteInput[] | CommentUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNoteInput | CommentCreateOrConnectWithoutNoteInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutNoteInput | CommentUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: CommentCreateManyNoteInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutNoteInput | CommentUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutNoteInput | CommentUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type MediaAttachmentUpdateManyWithoutNoteNestedInput = {
    create?: XOR<MediaAttachmentCreateWithoutNoteInput, MediaAttachmentUncheckedCreateWithoutNoteInput> | MediaAttachmentCreateWithoutNoteInput[] | MediaAttachmentUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: MediaAttachmentCreateOrConnectWithoutNoteInput | MediaAttachmentCreateOrConnectWithoutNoteInput[]
    upsert?: MediaAttachmentUpsertWithWhereUniqueWithoutNoteInput | MediaAttachmentUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: MediaAttachmentCreateManyNoteInputEnvelope
    set?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    disconnect?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    delete?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    connect?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    update?: MediaAttachmentUpdateWithWhereUniqueWithoutNoteInput | MediaAttachmentUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: MediaAttachmentUpdateManyWithWhereWithoutNoteInput | MediaAttachmentUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: MediaAttachmentScalarWhereInput | MediaAttachmentScalarWhereInput[]
  }

  export type NoteTagUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput> | NoteTagCreateWithoutNoteInput[] | NoteTagUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutNoteInput | NoteTagCreateOrConnectWithoutNoteInput[]
    upsert?: NoteTagUpsertWithWhereUniqueWithoutNoteInput | NoteTagUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteTagCreateManyNoteInputEnvelope
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    update?: NoteTagUpdateWithWhereUniqueWithoutNoteInput | NoteTagUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteTagUpdateManyWithWhereWithoutNoteInput | NoteTagUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
  }

  export type NoteHistoryUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteHistoryCreateWithoutNoteInput, NoteHistoryUncheckedCreateWithoutNoteInput> | NoteHistoryCreateWithoutNoteInput[] | NoteHistoryUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteHistoryCreateOrConnectWithoutNoteInput | NoteHistoryCreateOrConnectWithoutNoteInput[]
    upsert?: NoteHistoryUpsertWithWhereUniqueWithoutNoteInput | NoteHistoryUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteHistoryCreateManyNoteInputEnvelope
    set?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    disconnect?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    delete?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    connect?: NoteHistoryWhereUniqueInput | NoteHistoryWhereUniqueInput[]
    update?: NoteHistoryUpdateWithWhereUniqueWithoutNoteInput | NoteHistoryUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteHistoryUpdateManyWithWhereWithoutNoteInput | NoteHistoryUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteHistoryScalarWhereInput | NoteHistoryScalarWhereInput[]
  }

  export type NoteShareUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<NoteShareCreateWithoutNoteInput, NoteShareUncheckedCreateWithoutNoteInput> | NoteShareCreateWithoutNoteInput[] | NoteShareUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: NoteShareCreateOrConnectWithoutNoteInput | NoteShareCreateOrConnectWithoutNoteInput[]
    upsert?: NoteShareUpsertWithWhereUniqueWithoutNoteInput | NoteShareUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: NoteShareCreateManyNoteInputEnvelope
    set?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    disconnect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    delete?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    connect?: NoteShareWhereUniqueInput | NoteShareWhereUniqueInput[]
    update?: NoteShareUpdateWithWhereUniqueWithoutNoteInput | NoteShareUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: NoteShareUpdateManyWithWhereWithoutNoteInput | NoteShareUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: NoteShareScalarWhereInput | NoteShareScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<CommentCreateWithoutNoteInput, CommentUncheckedCreateWithoutNoteInput> | CommentCreateWithoutNoteInput[] | CommentUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNoteInput | CommentCreateOrConnectWithoutNoteInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutNoteInput | CommentUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: CommentCreateManyNoteInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutNoteInput | CommentUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutNoteInput | CommentUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type MediaAttachmentUncheckedUpdateManyWithoutNoteNestedInput = {
    create?: XOR<MediaAttachmentCreateWithoutNoteInput, MediaAttachmentUncheckedCreateWithoutNoteInput> | MediaAttachmentCreateWithoutNoteInput[] | MediaAttachmentUncheckedCreateWithoutNoteInput[]
    connectOrCreate?: MediaAttachmentCreateOrConnectWithoutNoteInput | MediaAttachmentCreateOrConnectWithoutNoteInput[]
    upsert?: MediaAttachmentUpsertWithWhereUniqueWithoutNoteInput | MediaAttachmentUpsertWithWhereUniqueWithoutNoteInput[]
    createMany?: MediaAttachmentCreateManyNoteInputEnvelope
    set?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    disconnect?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    delete?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    connect?: MediaAttachmentWhereUniqueInput | MediaAttachmentWhereUniqueInput[]
    update?: MediaAttachmentUpdateWithWhereUniqueWithoutNoteInput | MediaAttachmentUpdateWithWhereUniqueWithoutNoteInput[]
    updateMany?: MediaAttachmentUpdateManyWithWhereWithoutNoteInput | MediaAttachmentUpdateManyWithWhereWithoutNoteInput[]
    deleteMany?: MediaAttachmentScalarWhereInput | MediaAttachmentScalarWhereInput[]
  }

  export type NoteTagCreateNestedManyWithoutTagInput = {
    create?: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput> | NoteTagCreateWithoutTagInput[] | NoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutTagInput | NoteTagCreateOrConnectWithoutTagInput[]
    createMany?: NoteTagCreateManyTagInputEnvelope
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
  }

  export type NoteTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput> | NoteTagCreateWithoutTagInput[] | NoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutTagInput | NoteTagCreateOrConnectWithoutTagInput[]
    createMany?: NoteTagCreateManyTagInputEnvelope
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
  }

  export type NoteTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput> | NoteTagCreateWithoutTagInput[] | NoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutTagInput | NoteTagCreateOrConnectWithoutTagInput[]
    upsert?: NoteTagUpsertWithWhereUniqueWithoutTagInput | NoteTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: NoteTagCreateManyTagInputEnvelope
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    update?: NoteTagUpdateWithWhereUniqueWithoutTagInput | NoteTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: NoteTagUpdateManyWithWhereWithoutTagInput | NoteTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
  }

  export type NoteTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput> | NoteTagCreateWithoutTagInput[] | NoteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: NoteTagCreateOrConnectWithoutTagInput | NoteTagCreateOrConnectWithoutTagInput[]
    upsert?: NoteTagUpsertWithWhereUniqueWithoutTagInput | NoteTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: NoteTagCreateManyTagInputEnvelope
    set?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    disconnect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    delete?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    connect?: NoteTagWhereUniqueInput | NoteTagWhereUniqueInput[]
    update?: NoteTagUpdateWithWhereUniqueWithoutTagInput | NoteTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: NoteTagUpdateManyWithWhereWithoutTagInput | NoteTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
  }

  export type NoteCreateNestedOneWithoutNoteTagsInput = {
    create?: XOR<NoteCreateWithoutNoteTagsInput, NoteUncheckedCreateWithoutNoteTagsInput>
    connectOrCreate?: NoteCreateOrConnectWithoutNoteTagsInput
    connect?: NoteWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutNoteTagsInput = {
    create?: XOR<TagCreateWithoutNoteTagsInput, TagUncheckedCreateWithoutNoteTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutNoteTagsInput
    connect?: TagWhereUniqueInput
  }

  export type NoteUpdateOneRequiredWithoutNoteTagsNestedInput = {
    create?: XOR<NoteCreateWithoutNoteTagsInput, NoteUncheckedCreateWithoutNoteTagsInput>
    connectOrCreate?: NoteCreateOrConnectWithoutNoteTagsInput
    upsert?: NoteUpsertWithoutNoteTagsInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutNoteTagsInput, NoteUpdateWithoutNoteTagsInput>, NoteUncheckedUpdateWithoutNoteTagsInput>
  }

  export type TagUpdateOneRequiredWithoutNoteTagsNestedInput = {
    create?: XOR<TagCreateWithoutNoteTagsInput, TagUncheckedCreateWithoutNoteTagsInput>
    connectOrCreate?: TagCreateOrConnectWithoutNoteTagsInput
    upsert?: TagUpsertWithoutNoteTagsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutNoteTagsInput, TagUpdateWithoutNoteTagsInput>, TagUncheckedUpdateWithoutNoteTagsInput>
  }

  export type NoteCreateNestedOneWithoutNoteHistoriesInput = {
    create?: XOR<NoteCreateWithoutNoteHistoriesInput, NoteUncheckedCreateWithoutNoteHistoriesInput>
    connectOrCreate?: NoteCreateOrConnectWithoutNoteHistoriesInput
    connect?: NoteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNoteHistoriesInput = {
    create?: XOR<UserCreateWithoutNoteHistoriesInput, UserUncheckedCreateWithoutNoteHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoteHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type NoteUpdateOneRequiredWithoutNoteHistoriesNestedInput = {
    create?: XOR<NoteCreateWithoutNoteHistoriesInput, NoteUncheckedCreateWithoutNoteHistoriesInput>
    connectOrCreate?: NoteCreateOrConnectWithoutNoteHistoriesInput
    upsert?: NoteUpsertWithoutNoteHistoriesInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutNoteHistoriesInput, NoteUpdateWithoutNoteHistoriesInput>, NoteUncheckedUpdateWithoutNoteHistoriesInput>
  }

  export type UserUpdateOneWithoutNoteHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutNoteHistoriesInput, UserUncheckedCreateWithoutNoteHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoteHistoriesInput
    upsert?: UserUpsertWithoutNoteHistoriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNoteHistoriesInput, UserUpdateWithoutNoteHistoriesInput>, UserUncheckedUpdateWithoutNoteHistoriesInput>
  }

  export type NoteCreateNestedOneWithoutNoteSharesInput = {
    create?: XOR<NoteCreateWithoutNoteSharesInput, NoteUncheckedCreateWithoutNoteSharesInput>
    connectOrCreate?: NoteCreateOrConnectWithoutNoteSharesInput
    connect?: NoteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNoteSharesInput = {
    create?: XOR<UserCreateWithoutNoteSharesInput, UserUncheckedCreateWithoutNoteSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoteSharesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPermissionFieldUpdateOperationsInput = {
    set?: $Enums.Permission
  }

  export type NoteUpdateOneRequiredWithoutNoteSharesNestedInput = {
    create?: XOR<NoteCreateWithoutNoteSharesInput, NoteUncheckedCreateWithoutNoteSharesInput>
    connectOrCreate?: NoteCreateOrConnectWithoutNoteSharesInput
    upsert?: NoteUpsertWithoutNoteSharesInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutNoteSharesInput, NoteUpdateWithoutNoteSharesInput>, NoteUncheckedUpdateWithoutNoteSharesInput>
  }

  export type UserUpdateOneRequiredWithoutNoteSharesNestedInput = {
    create?: XOR<UserCreateWithoutNoteSharesInput, UserUncheckedCreateWithoutNoteSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoteSharesInput
    upsert?: UserUpsertWithoutNoteSharesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNoteSharesInput, UserUpdateWithoutNoteSharesInput>, UserUncheckedUpdateWithoutNoteSharesInput>
  }

  export type NoteCreateNestedOneWithoutCommentsInput = {
    create?: XOR<NoteCreateWithoutCommentsInput, NoteUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: NoteCreateOrConnectWithoutCommentsInput
    connect?: NoteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type NoteUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<NoteCreateWithoutCommentsInput, NoteUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: NoteCreateOrConnectWithoutCommentsInput
    upsert?: NoteUpsertWithoutCommentsInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutCommentsInput, NoteUpdateWithoutCommentsInput>, NoteUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type NoteCreateNestedOneWithoutMediaAttachmentsInput = {
    create?: XOR<NoteCreateWithoutMediaAttachmentsInput, NoteUncheckedCreateWithoutMediaAttachmentsInput>
    connectOrCreate?: NoteCreateOrConnectWithoutMediaAttachmentsInput
    connect?: NoteWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMediaAttachmentsInput = {
    create?: XOR<UserCreateWithoutMediaAttachmentsInput, UserUncheckedCreateWithoutMediaAttachmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediaAttachmentsInput
    connect?: UserWhereUniqueInput
  }

  export type NoteUpdateOneRequiredWithoutMediaAttachmentsNestedInput = {
    create?: XOR<NoteCreateWithoutMediaAttachmentsInput, NoteUncheckedCreateWithoutMediaAttachmentsInput>
    connectOrCreate?: NoteCreateOrConnectWithoutMediaAttachmentsInput
    upsert?: NoteUpsertWithoutMediaAttachmentsInput
    connect?: NoteWhereUniqueInput
    update?: XOR<XOR<NoteUpdateToOneWithWhereWithoutMediaAttachmentsInput, NoteUpdateWithoutMediaAttachmentsInput>, NoteUncheckedUpdateWithoutMediaAttachmentsInput>
  }

  export type UserUpdateOneWithoutMediaAttachmentsNestedInput = {
    create?: XOR<UserCreateWithoutMediaAttachmentsInput, UserUncheckedCreateWithoutMediaAttachmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediaAttachmentsInput
    upsert?: UserUpsertWithoutMediaAttachmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMediaAttachmentsInput, UserUpdateWithoutMediaAttachmentsInput>, UserUncheckedUpdateWithoutMediaAttachmentsInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPermissionFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission | EnumPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionFilter<$PrismaModel> | $Enums.Permission
  }

  export type NestedEnumPermissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission | EnumPermissionFieldRefInput<$PrismaModel>
    in?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionWithAggregatesFilter<$PrismaModel> | $Enums.Permission
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionFilter<$PrismaModel>
    _max?: NestedEnumPermissionFilter<$PrismaModel>
  }

  export type FolderCreateWithoutUserInput = {
    name: string
    domain?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    notes?: NoteCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    domain?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderCreateOrConnectWithoutUserInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput>
  }

  export type FolderCreateManyUserInputEnvelope = {
    data: FolderCreateManyUserInput | FolderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutUserInput = {
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    folder?: FolderCreateNestedOneWithoutNotesInput
    noteTags?: NoteTagCreateNestedManyWithoutNoteInput
    noteHistories?: NoteHistoryCreateNestedManyWithoutNoteInput
    noteShares?: NoteShareCreateNestedManyWithoutNoteInput
    comments?: CommentCreateNestedManyWithoutNoteInput
    mediaAttachments?: MediaAttachmentCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutUserInput = {
    id?: number
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: number | null
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    noteTags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
    noteHistories?: NoteHistoryUncheckedCreateNestedManyWithoutNoteInput
    noteShares?: NoteShareUncheckedCreateNestedManyWithoutNoteInput
    comments?: CommentUncheckedCreateNestedManyWithoutNoteInput
    mediaAttachments?: MediaAttachmentUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutUserInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteCreateManyUserInputEnvelope = {
    data: NoteCreateManyUserInput | NoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    content?: string | null
    created_at?: Date | string
    note: NoteCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: number
    note_id: number
    content?: string | null
    created_at?: Date | string
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type NoteHistoryCreateWithoutUserInput = {
    content?: string | null
    updated_at?: Date | string
    note: NoteCreateNestedOneWithoutNoteHistoriesInput
  }

  export type NoteHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    note_id: number
    content?: string | null
    updated_at?: Date | string
  }

  export type NoteHistoryCreateOrConnectWithoutUserInput = {
    where: NoteHistoryWhereUniqueInput
    create: XOR<NoteHistoryCreateWithoutUserInput, NoteHistoryUncheckedCreateWithoutUserInput>
  }

  export type NoteHistoryCreateManyUserInputEnvelope = {
    data: NoteHistoryCreateManyUserInput | NoteHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NoteShareCreateWithoutUserInput = {
    permission: $Enums.Permission
    note: NoteCreateNestedOneWithoutNoteSharesInput
  }

  export type NoteShareUncheckedCreateWithoutUserInput = {
    note_id: number
    permission: $Enums.Permission
  }

  export type NoteShareCreateOrConnectWithoutUserInput = {
    where: NoteShareWhereUniqueInput
    create: XOR<NoteShareCreateWithoutUserInput, NoteShareUncheckedCreateWithoutUserInput>
  }

  export type NoteShareCreateManyUserInputEnvelope = {
    data: NoteShareCreateManyUserInput | NoteShareCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MediaAttachmentCreateWithoutUserInput = {
    file_url?: string | null
    file_type?: string | null
    uploaded_at?: Date | string
    note: NoteCreateNestedOneWithoutMediaAttachmentsInput
  }

  export type MediaAttachmentUncheckedCreateWithoutUserInput = {
    id?: number
    note_id: number
    file_url?: string | null
    file_type?: string | null
    uploaded_at?: Date | string
  }

  export type MediaAttachmentCreateOrConnectWithoutUserInput = {
    where: MediaAttachmentWhereUniqueInput
    create: XOR<MediaAttachmentCreateWithoutUserInput, MediaAttachmentUncheckedCreateWithoutUserInput>
  }

  export type MediaAttachmentCreateManyUserInputEnvelope = {
    data: MediaAttachmentCreateManyUserInput | MediaAttachmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FolderUpsertWithWhereUniqueWithoutUserInput = {
    where: FolderWhereUniqueInput
    update: XOR<FolderUpdateWithoutUserInput, FolderUncheckedUpdateWithoutUserInput>
    create: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput>
  }

  export type FolderUpdateWithWhereUniqueWithoutUserInput = {
    where: FolderWhereUniqueInput
    data: XOR<FolderUpdateWithoutUserInput, FolderUncheckedUpdateWithoutUserInput>
  }

  export type FolderUpdateManyWithWhereWithoutUserInput = {
    where: FolderScalarWhereInput
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyWithoutUserInput>
  }

  export type FolderScalarWhereInput = {
    AND?: FolderScalarWhereInput | FolderScalarWhereInput[]
    OR?: FolderScalarWhereInput[]
    NOT?: FolderScalarWhereInput | FolderScalarWhereInput[]
    id?: IntFilter<"Folder"> | number
    name?: StringFilter<"Folder"> | string
    domain?: StringNullableFilter<"Folder"> | string | null
    user_id?: IntNullableFilter<"Folder"> | number | null
    created_at?: DateTimeFilter<"Folder"> | Date | string
    updated_at?: DateTimeFilter<"Folder"> | Date | string
  }

  export type NoteUpsertWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
  }

  export type NoteUpdateManyWithWhereWithoutUserInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutUserInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: IntFilter<"Note"> | number
    title?: StringNullableFilter<"Note"> | string | null
    content?: JsonNullableFilter<"Note">
    folder_id?: IntNullableFilter<"Note"> | number | null
    user_id?: IntNullableFilter<"Note"> | number | null
    is_pinned?: BoolFilter<"Note"> | boolean
    is_trashed?: BoolFilter<"Note"> | boolean
    is_shared?: BoolFilter<"Note"> | boolean
    created_at?: DateTimeFilter<"Note"> | Date | string
    updated_at?: DateTimeFilter<"Note"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    note_id?: IntFilter<"Comment"> | number
    author_id?: IntFilter<"Comment"> | number
    content?: StringNullableFilter<"Comment"> | string | null
    created_at?: DateTimeFilter<"Comment"> | Date | string
  }

  export type NoteHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: NoteHistoryWhereUniqueInput
    update: XOR<NoteHistoryUpdateWithoutUserInput, NoteHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<NoteHistoryCreateWithoutUserInput, NoteHistoryUncheckedCreateWithoutUserInput>
  }

  export type NoteHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: NoteHistoryWhereUniqueInput
    data: XOR<NoteHistoryUpdateWithoutUserInput, NoteHistoryUncheckedUpdateWithoutUserInput>
  }

  export type NoteHistoryUpdateManyWithWhereWithoutUserInput = {
    where: NoteHistoryScalarWhereInput
    data: XOR<NoteHistoryUpdateManyMutationInput, NoteHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type NoteHistoryScalarWhereInput = {
    AND?: NoteHistoryScalarWhereInput | NoteHistoryScalarWhereInput[]
    OR?: NoteHistoryScalarWhereInput[]
    NOT?: NoteHistoryScalarWhereInput | NoteHistoryScalarWhereInput[]
    id?: IntFilter<"NoteHistory"> | number
    note_id?: IntFilter<"NoteHistory"> | number
    content?: StringNullableFilter<"NoteHistory"> | string | null
    updated_by?: IntNullableFilter<"NoteHistory"> | number | null
    updated_at?: DateTimeFilter<"NoteHistory"> | Date | string
  }

  export type NoteShareUpsertWithWhereUniqueWithoutUserInput = {
    where: NoteShareWhereUniqueInput
    update: XOR<NoteShareUpdateWithoutUserInput, NoteShareUncheckedUpdateWithoutUserInput>
    create: XOR<NoteShareCreateWithoutUserInput, NoteShareUncheckedCreateWithoutUserInput>
  }

  export type NoteShareUpdateWithWhereUniqueWithoutUserInput = {
    where: NoteShareWhereUniqueInput
    data: XOR<NoteShareUpdateWithoutUserInput, NoteShareUncheckedUpdateWithoutUserInput>
  }

  export type NoteShareUpdateManyWithWhereWithoutUserInput = {
    where: NoteShareScalarWhereInput
    data: XOR<NoteShareUpdateManyMutationInput, NoteShareUncheckedUpdateManyWithoutUserInput>
  }

  export type NoteShareScalarWhereInput = {
    AND?: NoteShareScalarWhereInput | NoteShareScalarWhereInput[]
    OR?: NoteShareScalarWhereInput[]
    NOT?: NoteShareScalarWhereInput | NoteShareScalarWhereInput[]
    note_id?: IntFilter<"NoteShare"> | number
    user_id?: IntFilter<"NoteShare"> | number
    permission?: EnumPermissionFilter<"NoteShare"> | $Enums.Permission
  }

  export type MediaAttachmentUpsertWithWhereUniqueWithoutUserInput = {
    where: MediaAttachmentWhereUniqueInput
    update: XOR<MediaAttachmentUpdateWithoutUserInput, MediaAttachmentUncheckedUpdateWithoutUserInput>
    create: XOR<MediaAttachmentCreateWithoutUserInput, MediaAttachmentUncheckedCreateWithoutUserInput>
  }

  export type MediaAttachmentUpdateWithWhereUniqueWithoutUserInput = {
    where: MediaAttachmentWhereUniqueInput
    data: XOR<MediaAttachmentUpdateWithoutUserInput, MediaAttachmentUncheckedUpdateWithoutUserInput>
  }

  export type MediaAttachmentUpdateManyWithWhereWithoutUserInput = {
    where: MediaAttachmentScalarWhereInput
    data: XOR<MediaAttachmentUpdateManyMutationInput, MediaAttachmentUncheckedUpdateManyWithoutUserInput>
  }

  export type MediaAttachmentScalarWhereInput = {
    AND?: MediaAttachmentScalarWhereInput | MediaAttachmentScalarWhereInput[]
    OR?: MediaAttachmentScalarWhereInput[]
    NOT?: MediaAttachmentScalarWhereInput | MediaAttachmentScalarWhereInput[]
    id?: IntFilter<"MediaAttachment"> | number
    note_id?: IntFilter<"MediaAttachment"> | number
    user_id?: IntNullableFilter<"MediaAttachment"> | number | null
    file_url?: StringNullableFilter<"MediaAttachment"> | string | null
    file_type?: StringNullableFilter<"MediaAttachment"> | string | null
    uploaded_at?: DateTimeFilter<"MediaAttachment"> | Date | string
  }

  export type UserCreateWithoutFoldersInput = {
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    notes?: NoteCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    noteHistories?: NoteHistoryCreateNestedManyWithoutUserInput
    noteShares?: NoteShareCreateNestedManyWithoutUserInput
    mediaAttachments?: MediaAttachmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFoldersInput = {
    id?: number
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    noteHistories?: NoteHistoryUncheckedCreateNestedManyWithoutUserInput
    noteShares?: NoteShareUncheckedCreateNestedManyWithoutUserInput
    mediaAttachments?: MediaAttachmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFoldersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
  }

  export type NoteCreateWithoutFolderInput = {
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutNotesInput
    noteTags?: NoteTagCreateNestedManyWithoutNoteInput
    noteHistories?: NoteHistoryCreateNestedManyWithoutNoteInput
    noteShares?: NoteShareCreateNestedManyWithoutNoteInput
    comments?: CommentCreateNestedManyWithoutNoteInput
    mediaAttachments?: MediaAttachmentCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutFolderInput = {
    id?: number
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    user_id?: number | null
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    noteTags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
    noteHistories?: NoteHistoryUncheckedCreateNestedManyWithoutNoteInput
    noteShares?: NoteShareUncheckedCreateNestedManyWithoutNoteInput
    comments?: CommentUncheckedCreateNestedManyWithoutNoteInput
    mediaAttachments?: MediaAttachmentUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutFolderInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutFolderInput, NoteUncheckedCreateWithoutFolderInput>
  }

  export type NoteCreateManyFolderInputEnvelope = {
    data: NoteCreateManyFolderInput | NoteCreateManyFolderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFoldersInput = {
    update: XOR<UserUpdateWithoutFoldersInput, UserUncheckedUpdateWithoutFoldersInput>
    create: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFoldersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFoldersInput, UserUncheckedUpdateWithoutFoldersInput>
  }

  export type UserUpdateWithoutFoldersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    noteHistories?: NoteHistoryUpdateManyWithoutUserNestedInput
    noteShares?: NoteShareUpdateManyWithoutUserNestedInput
    mediaAttachments?: MediaAttachmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFoldersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    noteHistories?: NoteHistoryUncheckedUpdateManyWithoutUserNestedInput
    noteShares?: NoteShareUncheckedUpdateManyWithoutUserNestedInput
    mediaAttachments?: MediaAttachmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NoteUpsertWithWhereUniqueWithoutFolderInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutFolderInput, NoteUncheckedUpdateWithoutFolderInput>
    create: XOR<NoteCreateWithoutFolderInput, NoteUncheckedCreateWithoutFolderInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutFolderInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutFolderInput, NoteUncheckedUpdateWithoutFolderInput>
  }

  export type NoteUpdateManyWithWhereWithoutFolderInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutFolderInput>
  }

  export type FolderCreateWithoutNotesInput = {
    name: string
    domain?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutFoldersInput
  }

  export type FolderUncheckedCreateWithoutNotesInput = {
    id?: number
    name: string
    domain?: string | null
    user_id?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FolderCreateOrConnectWithoutNotesInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutNotesInput, FolderUncheckedCreateWithoutNotesInput>
  }

  export type UserCreateWithoutNotesInput = {
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    noteHistories?: NoteHistoryCreateNestedManyWithoutUserInput
    noteShares?: NoteShareCreateNestedManyWithoutUserInput
    mediaAttachments?: MediaAttachmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: number
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    noteHistories?: NoteHistoryUncheckedCreateNestedManyWithoutUserInput
    noteShares?: NoteShareUncheckedCreateNestedManyWithoutUserInput
    mediaAttachments?: MediaAttachmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type NoteTagCreateWithoutNoteInput = {
    tag: TagCreateNestedOneWithoutNoteTagsInput
  }

  export type NoteTagUncheckedCreateWithoutNoteInput = {
    tag_id: number
  }

  export type NoteTagCreateOrConnectWithoutNoteInput = {
    where: NoteTagWhereUniqueInput
    create: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput>
  }

  export type NoteTagCreateManyNoteInputEnvelope = {
    data: NoteTagCreateManyNoteInput | NoteTagCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type NoteHistoryCreateWithoutNoteInput = {
    content?: string | null
    updated_at?: Date | string
    user?: UserCreateNestedOneWithoutNoteHistoriesInput
  }

  export type NoteHistoryUncheckedCreateWithoutNoteInput = {
    id?: number
    content?: string | null
    updated_by?: number | null
    updated_at?: Date | string
  }

  export type NoteHistoryCreateOrConnectWithoutNoteInput = {
    where: NoteHistoryWhereUniqueInput
    create: XOR<NoteHistoryCreateWithoutNoteInput, NoteHistoryUncheckedCreateWithoutNoteInput>
  }

  export type NoteHistoryCreateManyNoteInputEnvelope = {
    data: NoteHistoryCreateManyNoteInput | NoteHistoryCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type NoteShareCreateWithoutNoteInput = {
    permission: $Enums.Permission
    user: UserCreateNestedOneWithoutNoteSharesInput
  }

  export type NoteShareUncheckedCreateWithoutNoteInput = {
    user_id: number
    permission: $Enums.Permission
  }

  export type NoteShareCreateOrConnectWithoutNoteInput = {
    where: NoteShareWhereUniqueInput
    create: XOR<NoteShareCreateWithoutNoteInput, NoteShareUncheckedCreateWithoutNoteInput>
  }

  export type NoteShareCreateManyNoteInputEnvelope = {
    data: NoteShareCreateManyNoteInput | NoteShareCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutNoteInput = {
    content?: string | null
    created_at?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutNoteInput = {
    id?: number
    author_id: number
    content?: string | null
    created_at?: Date | string
  }

  export type CommentCreateOrConnectWithoutNoteInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutNoteInput, CommentUncheckedCreateWithoutNoteInput>
  }

  export type CommentCreateManyNoteInputEnvelope = {
    data: CommentCreateManyNoteInput | CommentCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type MediaAttachmentCreateWithoutNoteInput = {
    file_url?: string | null
    file_type?: string | null
    uploaded_at?: Date | string
    user?: UserCreateNestedOneWithoutMediaAttachmentsInput
  }

  export type MediaAttachmentUncheckedCreateWithoutNoteInput = {
    id?: number
    user_id?: number | null
    file_url?: string | null
    file_type?: string | null
    uploaded_at?: Date | string
  }

  export type MediaAttachmentCreateOrConnectWithoutNoteInput = {
    where: MediaAttachmentWhereUniqueInput
    create: XOR<MediaAttachmentCreateWithoutNoteInput, MediaAttachmentUncheckedCreateWithoutNoteInput>
  }

  export type MediaAttachmentCreateManyNoteInputEnvelope = {
    data: MediaAttachmentCreateManyNoteInput | MediaAttachmentCreateManyNoteInput[]
    skipDuplicates?: boolean
  }

  export type FolderUpsertWithoutNotesInput = {
    update: XOR<FolderUpdateWithoutNotesInput, FolderUncheckedUpdateWithoutNotesInput>
    create: XOR<FolderCreateWithoutNotesInput, FolderUncheckedCreateWithoutNotesInput>
    where?: FolderWhereInput
  }

  export type FolderUpdateToOneWithWhereWithoutNotesInput = {
    where?: FolderWhereInput
    data: XOR<FolderUpdateWithoutNotesInput, FolderUncheckedUpdateWithoutNotesInput>
  }

  export type FolderUpdateWithoutNotesInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutFoldersNestedInput
  }

  export type FolderUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    noteHistories?: NoteHistoryUpdateManyWithoutUserNestedInput
    noteShares?: NoteShareUpdateManyWithoutUserNestedInput
    mediaAttachments?: MediaAttachmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    noteHistories?: NoteHistoryUncheckedUpdateManyWithoutUserNestedInput
    noteShares?: NoteShareUncheckedUpdateManyWithoutUserNestedInput
    mediaAttachments?: MediaAttachmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NoteTagUpsertWithWhereUniqueWithoutNoteInput = {
    where: NoteTagWhereUniqueInput
    update: XOR<NoteTagUpdateWithoutNoteInput, NoteTagUncheckedUpdateWithoutNoteInput>
    create: XOR<NoteTagCreateWithoutNoteInput, NoteTagUncheckedCreateWithoutNoteInput>
  }

  export type NoteTagUpdateWithWhereUniqueWithoutNoteInput = {
    where: NoteTagWhereUniqueInput
    data: XOR<NoteTagUpdateWithoutNoteInput, NoteTagUncheckedUpdateWithoutNoteInput>
  }

  export type NoteTagUpdateManyWithWhereWithoutNoteInput = {
    where: NoteTagScalarWhereInput
    data: XOR<NoteTagUpdateManyMutationInput, NoteTagUncheckedUpdateManyWithoutNoteInput>
  }

  export type NoteTagScalarWhereInput = {
    AND?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
    OR?: NoteTagScalarWhereInput[]
    NOT?: NoteTagScalarWhereInput | NoteTagScalarWhereInput[]
    note_id?: IntFilter<"NoteTag"> | number
    tag_id?: IntFilter<"NoteTag"> | number
  }

  export type NoteHistoryUpsertWithWhereUniqueWithoutNoteInput = {
    where: NoteHistoryWhereUniqueInput
    update: XOR<NoteHistoryUpdateWithoutNoteInput, NoteHistoryUncheckedUpdateWithoutNoteInput>
    create: XOR<NoteHistoryCreateWithoutNoteInput, NoteHistoryUncheckedCreateWithoutNoteInput>
  }

  export type NoteHistoryUpdateWithWhereUniqueWithoutNoteInput = {
    where: NoteHistoryWhereUniqueInput
    data: XOR<NoteHistoryUpdateWithoutNoteInput, NoteHistoryUncheckedUpdateWithoutNoteInput>
  }

  export type NoteHistoryUpdateManyWithWhereWithoutNoteInput = {
    where: NoteHistoryScalarWhereInput
    data: XOR<NoteHistoryUpdateManyMutationInput, NoteHistoryUncheckedUpdateManyWithoutNoteInput>
  }

  export type NoteShareUpsertWithWhereUniqueWithoutNoteInput = {
    where: NoteShareWhereUniqueInput
    update: XOR<NoteShareUpdateWithoutNoteInput, NoteShareUncheckedUpdateWithoutNoteInput>
    create: XOR<NoteShareCreateWithoutNoteInput, NoteShareUncheckedCreateWithoutNoteInput>
  }

  export type NoteShareUpdateWithWhereUniqueWithoutNoteInput = {
    where: NoteShareWhereUniqueInput
    data: XOR<NoteShareUpdateWithoutNoteInput, NoteShareUncheckedUpdateWithoutNoteInput>
  }

  export type NoteShareUpdateManyWithWhereWithoutNoteInput = {
    where: NoteShareScalarWhereInput
    data: XOR<NoteShareUpdateManyMutationInput, NoteShareUncheckedUpdateManyWithoutNoteInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutNoteInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutNoteInput, CommentUncheckedUpdateWithoutNoteInput>
    create: XOR<CommentCreateWithoutNoteInput, CommentUncheckedCreateWithoutNoteInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutNoteInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutNoteInput, CommentUncheckedUpdateWithoutNoteInput>
  }

  export type CommentUpdateManyWithWhereWithoutNoteInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutNoteInput>
  }

  export type MediaAttachmentUpsertWithWhereUniqueWithoutNoteInput = {
    where: MediaAttachmentWhereUniqueInput
    update: XOR<MediaAttachmentUpdateWithoutNoteInput, MediaAttachmentUncheckedUpdateWithoutNoteInput>
    create: XOR<MediaAttachmentCreateWithoutNoteInput, MediaAttachmentUncheckedCreateWithoutNoteInput>
  }

  export type MediaAttachmentUpdateWithWhereUniqueWithoutNoteInput = {
    where: MediaAttachmentWhereUniqueInput
    data: XOR<MediaAttachmentUpdateWithoutNoteInput, MediaAttachmentUncheckedUpdateWithoutNoteInput>
  }

  export type MediaAttachmentUpdateManyWithWhereWithoutNoteInput = {
    where: MediaAttachmentScalarWhereInput
    data: XOR<MediaAttachmentUpdateManyMutationInput, MediaAttachmentUncheckedUpdateManyWithoutNoteInput>
  }

  export type NoteTagCreateWithoutTagInput = {
    note: NoteCreateNestedOneWithoutNoteTagsInput
  }

  export type NoteTagUncheckedCreateWithoutTagInput = {
    note_id: number
  }

  export type NoteTagCreateOrConnectWithoutTagInput = {
    where: NoteTagWhereUniqueInput
    create: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput>
  }

  export type NoteTagCreateManyTagInputEnvelope = {
    data: NoteTagCreateManyTagInput | NoteTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type NoteTagUpsertWithWhereUniqueWithoutTagInput = {
    where: NoteTagWhereUniqueInput
    update: XOR<NoteTagUpdateWithoutTagInput, NoteTagUncheckedUpdateWithoutTagInput>
    create: XOR<NoteTagCreateWithoutTagInput, NoteTagUncheckedCreateWithoutTagInput>
  }

  export type NoteTagUpdateWithWhereUniqueWithoutTagInput = {
    where: NoteTagWhereUniqueInput
    data: XOR<NoteTagUpdateWithoutTagInput, NoteTagUncheckedUpdateWithoutTagInput>
  }

  export type NoteTagUpdateManyWithWhereWithoutTagInput = {
    where: NoteTagScalarWhereInput
    data: XOR<NoteTagUpdateManyMutationInput, NoteTagUncheckedUpdateManyWithoutTagInput>
  }

  export type NoteCreateWithoutNoteTagsInput = {
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    folder?: FolderCreateNestedOneWithoutNotesInput
    user?: UserCreateNestedOneWithoutNotesInput
    noteHistories?: NoteHistoryCreateNestedManyWithoutNoteInput
    noteShares?: NoteShareCreateNestedManyWithoutNoteInput
    comments?: CommentCreateNestedManyWithoutNoteInput
    mediaAttachments?: MediaAttachmentCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutNoteTagsInput = {
    id?: number
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: number | null
    user_id?: number | null
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    noteHistories?: NoteHistoryUncheckedCreateNestedManyWithoutNoteInput
    noteShares?: NoteShareUncheckedCreateNestedManyWithoutNoteInput
    comments?: CommentUncheckedCreateNestedManyWithoutNoteInput
    mediaAttachments?: MediaAttachmentUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutNoteTagsInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutNoteTagsInput, NoteUncheckedCreateWithoutNoteTagsInput>
  }

  export type TagCreateWithoutNoteTagsInput = {
    name: string
  }

  export type TagUncheckedCreateWithoutNoteTagsInput = {
    id?: number
    name: string
  }

  export type TagCreateOrConnectWithoutNoteTagsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutNoteTagsInput, TagUncheckedCreateWithoutNoteTagsInput>
  }

  export type NoteUpsertWithoutNoteTagsInput = {
    update: XOR<NoteUpdateWithoutNoteTagsInput, NoteUncheckedUpdateWithoutNoteTagsInput>
    create: XOR<NoteCreateWithoutNoteTagsInput, NoteUncheckedCreateWithoutNoteTagsInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutNoteTagsInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutNoteTagsInput, NoteUncheckedUpdateWithoutNoteTagsInput>
  }

  export type NoteUpdateWithoutNoteTagsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: FolderUpdateOneWithoutNotesNestedInput
    user?: UserUpdateOneWithoutNotesNestedInput
    noteHistories?: NoteHistoryUpdateManyWithoutNoteNestedInput
    noteShares?: NoteShareUpdateManyWithoutNoteNestedInput
    comments?: CommentUpdateManyWithoutNoteNestedInput
    mediaAttachments?: MediaAttachmentUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutNoteTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    noteHistories?: NoteHistoryUncheckedUpdateManyWithoutNoteNestedInput
    noteShares?: NoteShareUncheckedUpdateManyWithoutNoteNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNoteNestedInput
    mediaAttachments?: MediaAttachmentUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type TagUpsertWithoutNoteTagsInput = {
    update: XOR<TagUpdateWithoutNoteTagsInput, TagUncheckedUpdateWithoutNoteTagsInput>
    create: XOR<TagCreateWithoutNoteTagsInput, TagUncheckedCreateWithoutNoteTagsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutNoteTagsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutNoteTagsInput, TagUncheckedUpdateWithoutNoteTagsInput>
  }

  export type TagUpdateWithoutNoteTagsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutNoteTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NoteCreateWithoutNoteHistoriesInput = {
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    folder?: FolderCreateNestedOneWithoutNotesInput
    user?: UserCreateNestedOneWithoutNotesInput
    noteTags?: NoteTagCreateNestedManyWithoutNoteInput
    noteShares?: NoteShareCreateNestedManyWithoutNoteInput
    comments?: CommentCreateNestedManyWithoutNoteInput
    mediaAttachments?: MediaAttachmentCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutNoteHistoriesInput = {
    id?: number
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: number | null
    user_id?: number | null
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    noteTags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
    noteShares?: NoteShareUncheckedCreateNestedManyWithoutNoteInput
    comments?: CommentUncheckedCreateNestedManyWithoutNoteInput
    mediaAttachments?: MediaAttachmentUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutNoteHistoriesInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutNoteHistoriesInput, NoteUncheckedCreateWithoutNoteHistoriesInput>
  }

  export type UserCreateWithoutNoteHistoriesInput = {
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    noteShares?: NoteShareCreateNestedManyWithoutUserInput
    mediaAttachments?: MediaAttachmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNoteHistoriesInput = {
    id?: number
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    noteShares?: NoteShareUncheckedCreateNestedManyWithoutUserInput
    mediaAttachments?: MediaAttachmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNoteHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNoteHistoriesInput, UserUncheckedCreateWithoutNoteHistoriesInput>
  }

  export type NoteUpsertWithoutNoteHistoriesInput = {
    update: XOR<NoteUpdateWithoutNoteHistoriesInput, NoteUncheckedUpdateWithoutNoteHistoriesInput>
    create: XOR<NoteCreateWithoutNoteHistoriesInput, NoteUncheckedCreateWithoutNoteHistoriesInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutNoteHistoriesInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutNoteHistoriesInput, NoteUncheckedUpdateWithoutNoteHistoriesInput>
  }

  export type NoteUpdateWithoutNoteHistoriesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: FolderUpdateOneWithoutNotesNestedInput
    user?: UserUpdateOneWithoutNotesNestedInput
    noteTags?: NoteTagUpdateManyWithoutNoteNestedInput
    noteShares?: NoteShareUpdateManyWithoutNoteNestedInput
    comments?: CommentUpdateManyWithoutNoteNestedInput
    mediaAttachments?: MediaAttachmentUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutNoteHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    noteTags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
    noteShares?: NoteShareUncheckedUpdateManyWithoutNoteNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNoteNestedInput
    mediaAttachments?: MediaAttachmentUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type UserUpsertWithoutNoteHistoriesInput = {
    update: XOR<UserUpdateWithoutNoteHistoriesInput, UserUncheckedUpdateWithoutNoteHistoriesInput>
    create: XOR<UserCreateWithoutNoteHistoriesInput, UserUncheckedCreateWithoutNoteHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNoteHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNoteHistoriesInput, UserUncheckedUpdateWithoutNoteHistoriesInput>
  }

  export type UserUpdateWithoutNoteHistoriesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    noteShares?: NoteShareUpdateManyWithoutUserNestedInput
    mediaAttachments?: MediaAttachmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNoteHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    noteShares?: NoteShareUncheckedUpdateManyWithoutUserNestedInput
    mediaAttachments?: MediaAttachmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NoteCreateWithoutNoteSharesInput = {
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    folder?: FolderCreateNestedOneWithoutNotesInput
    user?: UserCreateNestedOneWithoutNotesInput
    noteTags?: NoteTagCreateNestedManyWithoutNoteInput
    noteHistories?: NoteHistoryCreateNestedManyWithoutNoteInput
    comments?: CommentCreateNestedManyWithoutNoteInput
    mediaAttachments?: MediaAttachmentCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutNoteSharesInput = {
    id?: number
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: number | null
    user_id?: number | null
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    noteTags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
    noteHistories?: NoteHistoryUncheckedCreateNestedManyWithoutNoteInput
    comments?: CommentUncheckedCreateNestedManyWithoutNoteInput
    mediaAttachments?: MediaAttachmentUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutNoteSharesInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutNoteSharesInput, NoteUncheckedCreateWithoutNoteSharesInput>
  }

  export type UserCreateWithoutNoteSharesInput = {
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    noteHistories?: NoteHistoryCreateNestedManyWithoutUserInput
    mediaAttachments?: MediaAttachmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNoteSharesInput = {
    id?: number
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    noteHistories?: NoteHistoryUncheckedCreateNestedManyWithoutUserInput
    mediaAttachments?: MediaAttachmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNoteSharesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNoteSharesInput, UserUncheckedCreateWithoutNoteSharesInput>
  }

  export type NoteUpsertWithoutNoteSharesInput = {
    update: XOR<NoteUpdateWithoutNoteSharesInput, NoteUncheckedUpdateWithoutNoteSharesInput>
    create: XOR<NoteCreateWithoutNoteSharesInput, NoteUncheckedCreateWithoutNoteSharesInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutNoteSharesInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutNoteSharesInput, NoteUncheckedUpdateWithoutNoteSharesInput>
  }

  export type NoteUpdateWithoutNoteSharesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: FolderUpdateOneWithoutNotesNestedInput
    user?: UserUpdateOneWithoutNotesNestedInput
    noteTags?: NoteTagUpdateManyWithoutNoteNestedInput
    noteHistories?: NoteHistoryUpdateManyWithoutNoteNestedInput
    comments?: CommentUpdateManyWithoutNoteNestedInput
    mediaAttachments?: MediaAttachmentUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutNoteSharesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    noteTags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
    noteHistories?: NoteHistoryUncheckedUpdateManyWithoutNoteNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNoteNestedInput
    mediaAttachments?: MediaAttachmentUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type UserUpsertWithoutNoteSharesInput = {
    update: XOR<UserUpdateWithoutNoteSharesInput, UserUncheckedUpdateWithoutNoteSharesInput>
    create: XOR<UserCreateWithoutNoteSharesInput, UserUncheckedCreateWithoutNoteSharesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNoteSharesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNoteSharesInput, UserUncheckedUpdateWithoutNoteSharesInput>
  }

  export type UserUpdateWithoutNoteSharesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    noteHistories?: NoteHistoryUpdateManyWithoutUserNestedInput
    mediaAttachments?: MediaAttachmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNoteSharesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    noteHistories?: NoteHistoryUncheckedUpdateManyWithoutUserNestedInput
    mediaAttachments?: MediaAttachmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NoteCreateWithoutCommentsInput = {
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    folder?: FolderCreateNestedOneWithoutNotesInput
    user?: UserCreateNestedOneWithoutNotesInput
    noteTags?: NoteTagCreateNestedManyWithoutNoteInput
    noteHistories?: NoteHistoryCreateNestedManyWithoutNoteInput
    noteShares?: NoteShareCreateNestedManyWithoutNoteInput
    mediaAttachments?: MediaAttachmentCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutCommentsInput = {
    id?: number
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: number | null
    user_id?: number | null
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    noteTags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
    noteHistories?: NoteHistoryUncheckedCreateNestedManyWithoutNoteInput
    noteShares?: NoteShareUncheckedCreateNestedManyWithoutNoteInput
    mediaAttachments?: MediaAttachmentUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutCommentsInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutCommentsInput, NoteUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    noteHistories?: NoteHistoryCreateNestedManyWithoutUserInput
    noteShares?: NoteShareCreateNestedManyWithoutUserInput
    mediaAttachments?: MediaAttachmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    noteHistories?: NoteHistoryUncheckedCreateNestedManyWithoutUserInput
    noteShares?: NoteShareUncheckedCreateNestedManyWithoutUserInput
    mediaAttachments?: MediaAttachmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type NoteUpsertWithoutCommentsInput = {
    update: XOR<NoteUpdateWithoutCommentsInput, NoteUncheckedUpdateWithoutCommentsInput>
    create: XOR<NoteCreateWithoutCommentsInput, NoteUncheckedCreateWithoutCommentsInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutCommentsInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutCommentsInput, NoteUncheckedUpdateWithoutCommentsInput>
  }

  export type NoteUpdateWithoutCommentsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: FolderUpdateOneWithoutNotesNestedInput
    user?: UserUpdateOneWithoutNotesNestedInput
    noteTags?: NoteTagUpdateManyWithoutNoteNestedInput
    noteHistories?: NoteHistoryUpdateManyWithoutNoteNestedInput
    noteShares?: NoteShareUpdateManyWithoutNoteNestedInput
    mediaAttachments?: MediaAttachmentUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    noteTags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
    noteHistories?: NoteHistoryUncheckedUpdateManyWithoutNoteNestedInput
    noteShares?: NoteShareUncheckedUpdateManyWithoutNoteNestedInput
    mediaAttachments?: MediaAttachmentUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    noteHistories?: NoteHistoryUpdateManyWithoutUserNestedInput
    noteShares?: NoteShareUpdateManyWithoutUserNestedInput
    mediaAttachments?: MediaAttachmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    noteHistories?: NoteHistoryUncheckedUpdateManyWithoutUserNestedInput
    noteShares?: NoteShareUncheckedUpdateManyWithoutUserNestedInput
    mediaAttachments?: MediaAttachmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NoteCreateWithoutMediaAttachmentsInput = {
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    folder?: FolderCreateNestedOneWithoutNotesInput
    user?: UserCreateNestedOneWithoutNotesInput
    noteTags?: NoteTagCreateNestedManyWithoutNoteInput
    noteHistories?: NoteHistoryCreateNestedManyWithoutNoteInput
    noteShares?: NoteShareCreateNestedManyWithoutNoteInput
    comments?: CommentCreateNestedManyWithoutNoteInput
  }

  export type NoteUncheckedCreateWithoutMediaAttachmentsInput = {
    id?: number
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: number | null
    user_id?: number | null
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    noteTags?: NoteTagUncheckedCreateNestedManyWithoutNoteInput
    noteHistories?: NoteHistoryUncheckedCreateNestedManyWithoutNoteInput
    noteShares?: NoteShareUncheckedCreateNestedManyWithoutNoteInput
    comments?: CommentUncheckedCreateNestedManyWithoutNoteInput
  }

  export type NoteCreateOrConnectWithoutMediaAttachmentsInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutMediaAttachmentsInput, NoteUncheckedCreateWithoutMediaAttachmentsInput>
  }

  export type UserCreateWithoutMediaAttachmentsInput = {
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    noteHistories?: NoteHistoryCreateNestedManyWithoutUserInput
    noteShares?: NoteShareCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMediaAttachmentsInput = {
    id?: number
    name?: string | null
    email: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    noteHistories?: NoteHistoryUncheckedCreateNestedManyWithoutUserInput
    noteShares?: NoteShareUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMediaAttachmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMediaAttachmentsInput, UserUncheckedCreateWithoutMediaAttachmentsInput>
  }

  export type NoteUpsertWithoutMediaAttachmentsInput = {
    update: XOR<NoteUpdateWithoutMediaAttachmentsInput, NoteUncheckedUpdateWithoutMediaAttachmentsInput>
    create: XOR<NoteCreateWithoutMediaAttachmentsInput, NoteUncheckedCreateWithoutMediaAttachmentsInput>
    where?: NoteWhereInput
  }

  export type NoteUpdateToOneWithWhereWithoutMediaAttachmentsInput = {
    where?: NoteWhereInput
    data: XOR<NoteUpdateWithoutMediaAttachmentsInput, NoteUncheckedUpdateWithoutMediaAttachmentsInput>
  }

  export type NoteUpdateWithoutMediaAttachmentsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: FolderUpdateOneWithoutNotesNestedInput
    user?: UserUpdateOneWithoutNotesNestedInput
    noteTags?: NoteTagUpdateManyWithoutNoteNestedInput
    noteHistories?: NoteHistoryUpdateManyWithoutNoteNestedInput
    noteShares?: NoteShareUpdateManyWithoutNoteNestedInput
    comments?: CommentUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutMediaAttachmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    noteTags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
    noteHistories?: NoteHistoryUncheckedUpdateManyWithoutNoteNestedInput
    noteShares?: NoteShareUncheckedUpdateManyWithoutNoteNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type UserUpsertWithoutMediaAttachmentsInput = {
    update: XOR<UserUpdateWithoutMediaAttachmentsInput, UserUncheckedUpdateWithoutMediaAttachmentsInput>
    create: XOR<UserCreateWithoutMediaAttachmentsInput, UserUncheckedCreateWithoutMediaAttachmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMediaAttachmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMediaAttachmentsInput, UserUncheckedUpdateWithoutMediaAttachmentsInput>
  }

  export type UserUpdateWithoutMediaAttachmentsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    noteHistories?: NoteHistoryUpdateManyWithoutUserNestedInput
    noteShares?: NoteShareUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMediaAttachmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    noteHistories?: NoteHistoryUncheckedUpdateManyWithoutUserNestedInput
    noteShares?: NoteShareUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FolderCreateManyUserInput = {
    id?: number
    name: string
    domain?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NoteCreateManyUserInput = {
    id?: number
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: number | null
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CommentCreateManyAuthorInput = {
    id?: number
    note_id: number
    content?: string | null
    created_at?: Date | string
  }

  export type NoteHistoryCreateManyUserInput = {
    id?: number
    note_id: number
    content?: string | null
    updated_at?: Date | string
  }

  export type NoteShareCreateManyUserInput = {
    note_id: number
    permission: $Enums.Permission
  }

  export type MediaAttachmentCreateManyUserInput = {
    id?: number
    note_id: number
    file_url?: string | null
    file_type?: string | null
    uploaded_at?: Date | string
  }

  export type FolderUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    domain?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpdateWithoutUserInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: FolderUpdateOneWithoutNotesNestedInput
    noteTags?: NoteTagUpdateManyWithoutNoteNestedInput
    noteHistories?: NoteHistoryUpdateManyWithoutNoteNestedInput
    noteShares?: NoteShareUpdateManyWithoutNoteNestedInput
    comments?: CommentUpdateManyWithoutNoteNestedInput
    mediaAttachments?: MediaAttachmentUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    noteTags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
    noteHistories?: NoteHistoryUncheckedUpdateManyWithoutNoteNestedInput
    noteShares?: NoteShareUncheckedUpdateManyWithoutNoteNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNoteNestedInput
    mediaAttachments?: MediaAttachmentUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    folder_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NoteUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    note_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    note_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteHistoryUpdateWithoutUserInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NoteUpdateOneRequiredWithoutNoteHistoriesNestedInput
  }

  export type NoteHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    note_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    note_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteShareUpdateWithoutUserInput = {
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    note?: NoteUpdateOneRequiredWithoutNoteSharesNestedInput
  }

  export type NoteShareUncheckedUpdateWithoutUserInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
  }

  export type NoteShareUncheckedUpdateManyWithoutUserInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
  }

  export type MediaAttachmentUpdateWithoutUserInput = {
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NoteUpdateOneRequiredWithoutMediaAttachmentsNestedInput
  }

  export type MediaAttachmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    note_id?: IntFieldUpdateOperationsInput | number
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAttachmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    note_id?: IntFieldUpdateOperationsInput | number
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateManyFolderInput = {
    id?: number
    title?: string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    user_id?: number | null
    is_pinned?: boolean
    is_trashed?: boolean
    is_shared?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NoteUpdateWithoutFolderInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNotesNestedInput
    noteTags?: NoteTagUpdateManyWithoutNoteNestedInput
    noteHistories?: NoteHistoryUpdateManyWithoutNoteNestedInput
    noteShares?: NoteShareUpdateManyWithoutNoteNestedInput
    comments?: CommentUpdateManyWithoutNoteNestedInput
    mediaAttachments?: MediaAttachmentUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateWithoutFolderInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    noteTags?: NoteTagUncheckedUpdateManyWithoutNoteNestedInput
    noteHistories?: NoteHistoryUncheckedUpdateManyWithoutNoteNestedInput
    noteShares?: NoteShareUncheckedUpdateManyWithoutNoteNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNoteNestedInput
    mediaAttachments?: MediaAttachmentUncheckedUpdateManyWithoutNoteNestedInput
  }

  export type NoteUncheckedUpdateManyWithoutFolderInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableJsonNullValueInput | InputJsonValue
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_pinned?: BoolFieldUpdateOperationsInput | boolean
    is_trashed?: BoolFieldUpdateOperationsInput | boolean
    is_shared?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteTagCreateManyNoteInput = {
    tag_id: number
  }

  export type NoteHistoryCreateManyNoteInput = {
    id?: number
    content?: string | null
    updated_by?: number | null
    updated_at?: Date | string
  }

  export type NoteShareCreateManyNoteInput = {
    user_id: number
    permission: $Enums.Permission
  }

  export type CommentCreateManyNoteInput = {
    id?: number
    author_id: number
    content?: string | null
    created_at?: Date | string
  }

  export type MediaAttachmentCreateManyNoteInput = {
    id?: number
    user_id?: number | null
    file_url?: string | null
    file_type?: string | null
    uploaded_at?: Date | string
  }

  export type NoteTagUpdateWithoutNoteInput = {
    tag?: TagUpdateOneRequiredWithoutNoteTagsNestedInput
  }

  export type NoteTagUncheckedUpdateWithoutNoteInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type NoteTagUncheckedUpdateManyWithoutNoteInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type NoteHistoryUpdateWithoutNoteInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutNoteHistoriesNestedInput
  }

  export type NoteHistoryUncheckedUpdateWithoutNoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteHistoryUncheckedUpdateManyWithoutNoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteShareUpdateWithoutNoteInput = {
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
    user?: UserUpdateOneRequiredWithoutNoteSharesNestedInput
  }

  export type NoteShareUncheckedUpdateWithoutNoteInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
  }

  export type NoteShareUncheckedUpdateManyWithoutNoteInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    permission?: EnumPermissionFieldUpdateOperationsInput | $Enums.Permission
  }

  export type CommentUpdateWithoutNoteInput = {
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutNoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutNoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    author_id?: IntFieldUpdateOperationsInput | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAttachmentUpdateWithoutNoteInput = {
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMediaAttachmentsNestedInput
  }

  export type MediaAttachmentUncheckedUpdateWithoutNoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaAttachmentUncheckedUpdateManyWithoutNoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    file_type?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteTagCreateManyTagInput = {
    note_id: number
  }

  export type NoteTagUpdateWithoutTagInput = {
    note?: NoteUpdateOneRequiredWithoutNoteTagsNestedInput
  }

  export type NoteTagUncheckedUpdateWithoutTagInput = {
    note_id?: IntFieldUpdateOperationsInput | number
  }

  export type NoteTagUncheckedUpdateManyWithoutTagInput = {
    note_id?: IntFieldUpdateOperationsInput | number
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