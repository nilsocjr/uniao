import services from "./services.module.scss";

export default function Services(): JSX.Element {
	return (
		<section className={`my-12 py-10 ${services.bg}`}>
			<div className="container py-10">
				<div className="grid md:grid-cols-3 md:gap-3">
					<div className="relative mb-10 md:mb-0">
						<h2 className="font-semibold text-4xl text-white">
							Confira nossos servicos que
							<span className="text-primary"> oferecemos</span>
						</h2>

						<div className="title-separator mb-"></div>

						<p className="text-white text-base my-4">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ipsa aliquam, nam atque ipsum labore amet
							accusamus pariatur at veniam omnis! Possimus, ipsa
							obcaecati deserunt explicabo esse dicta molestiae
							delectus molestias.
						</p>

						<button className="border border-primary py-3 px-4 hover:bg-primary hover:text-default ease-linear duration-300 transition-all">
							Reserve um horario
						</button>
					</div>
					<div className="md:px-10">
						<ul className="text-white text-base leading-9">
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
						<ul className="text-white text-base leading-9">
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
	);
}
