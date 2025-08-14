import { useEffect, useState } from "react";
import { fetchUsers } from "services/usersApi";
import type { User } from "./users.types";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetchUsers()
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, setUsers };
}