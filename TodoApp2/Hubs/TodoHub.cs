using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace TodoApp.Hubs
{
    public class TodoHub : Hub
    {
        public void SendData(IHubContext<TodoHub> context)
        {
            context.Clients.All.SendAsync("GetData");
        }
    }
}
