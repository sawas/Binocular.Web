using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Binocular.Web.Startup))]
namespace Binocular.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
        }
    }
}
