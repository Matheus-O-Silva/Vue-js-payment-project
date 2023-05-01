export default function authGuard(to, from, next) {
    const token = localStorage.getItem('token');
    if (token) {
      next(); // permite acesso à rota
    } else {
      next('/'); // redireciona para a página de login
    }
  }