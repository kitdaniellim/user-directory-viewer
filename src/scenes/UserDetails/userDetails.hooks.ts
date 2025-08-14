import { useEffect, useState } from "react";
import type { User } from "../Users/users.types";
import { fetchUser } from "../../services/usersApi";

export function useUserDetails(id?: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchUser(id)
      .then(setUser)
      .finally(() => setLoading(false));
  }, [id]);

  return { user, loading, setUser };
}
