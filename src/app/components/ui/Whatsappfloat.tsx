interface WhatsAppFloatProps {
  /** Número com DDI, sem espaços ou símbolos. Ex: "5534999999999" */
  phoneNumber?: string;
  /** Mensagem pré-preenchida ao abrir o WhatsApp */
  message?: string;
  /** Posição do botão na tela */
  position?: "bottom-right" | "bottom-left";
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-9 h-9"
      fill="white"
      aria-hidden="true"
    >
      <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.637 4.64 1.845 6.653L2.667 29.333l6.88-1.8A13.29 13.29 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 24.267a11.01 11.01 0 01-5.6-1.533l-.4-.24-4.08 1.067 1.093-3.973-.267-.413A10.987 10.987 0 015.04 16c0-6.04 4.92-10.96 10.96-10.96S26.96 9.96 26.96 16 22.04 26.933 16.003 26.933zm6.014-8.213c-.333-.168-1.96-.968-2.267-1.08-.307-.107-.533-.16-.76.16s-.867 1.08-1.067 1.307c-.2.227-.387.253-.72.08-.333-.16-1.413-.52-2.693-1.653-.993-.893-1.667-1.987-1.853-2.32-.2-.333-.027-.507.147-.68.16-.147.333-.387.507-.587.16-.187.213-.333.32-.547.107-.213.054-.413-.027-.587-.08-.16-.76-1.84-1.04-2.52-.267-.653-.547-.56-.76-.573l-.64-.013c-.227 0-.587.08-.893.413-.307.32-1.173 1.147-1.173 2.8 0 1.653 1.2 3.253 1.373 3.48.16.227 2.373 3.627 5.747 5.08.8.347 1.427.547 1.92.707.8.253 1.533.213 2.107.133.64-.093 1.96-.8 2.24-1.573.267-.773.267-1.44.187-1.573-.08-.147-.307-.227-.64-.387z" />
    </svg>
  );
}

export default function WhatsAppFloat({
  phoneNumber = "34992318655",
  message = "Olá! Vim pelo site e gostaria de mais informações.",
  position = "bottom-right",
}: WhatsAppFloatProps) {
  const isRight = position === "bottom-right";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className={[
        "fixed bottom-6 z-50",
        isRight ? "right-6" : "left-6",
        "flex items-center justify-center",
        "w-16 h-16 rounded-full",
        "bg-[#25D366] hover:bg-[#20BD5C]",
        "shadow-[0_4px_20px_rgba(37,211,102,0.5)]",
        "focus:outline-none focus:ring-4 focus:ring-green-300",
      ].join(" ")}
    >
      <WhatsAppIcon />
    </a>
  );
}