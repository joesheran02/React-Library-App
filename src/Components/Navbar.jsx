import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Library-React-App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="/">Add Book</a>
        <a class="nav-link" href="/Search">Search Book</a>
        <a class="nav-link" href="/Delete">Delete Book</a>
        <a class="nav-link" href="/View">View All Book</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
