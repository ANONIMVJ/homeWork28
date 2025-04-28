import axios from "axios";
import { User, CreateUser, UpdateUser } from "../types/users";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(BASE_URL);
  return response.data;
};

export const getUserById = async (id: number): Promise<User> => {
  const response = await axios.get<User>(`${BASE_URL}/${id}`);
  return response.data;
};

export const createUser = async (newUser: CreateUser): Promise<User> => {
  const response = await axios.post<User>(BASE_URL, newUser);
  return response.data;
};

export const updateUser = async ({ id, data }: { id: number; data: UpdateUser }): Promise<User> => {
  const response = await axios.put<User>(`${BASE_URL}/${id}`, data);
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};
