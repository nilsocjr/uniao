import Footer from "@/components/base/footer/footer";
import HeaderPage from "@/components/base/header/page";
import Coupons from "@/components/home/coupons/coupons";
import Schedule from "@/components/home/schedule/schedule";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const SaleAndCupons: NextPage = () => {
	return (
		<main>
			<HeaderPage />
			<section className="container pb-10">
				<div className="relative table mx-auto text-center my-12">
					<h1 className="font-semibold text-4xl text-default">
						Promoções & Cupons
					</h1>
					<h6 className="font-light text-sm pt-3 ">
						<Link href="/">
							<i className="px-2 hover:text-secondary hover:text-decoration cursor-pointer transition-colors	duration-500 ease-in">
								Início
							</i>
						</Link>
						/
						<Link href="/promocoes-e-cupons">
							<b className="px-2 hover:text-secondary hover:text-decoration cursor-pointer transition-colors	duration-500 ease-in">
								Promoções & Cupons
							</b>
						</Link>
					</h6>
					<div className="title-separator"></div>
				</div>

				<div className="pb-10 px-10">
					<p className="text-default font-normal text-base mb-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Unde quae nihil qui eius magni voluptate repellendus at
						pariatur, minima, eaque itaque reprehenderit et minus
						vel eum corporis quas consequuntur? Soluta. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Unde quae
						nihil qui eius magni voluptate repellendus at pariatur,
						minima, eaque itaque reprehenderit et minus vel eum
						corporis quas consequuntur? Soluta.
					</p>
					<p className="text-default font-normal text-base mb-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Unde quae nihil qui eius magni voluptate repellendus at
						pariatur, minima, eaque itaque reprehenderit et minus
						vel eum corporis quas consequuntur? Soluta.
					</p>
				</div>

				<Coupons />
			</section>
			<Footer />
		</main>
	);
};

export default SaleAndCupons;
