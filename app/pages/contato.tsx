import Footer from "@/components/base/footer/footer";
import HeaderPage from "@/components/base/header/page";
import type { NextPage } from "next";
import contact from "@/styles/contact.module.scss";
import Link from "next/link";

const Contact: NextPage = () => {
	return (
		<main>
			<HeaderPage />

			<div className="relative container table mx-auto text-center my-12">
				<h1 className="font-semibold text-4xl text-default">Contato</h1>
				<h6 className="font-light text-sm pt-3 ">
					<Link href="/">
						<i className="px-2 hover:text-secondary hover:text-decoration cursor-pointer transition-colors	duration-500 ease-in">
							Início
						</i>
					</Link>
					/
					<Link href="/contato">
						<b className="px-2 hover:text-secondary hover:text-decoration cursor-pointer transition-colors	duration-500 ease-in">
							Contato
						</b>
					</Link>
				</h6>
				<div className="title-separator"></div>
			</div>

			<form className={`container my-12 p-10 ${contact.form}`}>
				<label>
					<input
						placeholder="digite seu nome..."
						type="text"
						name="nome"
					/>
				</label>
				<label>
					<input
						placeholder="digite seu e-mail..."
						type="email"
						name="email"
					/>
				</label>
				<label>
					<input
						placeholder="digite um assunto..."
						type="text"
						name="assunto"
					/>
				</label>
				<label>
					<textarea
						placeholder="escreve uma mensagem..."
						name="mensagem"
					/>
				</label>

				<button type="submit">ENVIAR</button>
			</form>

			<Footer />
		</main>
	);
};

export default Contact;
