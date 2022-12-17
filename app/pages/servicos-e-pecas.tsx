import Footer from "@/components/base/footer/footer";
import HeaderPage from "@/components/base/header/page";
import Schedule from "@/components/home/schedule/schedule";
import Services from "@/components/home/services/services";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const ServicesAndParts: NextPage = () => {
	return (
		<main>
			<HeaderPage />

			<section className="container pb-10">
				<div className="relative table mx-auto text-center my-12">
					<h1 className="font-semibold text-4xl text-default">
						Serviços & Peças
					</h1>
					<h6 className="font-light text-sm pt-3 ">
						<Link href="/">
							<i className="px-2 hover:text-secondary hover:text-decoration cursor-pointer transition-colors	duration-500 ease-in">
								Início
							</i>
						</Link>
						/
						<Link href="/servicos-e-pecas">
							<b className="px-2 hover:text-secondary hover:text-decoration cursor-pointer transition-colors	duration-500 ease-in">
								Serviços & Peças
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

				<div className="my-12 py-10">
					<div className="grid md:grid-cols-3 md:gap-3">
						<div className="relative mb-10 md:mb-0">
							<h2 className="font-semibold text-4xl text-default">
								Confira nossos servicos que
								<span className="text-primary">
									{" "}
									oferecemos
								</span>
							</h2>

							<div className="title-separator mb-"></div>

							<p className="text-default text-base my-4">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ipsa aliquam, nam atque ipsum
								labore amet accusamus pariatur at veniam omnis!
								Possimus, ipsa obcaecati deserunt explicabo esse
								dicta molestiae delectus molestias.
							</p>

							<button className="border border-primary py-3 px-4 hover:bg-primary hover:text-default ease-linear duration-300 transition-all">
								Reserve um horario
							</button>
						</div>
						<div className="md:px-10">
							<ul className="text-default text-base leading-9">
								<li className="marker-list">
									Lorem ipsum dolor sit amet-1
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-2
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-3
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-4
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-5
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-6
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-7
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-8
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-9
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-10
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-11
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-12
								</li>
							</ul>
						</div>
						<div className="md:px-10">
							<ul className="text-default text-base leading-9">
								<li className="marker-list">
									Lorem ipsum dolor sit amet-1
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-2
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-3
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-4
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-5
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-6
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-7
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-8
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-9
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-10
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-11
								</li>
								<li className="marker-list">
									Lorem ipsum dolor sit amet-12
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default ServicesAndParts;
