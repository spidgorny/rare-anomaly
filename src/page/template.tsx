import * as React from 'react';
import { PropsWithChildren } from 'react';
import Header from './components/header';
import Aside from './components/aside';

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

export default function Template(props: PropsWithChildren<{ title: string }>) {
	return (
		<div>
			<meta charSet="utf-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			{/* Tell the browser to be responsive to screen width */}
			<meta name="viewport" content="width=device-width, initial-scale=1" />
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
												<a href="/" className="text-muted">
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
										<option>Aug 19</option>
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
									<div className="card-body">{props.children}</div>
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
						All Rights Reserved by Adminmart. Designed and Developed by{' '}
						<a href="https://wrappixel.com">WrapPixel</a>.
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
