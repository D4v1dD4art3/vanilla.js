import Header from '../template/Header';
import Home from '../pages/Home';
import Characters from '../pages/Character';
import Error404 from '../pages/Error404';
import Character from '../pages/Character';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': Home,
    '/:id': Characters,
    '/contact': 'Contact',
};

const router = async () => {
    // se coloca null || por si no encuentra el id, declare la variable null
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
};

export default router;