using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using TodoApp.Models;

namespace TodoApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly TodoContext _context;
        readonly IHubContext<Hubs.TodoHub> hubContext;
        readonly Hubs.TodoHub todoHub;

        public TodoController(TodoContext context, IHubContext<Hubs.TodoHub> hubContext)
        {
            _context = context;
            this.hubContext = hubContext;
            this.todoHub = new Hubs.TodoHub();
        }

        // GET: api/Todo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todo>>> GetTodoItems()
        {
            return await _context.TodoItems.ToListAsync();
        }

        // GET: api/Todo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> GetTodo(int id)
        {
            var todo = await _context.TodoItems.FindAsync(id);

            if (todo == null)
            {
                return NotFound();
            }

            return todo;
        }

        // PUT: api/Todo/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodo(int id, Todo todo)
        {
            if (id != todo.Id)
            {
                return BadRequest();
            }

            _context.Entry(todo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                todoHub.SendData(hubContext);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Todo
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Todo>> PostTodo(Todo todo)
        {
            _context.TodoItems.Add(todo);
            await _context.SaveChangesAsync();

            todoHub.SendData(hubContext);

            return CreatedAtAction("GetTodo", new { id = todo.Id }, todo);
        }

        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Todo>> DeleteTodo(int id)
        {
            var todo = await _context.TodoItems.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.TodoItems.Remove(todo);
            await _context.SaveChangesAsync();

            todoHub.SendData(hubContext);

            return todo;
        }

        private bool TodoExists(int id)
        {
            return _context.TodoItems.Any(e => e.Id == id);
        }
    }
}
