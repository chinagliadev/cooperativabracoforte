const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('btt').classList.toggle('on', window.scrollY > 400);
});

const ham = document.getElementById('ham');
const nl = document.getElementById('navLinks');

ham.addEventListener('click', () => {
    ham.classList.toggle('open'); nl.classList.toggle('open');
});

nl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open'); nl.classList.remove('open');
}));

const io = new IntersectionObserver(e => {
    e.forEach(x => { if (x.isIntersecting) { x.target.classList.add('on'); io.unobserve(x.target); } });
},
    { threshold: 0.1 }
);

document.querySelectorAll('.rev,.rev-l,.rev-r').forEach(el => io.observe(el));

function enviar() {
    const n = document.getElementById('fn').value.trim();
    const e = document.getElementById('fe').value.trim();
    const m = document.getElementById('fm').value.trim();
    if (!n || !e || !m) { alert('Por favor preencha nome, e-mail e mensagem.'); return; }
    document.getElementById('fok').classList.add('show');
    ['fn', 'fe', 'fm'].forEach(id => document.getElementById(id).value = '');
}

const projetos = {
    sjsp: {
        cat: 'Arquitetura e Construção',
        titulo: 'Sindicato dos Jornalistas do Estado de São Paulo — SJSP',
        local: 'São Paulo',
        img: './assets/img/portifolio/sindicatoJornalistas.png',
        imgFallback: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=860&q=80',
        descricao: 'A comunicação visual desempenha um papel fundamental na identidade de qualquer organização, especialmente em entidades representativas como o Sindicato dos Jornalistas do Estado de São Paulo. Recentemente, o sindicato passou por um processo de reforma em suas instalações e atualização de sua comunicação visual, com o objetivo de alinhar sua presença física e digital à sua missão de defender os profissionais da imprensa e promover a valorização da categoria.'
    },
    sinpro: {
        cat: 'Arquitetura e Construção',
        titulo: 'Sindicato dos Professores de Campinas e Região — SINPRO',
        local: 'Campinas',
        img: './assets/img/hero.png',
        imgFallback: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=860&q=80',
        descricao: 'O Sinpro, Sindicato dos Professores, investiu recentemente na reforma de suas instalações e na modernização de sua comunicação visual. O projeto buscou aliar funcionalidade, conforto e acessibilidade, garantindo um ambiente acolhedor para professores e associados. Além disso, a atualização visual reforça a identidade da instituição, transmitindo profissionalismo, transparência e valorização da categoria, fortalecendo a presença do sindicato na comunidade educacional.'
    },
    reurb: {
        cat: 'Regularização Fundiária',
        titulo: 'REURB Monte Verde — Associação Monte Verde/Progresso Pós Represa',
        local: 'Americana',
        img: './assets/img/portifolio/reurbMonteVerde.png',
        imgFallback: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=860&q=80',
        descricao: 'O projeto REURB no núcleo Monte Verde visa a regularização jurídica e urbanística, proporcionando dignidade e segurança patrimonial aos moradores. Através de um levantamento detalhado e adequação das infraestruturas essenciais, o projeto integra a comunidade à malha urbana oficial, garantindo o direito à moradia e promovendo a valorização imobiliária e o desenvolvimento social da região. Trata-se do maior ponto de conflito fundiário da Região Metropolitana de Campinas.'
    },
    stspmp: {
        cat: 'Regularização e Serviços',
        titulo: 'Sindicato dos Servidores de Paulínia — STSPMP',
        local: 'Americana',
        img: './assets/img/portifolio/paulinia.JPG',
        imgFallback: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=860&q=80',
        descricao: 'A entidade adquiriu dois lotes e realizou várias melhorias construtivas e ambientais, nas quais a Cooperativa Braço Forte fez as regularizações necessárias para a estabilidade legal do sindicato perante a Prefeitura Municipal. Entre elas estão a unificação de lotes, perícias edilícias e projetos de melhorias da sede.'
    },
    coophesp: {
        cat: 'Urbanismo',
        titulo: 'Cooperativa Pró Habitação do Estado de São Paulo — COOPHESP',
        local: 'Americana',
        img: './assets/img/portifolio/coophesp.jpeg',
        imgFallback: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=860&q=80',
        descricao: 'A COOPHESP adquiriu a antiga granja COAVI, localizada na tríplice divisa entre Americana, Cosmópolis e Paulínia. Foram realizados projetos ambientais, incluindo a remoção de indivíduos (Árvore) exóticos, além do desenvolvimento de projeto urbanístico de loteamento e ocupação.'
    },
    oficina: {
        cat: 'Formação e Tecnologia',
        titulo: 'As Oficinas de Arquitetura de Terra',
        local: 'Americana',
        img: './assets/img/portifolio/oficinaArquitetura.jpeg',
        imgFallback: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=860&q=80',
        descricao: 'A Cooperativa Braço Forte adquiriu a primeira máquina manual de bloco de terra compactada em 2019 e outras semi-hidráulicas nos anos seguintes. Com o apoio de professores e professoras da região, fundamos a Escola Livre Espaço Sérgio Ferro, na qual realizamos formação e aprimoramento de trabalhadores em arquitetura de terra e tecnologias de conhecimento popular de acordo com a Lei Federal nº 5.764/1971 - FATES.'
    }
};

function abrirModal(id) {
    const p = projetos[id];
    if (!p) return;
    const imgEl = document.getElementById('modalImg');
    imgEl.src = p.img;
    imgEl.onerror = () => { imgEl.src = p.imgFallback; };
    imgEl.alt = p.titulo;
    document.getElementById('modalCat').textContent = p.cat;
    document.getElementById('modalTitulo').textContent = p.titulo;
    document.getElementById('modalLocal').textContent = p.local;
    document.getElementById('modalDescricao').textContent = p.descricao;
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function fecharModalFora(e) {
    if (e.target === document.getElementById('modalOverlay')) fecharModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharModal(); });