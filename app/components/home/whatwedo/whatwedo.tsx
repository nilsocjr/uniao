import Image from "next/image";

export default function WhatsWeDo(): JSX.Element {
	return (
		<section className="container py-10">
			<div className="relative table mx-auto text-center my-12">
				<h2 className="font-semibold text-4xl text-default">
					What We Do
				</h2>
				<h3 className="font-light text-xl text-default">
					We offer full service auto repair & maintenance
				</h3>
				<div className="title-separator"></div>
			</div>

			<div className="grid md:grid-cols-3">
				<div className="bg-primary p-6 text-center">
					<div className="flex flex-col h-full">
						<div className="m-auto">
							<h4 className="text-default font-semibold text-3xl mb-4">
								Preventative Maintance
							</h4>
							<p className="text-default font-normal text-base">
								The best way to minimize breakdowns is doing
								routine maintenance
							</p>
						</div>
					</div>
				</div>

				<div className="hidden md:contents">
					<Image
						alt="Mountains"
						src="/images/1-whatswedo.jpg"
						layout="responsive"
						width={390}
						height={390}
					/>
				</div>

				<div className="bg-slate-100 p-6 text-center">
					<div className="flex flex-col h-full">
						<div className="m-auto">
							<h4 className="text-default font-semibold text-3xl mb-4">
								Preventative Maintance
							</h4>
							<p className="text-default font-normal text-base">
								The best way to minimize breakdowns is doing
								routine maintenance
							</p>
						</div>
					</div>
				</div>

				<div className="hidden md:contents">
					<Image
						alt="Mountains"
						src="/images/2-whatswedo.jpg"
						layout="responsive"
						width={390}
						height={390}
					/>
				</div>

				<div className="bg-default p-6 text-center">
					<div className="flex flex-col h-full">
						<div className="m-auto">
							<h4 className="text-primary font-semibold text-3xl mb-4">
								Preventative Maintance
							</h4>
							<p className="text-white font-normal text-base">
								The best way to minimize breakdowns is doing
								routine maintenance
							</p>
						</div>
					</div>
				</div>

				<div className="hidden md:contents">
					<Image
						alt="Mountains"
						src="/images/3-whatswedo.jpg"
						layout="responsive"
						width={390}
						height={390}
					/>
				</div>
			</div>

			<div className="relative table mx-auto text-center my-12">
				<h2 className="font-semibold text-4xl text-default">
					100% Garantia de Resultado
				</h2>
				<h3 className="font-light text-xl text-default">
					Oferecemos serviço completo de reparo e manutenção de
					automóveis
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
							Fornecemos uma variedade de serviços de reparação e
							manutenção para todas as marcas e modelos de
							automóveis
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
							O principal princípio do nosso trabalho é oferecer
							uma ampla gama de serviços de reparação automóvel de
							qualidade e fazemos isso desde o nosso primeiro dia.
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
							Uniao oferece programas de suporte de qualidade para
							todos os veículos que permitem que eles permaneçam
							sempre totalmente funcionais.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
