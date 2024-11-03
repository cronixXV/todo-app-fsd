import { httpClient } from "../http-client";
import { QueryParams, Todo } from "./model";

const SLUG = "todos";

export const getTodo = (params: QueryParams) =>
  httpClient.get(SLUG, { params }).then((response) => response.data);

export const getTodoById = (id: string) =>
  httpClient.get(`${SLUG}/${id}`).then((response) => response.data);

export const updateTodo = (todo: Todo) =>
  httpClient.put(`${SLUG}/${todo.id}`, todo).then((response) => response.data);
