import React from "react";
import { useForm } from "react-hook-form";

import Input from "@commons/ui/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@commons/ui/Button";

const validationSchema = yup.object().shape({
  firstname: yup.string().required("El nombre es requerido"),
  lastname: yup.string().required("El apellido es requerido"),
  email: yup
    .string()
    .required("El correo electrónico es requerido")
    .email("El correo electrónico es inválido"),
  phone: yup.string().required("El teléfono es requerido"),
});

type ContactProps = {
  onSubmit: (data: any) => void;
};

const ContactUs = ({ onSubmit }: ContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    reValidateMode: "onSubmit",
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="w-full mt-10">
      <h1 className="flex items-center justify-center text-5xl font-extrabold font-caveat">
        Contáctanos
      </h1>
      <form className="w-full px-10 lg:px-0" onSubmit={handleSubmit(onSubmit)}>
        <div className="block w-full gap-3 lg:justify-center lg:flex">
          <div className="w-full py-3 my-4 lg:w-1/4">
            <label htmlFor="firstname" className="text-sm font-bold uppercase">
              nombre
            </label>
            <Input
              {...register("firstname")}
              id="firstname"
              error={errors.firstname?.message}
              className="px-5 py-3 rounded-lg"
              placeholder="Ej. Veracruz 56"
            />
          </div>
          <div className="w-full py-3 my-4 lg:w-1/4">
            <label htmlFor="lastname" className="text-sm font-bold uppercase">
              apellido
            </label>
            <Input
              {...register("lastname")}
              id="lastname"
              error={errors.lastname?.message}
              className="px-5 py-3 rounded-lg"
              placeholder="Ej. Veracruz 56"
            />
          </div>
        </div>
        <div className="block w-full gap-3 lg:justify-center lg:flex">
          <div className="w-full py-3 my-4 lg:w-1/4">
            <label htmlFor="email" className="text-sm font-bold uppercase">
              mail
            </label>
            <Input
              {...register("email")}
              id="email"
              error={errors.email?.message}
              className="px-5 py-3 rounded-lg"
              placeholder="Ej. Veracruz 56"
            />
          </div>
          <div className="w-full py-3 my-4 lg:w-1/4">
            <label htmlFor="phone" className="text-sm font-bold uppercase">
              téléfono
            </label>
            <Input
              {...register("phone")}
              id="phone"
              error={errors.phone?.message}
              className="px-5 py-3 rounded-lg"
              placeholder="Ej. Veracruz 56"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Button color="primary" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
