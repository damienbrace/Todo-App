import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data, error } = await supabase.from("todos").select();

  // Logging the fetched data and any potential error
  console.log('Fetched Todos:', data);
  if (error) {
    console.error('Error Fetching Todos:', error);
    // Handle the error appropriately. For example, you might want to return a different response or throw an error.
  }

  return {
    todos: data ?? [],
  };
}
