import footer from './footer.module.css'
import GoogleMaps from '../../GoogleMaps'

type Props = {}
function Footer({}: Props) {
    return (
        <footer className="bg-gray-900">
            <div id="map" className={footer.map}>
                <GoogleMaps />
            </div>

            <div className="container">
                <div className={footer.info}>
                    <div className="box-info">
                        <h4 className="h4">Informações de contato</h4>

                        <ul>
                            <li className="flex justify-start items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    fill="#F2BE54"
                                    className="flex-initial w-6"
                                >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                                    <circle cx="12" cy="9" r="2.5" />
                                </svg>

                                <span>
                                    Av. XV de Novembro, 1233, Centro
                                    <br />
                                    Guarapuava-PR - 80100-000
                                </span>
                            </li>

                            <li className="flex justify-start items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="18px"
                                    viewBox="0 0 512 512"
                                    width="18px"
                                    fill="#F2BE54"
                                    className="flex-initial w-6"
                                >
                                    <path d="M448 64H64C28.65 64 0 92.65 0 128v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V128C512 92.65 483.3 64 448 64zM64 112h384c8.822 0 16 7.178 16 16v22.16l-166.8 138.1c-23.19 19.28-59.34 19.27-82.47 .0156L48 150.2V128C48 119.2 55.18 112 64 112zM448 400H64c-8.822 0-16-7.178-16-16V212.7l136.1 113.4C204.3 342.8 229.8 352 256 352s51.75-9.188 71.97-25.98L464 212.7V384C464 392.8 456.8 400 448 400z" />
                                </svg>

                                <span>
                                    contato@retificauniao.com.br <br /> pecas@retificauniao.com.br
                                </span>
                            </li>

                            <li className="flex justify-start items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    fill="#F2BE54"
                                    className="flex-initial w-6"
                                >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
                                </svg>

                                <span>
                                    +55 42 3333 9999 <br />
                                    +55 42 999 999 999
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="box-info">
                        <h4 className="h4">Horário de funcionamento</h4>

                        <ul>
                            <li className="flex justify-start items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    width="24px"
                                    fill="#F2BE54"
                                    className="flex-initial w-6"
                                >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                </svg>
                                <span>
                                    Seg - Sexta | 08h às 18h <br />
                                    Sábado | 08h às 12h
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex justify-between text-white p-2">
                    <p>&copy; {new Date().getFullYear()} - União Retífica e Mecânica</p>

                    <ul>
                        <li className="inline-block m-2">Facebook</li>
                        <li className="inline-block m-2">Instagram</li>
                        <li className="inline-block ml-2">Como Chegar</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
