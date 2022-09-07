import type { NextPage } from "next";
import Header from "@/components/base/header/header";

const Home: NextPage = () => {
	return (
		<main>
			<Header />
			<div>Hello world</div>
		</main>
	);
};

export default Home;
