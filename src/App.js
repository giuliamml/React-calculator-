import React, { useState } from "react";
import "./App.scss";
import Calculator from "./components/Calculator";

const App = () => {
	const [isVisible, setIsVisible] = useState(false);

	const clickHandler = () => setIsVisible(true);

	return (
		<div className="app">
			<div className="calculator_wrapper">
				{true ? (
					<Calculator />
				) : (
					<button className={"app_icon"} onClick={clickHandler}>
						<img src={require("./images/calc-icon.png")} alt="" />
					</button>
				)}
			</div>
		</div>
	);
};

export default App;
