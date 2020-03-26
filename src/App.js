import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './home';
import tv from './Tv';
import movies from './Movies';
import sports from './Sports';
import news from './News';
import premium from './Premium';

export default class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<Router>
					<div className="container">
						<Navbar variant="light" expand="lg">
							<Navbar.Brand href="/">
								<img
									src="https://www.hotstar.com/assets/e4759bb703b71dae6bed5057c7105b32.svg"
									alt="hotstar"
								/>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mr-auto">
									<Nav.Link
										href="/tv"
										style={{
											fontFamily: '"Roboto","HelveticaNeue-Light",sans-serif'
										}}
									>
										TV
									</Nav.Link>
									<Nav.Link
										href="/movies"
										style={{
											fontFamily: '"Roboto","HelveticaNeue-Light",sans-serif'
										}}
									>
										Movies
									</Nav.Link>
									<Nav.Link
										href="/sports"
										style={{
											fontFamily: '"Roboto","HelveticaNeue-Light",sans-serif'
										}}
									>
										Sports
									</Nav.Link>
									<Nav.Link
										href="/news"
										style={{
											fontFamily: '"Roboto","HelveticaNeue-Light",sans-serif'
										}}
									>
										News
									</Nav.Link>
									<Nav.Link
										href="/premium"
										style={{
											fontFamily: '"Roboto","HelveticaNeue-Light",sans-serif'
										}}
									>
										Premium
									</Nav.Link>
									{/* <Nav.Link href="/train">Train Booking</Nav.Link>
                  <Nav.Link href="/hotel">Hotel Booking</Nav.Link> */}
								</Nav>
								<Form inline>
									<Form.Control
										type="text"
										placeholder="Search"
										className="mr-sm-2"
									/>
									<Button variant="outline-success">Search</Button>
								</Form>
							</Navbar.Collapse>
						</Navbar>
					</div>
					<div>
						<Switch>
							<Route exact path="/" component={home}></Route>
							<Route path="/tv" component={tv}></Route>
							<Route path="/movies" component={movies}></Route>
							<Route path="/sports" component={sports}></Route>
							<Route path="/news" component={news}></Route>
							<Route path="/premium" component={premium}></Route>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}