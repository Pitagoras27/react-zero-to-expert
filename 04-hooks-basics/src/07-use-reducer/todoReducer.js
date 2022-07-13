export const todoReducer = (state = initialState, action) => {
        switch (action.type) {
                case "[TODO] todo add":
                        return [...state, action.payload];

                case "[TODO] todo remove":
                        const removeItemTodo = state.filter(
                                (item) => item.id !== action.payload
                        );
                        return [...removeItemTodo];

                case "[TODO] todo toggle":
                        const updateTodo = state.map((todo) => {
                                if (todo.id === action.payload) {
                                        return {
                                                ...todo,
                                                done: !todo.done,
                                        };
                                }
                                return todo;
                        });
                        return [...updateTodo];

                default:
                        return state;
        }
};
