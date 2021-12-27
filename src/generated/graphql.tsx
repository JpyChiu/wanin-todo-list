import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "todo_list" */
  delete_todo_list?: Maybe<Todo_List_Mutation_Response>;
  /** delete single row from the table: "todo_list" */
  delete_todo_list_by_pk?: Maybe<Todo_List>;
  /** insert data into the table: "todo_list" */
  insert_todo_list?: Maybe<Todo_List_Mutation_Response>;
  /** insert a single row into the table: "todo_list" */
  insert_todo_list_one?: Maybe<Todo_List>;
  /** update data of the table: "todo_list" */
  update_todo_list?: Maybe<Todo_List_Mutation_Response>;
  /** update single row of the table: "todo_list" */
  update_todo_list_by_pk?: Maybe<Todo_List>;
};


/** mutation root */
export type Mutation_RootDelete_Todo_ListArgs = {
  where: Todo_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todo_List_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Todo_ListArgs = {
  objects: Array<Todo_List_Insert_Input>;
  on_conflict?: InputMaybe<Todo_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todo_List_OneArgs = {
  object: Todo_List_Insert_Input;
  on_conflict?: InputMaybe<Todo_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_ListArgs = {
  _inc?: InputMaybe<Todo_List_Inc_Input>;
  _set?: InputMaybe<Todo_List_Set_Input>;
  where: Todo_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todo_List_By_PkArgs = {
  _inc?: InputMaybe<Todo_List_Inc_Input>;
  _set?: InputMaybe<Todo_List_Set_Input>;
  pk_columns: Todo_List_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "todo_list" */
  todo_list: Array<Todo_List>;
  /** fetch aggregated fields from the table: "todo_list" */
  todo_list_aggregate: Todo_List_Aggregate;
  /** fetch data from the table: "todo_list" using primary key columns */
  todo_list_by_pk?: Maybe<Todo_List>;
};


export type Query_RootTodo_ListArgs = {
  distinct_on?: InputMaybe<Array<Todo_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_List_Order_By>>;
  where?: InputMaybe<Todo_List_Bool_Exp>;
};


export type Query_RootTodo_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todo_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_List_Order_By>>;
  where?: InputMaybe<Todo_List_Bool_Exp>;
};


export type Query_RootTodo_List_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "todo_list" */
  todo_list: Array<Todo_List>;
  /** fetch aggregated fields from the table: "todo_list" */
  todo_list_aggregate: Todo_List_Aggregate;
  /** fetch data from the table: "todo_list" using primary key columns */
  todo_list_by_pk?: Maybe<Todo_List>;
};


export type Subscription_RootTodo_ListArgs = {
  distinct_on?: InputMaybe<Array<Todo_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_List_Order_By>>;
  where?: InputMaybe<Todo_List_Bool_Exp>;
};


export type Subscription_RootTodo_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Todo_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Todo_List_Order_By>>;
  where?: InputMaybe<Todo_List_Bool_Exp>;
};


export type Subscription_RootTodo_List_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todo_list" */
export type Todo_List = {
  __typename?: 'todo_list';
  assignee?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  task: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "todo_list" */
export type Todo_List_Aggregate = {
  __typename?: 'todo_list_aggregate';
  aggregate?: Maybe<Todo_List_Aggregate_Fields>;
  nodes: Array<Todo_List>;
};

/** aggregate fields of "todo_list" */
export type Todo_List_Aggregate_Fields = {
  __typename?: 'todo_list_aggregate_fields';
  avg?: Maybe<Todo_List_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Todo_List_Max_Fields>;
  min?: Maybe<Todo_List_Min_Fields>;
  stddev?: Maybe<Todo_List_Stddev_Fields>;
  stddev_pop?: Maybe<Todo_List_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Todo_List_Stddev_Samp_Fields>;
  sum?: Maybe<Todo_List_Sum_Fields>;
  var_pop?: Maybe<Todo_List_Var_Pop_Fields>;
  var_samp?: Maybe<Todo_List_Var_Samp_Fields>;
  variance?: Maybe<Todo_List_Variance_Fields>;
};


/** aggregate fields of "todo_list" */
export type Todo_List_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Todo_List_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Todo_List_Avg_Fields = {
  __typename?: 'todo_list_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "todo_list". All fields are combined with a logical 'AND'. */
export type Todo_List_Bool_Exp = {
  _and?: InputMaybe<Array<Todo_List_Bool_Exp>>;
  _not?: InputMaybe<Todo_List_Bool_Exp>;
  _or?: InputMaybe<Array<Todo_List_Bool_Exp>>;
  assignee?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  task?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "todo_list" */
export enum Todo_List_Constraint {
  /** unique or primary key constraint */
  TodoListPkey = 'todo_list_pkey'
}

/** input type for incrementing numeric columns in table "todo_list" */
export type Todo_List_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "todo_list" */
export type Todo_List_Insert_Input = {
  assignee?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  task?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Todo_List_Max_Fields = {
  __typename?: 'todo_list_max_fields';
  assignee?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  task?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Todo_List_Min_Fields = {
  __typename?: 'todo_list_min_fields';
  assignee?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  task?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "todo_list" */
export type Todo_List_Mutation_Response = {
  __typename?: 'todo_list_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todo_List>;
};

/** on conflict condition type for table "todo_list" */
export type Todo_List_On_Conflict = {
  constraint: Todo_List_Constraint;
  update_columns?: Array<Todo_List_Update_Column>;
  where?: InputMaybe<Todo_List_Bool_Exp>;
};

/** Ordering options when selecting data from "todo_list". */
export type Todo_List_Order_By = {
  assignee?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  task?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: todo_list */
export type Todo_List_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "todo_list" */
export enum Todo_List_Select_Column {
  /** column name */
  Assignee = 'assignee',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Task = 'task',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "todo_list" */
export type Todo_List_Set_Input = {
  assignee?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  task?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Todo_List_Stddev_Fields = {
  __typename?: 'todo_list_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Todo_List_Stddev_Pop_Fields = {
  __typename?: 'todo_list_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Todo_List_Stddev_Samp_Fields = {
  __typename?: 'todo_list_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Todo_List_Sum_Fields = {
  __typename?: 'todo_list_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "todo_list" */
export enum Todo_List_Update_Column {
  /** column name */
  Assignee = 'assignee',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Task = 'task',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Todo_List_Var_Pop_Fields = {
  __typename?: 'todo_list_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Todo_List_Var_Samp_Fields = {
  __typename?: 'todo_list_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Todo_List_Variance_Fields = {
  __typename?: 'todo_list_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type InsertTodoListMutationVariables = Exact<{
  task: Scalars['String'];
  assignee: Scalars['String'];
}>;


export type InsertTodoListMutation = { __typename?: 'mutation_root', insert_todo_list_one?: { __typename?: 'todo_list', id: number, task: string, assignee?: string | null | undefined, created_at: any } | null | undefined };

export type GetTodoListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodoListQuery = { __typename?: 'query_root', todo_list: Array<{ __typename?: 'todo_list', assignee?: string | null | undefined, created_at: any, id: number, task: string, updated_at: any }> };


export const InsertTodoListDocument = gql`
    mutation InsertTodoList($task: String!, $assignee: String!) {
  insert_todo_list_one(object: {task: $task, assignee: $assignee}) {
    id
    task
    assignee
    created_at
  }
}
    `;
export type InsertTodoListMutationFn = Apollo.MutationFunction<InsertTodoListMutation, InsertTodoListMutationVariables>;

/**
 * __useInsertTodoListMutation__
 *
 * To run a mutation, you first call `useInsertTodoListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTodoListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTodoListMutation, { data, loading, error }] = useInsertTodoListMutation({
 *   variables: {
 *      task: // value for 'task'
 *      assignee: // value for 'assignee'
 *   },
 * });
 */
export function useInsertTodoListMutation(baseOptions?: Apollo.MutationHookOptions<InsertTodoListMutation, InsertTodoListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertTodoListMutation, InsertTodoListMutationVariables>(InsertTodoListDocument, options);
      }
export type InsertTodoListMutationHookResult = ReturnType<typeof useInsertTodoListMutation>;
export type InsertTodoListMutationResult = Apollo.MutationResult<InsertTodoListMutation>;
export type InsertTodoListMutationOptions = Apollo.BaseMutationOptions<InsertTodoListMutation, InsertTodoListMutationVariables>;
export const GetTodoListDocument = gql`
    query GetTodoList {
  todo_list {
    assignee
    created_at
    id
    task
    updated_at
  }
}
    `;

/**
 * __useGetTodoListQuery__
 *
 * To run a query within a React component, call `useGetTodoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodoListQuery(baseOptions?: Apollo.QueryHookOptions<GetTodoListQuery, GetTodoListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodoListQuery, GetTodoListQueryVariables>(GetTodoListDocument, options);
      }
export function useGetTodoListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoListQuery, GetTodoListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodoListQuery, GetTodoListQueryVariables>(GetTodoListDocument, options);
        }
export type GetTodoListQueryHookResult = ReturnType<typeof useGetTodoListQuery>;
export type GetTodoListLazyQueryHookResult = ReturnType<typeof useGetTodoListLazyQuery>;
export type GetTodoListQueryResult = Apollo.QueryResult<GetTodoListQuery, GetTodoListQueryVariables>;