import React, {Component} from 'react'
import logo from '../images/logo-png.png'
class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNav: false
        }
    }
    btnClicked = () => {
        this.setState({showNav: true});
    }

    closeNavBar = () => {
        this.setState({showNav: false});
    }
    render() {
        return (
            <nav id="main-navbar" class="navbar navbar-expand-lg header-body fixed-top">
                {
                this.state.showNav == true ? <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                    <div class="position-sticky">
                        <div class="list-group list-group-flush mx-3 mt-4">
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                                <i class="fas fa-tachometer-alt fa-fw me-3"></i>
                                <span>Main dashboard</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                <i class="fas fa-chart-area fa-fw me-3"></i>
                                <span>Webiste traffic</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                <i class="fas fa-lock fa-fw me-3"></i>
                                <span>Password</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                <i class="fas fa-chart-line fa-fw me-3"></i>
                                <span>Analytics</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                <i class="fas fa-chart-pie fa-fw me-3"></i>
                                <span>SEO</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                <i class="fas fa-chart-bar fa-fw me-3"></i>
                                <span>Orders</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                <i class="fas fa-globe fa-fw me-3"></i>
                                <span>International</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                <i class="fas fa-building fa-fw me-3"></i>
                                <span>Partners</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                <i class="fas fa-calendar fa-fw me-3"></i>
                                <span>Calendar</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                <i class="fas fa-users fa-fw me-3"></i>
                                <span>Users</span>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                <i class="fas fa-money-bill fa-fw me-3"></i>
                                <span>Sales</span>
                            </a>
                            <p onClick={
                                this.closeNavBar
                            }>
                                Close
                            </p>
                        </div>
                    </div>
                </nav> : null
            }
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <a class="navbar-brand mt-2 mt-lg-0" href="#">
                            <img src={logo}
                                height="50"
                                alt="OXYGEN Logo"
                                loading="lazy"
                                onClick={
                                    this.btnClicked
                                }/>
                        </a>
                        <div class="input-group mb-3 navbar-brand mt-2 mt-lg-0"
                            style={
                                {width: "60%"}
                        }>
                            <span class="input-group-text" id="basic-addon1">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </span>
                            <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="nav-item dropdown me-3 me-lg-1">
                            <a class="nav-link dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-comments fa-lg"></i>

                                <span class="badge rounded-pill badge-notification bg-danger">6</span>
                            </a>
                        </div>

                        <div class="dropdown">
                            <a class="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-bell text-light"></i>
                                <span class="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                        </div>
                        <div class="dropdown">
                            <a class="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" height="25" alt="Black and White Portrait of a Man" loading="lazy"/>
                            </a>
                            <strong class="d-none d-sm-block ms-1">John</strong>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
export default header;
