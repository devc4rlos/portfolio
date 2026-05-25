# Portfólio - Carlos Alexandre

[![PHP](https://img.shields.io/badge/PHP-8.4+-777BB4?style=flat-square&logo=php&logoColor=white)](https://php.net/)
[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)](.github/workflows/)

Portfólio de desenvolvedor moderno, performático e escalável. Construído utilizando arquitetura limpa e automatizada, servindo não apenas como vitrine de projetos, mas também como prova técnica de domínio sobre o ecossistema Laravel e React.

**Acesse em produção:** [carlosalexandre.com.br](https://carlosalexandre.com.br/)

---

## Tecnologias e Stack

**Back-end:**
- **PHP 8.4+**
- **Laravel 13+**
- **Filament PHP** (Painel Administrativo)
- MySQL, Redis (via Docker)

**Front-end:**
- **React 19** com **TypeScript**
- **Inertia.js** (Roteamento e integração SSR/SPA)
- **Tailwind CSS v4** + **shadcn/ui** (Design System e Componentes)
- Ícones via `react-icons` e `HugeIcons`
- PWA Ready (Web Manifest e Favicons multi-resolução)

**DevOps & Infra:**
- **Docker & Laravel Sail** (Ambiente local padronizado)
- **GitHub Actions** (CI/CD Automático)
- **Rsync + Scripts Shell** (Pipeline de deploy em VPS)
- **Mailpit** (Interceptação de e-mails em dev)

---

## Arquitetura e Padrões

O projeto foi estruturado seguindo boas práticas do mercado (SOLID, Clean Code):
- **Componentização Avançada:** Componentes UI reutilizáveis (`Container`, `TitleSection`, `Button`) construídos sob a especificação do `shadcn/ui`.
- **Custom Hooks:** Lógica de navegação e *highlight* ativo no scroll isolada no hook `useActiveSection`.
- **Database Seeding Centralizado:** Criação de usuários administrativos gerida unicamente pelo `AdminSeeder`, evitando duplicação de dados e facilitando o setup inicial.
- **Padronização de Código:** Código validado estaticamente por `Laravel Pint`, `ESLint` e `Prettier`.

---

## Pré-requisitos

Para executar o projeto localmente, você precisa apenas de:
- [Docker Desktop](https://www.docker.com/products/docker-desktop) instalado e rodando.
- [Composer](https://getcomposer.org/) (Opcional, apenas para setup inicial sem os containers).
- [Node.js](https://nodejs.org/en) (v24+ recomendado).

---

## Instalação e Configuração (Local)

1. **Clone o repositório:**
```bash
git clone https://github.com/devc4rlos/portfolio.git
cd portfolio
```

2. **Configure as variáveis de ambiente:**

```bash
cp .env.example .env
```

3. **Instale as dependências PHP usando Docker (caso não tenha o PHP 8.4 localmente):**

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php84-composer:latest \
    composer install --ignore-platform-reqs
```

4. **Suba a infraestrutura via Laravel Sail:**

```bash
./vendor/bin/sail up -d
```

5. **Gere a chave da aplicação e rode as migrações (com os seeders do admin):**

```bash
./vendor/bin/sail artisan key:generate
./vendor/bin/sail artisan migrate --seed
```

6. **Instale e builde os assets de front-end:**

```bash
npm install
npm run dev
```

A aplicação principal estará acessível em `http://localhost`.

---

## Acesso ao Painel Administrativo

O projeto utiliza o **Filament** como Admin Panel. A inicialização do administrador é controlada pelo `AdminSeeder`, que consome as diretivas do arquivo `config/admin.php`. Este arquivo, por sua vez, herda as configurações definidas pelas variáveis globais de ambiente contidas no arquivo `.env`.

### Valores Padrão (`.env.example`)

Se você utilizou o comando `cp .env.example .env` sem alterações, as credenciais de acesso padrão criadas pelo seeder serão:

| Campo      | Variável de Ambiente | Valor Padrão no Exemplo      |
|------------|----------------------|------------------------------|
| **Nome**   | `ADMIN_NAME`         | *Admin*                      |
| **E-mail** | `ADMIN_EMAIL`        | *dev@carlosalexandre.com.br* |
| **Senha**  | `ADMIN_PASSWORD`     | *123456789*                  |

* **URL de Acesso:** `http://localhost/admin`

> **Nota Técnica:** Caso necessite gerar um administrador adicional ou alternativo em tempo de execução, você poderá disparar o comando nativo do ecossistema:
> ```bash
> ./vendor/bin/sail artisan make:filament-user
> ```

---

## CI/CD e Deploy

O pipeline completo de deploy está configurado no GitHub Actions (`.github/workflows/deploy.yml`).

**Fluxo de Deploy:**

1. A cada `push` na branch principal (ou via *workflow_dispatch*), os testes e o lint são executados.
2. O Node realiza o *build* de produção dos assets do React (`npm run build`).
3. Os artefatos são sincronizados de forma segura via **Rsync** com o servidor VPS.
4. O script `scripts/deploy.sh` é acionado remotamente na VPS executando tarefas *Zero-Downtime*:
* Ativação de modo de manutenção (`artisan down --render="errors::503"`)
* Execução de migrações em modo forçado (`artisan migrate --force`)
* Limpeza e recriação de cache (`optimize:clear` e `optimize`)
* Retorno da aplicação (`artisan up`).

---

## Testes e Padronização

Para garantir a qualidade, o repositório usa as seguintes ferramentas:

**Linting de Back-end (Pint):**

```bash
./vendor/bin/sail pint
```

**Linting de Front-end (ESLint e Prettier):**

```bash
npm run lint
npm run format
```

**Testes (PHPUnit):**

```bash
./vendor/bin/sail test
```

---

## Licença e Direitos Autorais

Este projeto adota um modelo de licenciamento focado em proteger a identidade visual, permitindo ao mesmo tempo o estudo do código-fonte:

- **Código-fonte:** Disponibilizado sob a [MIT License](LICENSE). Desenvolvedores e recrutadores são livres para inspecionar, estudar e utilizar a arquitetura, configurações e componentes estruturais do código.
- **Conteúdo e Assets Pessoais:** Todos os textos, fotografias (avatares), currículo em anexo (`cv_carlos_alexandre.pdf`), logotipos e a marca "Carlos Alexandre" são de uso exclusivo e restrito. **Todos os direitos reservados.** Não é permitida a cópia, reprodução ou redistribuição destes materiais sem autorização prévia.

© 2026 [Carlos Alexandre](https://github.com/devc4rlos).
