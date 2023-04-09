import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const ProfilePropertyWithState = (props) => {
	const { property, picture, state, guest, reservation } = props;

	let APIURL = "http://localhost:8000";

	const handleAccept = () => {
		console.log("Accept");
	};

	const handleReject = () => {
		console.log("Reject");
	};

	return (
		<div className="card">
			<img
				src={`${APIURL}${picture}`}
				alt={property.name}
				className="card-img-top"
			/>
			<div className="card-body">
				<h5 className="card-title">{property.name}</h5>
				<p className="card-text">
					Guest: <a href={`/accounts/profile/${guest}`}> {guest}</a>{" "}
				</p>
				<p className="card-text">
					Start Date: {reservation.start_date}
				</p>
				<p className="card-text">End Date: {reservation.end_date}</p>
				<p className="card-text">State: pending</p>
				<div className="buttons d-flex justify-content-evenly">
					<button
						className="btn btn-success"
						onClick={() => handleAccept()}
					>
						Accept
					</button>
					<button
						className="btn btn-danger"
						onClick={() => handleReject()}
					>
						Reject
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfilePropertyWithState;
