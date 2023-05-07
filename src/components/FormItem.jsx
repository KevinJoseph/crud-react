import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function FormItem({ elemento, onSave }) {
  
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

  useEffect(() => {
    if (elemento) {
      // Si hay un elemento, establece los valores iniciales del formulario
      setValue('title', elemento.title);
      setValue('description', elemento.description);
    }
  }, [elemento, setValue]);


  const onSubmit = (data) => {
    onSave(data);
    reset(); // Restablece el formulario después de enviarlo
  };


  return (
    <div>
      <h2>{elemento ? 'Actualizar elemento' : 'Crear elemento'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: true })}
          />
          {errors.title && <span>Título requerido</span>}
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            {...register('description', { required: true })}
          ></textarea>
          {errors.description && <span>Descripción requerida</span>}
        </div>
        <button type="submit">{elemento ? 'Actualizar' : 'Agregar'}</button>
      </form>
    </div>
  );
}

export default FormItem;
