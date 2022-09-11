import coupons from "./coupons.module.scss";

export default function Coupons() {
	return (
		<section className="my-12 py-10">
			<div className="container py-10">
				<div className="grid md:grid-cols-2 gap-3">
					<div className={coupons.bg}>
						<div className={coupons.content}>
							<div className={coupons.descount}>
								<small className="text-sm text-default  block">
									Cupons de
								</small>
								<span className="font-black text-5xl my-4 block">
									R$ 25,00
								</span>
								<small className="text-sm text-default  block">
									p/ reparos acima de R$ 250,00
								</small>
							</div>
							<div className={coupons.coupon}>
								<span>VINOSITE</span>
							</div>
						</div>
					</div>

					<div className="text-default">
						<h2 className="font-semibold text-4xl">
							Qualidade no Atendimento e
							<span className="text-primary"> Satisfação </span>do
							Cliente!
						</h2>

						<div className="title-separator mb-"></div>

						<p className="text-base my-4">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Ipsa aliquam, nam atque ipsum labore amet
							accusamus pariatur at veniam omnis! Possimus, ipsa
							obcaecati deserunt explicabo esse dicta molestiae
							delectus molestias.
						</p>

						<ul className="text-base font-semibold leading-9">
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
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
