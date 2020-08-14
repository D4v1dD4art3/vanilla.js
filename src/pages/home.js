const home = () => {
    const view = `
    <div class="characters">
        <article class="charaters-item">
            <a href="#/1/">
                <img src="image" alt="name">
            </a>
        </article>
    </div>
    `;
    return view;
};

// con este codigo podemos exportart este mismo template a otro archivos JS
export default home; 
