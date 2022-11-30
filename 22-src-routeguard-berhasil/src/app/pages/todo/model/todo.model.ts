export interface Todo{
    id?:string | undefined,
    name:string,
    isCompleted:boolean
    createdAt: Date
  }

  export const TODO = 'todo'

  export enum TodoField{
    ID='id',
    NAME='name',
    IS_COMPLETED='isCompleted'
  }