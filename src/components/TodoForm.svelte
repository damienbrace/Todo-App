<script>
    let todos = [];
    let newTodo = '';
    let inputRef;
   
    


    function addTodo(){
        if (newTodo.trim() !== ''){
            todos = [...todos, newTodo.trim()];
            newTodo = '';
            inputRef.focus();
        }
    }

    function removeTodo(index){
        todos.splice(index, 1); // Remove 1 item at position `index`
        todos = todos.slice(); // Trigger Svelte's reactivity
    }
    
</script>


<div class="flex flex-col justify-between min-h-[400px] min-w-[400px] border-2 p-6 bg-white rounded">

    <div>
        <h1 class="text-2xl font-bold pb-4">My Todos</h1>
    
        <form on:submit|preventDefault={addTodo} class="flex mb-1">
            <input  bind:value={newTodo} bind:this={inputRef} placeholder="Add todo" class="place-holder flex-grow border-2 rounded mr-1 pl-2" type="text">
            <button on:click={addTodo} class="flex items-center justify-center bg-purple-700 p-2 w-10 h-10 text-4xl rounded text-white font-bold">+</button>
        </form>

    <div class="pt-2">
        {#if todos.length > 0}
        <ul>
            {#each todos as todo, index}
            <div class="flex mb-2">
                <li class="flex-grow bg-gray-200 pl-2  text-xl py-2">{todo}</li>
                <button on:click={removeTodo} class="bg-red-600 text-white text-lg w-12 rounded ">X</button>
            </div>
            
            {/each}
        </ul>
        {/if}
    </div>
    </div>
    

    <div class="flex justify-between mt-2">
        <span class="text-lg">You have {todos.length} pending tasks</span>
        <button on:click={() => {todos = []}} class="bg-purple-700 text-lg text-white px-2 py-1 rounded">Clear All</button>
    </div>
    
    

</div>

