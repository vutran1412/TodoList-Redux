export default fetchAllTodos = () => (
        $.ajax({
            method: 'GET',
            url: '/api/todos'
        }
    )
)