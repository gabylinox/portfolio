const $ = (id) => document.getElementById(id);

$("foto").src = dados.foto;
$("nome").textContent = dados.nome;
$("cargo").textContent = dados.cargo;
$("resumo").textContent = dados.resumo;
document.title = `${dados.nome} | Portfólio`;

$("contatos").innerHTML = dados.contatos
  .map(c => `<a href="${c.link}" target="_blank" rel="noopener">${c.rotulo}</a>`).join("");

const tags = (lista) => lista.map(t => `<li>${t}</li>`).join("");
$("hard").innerHTML = tags(dados.hardSkills);
$("soft").innerHTML = tags(dados.softSkills);
$("idiomas").innerHTML = tags(dados.idiomas);

$("projetos").innerHTML = dados.projetos.map(p => `
  <article class="projeto">
    <h3>${p.titulo}</h3>
    <p>${p.descricao}</p>
    <ul class="tags">${tags(p.tecnologias)}</ul>
    <p class="links">
      ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Ver online</a>` : ""}
      ${p.codigo ? `<a href="${p.codigo}" target="_blank" rel="noopener">Ver código</a>` : ""}
    </p>
  </article>`).join("");

const linha = (lista) => lista.map(i => `
  <li>
    <span class="periodo">${i.periodo}</span>
    <h3>${i.titulo}</h3>
    <p class="local">${i.local}</p>
    ${i.descricao ? `<p>${i.descricao}</p>` : ""}
  </li>`).join("");
$("experiencias").innerHTML = linha(dados.experiencias);
$("educacao").innerHTML = linha(dados.educacao);