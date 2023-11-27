<script>
	import TodoForm from "../components/TodoForm.svelte";
    export let data;

</script>

<div>
    <ul>
        {#each data.todos as todo}
            <li>{todo.name}</li>
        {/each}
    </ul>
    <TodoForm />
</div>
