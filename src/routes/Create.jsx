// Styles
import styles from '../styles/create.module.css'

// Components
import Layout from '@/components/Layout'
import Input from '@/components/Input'

import { createSchema } from '@/lib/validation'
import { supabase } from '@/lib/client'
import { uploadImage } from '@/lib/services/image'

import { useNavigate } from 'react-router-dom'
import useUserSession from '@/hooks/useUserSession'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

function Create() {
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
    const imageUrl = await uploadImage(data.file[0])
    const technologies = data.technologies.split(',')

    const { data: project } = await supabase
      .from('project')
      .insert({
        user_id: user.id,
        title: data.title,
        description: data.description,
        image_url: imageUrl,
        page_url: data.page_url,
        github_url: data.github_url,
        technologies
      })
      .select('id')
      .single()

    navigate(`/project/${project.id}`)
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

        <button type='submit' className={styles.submit_btn}>
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default Create
