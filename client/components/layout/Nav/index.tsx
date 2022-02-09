import Link from 'next/link'
import nav from './nav.module.css'

type Props = {
    open: boolean
}

function Nav({ open }: Props) {
    return (
        <nav className={nav.main}>
            <ul
                className={`${
                    open ? nav.showMenu : ''
                } container md:flex justify-between items-center`}
            >
                <li>
                    <Link href="/quem-somos">
                        <a>QUEM SOMOS</a>
                    </Link>
                </li>
                <li>
                    <Link href="/servicos-e-pecas">
                        <a>SERVIÇOS & PEÇAS</a>
                    </Link>
                </li>
                <li>
                    <Link href="/promocoes-e-cupons">
                        <a>PROMOÇÕES & CUPONS</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contato">
                        <a>CONTATO</a>
                    </Link>
                </li>
                <li>
                    <Link href="/agendar-visita">
                        <a>AGENDAR VISITA</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
