// Styles
import styles from '../styles/create.module.css'

// Components
import Layout from '@/components/Layout'
import Input from '@/components/Input'

import { createSchema } from '@/lib/validation'
import { uploadImage } from '@/lib/services/image'
import { createProject } from '@/lib/services/project'

import { useNavigate } from 'react-router-dom'
import useUserSession from '@/hooks/useUserSession'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import ButtonLoader from '@/components/Loaders/ButtonLoader'

function Create() {
  const [isSending, setIsSending] = useState(false)
  const { user } = useUserSession()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(createSchema)
  })

  const onSubmit = async (data) => {
    setIsSending(true)

    try {
      const imageUrl = await uploadImage(data.file[0])
      const projectId = await createProject(data, imageUrl, user.id)

      setIsSending(false)
      navigate(`/project/${projectId}`)
    } catch (error) {
      setIsSending(false)
      console.error(error)
    }
  }

  return (
    <Layout>
      <h1 className={styles.title}>
        Completa el formulario para publicar tu proyecto
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          placeholder='Nombre del proyecto'
          labelText='Título'
          {...register('title')}
        />
        <p className={styles.error_message}>{errors.title?.message}</p>

        <Input
          placeholder='Describa su proyecto'
          labelText='Descripción'
          {...register('description')}
        />
        <p className={styles.error_message}>{errors.description?.message}</p>

        <Input
          placeholder='Github URL'
          labelText='Github URL'
          {...register('github_url')}
        />
        <p className={styles.error_message}>{errors.github_url?.message}</p>

        <Input
          placeholder='Página URL'
          labelText='Página URL'
          {...register('page_url')}
        />
        <p className={styles.error_message}>{errors.page_url?.message}</p>

        <Input
          placeholder='ex: React, TailwindCSS'
          labelText='Tecnologías usadas'
          {...register('technologies')}
        />
        <p className={styles.error_message}>{errors.technologies?.message}</p>

        <Input
          placeholder='Imagen de la página'
          labelText='Imagen de la página'
          type='file'
          accept='.webp,.jpg,.png'
          {...register('file')}
        />
        <p className={styles.error_message}>{errors.file?.message}</p>

        <button
          type='submit'
          className={styles.submit_btn}
          disabled={isSending}
        >
          {isSending ? <ButtonLoader /> : 'Submit'}
        </button>
      </form>
    </Layout>
  )
}

export default Create
