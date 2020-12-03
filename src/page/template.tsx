import { PropsWithChildren } from 'react';

export function Preloader() {
	return (
		<div className="preloader">
			<div className="lds-ripple">
				<div className="lds-pos" />
				<div className="lds-pos" />
			</div>
		</div>
	);
}

function Header() {
	return (
		<header className="topbar" data-navbarbg="skin6">
			<nav className="navbar top-navbar navbar-expand-md">
				<div className="navbar-header" data-logobg="skin6">
					{/* This is for the sidebar toggle which is visible on mobile only */}
					<a
						className="nav-toggler waves-effect waves-light d-block d-md-none"
						href="javascript:void(0)"
					>
						<i className="ti-menu ti-close" />
					</a>
					{/* ============================================================== */}
					{/* Logo */}
					{/* ============================================================== */}
					<div className="navbar-brand">
						{/* Logo icon */}
						<a href="index.html">
							<b className="logo-icon">
								{/* Dark Logo icon */}
								<img
									src="assets/images/logo-icon.png"
									alt="homepage"
									className="dark-logo"
								/>
								{/* Light Logo icon */}
								<img
									src="assets/images/logo-icon.png"
									alt="homepage"
									className="light-logo"
								/>
							</b>
							{/*End Logo icon */}
							{/* Logo text */}
							<span className="logo-text">
								{/* dark Logo text */}
								<img
									src="assets/images/logo-text.png"
									alt="homepage"
									className="dark-logo"
								/>
								{/* Light Logo text */}
								<img
									src="assets/images/logo-light-text.png"
									className="light-logo"
									alt="homepage"
								/>
							</span>
						</a>
					</div>
					{/* ============================================================== */}
					{/* End Logo */}
					{/* ============================================================== */}
					{/* ============================================================== */}
					{/* Toggle which is visible on mobile only */}
					{/* ============================================================== */}
					<a
						className="topbartoggler d-block d-md-none waves-effect waves-light"
						href="javascript:void(0)"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<i className="ti-more" />
					</a>
				</div>
				{/* ============================================================== */}
				{/* End Logo */}
				{/* ============================================================== */}
				<div
					className="navbar-collapse collapse"
					id="navbarSupportedContent"
				>
					{/* ============================================================== */}
					{/* toggle and nav items */}
					{/* ============================================================== */}
					<ul className="navbar-nav float-left mr-auto ml-3 pl-1">
						{/* Notification */}
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle pl-md-3 position-relative"
								href="javascript:void(0)"
								id="bell"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<span>
									<i
										data-feather="bell"
										className="svg-icon"
									/>
								</span>
								<span className="badge badge-primary notify-no rounded-circle">
									5
								</span>
							</a>
							<div className="dropdown-menu dropdown-menu-left mailbox animated bounceInDown">
								<ul className="list-style-none">
									<li>
										<div className="message-center notifications position-relative">
											{/* Message */}
											<a
												href="javascript:void(0)"
												className="message-item d-flex align-items-center border-bottom px-3 py-2"
											>
												<div className="btn btn-danger rounded-circle btn-circle">
													<i
														data-feather="airplay"
														className="text-white"
													/>
												</div>
												<div className="w-75 d-inline-block v-middle pl-2">
													<h6 className="message-title mb-0 mt-1">
														Luanch Admin
													</h6>
													<span className="font-12 text-nowrap d-block text-muted">
														Just see the my new
														admin!
													</span>
													<span className="font-12 text-nowrap d-block text-muted">
														9:30 AM
													</span>
												</div>
											</a>
											{/* Message */}
											<a
												href="javascript:void(0)"
												className="message-item d-flex align-items-center border-bottom px-3 py-2"
											>
												<span className="btn btn-success text-white rounded-circle btn-circle">
													<i
														data-feather="calendar"
														className="text-white"
													/>
												</span>
												<div className="w-75 d-inline-block v-middle pl-2">
													<h6 className="message-title mb-0 mt-1">
														Event today
													</h6>
													<span className="font-12 text-nowrap d-block text-muted text-truncate">
														Just a reminder that you
														have event
													</span>
													<span className="font-12 text-nowrap d-block text-muted">
														9:10 AM
													</span>
												</div>
											</a>
											{/* Message */}
											<a
												href="javascript:void(0)"
												className="message-item d-flex align-items-center border-bottom px-3 py-2"
											>
												<span className="btn btn-info rounded-circle btn-circle">
													<i
														data-feather="settings"
														className="text-white"
													/>
												</span>
												<div className="w-75 d-inline-block v-middle pl-2">
													<h6 className="message-title mb-0 mt-1">
														Settings
													</h6>
													<span className="font-12 text-nowrap d-block text-muted text-truncate">
														You can customize this
														template as you want
													</span>
													<span className="font-12 text-nowrap d-block text-muted">
														9:08 AM
													</span>
												</div>
											</a>
											{/* Message */}
											<a
												href="javascript:void(0)"
												className="message-item d-flex align-items-center border-bottom px-3 py-2"
											>
												<span className="btn btn-primary rounded-circle btn-circle">
													<i
														data-feather="box"
														className="text-white"
													/>
												</span>
												<div className="w-75 d-inline-block v-middle pl-2">
													<h6 className="message-title mb-0 mt-1">
														Pavan kumar
													</h6>
													<span className="font-12 text-nowrap d-block text-muted">
														Just see the my admin!
													</span>
													<span className="font-12 text-nowrap d-block text-muted">
														9:02 AM
													</span>
												</div>
											</a>
										</div>
									</li>
									<li>
										<a
											className="nav-link pt-3 text-center text-dark"
											href="javascript:void(0);"
										>
											<strong>
												Check all notifications
											</strong>
											<i className="fa fa-angle-right" />
										</a>
									</li>
								</ul>
							</div>
						</li>
						{/* End Notification */}
						{/* ============================================================== */}
						{/* create new */}
						{/* ============================================================== */}
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i
									data-feather="settings"
									className="svg-icon"
								/>
							</a>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdown"
							>
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>
						<li className="nav-item d-none d-md-block">
							<a className="nav-link" href="javascript:void(0)">
								<div className="customize-input">
									<select className="custom-select form-control bg-white custom-radius custom-shadow border-0">
										<option>EN</option>
									</select>
								</div>
							</a>
						</li>
					</ul>
					{/* ============================================================== */}
					{/* Right side toggle and nav items */}
					{/* ============================================================== */}
					<ul className="navbar-nav float-right">
						{/* ============================================================== */}
						{/* Search */}
						{/* ============================================================== */}
						<li className="nav-item d-none d-md-block">
							<a className="nav-link" href="javascript:void(0)">
								<form>
									<div className="customize-input">
										<input
											className="form-control custom-shadow custom-radius border-0 bg-white"
											type="search"
											placeholder="Search"
											aria-label="Search"
										/>
										<i
											className="form-control-icon"
											data-feather="search"
										/>
									</div>
								</form>
							</a>
						</li>
						{/* ============================================================== */}
						{/* User profile and search */}
						{/* ============================================================== */}
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="javascript:void(0)"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<img
									src="assets/images/users/profile-pic.jpg"
									alt="user"
									className="rounded-circle"
									width={40}
								/>
								<span className="ml-2 d-none d-lg-inline-block">
									<span>Hello,</span>{' '}
									<span className="text-dark">Jason Doe</span>{' '}
									<i
										data-feather="chevron-down"
										className="svg-icon"
									/>
								</span>
							</a>
							<div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
								<a
									className="dropdown-item"
									href="javascript:void(0)"
								>
									<i
										data-feather="user"
										className="svg-icon mr-2 ml-1"
									/>
									My Profile
								</a>
								<a
									className="dropdown-item"
									href="javascript:void(0)"
								>
									<i
										data-feather="credit-card"
										className="svg-icon mr-2 ml-1"
									/>
									My Balance
								</a>
								<a
									className="dropdown-item"
									href="javascript:void(0)"
								>
									<i
										data-feather="mail"
										className="svg-icon mr-2 ml-1"
									/>
									Inbox
								</a>
								<div className="dropdown-divider" />
								<a
									className="dropdown-item"
									href="javascript:void(0)"
								>
									<i
										data-feather="settings"
										className="svg-icon mr-2 ml-1"
									/>
									Account Setting
								</a>
								<div className="dropdown-divider" />
								<a
									className="dropdown-item"
									href="javascript:void(0)"
								>
									<i
										data-feather="power"
										className="svg-icon mr-2 ml-1"
									/>
									Logout
								</a>
								<div className="dropdown-divider" />
								<div className="pl-4 p-3">
									<a
										href="javascript:void(0)"
										className="btn btn-sm btn-info"
									>
										View Profile
									</a>
								</div>
							</div>
						</li>
						{/* ============================================================== */}
						{/* User profile and search */}
						{/* ============================================================== */}
					</ul>
				</div>
			</nav>
		</header>
	);
}

function Aside() {
	return (
		<aside className="left-sidebar" data-sidebarbg="skin6">
			{/* Sidebar scroll*/}
			<div className="scroll-sidebar" data-sidebarbg="skin6">
				{/* Sidebar navigation*/}
				<nav className="sidebar-nav">
					<ul id="sidebarnav">
						<li className="sidebar-item">
							<a
								className="sidebar-link sidebar-link"
								href="index.html"
								aria-expanded="false"
							>
								<i
									data-feather="home"
									className="feather-icon"
								/>
								<span className="hide-menu">Dashboard</span>
							</a>
						</li>
						<li className="list-divider" />
						<li className="nav-small-cap">
							<span className="hide-menu">Applications</span>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link"
								href="ticket-list.html"
								aria-expanded="false"
							>
								<i
									data-feather="tag"
									className="feather-icon"
								/>
								<span className="hide-menu">Ticket List</span>
							</a>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link sidebar-link"
								href="app-chat.html"
								aria-expanded="false"
							>
								<i
									data-feather="message-square"
									className="feather-icon"
								/>
								<span className="hide-menu">Chat</span>
							</a>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link sidebar-link"
								href="app-calendar.html"
								aria-expanded="false"
							>
								<i
									data-feather="calendar"
									className="feather-icon"
								/>
								<span className="hide-menu">Calendar</span>
							</a>
						</li>
						<li className="list-divider" />
						<li className="nav-small-cap">
							<span className="hide-menu">Components</span>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link has-arrow"
								href="javascript:void(0)"
								aria-expanded="false"
							>
								<i
									data-feather="file-text"
									className="feather-icon"
								/>
								<span className="hide-menu">Forms </span>
							</a>
							<ul
								aria-expanded="false"
								className="collapse  first-level base-level-line"
							>
								<li className="sidebar-item">
									<a
										href="form-inputs.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Form Inputs
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="form-input-grid.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Form Grids
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="form-checkbox-radio.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Checkboxes &amp; Radios
										</span>
									</a>
								</li>
							</ul>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link has-arrow"
								href="javascript:void(0)"
								aria-expanded="false"
							>
								<i
									data-feather="grid"
									className="feather-icon"
								/>
								<span className="hide-menu">Tables </span>
							</a>
							<ul
								aria-expanded="false"
								className="collapse  first-level base-level-line"
							>
								<li className="sidebar-item">
									<a
										href="table-basic.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Basic Table
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="table-dark-basic.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Dark Basic Table
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="table-sizing.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											Sizing Table
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="table-layout-coloured.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											Coloured Table Layout
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="table-datatable-basic.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											Basic Datatables Layout
										</span>
									</a>
								</li>
							</ul>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link has-arrow"
								href="javascript:void(0)"
								aria-expanded="false"
							>
								<i
									data-feather="bar-chart"
									className="feather-icon"
								/>
								<span className="hide-menu">Charts </span>
							</a>
							<ul
								aria-expanded="false"
								className="collapse  first-level base-level-line"
							>
								<li className="sidebar-item">
									<a
										href="chart-morris.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Morris Chart
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="chart-chart-js.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											ChartJs
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="chart-knob.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											Knob Chart
										</span>
									</a>
								</li>
							</ul>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link has-arrow"
								href="javascript:void(0)"
								aria-expanded="false"
							>
								<i
									data-feather="box"
									className="feather-icon"
								/>
								<span className="hide-menu">UI Elements </span>
							</a>
							<ul
								aria-expanded="false"
								className="collapse  first-level base-level-line"
							>
								<li className="sidebar-item">
									<a
										href="ui-buttons.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Buttons
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="ui-modals.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Modals{' '}
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="ui-tab.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Tabs{' '}
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="ui-tooltip-popover.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Tooltip &amp; Popover
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="ui-notification.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											Notification
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="ui-progressbar.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											Progressbar
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="ui-typography.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											Typography
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="ui-bootstrap.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											Bootstrap UI
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="ui-breadcrumb.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											Breadcrumb
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="ui-list-media.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											List Media
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="ui-grid.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Grid{' '}
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="ui-carousel.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											Carousel
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="ui-scrollspy.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											Scrollspy
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="ui-toasts.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Toasts
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="ui-spinner.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Spinner{' '}
										</span>
									</a>
								</li>
							</ul>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link sidebar-link"
								href="ui-cards.html"
								aria-expanded="false"
							>
								<i
									data-feather="sidebar"
									className="feather-icon"
								/>
								<span className="hide-menu">Cards</span>
							</a>
						</li>
						<li className="list-divider" />
						<li className="nav-small-cap">
							<span className="hide-menu">Authentication</span>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link sidebar-link"
								href="authentication-login1.html"
								aria-expanded="false"
							>
								<i
									data-feather="lock"
									className="feather-icon"
								/>
								<span className="hide-menu">Login</span>
							</a>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link sidebar-link"
								href="authentication-register1.html"
								aria-expanded="false"
							>
								<i
									data-feather="lock"
									className="feather-icon"
								/>
								<span className="hide-menu">Register</span>
							</a>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link has-arrow"
								href="javascript:void(0)"
								aria-expanded="false"
							>
								<i
									data-feather="feather"
									className="feather-icon"
								/>
								<span className="hide-menu">Icons</span>
							</a>
							<ul
								aria-expanded="false"
								className="collapse first-level base-level-line"
							>
								<li className="sidebar-item">
									<a
										href="icon-fontawesome.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Fontawesome Icons{' '}
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="icon-simple-lineicon.html"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											Simple Line Icons{' '}
										</span>
									</a>
								</li>
							</ul>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link has-arrow"
								href="javascript:void(0)"
								aria-expanded="false"
							>
								<i
									data-feather="crosshair"
									className="feather-icon"
								/>
								<span className="hide-menu">
									Multi level dd
								</span>
							</a>
							<ul
								aria-expanded="false"
								className="collapse first-level base-level-line"
							>
								<li className="sidebar-item">
									<a
										href="javascript:void(0)"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											item 1.1
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										href="javascript:void(0)"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											item 1.2
										</span>
									</a>
								</li>
								<li className="sidebar-item">
									<a
										className="has-arrow sidebar-link"
										href="javascript:void(0)"
										aria-expanded="false"
									>
										<span className="hide-menu">
											Menu 1.3
										</span>
									</a>
									<ul
										aria-expanded="false"
										className="collapse second-level base-level-line"
									>
										<li className="sidebar-item">
											<a
												href="javascript:void(0)"
												className="sidebar-link"
											>
												<span className="hide-menu">
													{' '}
													item 1.3.1
												</span>
											</a>
										</li>
										<li className="sidebar-item">
											<a
												href="javascript:void(0)"
												className="sidebar-link"
											>
												<span className="hide-menu">
													{' '}
													item 1.3.2
												</span>
											</a>
										</li>
										<li className="sidebar-item">
											<a
												href="javascript:void(0)"
												className="sidebar-link"
											>
												<span className="hide-menu">
													{' '}
													item 1.3.3
												</span>
											</a>
										</li>
										<li className="sidebar-item">
											<a
												href="javascript:void(0)"
												className="sidebar-link"
											>
												<span className="hide-menu">
													{' '}
													item 1.3.4
												</span>
											</a>
										</li>
									</ul>
								</li>
								<li className="sidebar-item">
									<a
										href="javascript:void(0)"
										className="sidebar-link"
									>
										<span className="hide-menu">
											{' '}
											item 1.4
										</span>
									</a>
								</li>
							</ul>
						</li>
						<li className="list-divider" />
						<li className="nav-small-cap">
							<span className="hide-menu">Extra</span>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link sidebar-link"
								href="docs/docs.html"
								aria-expanded="false"
							>
								<i
									data-feather="edit-3"
									className="feather-icon"
								/>
								<span className="hide-menu">Documentation</span>
							</a>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link sidebar-link"
								href="authentication-login1.html"
								aria-expanded="false"
							>
								<i
									data-feather="log-out"
									className="feather-icon"
								/>
								<span className="hide-menu">Logout</span>
							</a>
						</li>
					</ul>
				</nav>
				{/* End Sidebar navigation */}
			</div>
			{/* End Sidebar scroll*/}
		</aside>
	);
}

export default function Template(props: PropsWithChildren<{ title: string }>) {
	return (
		<div>
			<meta charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			{/* Tell the browser to be responsive to screen width */}
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="description" content="" />
			<meta name="author" content="" />
			{/* Favicon icon */}
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="assets/images/favicon.png"
			/>
			<title>
				Adminmart Template - The Ultimate Multipurpose admin template
			</title>
			{/* This page css */}
			{/* Custom CSS */}
			<link href="dist/css/style.min.css" rel="stylesheet" />
			{/* HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries */}
			{/* WARNING: Respond.js doesn't work if you view the page via file:// */}
			{/*[if lt IE 9]>


<![endif]*/}
			{/* ============================================================== */}
			{/* Preloader - style you can find in spinners.css */}
			{/* ============================================================== */}
			{/* ============================================================== */}
			{/* Main wrapper - style you can find in pages.scss */}
			{/* ============================================================== */}
			<div
				id="main-wrapper"
				data-theme="light"
				data-layout="vertical"
				data-navbarbg="skin6"
				data-sidebartype="full"
				data-sidebar-position="fixed"
				data-header-position="fixed"
				data-boxed-layout="full"
			>
				{/* ============================================================== */}
				{/* Topbar header - style you can find in pages.scss */}
				{/* ============================================================== */}
				<Header />
				{/* ============================================================== */}
				{/* End Topbar header */}
				{/* ============================================================== */}
				{/* ============================================================== */}
				{/* Left Sidebar - style you can find in sidebar.scss  */}
				{/* ============================================================== */}
				<Aside />
				{/* ============================================================== */}
				{/* End Left Sidebar - style you can find in sidebar.scss  */}
				{/* ============================================================== */}
				{/* ============================================================== */}
				{/* Page wrapper  */}
				{/* ============================================================== */}
				<div
					className="page-wrapper"
					style={{
						display: 'block'
					}}
				>
					{/* ============================================================== */}
					{/* Bread crumb and right sidebar toggle */}
					{/* ============================================================== */}
					<div className="page-breadcrumb">
						<div className="row">
							<div className="col-7 align-self-center">
								<h4 className="page-title text-truncate text-dark font-weight-medium mb-1 text-left">
									{props.title}
								</h4>
								<div className="d-flex align-items-center">
									<nav aria-label="breadcrumb">
										<ol className="breadcrumb m-0 p-0">
											<li className="breadcrumb-item">
												<a
													href="/"
													className="text-muted"
												>
													Apps
												</a>
											</li>
											<li
												className="breadcrumb-item text-muted active"
												aria-current="page"
											>
												{props.title}
											</li>
										</ol>
									</nav>
								</div>
							</div>
							<div className="col-5 align-self-center">
								<div className="customize-input float-right">
									<select className="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">
										<option selected>Aug 19</option>
										<option value={1}>July 19</option>
										<option value={2}>Jun 19</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					{/* ============================================================== */}
					{/* End Bread crumb and right sidebar toggle */}
					{/* ============================================================== */}
					{/* ============================================================== */}
					{/* Container fluid  */}
					{/* ============================================================== */}
					<div className="container-fluid">
						{/* ============================================================== */}
						{/* Start Page Content */}
						{/* ============================================================== */}
						{/* basic table */}
						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="card-body">
										{props.children}
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* ============================================================== */}
					{/* End Container fluid  */}
					{/* ============================================================== */}
					{/* ============================================================== */}
					{/* footer */}
					{/* ============================================================== */}
					<footer className="footer text-center text-muted">
						All Rights Reserved by Adminmart. Designed and Developed
						by <a href="https://wrappixel.com">WrapPixel</a>.
					</footer>
					{/* ============================================================== */}
					{/* End footer */}
					{/* ============================================================== */}
				</div>
				{/* ============================================================== */}
				{/* End Page wrapper  */}
				{/* ============================================================== */}
			</div>
			{/* ============================================================== */}
			{/* End Wrapper */}
			{/* ============================================================== */}
			{/* End Wrapper */}
			{/* ============================================================== */}
			{/* All Jquery */}
			{/* ============================================================== */}
			{/* apps */}
			{/* apps */}
			{/*Custom JavaScript */}
		</div>
	);
}
