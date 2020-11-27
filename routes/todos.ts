import {Router} from 'express';

import {createTodo, getTodos, updateTodo, deleteTodo} from '../controllers/todos'
const router = Router() //allow us to register middleware ; routes end-point for incomming requests

router.post('/', createTodo);
router.get('/',getTodos);
router.patch('/:id', updateTodo);  //to update a todo
router.delete('/:id',deleteTodo);

export default router;