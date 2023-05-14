import "./loading.css";
export default function Loading() {
	return (
		<div className="container">
			<div className="loader-container">
				<div className="spinner"></div>
			</div>

			<div className="main-content">
				<h1 className="loading-h1">Loading...</h1>
			</div>
		</div>
	);
}
