/* eslint-disable no-param-reassign */
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FormContainer, TextArea, Input, FieldContainer } from './styles';
// import Input from './Input';
import { sendContactMail } from '../../services/sendMail';
import theme from '../../styles/theme';

const FormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Nome deve ter no mínimo 3 caracteres' })
    .transform(name =>
      name
        .trim()
        .split(' ')
        .map(word => word[0].toLocaleUpperCase().concat(word.substring(1)))
        .join(' ')
    ),
  email: z.string().email({ message: 'E-mail inválido' }),
  message: z
    .string()
    .min(10, { message: 'Mensagem deve ter no mínimo 10 caracteres' })
});

type CreateFormData = z.infer<typeof FormSchema>;

export default function Form() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CreateFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  async function sendMessage(data: CreateFormData) {
    const { name, email, message } = data;

    try {
      setLoading(true);
      await sendContactMail(name, email, message);
      reset();

      toast('Mensagem enviada com sucesso!', {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      });
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit(sendMessage)}>
      <div className="first-line">
        <FieldContainer>
          <Input placeholder="Nome" {...register('name')} />
          {errors.name && <div>{errors.name.message}</div>}
        </FieldContainer>
        <FieldContainer>
          <Input placeholder="E-mail" {...register('email')} />
          {errors.email && <div>{errors.email.message}</div>}
        </FieldContainer>
      </div>
      <FieldContainer className="message">
        <TextArea placeholder="Mensagem" {...register('message')} />
        {errors.message && <div>{errors.message.message}</div>}
      </FieldContainer>

      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
    </FormContainer>
  );
}
