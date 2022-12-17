export default function Footer(): JSX.Element {
	return (
		<footer className="mt-10 ">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.6689493517797!2d-51.4543606!3d-25.3824093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe18894bf8262e86e!2sRetifica%20Uni%C3%A3o%20Mec%C3%A2nica-Motor!5e0!3m2!1spt-BR!2sbr!4v1663286516809!5m2!1spt-BR!2sbr"
				width="100%"
				height="450"
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>

			<div className="relative">
				<address className="w-full px-4 bg-default/[0.9] text-white absolute bottom-0 left-0 not-italic">
					<ul className="list-none md:flex md:justify-between">
						<li className="inline-block py-4">
							<div className="flex flex-row items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#F2BE54"
									className="mr-4 flex-auto"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
									<circle cx="12" cy="9" r="2.5" />
								</svg>

								<span className="flex-auto">
									Av. XV de Novembro, 1233, Centro
									Guarapuava-PR - 80100-000
								</span>
							</div>
						</li>
						<li className="inline-block py-4">
							<div className="flex flex-row items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#F2BE54"
									className="mr-4 flex-auto"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
								</svg>

								<span className="flex-auto">
									Seg - Sexta | 08h às 18h - Sábado | 08h às
									12h
								</span>
							</div>
						</li>
						<li className="inline-block py-4 pr-0">
							<div className="flex flex-row items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#F2BE54"
									className="mr-4 flex-auto"
								>
									<path d="M0 0h24v24H0V0z" fill="none" />
									<path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
								</svg>

								<span className="flex-auto">
									+55 42 3333 9999 | +55 42 999 999 999
								</span>
							</div>
						</li>
					</ul>
					<p className="py-2 text-center border-t-2 border-primary">
						&copy;{new Date().getFullYear()} União Retífica e
						Mecânica{" "}
					</p>
				</address>
			</div>
		</footer>
	);
}
