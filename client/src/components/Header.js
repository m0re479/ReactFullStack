import React from "react";
import Logo from "./logo.png"

//const pages = [
//    {title: 'New'},
//    {title: 'New page'}
//]
class Header extends React.Component {
    render() {
        return (
        <nav class="navbar navbar-nav navbar-expand-sm bg-dark navbar-dark fixed-top">

            <div class="container-fluid">
            <div class="container-fluid text-nowrap">
                            <a class="navbar-brand" href="#">
                              <img src={Logo} alt="" width="50" height="44" class="d-inline-block align-text-top"/>
                              </a>
                          </div>
               <div class="container-fluid text-nowrap">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">New page</a>
                    </li>
                    <li class="nav-item">
                        <div class="container">
                            <form class="d-flex" role="search">
                                  <input class="form-control me-2 text-white" type="search" placeholder="Поиск" aria-label="Поиск" />
                                  <button class="btn btn-outline-success" type="submit">Поиск</button>
                                </form>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

        )
    }
}
export default Header;