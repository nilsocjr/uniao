import Link from "next/link";
import menu from "./menu.module.scss";

export default function Menu(): JSX.Element {
	return (
		<nav className="border-t border-t-primary my-3 py-3">
			<ul className={`flex justify-between items-center ${menu.list}`}>
				<li>
					<Link href="/">QUEM SOMOS</Link>
				</li>
				<li>
					<Link href="/">SERVICOS & PECAS</Link>
				</li>
				<li>
					<Link href="/">PROMOCOES E CUPONS</Link>
				</li>
				<li>
					<Link href="/">CONTATO</Link>
				</li>
				<li>
					<Link href="/">AGENDAR VISITA</Link>
				</li>
			</ul>
		</nav>
	);
}
