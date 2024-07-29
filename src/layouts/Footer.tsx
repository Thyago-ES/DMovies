import { FaGithub, FaLinkedin } from "react-icons/fa";
export function Footer() {
	return (
		<footer className="flex flex-col items-center gap-4 py-5 mt-14 border-t border-white border-opacity-40">
			<p className="text-lg">Feito por &lt;/Thyago&gt;</p>
			<div className="flex gap-10">
				<a
					href="https://github.com/Thyago-ES/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub size={40} />
				</a>
				<a
					href="https://www.linkedin.com/in/thyago-rafael-287520278/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin size={40} />
				</a>
			</div>
			<p className="text-lg">&copy;Todos os direitos reservados.</p>
		</footer>
	);
}
