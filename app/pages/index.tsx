import type { NextPage } from "next";
import Header from "@/components/base/header/home";
import WhatsWeDo from "@/components/home/whatwedo/whatwedo";
import Services from "@/components/home/services/services";
import Coupons from "@/components/home/coupons/coupons";
import Schedule from "@/components/home/schedule/schedule";
import Footer from "@/components/base/footer/footer";

const Home: NextPage = () => {
	return (
		<main>
			<Header />
			<WhatsWeDo />
			<Services />
			<Coupons />
			<Schedule />
			<Footer />
		</main>
	);
};

export default Home;
