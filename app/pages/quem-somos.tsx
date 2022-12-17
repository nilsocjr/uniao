import HeaderPage from "@/components/base/header/page";
import Footer from "@/components/base/footer/footer";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Schedule from "@/components/home/schedule/schedule";

const About: NextPage = () => {
	return (
		<main>
			<HeaderPage />
			<section className="container pb-10">
				<div className="relative table mx-auto text-center my-12">
					<h1 className="font-semibold text-4xl text-default">
						Quem Somos
					</h1>
					<h6 className="font-light text-sm pt-3 ">
						<Link href="/">
							<i className="px-2 hover:text-secondary hover:text-decoration cursor-pointer transition-colors	duration-500 ease-in">
								Início
							</i>
						</Link>
						/
						<Link href="/quem-somos">
							<b className="px-2 hover:text-secondary hover:text-decoration cursor-pointer transition-colors	duration-500 ease-in">
								Quem Somos
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
					<div className="flex justify-center">
						<div className="">
							<Image
								alt="Mountains"
								src="/images/about-1.jpg"
								layout="intrinsic"
								width={390}
								height={390}
								className="transition duration-500 ease-in grayscale hover:filter-none"
							/>
							<Image
								alt="Mountains"
								src="/images/about-2.jpg"
								layout="intrinsic"
								width={390}
								height={390}
								className="transition duration-500 ease-in grayscale hover:filter-none"
							/>
							<Image
								alt="Mountains"
								src="/images/about-3.jpg"
								layout="intrinsic"
								width={390}
								height={390}
								className="transition duration-500 ease-in grayscale hover:filter-none"
							/>
						</div>
						<div className=""></div>
					</div>

					<div className="relative table mx-auto text-center my-12">
						<h2 className="font-semibold text-4xl text-default">
							100% Garantia de Resultado
						</h2>
						<h3 className="font-light text-xl text-default">
							Oferecemos serviço completo de reparo e manutenção
							de automóveis
						</h3>
						<div className="title-separator"></div>
					</div>

					<div className="grid md:grid-cols-3 gap-3">
						<div className="flex align-top">
							<div className="flex-none pr-4">
								<Image
									alt="Mountains"
									src="/images/car-repair-tool.png"
									layout="intrinsic"
									width={48}
									height={48}
								/>
							</div>

							<div className="text-default">
								<h4 className=" font-semibold text-2xl mb-4">
									Todas as marcas de carros
								</h4>
								<p className="font-normal text-base">
									Fornecemos uma variedade de serviços de
									reparação e manutenção para todas as marcas
									e modelos de automóveis
								</p>
							</div>
						</div>
						<div className="flex align-top">
							<div className="flex-none pr-4">
								<Image
									alt="Mountains"
									src="/images/car-repair-cog.png"
									layout="intrinsic"
									width={48}
									height={48}
								/>
							</div>

							<div className="text-default">
								<h4 className=" font-semibold text-2xl mb-4">
									Serviços de variedades
								</h4>
								<p className="font-normal text-base">
									O principal princípio do nosso trabalho é
									oferecer uma ampla gama de serviços de
									reparação automóvel de qualidade e fazemos
									isso desde o nosso primeiro dia.
								</p>
							</div>
						</div>
						<div className="flex align-top">
							<div className="flex-none pr-4">
								<Image
									alt="Mountains"
									src="/images/car-repair-checklist.png"
									layout="intrinsic"
									width={48}
									height={48}
								/>
							</div>

							<div className="text-default">
								<h4 className=" font-semibold text-2xl mb-4">
									Suporte de qualidade
								</h4>
								<p className="font-normal text-base">
									Uniao oferece programas de suporte de
									qualidade para todos os veículos que
									permitem que eles permaneçam sempre
									totalmente funcionais.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default About;
