import { supabase } from '../client'

export const createProject = async (data, imageUrl, userId) => {
  const technologies = data.technologies.split(',')

  const { data: project, error } = await supabase
    .from('project')
    .insert({
      user_id: userId,
      title: data.title,
      description: data.description,
      image_url: imageUrl,
      page_url: data.page_url,
      github_url: data.github_url,
      technologies
    })
    .select('id')
    .single()

  if (error) {
    throw error
  }

  return project.id
}
