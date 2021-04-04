<template>
  <nav id="nav" class="navbar navbar-expand-lg">
    <div id="title">
      <a class="navbar-brand">SNKSTREAM</a>
    </div>
    <button
      id="collapse"
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown col-5">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Films
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Aventure</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Ajouter</a>
          </div>
        </li>
        <li class="nav-item dropdown col-5">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Séries
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Aventure</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Ajouter</a>
          </div>
        </li>
        <li class="nav-item col-5">
          <a class="nav-link" href="#">Au hasard</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Rechercher"
          aria-label="Search"
        />
        <button id="nav-btn" class="btn btn-outline my-2 my-sm-0" type="submit">
          Rechercher
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
#nav {
  background-color: #1a1a1d;
  color: #bfc0c0;
  font-size: 1.5rem;
}

.navbar-brand {
  margin-right: 0%;
}

#nav-btn {
  border-color: #6f2232;
  font-size: 1.2rem;
}

#nav-btn:hover,
li > a:hover {
  background-color: #6f2232;
  border-color: #6f2232;
  color: white;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 7px;
}

#title a {
  font-size: 2rem;
}

.dropdown-menu {
  left: inherit;
}

li {
  padding-right: 0;
  padding-left: 0;
}

.navbar {
  padding: 0.5rem 0.2rem;
}

.dropdown-menu {
  background-color: #e9ecef;
}

.dropdown-item:hover {
  background-color: #bfc0c0;
}

.dropdown-divider {
  border-top: 1px solid #bfc0c0;
}

.btn:focus {
  box-shadow: 0 0 0 0rem #bfc0c0;
}

.btn:active {
  transform: translateY(1px);
  transform: translateX(-1px);
}
</style>
