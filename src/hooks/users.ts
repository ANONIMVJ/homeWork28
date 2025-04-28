import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsers, createUser, updateUser, deleteUser } from "../api/users";
import { User } from "../types";

export const useUsers = () => {
  return useQuery({ queryKey: ["users"], queryFn: getUsers });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: deleteUser,
      onMutate: async (deletedId: number) => {
        await queryClient.cancelQueries({ queryKey: ["users"] });
  
        const previousUsers = queryClient.getQueryData<User[]>(["users"]);
  
        queryClient.setQueryData<User[]>(["users"], (old) =>
          old?.filter((user) => user.id !== deletedId)
        );
  
        return { previousUsers };
      },
      onError: (_err, _deletedId, context) => {
        if (context?.previousUsers) {
          queryClient.setQueryData(["users"], context.previousUsers);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
    });
  };
  