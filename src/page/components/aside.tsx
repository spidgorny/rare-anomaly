import * as React from 'react';
import ListLogs from '../../component/list-logs';

export default function Aside() {
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
								href="/"
								aria-expanded="false"
							>
								<i data-feather="home" className="feather-icon" />
								<span className="hide-menu">Dashboard</span>
							</a>
						</li>
						<li className="list-divider" />
						<li className="nav-small-cap">
							<span className="hide-menu">Log files</span>
						</li>
						<ListLogs />
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
								<i data-feather="edit-3" className="feather-icon" />
								<span className="hide-menu">Documentation</span>
							</a>
						</li>
						<li className="sidebar-item">
							<a
								className="sidebar-link sidebar-link"
								href="authentication-login1.html"
								aria-expanded="false"
							>
								<i data-feather="log-out" className="feather-icon" />
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
