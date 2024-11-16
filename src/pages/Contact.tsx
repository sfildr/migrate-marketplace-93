import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso!");
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-8">Entre em Contato</h1>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Nome
            </label>
            <Input id="name" required placeholder="Seu nome" />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <Input id="email" type="email" required placeholder="seu@email.com" />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Assunto
            </label>
            <Input id="subject" required placeholder="Assunto da mensagem" />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Mensagem
            </label>
            <Textarea
              id="message"
              required
              placeholder="Sua mensagem"
              className="min-h-[150px]"
            />
          </div>
          
          <Button type="submit" className="w-full">
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;