import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6";
import { Code2 } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const logo = '/assets/logo.png'

    return (
        <footer className="relative border-t border-primary/20 bg-card/30 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex flex-col leading-none max-w-[160px]">
                            <a href="#hero">
                                <img src={logo} />
                            </a>

                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Desenvolvendo o futuro digital com tecnologia de ponta e inovação contínua.
                        </p>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Serviços</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Desenvolvimento Web
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Aplicativos Mobile
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Soluções Cloud
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Consultoria Tech
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Empresa</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#about" className="hover:text-primary transition-colors">
                                    Sobre Nós
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Carreiras
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-primary transition-colors">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Redes Sociais</h3>
                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all"
                            >
                                <FaGithub className="w-5 h-5 text-primary" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all"
                            >
                                <FaLinkedin className="w-5 h-5 text-primary" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all"
                            >
                                <FaTwitter className="w-5 h-5 text-primary" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all"
                            >
                                <FaInstagram className="w-5 h-5 text-primary" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-primary/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                        <p>
                            © {currentYear} FR Sistemas. Todos os direitos reservados.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-primary transition-colors">
                                Política de Privacidade
                            </a>
                            <a href="#" className="hover:text-primary transition-colors">
                                Termos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
