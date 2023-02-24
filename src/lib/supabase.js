import { supabase } from './client'

export async function createProject({
  userId,
  title,
  description,
  imageUrl,
  pageUrl,
  githubUrl,
  technologies
}) {
  try {
    await supabase.from('project').insert({
      user_id: userId,
      title,
      description,
      image_url: imageUrl,
      page_url: pageUrl,
      github_url: githubUrl,
      technologies
    })
  } catch (error) {
    console.error(error)
    throw new Error('Error inserting project into database')
  }
}
