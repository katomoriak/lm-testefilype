import Link from "next/link";
import Image from "next/image";

const udhaiushdia = "flex"

export default function Header() {
    return(
        <>
            <div className={`bg-bluenew`}>
                <div className={`container mx-auto`}> {/* div do container e centralização */}
                    <div className={`flex font-sans justify-between items-center gap-2 h-28`}> {/* div principal */}
                        <div>
                            <ul className={`${udhaiushdia} gap-4 uppercase`}>
                                <li className="">
                                    <Link href="#">
                                        Home
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="#">
                                        Sobre nós
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="#">
                                        Serviços
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="#">
                                        Contato
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Image
                            className="dark:invert"
                            src="/next.svg"
                            alt="Vercel logomark"
                            width={200}
                            height={200}
                        />
                        <Link href="#" className={`bg-green-900 px-10 py-2.5 rounded-lg`}>
                            Solicite Orçamento
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};